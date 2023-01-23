namespace LoveBook.Common.DomainModelInterfaces;

public interface ITimeAudit
{
    public DateTimeOffset CreatedOn { get; }
    public DateTimeOffset ModifiedOn { get; }
}