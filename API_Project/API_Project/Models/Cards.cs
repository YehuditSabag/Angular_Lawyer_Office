using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_Project.Models
{
    public class Cards
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string color { get; set; }
        public string link { get; set; }
    };
}