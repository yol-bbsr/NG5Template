import { SharedModule } from './../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { ItemComponent } from './item/item.component';
import { SidenavService } from './sidenav.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    PerfectScrollbarModule
  ],
  declarations: [
    SidenavComponent,
    ItemComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
    {provide: 'sidenavService', useClass: SidenavService},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SidenavModule {
}
