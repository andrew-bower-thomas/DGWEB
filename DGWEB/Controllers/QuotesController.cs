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
        public QuoteService QuoteService;

        public QuotesController(QuoteService quoteService)
        {
            QuoteService = quoteService;
        }

        [HttpGet]
        public IEnumerable<Quote> Get()
        {
            return QuoteService.GetQuotes();
        }
    }
}
