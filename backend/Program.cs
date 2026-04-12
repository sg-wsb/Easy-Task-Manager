using Azure.Identity;
using Microsoft.EntityFrameworkCore;
using backend.Data;

var builder = WebApplication.CreateBuilder(args);


var keyVaultUrl = new Uri("https://task-vault-seba-123.vault.azure.net/");
builder.Configuration.AddAzureKeyVault(
    keyVaultUrl,
    new DefaultAzureCredential()
);


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration["DbConnectionString"]));


builder.Services.AddControllers();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173",
                           "https://task-frontend-seba-123.azurewebsites.net")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseCors("AllowFrontend");

app.UseSwagger();
app.UseSwaggerUI();


app.MapControllers();


app.MapGet("/", () => "API działa 🚀");

app.Run();