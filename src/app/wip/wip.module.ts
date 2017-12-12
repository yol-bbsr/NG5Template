import { SharedModule } from './../_shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WIPComponent } from './wip.component';

const routes: Routes = [
  { path: '', component: WIPComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WIPComponent]
})
export class WipModule { }
