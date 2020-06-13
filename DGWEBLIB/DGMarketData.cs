using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Net;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace DGWEBLIB
{
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    // TCMMarketData
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    public class TCMMarketData : TCIMarketDataCB
    {
        //public TCApp APP;
        public TCMarketData TCMD;

        public TCMMarketData()//TCApp app)
        {
            //APP = app;
            TCMD = new TCMarketData(this);
        }
        public void OnQuote(TCQuote quote)
        {
            if (quote != null)
            {
                //APP.UpdateQuotePage(quote);
            }
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TCQuote
    //----------------------------------------------------------------------------------------------------------------------------------------------
    public class TCQuote
    {
        public string DataStr;
        public string MarketName;
        public decimal High;
        public decimal Low;
        public decimal Volume;
        public decimal Last;
        public decimal BaseVolume;
        public DateTime TimeStamp;
        public decimal Bid;
        public decimal Ask;
        public decimal OpenBuyOrders;
        public decimal OpenSellOrders;
        public decimal PrevDay;
        public DateTime Created;

        public double Open;
        public double Close;
        public double Volume24h;
        public string Symbol;
        public TCQuote()
        {
        }
        public TCQuote(string dataStr)
        {
            ParseJson(dataStr);
        }
        public void ParseJson(string dataStr)
        {
            JsonTextReader reader = new JsonTextReader(new StringReader(dataStr));
            while (reader.Read())
            {
                if (reader.Value != null)
                {
                    var propertyName = reader.Value.ToString();
                    switch (propertyName)
                    {
                        case "MarketName": { Symbol = MarketName = reader.ReadAsString(); break; }
                        case "High": { High = (decimal)reader.ReadAsDecimal(); break; }
                        case "Low": { Low = (decimal)reader.ReadAsDecimal(); break; }
                        case "Volume": { Volume = (decimal)reader.ReadAsDecimal(); break; }
                        case "Last": { Last = (decimal)reader.ReadAsDecimal(); break; }
                        case "BaseVolume": { BaseVolume = (decimal)reader.ReadAsDecimal(); break; }
                        case "TimeStamp": { TimeStamp = (DateTime)reader.ReadAsDateTime(); break; }
                        case "Bid": { Bid = (decimal)reader.ReadAsDecimal(); break; }
                        case "Ask": { Ask = (decimal)reader.ReadAsDecimal(); break; }
                        case "OpenBuyOrders": { OpenBuyOrders = (decimal)reader.ReadAsDecimal(); break; }
                        case "OpenSellOrders": { OpenSellOrders = (decimal)reader.ReadAsDecimal(); break; }
                        case "PrevDay": { PrevDay = (decimal)reader.ReadAsDecimal(); break; }
                        case "Created": { Created = (DateTime)reader.ReadAsDateTime(); break; }
                        default:
                            {
                                break;
                            }
                    }
                }
            }
        }
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    // TCMarketData
    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    public class TCMarketData : TCWebLibCallback
    {
        public TCWebAsyncClient WAC;
        public TCIMarketDataCB Isys;
        public TCMarketData(TCIMarketDataCB isys)
        {
            Isys = isys;
            WAC = new TCWebAsyncClient(this);
            SetAllCallbacks();
        }
        public void SetAllCallbacks()
        {
            OnWebAsyncUpdateCB = OnWebAsyncUpdate;
        }
        public new void OnWebAsyncUpdate(TCWebAsyncInfo wai)
        {
            TCQuote quote = new TCQuote(wai.RespDataStr);
            Isys.OnQuote(quote);
        }
        public TCWebAsyncInfo ReqQuoteAsync(string url, string symbol, int timeout = 3000)
        {
            TCWebAsyncInfo wai = new TCWebAsyncInfo(WAC, timeout, symbol);
            wai.ReqStr = url + symbol;
            WAC.SendWebAsyncReq(wai);
            return wai;
        }
        public TCQuote ReqQuoteSync(string url, string symbol, bool writeToConsole = true)
        {
            WebRequest request = WebRequest.Create(url + symbol);
            request.Credentials = CredentialCache.DefaultCredentials;
            try
            {
                WebResponse response = request.GetResponse();
                Stream dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                string data = reader.ReadToEnd();
                TCQuote quote = new TCQuote(data);
                if (writeToConsole) { Console.WriteLine(((HttpWebResponse)response).StatusDescription); Console.WriteLine(data); }
                return quote;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
