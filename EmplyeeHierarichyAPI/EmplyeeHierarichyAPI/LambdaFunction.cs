using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace EmplyeeHierarichyAPI
{
  public class LambdaFunction : Amazon.Lambda.AspNetCoreServer.APIGatewayProxyFunction
  {
    protected override void Init(IWebHostBuilder builder)
    {
      builder
     .UseContentRoot(Directory.GetCurrentDirectory())
     .UseStartup<StartupBase>()
     .UseLambdaServer();
    }
  }
}
