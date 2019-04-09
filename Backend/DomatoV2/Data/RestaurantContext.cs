using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DomatoV2.Models
{
    public class RestaurantContext : DbContext
    {
        public RestaurantContext (DbContextOptions<RestaurantContext> options)
            : base(options)
        {
        }

        public DbSet<DomatoV2.Models.Restaurants> Restaurants { get; set; }
    }
}
