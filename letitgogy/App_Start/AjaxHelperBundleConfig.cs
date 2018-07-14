using System.Web.Optimization;

[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(letitgogy.App_Start.AjaxHelperBundleConfig), "RegisterBundles")]

namespace letitgogy.App_Start
{
	public class AjaxHelperBundleConfig
	{
		public static void RegisterBundles()
		{
			BundleTable.Bundles.Add(new ScriptBundle("~/bundles/ajaxhelper").Include("~/Scripts/jquery.ajaxhelper.js"));
		}
	}
}