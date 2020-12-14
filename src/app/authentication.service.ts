import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JourneyService } from './journey.service';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  mockUser: UserData | undefined;
  isAuthenticated = false;

  constructor(private router: Router,private http:HttpClient,private journeyservice:JourneyService) { }
  
  
  
  
  authenticate(signInData: UserData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: UserData): boolean { 
    if(this.mockUser===undefined)
    return false;
    return signInData.username===this.mockUser!.username && signInData.password===this.mockUser!.password;
  }

 
  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
