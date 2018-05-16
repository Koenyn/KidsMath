using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KidsMath.Models
{
	public class EquationDto
	{
		public decimal LeftValue { get; set; }
		public decimal RightValue { get; set; }
		public decimal Answer { get; set; }
	}
}