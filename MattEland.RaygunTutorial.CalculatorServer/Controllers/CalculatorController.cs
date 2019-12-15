using System;
using Microsoft.AspNetCore.Mvc;

namespace MattEland.RaygunTutorial.CalculatorServer.Controllers
{
    [ApiController]
    [Route("calculator")]
    public class CalculatorController : Controller
    {
        [HttpGet]
        [Route("add/{x}/{y}")]
        public decimal Add(string x, string y)
        {
            var xVal = decimal.Parse(x);
            var yVal = decimal.Parse(y);

            return xVal + yVal;
        }

        [HttpGet]
        [Route("subtract/{x}/{y}")]
        public decimal Subtract(string x, string y)
        {
            var xVal = decimal.Parse(x);
            var yVal = decimal.Parse(y);

            return xVal - yVal;
        }

        [HttpGet]
        [Route("multiply/{x}/{y}")]
        public decimal Multiply(string x, string y)
        {
            var xVal = decimal.Parse(x);
            var yVal = decimal.Parse(y);

            return xVal * yVal;
        }

        [HttpGet]
        [Route("divide/{x}/{y}")]
        public decimal Divide(string x, string y)
        {
            var xVal = decimal.Parse(x);
            var yVal = decimal.Parse(y);

            return xVal / yVal;
        }

        [HttpGet]
        [Route("power/{x}/{y}")]
        public double Exponent(string x, string y)
        {
            var num = double.Parse(x);
            var power = double.Parse(y);

            return Math.Pow(num, power);
        }
    }
}