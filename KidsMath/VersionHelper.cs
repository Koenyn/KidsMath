using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KidsMath
{
	public static class VersionHelper
	{
		public static string GetVersion()
		{
			return typeof(VersionHelper).Assembly.GetName().Version.ToString();
		}
	}
}