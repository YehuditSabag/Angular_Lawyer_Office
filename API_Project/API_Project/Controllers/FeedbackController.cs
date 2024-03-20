using API_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace API_Project.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class FeedbackController : ApiController
    {

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(DB.listFeedback);
        }
        [HttpPost]
        public IHttpActionResult Post([FromBody]Feedback feedback)
        {
            DB.listFeedback.Add(feedback);
            return Ok(DB.listFeedback);
        }
    }
}
