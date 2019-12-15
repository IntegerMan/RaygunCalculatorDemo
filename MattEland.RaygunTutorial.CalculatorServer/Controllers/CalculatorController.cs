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
        public decimal Add(decimal x, decimal y) => x + y;

        [HttpGet]
        [Route("subtract/{x}/{y}")]
        public decimal Subtract(decimal x, decimal y) => x - y;

        [HttpGet]
        [Route("multiply/{x}/{y}")]
        public decimal Multiply(decimal x, decimal y) => x * y;

        [HttpGet]
        [Route("divide/{x}/{y}")]
        public decimal Divide(decimal x, decimal y) => x / y;

        [HttpGet]
        [Route("power/{x}/{y}")]
        public decimal Exponent(decimal x, decimal y) => (decimal) Math.Pow((double)x, (double)y);
    }
}