using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DGWEB.Models;
using Microsoft.AspNetCore.Mvc;

namespace DGWEB.Controllers
{
    [Route("api/quotes")]
    [ApiController]
    public class QuotesController : ControllerBase
    {
        public QuotesController()
        {
            
        }

        [HttpGet]
        public ActionResult<IEnumerable<Quote>> List()
        {
            var quotes = new List<Quote>{
                    new Quote {
                        Symbol = "AAPL",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "MSFT",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "AMZN",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "GOOG",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "FB",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "BRK.A",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "V",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "JNJ",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "WMT",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "JPM",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "MA",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "PG",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "UNH",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "HD",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "INTC",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "VZ",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "NVDA",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "T",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "BAC",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "DIS",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "XOM",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "ADBE",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "KO",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "MRK",
                        Price = (new Random()).Next(0,100000)/100.0},
                    new Quote {
                        Symbol = "CSCO",
                        Price = (new Random()).Next(0,100000)/100.0}
                };

            return Ok(quotes);
        }
    }
}
