using DGWEB.Models;
using DGWEBLIB;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DGWEB.Services
{
	public interface IBittrexService
	{
		
	}

	public class BittrexService : IHostedService, IBittrexService, TCIMarketDataCB
	{
		public MarketDataService MarketDataService;
		public List<string> SymbolList = new List<string> { "USD-BTC", "USD-ETH", "USD-DGB", "USD-USDT", "USD-BSV", "USD-XRP", "USD-ADA", "USD-LTC", "USD-HBAR", "USD-WAXP", "USD-TUSD", "USD-LINK", "USD-XTZ", "USD-USDC", "USD-SC" };
		public TCMarketData MD;
		public Timer Tmr;

		public BittrexService(MarketDataService marketDataService)
		{
			MarketDataService = marketDataService;
			MD = new TCMarketData(this);
		}

		public Task StartAsync(CancellationToken cancellationToken)
		{
			Tmr = new Timer(UpdateQuotes, null, 0, 500);
			return Task.CompletedTask;

		}

		public Task StopAsync(CancellationToken cancellationToken)
		{
			Tmr?.Change(Timeout.Infinite, 0);
			return Task.CompletedTask;

		}

		private void UpdateQuotes(object state)
		{
			foreach (string symbol in SymbolList)
			{
				MD.ReqQuoteAsync("https://bittrex.com/api/v1.1/public/getmarketsummary?market=", symbol);
			}
		}

		public void OnQuote(TCQuote q)
		{
			MarketDataService.OnQuote(q);
		}
	}
}
