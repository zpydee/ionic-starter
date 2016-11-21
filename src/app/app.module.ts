import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  HomePage,
  SettingsPage,
  TempPage
} from '../pages';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    TempPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    TempPage
  ],
  providers: []
})
export class AppModule { }
