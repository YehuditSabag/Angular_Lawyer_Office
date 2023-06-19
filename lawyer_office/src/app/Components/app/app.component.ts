import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LawyerServiceService } from 'src/services/lawyer-service.service';
import { Contactus } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  color = 'yellow'
  header?: string;
  constructor(public ser:LawyerServiceService,){}
  
  ngOnInit(): void {
    console.log("ngOnInit");
    this.ser.getBehaviorSubject().subscribe((h)=>{
      this.header=h;
    })
  }
  title = 'lawyer_office';
   
   
}

