FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Lovebook.Api/Lovebook.Api.csproj", "Lovebook.Api/"]
RUN dotnet restore "Lovebook.Api/Lovebook.Api.csproj"
COPY . .
WORKDIR "/src/Lovebook.Api"
RUN dotnet build "Lovebook.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Lovebook.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Lovebook.Api.dll"]
