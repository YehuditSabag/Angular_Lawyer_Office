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

        //[HttpGet("{id}")]
        //public IHttpActionResult Get(int id)
        //{

        //    Feedback feedback= DB.listFeedback.Find(c => c.id == id);
        //    if (feedback == null)
        //        return BadRequest("Id not found");
        //    return Ok(feedback);
        //}

        [HttpPost]
        public IHttpActionResult Post([FromBody]Feedback feedback)
        {
            DB.listFeedback.Add(feedback);
            return Ok(DB.listFeedback);

        }

        //[HttpPut("{id}")]
        //public IHttpActionResult Put([FromBody] Feedback feedback)
        //{
        //    Feedback f = DB.listFeedback.Find(c => c.id == feedback.id);
        //    if (f == null)
        //        return BadRequest("Id not found");
        //    f.id = feedback.id;
        //    f.name = feedback.name;
        //    f.description = feedback.description;
        //    return Ok(DB.listFeedback);
        //}

        //[HttpDelete("{id}")]
        //public IHttpActionResult Delete([FromBody] int id)
        //{
        //    Feedback feedback = DB.listFeedback.Find(c => c.id == id);
        //    if (feedback == null)
        //        return BadRequest("Id not found");
        //    DB.listFeedback.Remove(feedback);
        //    return Ok(DB.listFeedback);
        //}
    }
}
