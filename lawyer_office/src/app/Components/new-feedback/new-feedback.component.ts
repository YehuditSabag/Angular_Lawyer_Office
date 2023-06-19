import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Feedback } from '../feedback';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpsService } from 'src/services/https.service';
import { Ifeedback } from 'src/app/interface/ifeedback';
import { AppComponent } from '../app/app.component';
import { LawyerServiceService } from 'src/services/lawyer-service.service';


@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.scss']
})
export  class NewFeedbackComponent {
  header?: string;
 public static countid=4;
   
  constructor(private fb: FormBuilder,private http:HttpsService,public ser:LawyerServiceService) {}
  feedback:Ifeedback={id:4,name:"",discription:"",sum:0};
  feedbacks:Ifeedback[]=[];
  FeedbackForm = this.fb.group({
    firstName: ['',[Validators.required]],
    discription: ['',[Validators.required]],
    contacts: this.fb.group({
      contactType: ['-1'],
      email: ['',[Validators.email]],
      phone: ['',[Validators.required]],
    }),
  });
 
  preview: string = '';
 
  ngOnInit(): void {
    // console.log("ngOnInit");
    // this.ser.getBehaviorSubject().subscribe((h)=>{
    //   this.header=h;
    // })
  }

  save() {
    alert('נוסף בהצלחה');
   
    NewFeedbackComponent.countid=NewFeedbackComponent.countid+1;
    this.preview = JSON.stringify(this.FeedbackForm.value);
    this.feedback.id=NewFeedbackComponent.countid;
    this.feedback.name=this.FeedbackForm.value.firstName?.toString();
    this.feedback.discription=this.FeedbackForm.value.discription?.toString();
    
    this.http.post(this.feedback).subscribe((response: any) => {
      console.log(response);
    });
    this.feedbacks.push(this.feedback);
    this.ser.setBehaviorSubject("הנך זכאי למתנה, תודה על תגובתך");
    
  }

 get contactType(){
  return this.FeedbackForm.get("contacts.contactType");
}

  get firstName(){
    return this.FeedbackForm.get('name');
  }
  get discription(){
    return this.FeedbackForm.get('discription');
  }
  get email(){
    return this.FeedbackForm.get('email');
  }

  

  
}
// function emailOrPhoneRequired(): any | string {
//   throw new Error('Function not implemented.');
// }


