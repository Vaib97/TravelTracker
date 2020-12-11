import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { JourneyListComponent } from './journey-list/journey-list.component';

const routes: Routes = [
  {path: 'add-journey',component:AddJourneyComponent},
  {path: 'view-journey',component:JourneyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
