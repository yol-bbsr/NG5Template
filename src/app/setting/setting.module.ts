import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { SharedModule } from './../_shared/shared.module';

const routes: Routes = [
  { path: '', component: SettingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
