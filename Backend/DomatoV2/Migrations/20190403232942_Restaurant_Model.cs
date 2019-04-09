using Microsoft.EntityFrameworkCore.Migrations;

namespace DomatoV2.Migrations
{
    public partial class Restaurant_Model : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cuisine",
                table: "Restaurants",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cuisine",
                table: "Restaurants");
        }
    }
}
