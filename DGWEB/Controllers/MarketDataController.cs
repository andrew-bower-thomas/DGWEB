using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DGWEB.Models;
using Microsoft.AspNetCore.Mvc;

namespace DGWEB.Controllers
{
    [Route("api/MarketData")]
    [ApiController]
    public class MarketDataController : ControllerBase
    {
        public MarketDataController()
        {
            
        }

        [HttpGet]
        public ActionResult<IEnumerable<MarketData>> List()
        {
            //System.Diagnostics.Debug.WriteLine();
            // in real life - retrieve from database
            var users = new List<MarketData>{
                    new MarketData {
                        Id = 1,
                        Name = "Jon Hilton",
                        Summary = "36 / Lead Software Developer" }
                };

            return Ok(users);
        }
    }
}
