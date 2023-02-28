using AutoMapper;
using CSharpFunctionalExtensions;
using Lovebook.Api.Dtos.BooksDto;
using Lovebook.Api.Dtos.BooksDto.AddBookDto;
using LoveBook.Application.Books.Commands.ActivateBook;
using LoveBook.Application.Books.Commands.CreateBook;
using LoveBook.Application.Books.Commands.DeactivateBook;
using LoveBook.Application.Books.Moldes;
using LoveBook.Application.Books.Queries.GetAllBooks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CreateBookPayload = Lovebook.Api.Dtos.BooksDto.AddBookDto.CreateBookPayload;

namespace Lovebook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController:ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public BookController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }

    [Route("addBook")]
    [HttpPost]
    [Authorize]

    public async Task<CreateBookPayload> AddBook(CreateBookDto createBookDto)
    {
        var createBookModel = _mapper.Map<CreateBookModel>(createBookDto);
        return await _mediator.Send(new CreateBookCommand(createBookModel))
            .Match(s => new CreateBookPayload(s.Id), e => new CreateBookPayload(null, e.Split(','))); 
    }

    [Route("getBooks")]
    [HttpGet]
    [Authorize]

    public async Task<List<BookDto>> GetAllBooks()
    {
        var books = await _mediator.Send(new GetAllBooksQuery());
        var booksDto = _mapper.Map<List<BookDto>>(books);
        return booksDto;
    }
    
    [Route("activateBook")]
    [HttpPost]
    [Authorize]

    public async Task<ActivateBookPayload> ActivateBook(long bookId)
    {
        return await _mediator.Send(new ActivateBookCommand(bookId))
            .Match(s => new ActivateBookPayload(s.Id), e => new ActivateBookPayload(null, e.Split(',')));
    }
    
    [Route("deactivateBook")]
    [HttpPost]
    [Authorize]

    public async Task<DeactivateBookPayload> DeactivateBook(long bookId)
    {
        return await _mediator.Send(new DeactivateBookCommand(bookId))
            .Match(s => new DeactivateBookPayload(s.Id), e => new DeactivateBookPayload(null, e.Split(',')));
    }
}