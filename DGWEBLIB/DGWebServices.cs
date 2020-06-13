using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.IO;
using System.Net;
using System.Threading;

namespace DGWEBLIB
{
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    // TCWebLibCallback
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    public class TCWebLibCallback
    {
        public delegate void OnWebAsyncUpdate(TCWebAsyncInfo wai); public OnWebAsyncUpdate OnWebAsyncUpdateCB;
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    // TCWebAsyncInfo
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    public class TCWebAsyncInfo
    {
        public const int BufSize = 1024;

        public TCWebAsyncClient WAC;
        public WebRequest WebReq;
        public Stream RespStream;
        public Decoder StreamDecode = Encoding.UTF8.GetDecoder();
        public WebResponse Response;
        public StreamReader Reader;

        public string ReqStr;
        public string ReqID;
        public StringBuilder ReqData;

        public StringBuilder RespData = new StringBuilder();
        public string RespDataStr;
        public byte[] ReadBuf;
        public Char[] ReadCBuf = new Char[BufSize];
        public int ReadDataSize;
        public int ReadSize;

        public string URL;
        public int Timeout;
        public bool UseSSL;
        public string ApiKey = "";
        public string SecretKey = "";

        public bool Success;
        public string Result;
        public string Error;
        public TCWebAsyncInfo(TCWebAsyncClient wac, int timeout, string reqID)
        {
            WAC = wac;
            ReqID = reqID;
            Init();
        }
        public TCWebAsyncInfo(bool success, string result)
        {
            Init();
            Result = result;
            Success = success;
        }
        public void Init()
        {
            ReqData = new StringBuilder(String.Empty);
            ReadBuf = new byte[BufSize];
        }
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    // TCWebAsyncClient
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    public class TCWebAsyncClient
    {
        public static ManualResetEvent allDone = null;
        public TCWebLibCallback WebLibCB;
        public TCWebAsyncClient(TCWebLibCallback wlcb)
        {
            WebLibCB = wlcb;
        }
        //---------------------------------------------------------------------------------------------------------------------------------------------------
        // SendWebRequest
        //---------------------------------------------------------------------------------------------------------------------------------------------------
        public bool SendWebAsyncReq(TCWebAsyncInfo wai)
        {
            allDone = new ManualResetEvent(false);
            try
            {
                if (wai.ReqStr.Length < 1) return false;
                Uri uri = new Uri(wai.ReqStr);
                WebRequest wreq = WebRequest.Create(uri);
                wreq.Credentials = CredentialCache.DefaultCredentials;
                if (wai.UseSSL)
                {
                    wreq.Headers.Add(wai.ApiKey, wai.SecretKey);
                    ServicePointManager.Expect100Continue = true;
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                }
                wai.WebReq = wreq;
                IAsyncResult r = (IAsyncResult)wreq.BeginGetResponse(new AsyncCallback(RespCallback), wai);
                allDone.WaitOne(wai.Timeout, false);
            }
            catch (Exception e)
            {
                wai.Error = "SendWebAsyncReq::Error - " + e.Message + "\r\n" + e.StackTrace;
                return false;
            }
            return true;
        }
        //---------------------------------------------------------------------------------------------------------------------------------------------------
        // RespCallback
        //---------------------------------------------------------------------------------------------------------------------------------------------------
        private static void RespCallback(IAsyncResult ar)
        {
            TCWebAsyncInfo wai = null;
            try
            {
                wai = (TCWebAsyncInfo)ar.AsyncState;
                WebRequest req = wai.WebReq;
                WebResponse resp = req.EndGetResponse(ar);
                Stream ResponseStream = resp.GetResponseStream();
                wai.RespStream = ResponseStream;
                IAsyncResult iarRead = ResponseStream.BeginRead(wai.ReadBuf, 0, TCWebAsyncInfo.BufSize, new AsyncCallback(ReadCallBack), wai);
            }
            catch (Exception e)
            {
                if (wai != null) { wai.Error = "RespCallback::Error - " + e.Message + "\r\n" + e.StackTrace; }
            }
        }
        //---------------------------------------------------------------------------------------------------------------------------------------------------
        // ReadCallBack
        //---------------------------------------------------------------------------------------------------------------------------------------------------
        private static void ReadCallBack(IAsyncResult ar)
        {
            TCWebAsyncInfo wai = null;
            try
            {
                wai = (TCWebAsyncInfo)ar.AsyncState;
                wai.ReadSize = wai.RespStream.EndRead(ar);
                if (wai.ReadSize > 0)
                {
                    wai.ReadDataSize = wai.StreamDecode.GetChars(wai.ReadBuf, 0, wai.ReadSize, wai.ReadCBuf, 0);
                    wai.RespData.Append(Encoding.ASCII.GetString(wai.ReadBuf, 0, wai.ReadSize));
                    IAsyncResult iar = wai.RespStream.BeginRead(wai.ReadBuf, 0, TCWebAsyncInfo.BufSize, new AsyncCallback(ReadCallBack), wai);
                }
                else
                {
                    if (wai.RespData.Length > 0)
                    {
                        wai.Success = true;
                        wai.RespDataStr = wai.RespData.ToString();
                        wai.WAC.WebLibCB.OnWebAsyncUpdateCB(wai);
                        return;
                    }
                    wai.RespStream.Close();
                    allDone.Set();
                }
            }
            catch (Exception e)
            {
                if (wai != null) { wai.Error = "ReadCallBack::Error - " + e.Message + "\r\n" + e.StackTrace; }
            }
            return;
        }
    }
}
