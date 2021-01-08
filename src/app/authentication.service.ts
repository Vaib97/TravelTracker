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
 
  isAuthenticated = false;
  checkCredentials= false;

  constructor(private router: Router) { }
  
  
  
  
  authenticate(): boolean {
    if (this.checkCredentials) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  

 
  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
