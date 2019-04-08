using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DomatoV2.Models;

namespace DomatoV2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuisinesController : ControllerBase
    {
        private readonly CuisineContext _context;

        public CuisinesController(CuisineContext context)
        {
            _context = context;
        }

        // GET: api/Cuisines
        [HttpGet]
        public IEnumerable<Cuisine> GetCuisine()
        {
            return _context.Cuisine;
        }

        // GET: api/Cuisines/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCuisine([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cuisine = await _context.Cuisine.FindAsync(id);

            if (cuisine == null)
            {
                return NotFound();
            }

            return Ok(cuisine);
        }

        // PUT: api/Cuisines/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCuisine([FromRoute] int id, [FromBody] Cuisine cuisine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cuisine.Id)
            {
                return BadRequest();
            }

            _context.Entry(cuisine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CuisineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cuisines
        [HttpPost]
        public async Task<IActionResult> PostCuisine([FromBody] Cuisine cuisine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Cuisine.Add(cuisine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCuisine", new { id = cuisine.Id }, cuisine);
        }

        // DELETE: api/Cuisines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCuisine([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cuisine = await _context.Cuisine.FindAsync(id);
            if (cuisine == null)
            {
                return NotFound();
            }

            _context.Cuisine.Remove(cuisine);
            await _context.SaveChangesAsync();

            return Ok(cuisine);
        }

        private bool CuisineExists(int id)
        {
            return _context.Cuisine.Any(e => e.Id == id);
        }
    }
}