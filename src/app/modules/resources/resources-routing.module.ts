import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './resources.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  { path: 'slider/:paper_id', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
