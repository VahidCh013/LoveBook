using System.Net;

namespace Lovebook.Api.Common;

public interface IServiceException
{
    public HttpStatusCode StatusCode { get; }
    public string ErrorMessage { get; }
}