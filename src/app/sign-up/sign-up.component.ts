import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JourneyService } from '../journey.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isPasswordMatch:boolean=true;
  userexist: boolean=false;
  constructor(private journeyservice:JourneyService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(signUpForm: NgForm) {
    if(signUpForm.value.password===signUpForm.value.confirmpassword)
    {const formdata=new UserData(signUpForm.value.username, signUpForm.value.password);
    this.journeyservice.Register(formdata).subscribe(
      data=> {if(data===false)
               this.userexist=true;
        else
             this.router.navigate([''])},
      error=> console.log(error)
    )
    }
    else
    this.isPasswordMatch=false
  
}
}
