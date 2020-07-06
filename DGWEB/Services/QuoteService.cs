using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Timers;
using DGWEB.Models;
using DGWEBLIB;

namespace DGWEB.Services
{
	public class QuoteService : TCIMarketDataCB
	{
		public static ConcurrentDictionary<string, Quote> QuotesDB;
		public static List<string> SymbolList = new List<string> { "USD-BTC", "USD-ETH", "USD-DGB", "USD-USDT", "USD-BSV", "USD-XRP", "USD-ADA", "USD-LTC", "USD-HBAR", "USD-WAXP", "USD-TUSD", "USD-LINK", "USD-XTZ", "USD-USDC", "USD-SC" };
		public static TCMarketData MD;
		public static Timer Tmr;

		public QuoteService()
		{
			QuotesDB = new ConcurrentDictionary<string, Quote>();
			MD = new TCMarketData(this);

			UpdateQuotes();
			SetTimer();
		}

		private static void SetTimer()
		{
			Tmr = new System.Timers.Timer(500);
			Tmr.Elapsed += OnTimedEvent;
			Tmr.AutoReset = true;
			Tmr.Enabled = true;
		}

		private static void OnTimedEvent(Object source, ElapsedEventArgs e)
		{
			UpdateQuotes();
		}

		public static void UpdateQuotes()
		{
			foreach (string symbol in SymbolList)
			{
				MD.ReqQuoteAsync("https://bittrex.com/api/v1.1/public/getmarketsummary?market=", symbol);
			}
		}

		public void OnQuote(TCQuote q)
		{
			QuotesDB[q.Symbol] = new Quote(q.Symbol, DateTime.Now, q.Last);
		}

		public IEnumerable<Quote> GetQuotes()
		{
			return QuotesDB.Values;
		}
	}
}
