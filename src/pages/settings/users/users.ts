import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDetailPage } from './';


/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: any[] = [
    { firstName: 'John', lastName: 'Smith' },
    { firstName: 'Joe', lastName: 'Blogger' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Bob', lastName: 'Builder'}
  ]

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UsersPage Page');
  }

  gotoUser(event, user){
    this.navCtrl.push(UserDetailPage, user);
  }

}
