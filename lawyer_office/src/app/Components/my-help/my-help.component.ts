import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cards } from 'src/app/cards';
import { Ihelp } from 'src/app/interface/Ihelp';
import { HttpsService } from 'src/services/https.service';

@Component({
  selector: 'app-my-help',
  templateUrl: './my-help.component.html',
  styleUrls: ['./my-help.component.scss']
})


export class MyHelpComponent implements OnInit {
  
 
  constructor(public http:HttpsService,public route:Router){
 }
ngOnInit(): void {
  this.http.getAll().subscribe((data)=>{this.http.CardList=data})
}

more(title:any){
  this.route.navigate(['/my-help/moredetail',title])
console.log(this.route.navigate(['/my-help/moredetail',title]))
}
}
// 