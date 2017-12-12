import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { WIPComponent } from './wip/wip.component';
import { WipModule } from './wip/wip.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '', component: SiteComponent, children: [
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path: 'settings', loadChildren: './setting/setting.module#SettingModule'},
    {path: 'requirementanalysis/littleslaw', loadChildren: './wip/wip.module#WipModule'}
  ]
  },
  {path: '**', component: WIPComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
