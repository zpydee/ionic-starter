import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage, AppSettingsPage } from './';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  usersTab = UsersPage;
  appSettingsTab = AppSettingsPage;


  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }
}
