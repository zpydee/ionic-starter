import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  HomePage,
  SettingsPage,
  UsersPage,
  UserDetailPage,
  AppSettingsPage
} from '../pages';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    UsersPage,
    UserDetailPage,
    AppSettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    UsersPage,
    UserDetailPage,
    AppSettingsPage
  ],
  providers: []
})
export class AppModule { }
