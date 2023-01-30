
using FluentValidation;
using LoveBook.Application.Categories.Models;

namespace LoveBook.Application.Categories.Commands.EditCategory;

public class EditCategoryBehavior:AbstractValidator<CreateCategoryModel>
{
    public EditCategoryBehavior()
    {
        RuleFor(x => x.Name).NotEmpty();
        RuleFor(x => x.Specs).NotEmpty();
    }
}