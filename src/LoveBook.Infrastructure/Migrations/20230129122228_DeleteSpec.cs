﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoveBook.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class DeleteSpec : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Spec",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Spec");
        }
    }
}
