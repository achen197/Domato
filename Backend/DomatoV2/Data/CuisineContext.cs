using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DomatoV2.Models
{
    public class CuisineContext : DbContext
    {
        public CuisineContext (DbContextOptions<CuisineContext> options)
            : base(options)
        {
        }

        public DbSet<DomatoV2.Models.Cuisine> Cuisine { get; set; }
    }
}
