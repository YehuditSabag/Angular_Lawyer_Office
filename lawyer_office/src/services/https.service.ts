import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Ihelp } from 'src/app/interface/Ihelp';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ifeedback } from 'src/app/interface/ifeedback';
import { Feedback } from 'src/app/Components/feedback';
import { Cards } from 'src/app/cards';
// type NewCard=Ihelp;
type newfeed=Ifeedback;
@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  env=environment;
  CardList:Array<Cards>=[];
  constructor(private http: HttpClient) { }

  // public GetOnePackage(Title: string): Observable<Package> {
  //   const url = `https://localhost:44323/api/PackageManagement/GetOnePackage/${Title}`;
  //   return this.http.get<Package>(url);
  // }

  getAll():Observable<Cards[]> {
    return this.http.get<Cards[]>(this.env.URL+'/Cards')
  }
  get():Observable<newfeed[]> {
    return this.http.get<Ifeedback[]>(this.env.URL+'/Feedback')
  }
  post(feed:Ifeedback):Observable<any> {
    return this.http.post<any>(this.env.URL+'/Feedback',feed)
  }
  
Put(feed:Ifeedback):Observable<Ifeedback[]>{
  return this.http.put<Ifeedback[]>(this.env.URL+'/Feedback',feed);

}
  
}
