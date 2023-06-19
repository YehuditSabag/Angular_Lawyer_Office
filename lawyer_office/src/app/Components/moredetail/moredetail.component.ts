import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cards } from 'src/app/cards';
import { Ifeedback } from 'src/app/interface/ifeedback';
import { Ihelp } from 'src/app/interface/Ihelp';
import { HttpsService } from 'src/services/https.service';

@Component({
  selector: 'app-moredetail',
  templateUrl: './moredetail.component.html',
  styleUrls: ['./moredetail.component.scss']
})
export class MoredetailComponent implements OnInit{
  // @Input()
  // detailinput:Ihelp={id:1,title:"",text:"",detail:""}


  detail:any=[];
    constructor(private route : ActivatedRoute,public http:HttpsService)
   {
   
    }

  // ngOnInit(): void {
    // this.detail?.toString();
    // this.route.paramMap.subscribe((c)=> {
    //   debugger
    //   this.detail.title=this.http.CardList.find(i=>i.title== c.get("title"))    
    //   console.log(c);
    //   debugger 
    //  this.detail=c;})
    ngOnInit(): void {
      this.route.paramMap.subscribe((c)=>{
        console.log(c.get("detail"));
        if(c.get("detail")&&this.http.CardList.find(i=>i.title== c.get("detail")))
        {
          console.log('bnnn')
          this.detail=this.http.CardList.find(i=>i.title== c.get("detail"))
          console.log(this.detail)
        }
          })
   
   
        }
}