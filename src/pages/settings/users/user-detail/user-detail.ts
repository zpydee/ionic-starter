import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage{

  user: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams) {}

  ionViewWillLoad(){
    this.user = this.navParams.data;

  }
  ionViewDidLoad() {
    console.log('Hello UserDetailPage Page');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
