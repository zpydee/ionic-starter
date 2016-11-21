import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage implements OnInit {

  user: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello UserDetailPage Page');
  }

  ngOnInit() {
    this.user = this.navParams.data;
  }

  goBack() {
    this.navCtrl.pop();
  }

}
