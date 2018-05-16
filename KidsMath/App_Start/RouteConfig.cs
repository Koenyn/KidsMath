using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace KidsMath
{
	public class RouteConfig
	{
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

			routes.MapMvcAttributeRoutes();

			//routes.MapRoute(
			//	name: "Login",
			//	url: "home/login",
			//	defaults: new { controller = "Home", action = "Login" }
			//);


			//routes.MapRoute(
			//	name: "Logout",
			//	url: "home/logout",
			//	defaults: new { controller = "Home", action = "Logout" }
			//);

			routes.MapRoute(
				name: "Default",
				url: "{*catchall}",
				defaults: new { controller = "Home", action = "Index" }
			);
		}
	}
}
