import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LawyerServiceService {

  constructor() { }
  h?:string="";

  private titleSubject$:BehaviorSubject<string>=new BehaviorSubject("בהוספת תגובה הינך זכאי למתנה");

 setBehaviorSubject(header:string){
    debugger
    this.titleSubject$.next(header);
  }
  getBehaviorSubject(){
    return this.titleSubject$;
  }
}
