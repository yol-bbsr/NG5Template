import { SidenavModule } from './sidenav/sidenav.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SharedModule } from '../_shared/shared.module';

import { HeaderModule } from './header/header.module';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SiteComponent]
})
export class SiteModule { }
