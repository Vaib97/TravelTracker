import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { AppComponent } from './app.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJourneyComponent,
    JourneyListComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
