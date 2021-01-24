using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
  public class AppController: Controller
  {
    public IActionResult Index()
    {
      return View();
    }
  }
}
