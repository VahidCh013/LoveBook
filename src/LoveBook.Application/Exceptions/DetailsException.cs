
using FluentValidation;
using ValidationException = System.ComponentModel.DataAnnotations.ValidationException;


namespace LoveBook.Application.Exceptions;

public class DetailsException:ValidationException
{
    public DetailsException(string message,ValidationException validationException)
    {
        
    }
}