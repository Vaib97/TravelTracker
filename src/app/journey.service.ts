import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private baseUrl='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getJourneyList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'traveller');
  }
  
  createJourney(journey:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'traveller', journey);
  }
  getJourney(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}id/${id}`);  
  }  
  updateJourney(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}update/${id}`, value);  
  }  

  getJourneyByDestination(destination:String):Observable<object>{
    return this.http.get(`${this.baseUrl}destination/${destination}`);
  }

}
