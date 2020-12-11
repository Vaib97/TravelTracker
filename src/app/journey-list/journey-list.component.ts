import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Journey } from '../journey';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent implements OnInit {

  constructor(private journeyservice:JourneyService) { }

  JourneyArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject<any>();  
  
  journeys: Journey[]=[];  
  journey : Journey=new Journey();  
  deleteMessage=false;  
  journeylist: any;  
  isupdated = false;      
  
  ngOnInit(): void {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 10, 20, -1], [5, 10, 20, "All"]],  
      processing: true  
    };     
    this.journeyservice.getJourneyList().subscribe(data =>{  
    this.journeys =data;  
   this.dtTrigger.next();  
    })  
  }
  updateJourney(id: number){  
    
     this.journeyservice.getJourney(id) 
       .subscribe(  
       data => {  
           this.journeylist=data,
           console.log(this.journeylist)
                  
        },  
        error => console.log(error));  
   
  }  
  
  journeyupdateform=new FormGroup({  
   
     id:new FormControl(),
    destination:new FormControl(),  
    enddate:new FormControl()  
  });  
  
  updateJou(){  
    this.journey=new Journey();   
   this.journey.destination=this.JourneyDestination!.value;  
   this.journey.enddate=this.JourneyEnddate!.value;  
  
     
  
   this.journeyservice.updateJourney(this.journeylist.id,this.journey).subscribe(  
    data => {       
      this.isupdated=true;  
      this.journeyservice.getJourneyList().subscribe(data =>{  
        this.journeys =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get JourneyDestination(){  
    return this.journeyupdateform.get('destination');  
  }  
  
 
  get JourneyEnddate(){  
    return this.journeyupdateform.get('enddate');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }

}
