﻿using Lovebook.Api.Common;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

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
            _ => (StatusCodes.Status500InternalServerError, "An unexpected error occurred")
        };
        return Problem(statusCode:statusCode,title:message);
    }
}