using MyNotes.Models;
using System.Data.Entity;

namespace MyNotes.DataAccess;

public class NotesDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public NotesDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public DbSet<Note> Notes => Set<Note>();

    protected override void OnConfiguration(DbContextOptionBuilder optionBuilder)
    {
        optionBuilder.UseSqlServer(_configuration.GetConnectionString("Database"));
    }
}
