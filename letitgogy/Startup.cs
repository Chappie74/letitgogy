using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(letitgogy.Startup))]
namespace letitgogy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
