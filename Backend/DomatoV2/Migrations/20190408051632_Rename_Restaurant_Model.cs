using Microsoft.EntityFrameworkCore.Migrations;

namespace DomatoV2.Migrations
{
    public partial class Rename_Restaurant_Model : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Rating",
                table: "Restaurants",
                newName: "UserRating");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserRating",
                table: "Restaurants",
                newName: "Rating");
        }
    }
}
