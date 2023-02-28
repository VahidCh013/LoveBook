using LoveBook.Domain.Entities.Categories;

namespace LoveBook.Domain.Entities.Books;

public class BookSpecValue
{
    public long BookId { get; set; }
    public Book Book { get; set; }
    public long SpecId { get; set; }
    public Spec Spec { get; set; }
    public string Value { get; set; }
}