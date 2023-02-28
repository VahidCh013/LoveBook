namespace LoveBook.Application.Books.Moldes;

public record CreateBookModel(string Name, bool IsActive, List<SpecValueModel> SpecValues,long CategoryId);

public record SpecValueModel(long SpecId, string Value);
    
