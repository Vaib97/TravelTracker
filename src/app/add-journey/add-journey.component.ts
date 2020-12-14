import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Journey } from '../journey';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css']
})
export class AddJourneyComponent implements OnInit {

  constructor(private journeyservice:JourneyService) { }
  
  journey:Journey=new Journey();
  submitted=false;
  ngOnInit(): void {
    this.submitted=false;
  }
  
  journeysaveform=new FormGroup({  
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    source:new FormControl('',[Validators.required]),  
    startdate:new FormControl()  
  });  
  
  saveJourney(saveJourney: any){  
    this.journey=new Journey();     
    this.journey.name=this.JourneyName!.value;  
    this.journey.source=this.JourneySource!.value;  
    this.journey.startdate=this.JourneyStartdate!.value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.journeyservice.createJourney(this.journey)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.journey = new Journey();  
  }  
  
  get JourneyName(){  
    return this.journeysaveform.get('name');  
  }  
  
  get JourneySource(){  
    return this.journeysaveform.get('source');  
  }  
  
  get JourneyStartdate(){  
    return this.journeysaveform.get('startdate');  
  }  
  
  addJourneyForm(){  
    this.submitted=false;  
    this.journeysaveform.reset();  
  }

}
