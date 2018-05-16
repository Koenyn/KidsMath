using KidsMath.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KidsMath.Controllers
{
	public class AdditionController : ApiController
	{
		public static readonly Random _random;
		static AdditionController()
		{
			_random = new Random();
		}

		[Route("api/Addition")]
		public EquationDto Get()
		{
			EquationDto equation = new EquationDto();

			equation.LeftValue = _random.Next(10);
			equation.RightValue = _random.Next(10);
			equation.Answer = equation.LeftValue + equation.RightValue;

			return equation;
		}
	}
}