import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { JourneyService } from '../journey.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  
  constructor(private authenticationService: AuthenticationService,private journeyservice:JourneyService) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    const formdata=new UserData(signInForm.value.username, signInForm.value.password);
    this.journeyservice.getUser(formdata).subscribe(
      data=> { if(data!=null)
             this.authenticationService.mockUser=new UserData(data.username, data.password);
        if (!signInForm.valid) {
          this.isFormValid = true;
          this.areCredentialsInvalid = false;
          return;
        }
        
        this.checkCredentials(signInForm);
        console.log(this.authenticationService.mockUser)
        },
      error=> console.log(error)
    )
    
  
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new UserData(signInForm.value.username, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }

}
