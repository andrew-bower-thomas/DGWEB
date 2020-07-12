using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DGWEB.Models;
using DGWEB.Services;
using Microsoft.AspNetCore.Mvc;

namespace DGWEB.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class QuotesController : ControllerBase
	{
		public MarketDataService MarketDataHostedService;

		public QuotesController(MarketDataService marketDataHostedService)
		{
			MarketDataHostedService = marketDataHostedService;
		}

		[HttpGet]
		public IEnumerable<Quote> Get()
		{
			return MarketDataHostedService.GetMostRecentQuotes();
		}
	}
}
