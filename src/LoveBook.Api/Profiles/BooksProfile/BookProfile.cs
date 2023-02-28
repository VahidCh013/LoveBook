
using AutoMapper;
using Lovebook.Api.Dtos.BooksDto;
using Lovebook.Api.Dtos.BooksDto.AddBookDto;
using LoveBook.Application.Books.Moldes;
using LoveBook.Domain.Entities.Books;

namespace LoveBook.Api.Profiles.BooksProfile;

public class BookProfile : Profile
{
    public BookProfile()
    {
        CreateMap<CreateBookDto, CreateBookModel>()
            .ForMember(x => x.SpecValues, opt => opt.MapFrom(s => s.SpecValues));
        CreateMap<SpecValueDto, SpecValueModel>();

        CreateMap<Book, BookDto>()
            .ForMember(x=>x.CategoryName,opt=>opt.MapFrom(s=>s.Category.Name));
    }

}
