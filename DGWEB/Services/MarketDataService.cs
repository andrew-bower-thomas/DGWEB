using DGWEB.Hubs;
using DGWEB.Models;
using DGWEBLIB;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DGWEB.Services
{
	public interface IMarketDataService
	{
		
	}

	public class MarketDataService : IHostedService, IMarketDataService
	{
		private readonly IHubContext<MarketDataHub, IMarketDataClient> MarketDataHubContext;
		public Timer Tmr;
		public ConcurrentDictionary<string, Quote> QuotesDB;

		public MarketDataService(IHubContext<MarketDataHub, IMarketDataClient> marketDataHubContext)
		{
			MarketDataHubContext = marketDataHubContext;
			QuotesDB = new ConcurrentDictionary<string, Quote>();
		}

		public Task StartAsync(CancellationToken cancellationToken)
		{
			return Task.CompletedTask;
		}

		public Task StopAsync(CancellationToken cancellationToken)
		{
			return Task.CompletedTask;
		}

		public void OnQuote(TCQuote tcq)
		{
			Quote q = new Quote(tcq.Symbol, DateTime.Now, tcq.Last);
			QuotesDB[q.Symbol] = q;
			MarketDataHubContext.Clients.All.PushQuote(q);
		}

		public IEnumerable<Quote> GetMostRecentQuotes()
		{
			return QuotesDB.Values;
		}
	}
}
