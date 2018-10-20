import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {NotifierModule} from 'angular-notifier';

import { AppComponent } from './app.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ManageStateComponent } from './manage-state/manage-state.component';
import { ManagecityComponent } from './managecity/managecity.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [

  {path:'managestate',component:ManageStateComponent},
  {path:'managecity',component:ManagecityComponent},
  {path:'manageuser',component:ManageUserComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent,
    TopMenuComponent,
    ManageStateComponent,
    ManagecityComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NotifierModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LeftSideMenuComponent,TopMenuComponent]
})
export class AppModule { }
