import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {from} from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { AppComponent } from './app.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJourneyComponent,
    JourneyListComponent,
    LoginComponent
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
