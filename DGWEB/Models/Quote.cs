using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DGWEB.Models
{
    public class Quote
    {
        public string Symbol { get; set; }
        public decimal Price { get; set; }

        public Quote() { }

        public Quote(string symbol, decimal price)
        {
            Symbol = symbol;
            Price = price;
        }
    }
}

