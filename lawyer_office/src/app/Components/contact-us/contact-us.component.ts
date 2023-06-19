import { Component, EventEmitter, Output } from '@angular/core';
import { Contactus } from 'src/app/contactus';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  title = 'our contact services';

  typeofservice = ['חוזים', 'גישור', 'פלילי'];

  contactus = new Contactus(1, '', '', '');

  submitted = false;
  @Output()
  onSave: EventEmitter<Contactus> = new EventEmitter<Contactus>();

  onSubmit() {
    this.onSave.emit(this.contactus);
    alert("הפנייה נשלחה בהצלחה")
  }

   getCurrentModel() { 
    return JSON.stringify(this.contactus); 
  }

 
}
export { Contactus };

