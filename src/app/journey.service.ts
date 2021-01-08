import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private baseUrl='http://localhost:8080/';
  username:String='';
  constructor(private http:HttpClient) { }
   
  getUser(user:any): Observable<any> {  
    this.username=user.username;
    return this.http.post(`${this.baseUrl}login`,user); 
  } 
  Register(user:any): Observable<any> {  
    return this.http.post(`${this.baseUrl}register`,user); 
  } 

  getJourneyList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+this.username+'/traveller');
  }
  
  createJourney(journey:object):Observable<Object>{
    return this.http.post(`${`${this.baseUrl}`}add/${this.username}`, journey,{responseType: 'text'});
  }
  getJourney(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}id/${id}`);  
  }  
  updateJourney(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}update/${id}`, value, {responseType: 'text'});  
  }  

  getJourneyByDestination(destination:String):Observable<object>{
    return this.http.get(`${this.baseUrl}destination/${destination}`);
  }

}
