using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactFormExample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactFormExample.Controllers
{
    [Route("api/contactus")]
    [ApiController]
    public class ContactUsFormController : ControllerBase
    {
        [HttpPost]
        public ActionResult<ContactUsResponse> GetGreeting(ContactUsRequest request)
        {
            var response = new ContactUsResponse()
            {
                Message = $"Hello, {request.Name}, thank you for contacting us, we will be in touch shortly. In the meantime, please verify that {request.Phone} is the correct phone number, if not please send another message to correct.",
                SentDate = DateTime.Now
            };

            return Ok(response);
        }
    }
}
