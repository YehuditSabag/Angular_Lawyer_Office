import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ifeedback } from 'src/app/interface/ifeedback';
import { HttpsService } from 'src/services/https.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  FeedbackList:Array<Ifeedback>=[];
  feed:Ifeedback={id:0,name:"ayala",discription:"yehudit",sum:0};
  
  error = '';
success = '';
  
  constructor(private http:HttpsService,public route:Router){
 }
ngOnInit(): void {
  this.http.get().subscribe((data)=>{this.FeedbackList=data})
  //this.http.post(this.feed).subscribe((data)=>{this.FeedbackList=data})
  //this.http.post(FeedbackList[]).subscribe((data)=>{this.FeedbackList=data})

}
openForm(){
  this.route.navigate(['/new-feedback'])
}

addLike(feed: Ifeedback) {
  debugger;
  this.http.Put(feed).subscribe((data) => {
    this.FeedbackList = data;
    console.log("data" + data)
  }
    , (error) => { console.log("error" + error) })
  debugger;

};
// addFeedback(f: NgForm) {
//   this.resetAlerts();

  // this.http.post(this.feed,).subscribe(
  //   (res:Ifeedback) => {
  //     // helpppppppppppppppp
  //     this.FeedbackList.push(res)
  //     this.FeedbackList.push(res)
  //     f.reset();
  //   },
  //   (err) => (this.error = err.message)
  // );
// }
// resetAlerts() {
//   this.error = '';
//   this.success = '';
// }



}



