

using FluentValidation;
using FluentValidation.Results;
using Lovebook.Api.Common;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Lovebook.Api.Controllers;

[ApiController]
public class ErrorsController:ControllerBase
{
    [Route("/error")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public IActionResult Error()
    {
        var exception = HttpContext.Features.Get<IExceptionHandlerFeature>().Error;

        var (statusCode, message) = exception switch
        {
            IServiceException  serviceException=> ((int)serviceException.StatusCode,serviceException.ErrorMessage),
            ValidationException validationException=> (StatusCodes.Status400BadRequest,
                JsonConvert.SerializeObject(validationException.Errors.Select(x => x.ErrorMessage))),
            _ => (StatusCodes.Status500InternalServerError, "An unexpected error occurred")
        };
        return Problem(statusCode:statusCode,title:message);
    }


}

