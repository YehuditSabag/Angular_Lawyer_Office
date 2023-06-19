using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace API_Project.Models
{
    public class DB
    {
        public static List<Feedback> listFeedback = new List<Feedback>()
        {
            new Feedback{name="Yael",description="אחלה אולפן!",id=1},
            new Feedback{name="tamar",description="שירות מעולה, מחירים נוחים",id=2},
            new Feedback{name="yoni",description="נהנינו מאוד",id=3}
        };

        public static List<Cards> listCards = new List<Cards>()
        {
            new Cards{name="הפקת קליפים",description="הפכו את רגעי ההקלטה לקטעי וידאו משפחתיים",id=1,color="light-grey",link="/add-klip"},
            new Cards{name="ג'ינגלים לרדיו",description="ג'ינגלים מדליקים לפרסומות רדיו",id=2,color="grey",link="/add-sound"},
            new Cards{name="הקלטות",description="הלחנה עיבוד והקלטות ",id=3,color="dark-grey",link="/add-record"},
            new Cards{name="די ג'יי",description="די ג'יי לאירועים ",id=4,color="black",link="/add-dj"}
        };

    }
}