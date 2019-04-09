using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DomatoV2.Models
{
    public class Restaurants
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Location { get; set; }

        public string Locality { get; set; }

        public string Cuisine { get; set; }

        public string AverageCost { get; set; }

        public string PriceRange { get; set; }

        public string FeaturedImage { get; set; }

        public string UserRating { get; set; }

        public string Votes { get; set; }
    }
}
