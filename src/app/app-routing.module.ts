import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { HomeComponent } from './home/home.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path: 'home/add-journey',component:AddJourneyComponent},
  {path: 'home/view-journey',component:JourneyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
