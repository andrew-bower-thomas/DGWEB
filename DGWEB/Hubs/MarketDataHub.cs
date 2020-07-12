using DGWEB.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DGWEB.Hubs
{
    public interface IMarketDataClient
    {
        Task PushQuote(Quote q);
    }

    public class MarketDataHub : Hub<IMarketDataClient>
    {
        public MarketDataHub()
        {

        }

        public void SendMessage(string message)
        {
            System.Diagnostics.Debug.WriteLine(message);
        }
    }
}
