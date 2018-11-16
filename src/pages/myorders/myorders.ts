import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the MyordersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html'
})
export class MyordersPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyordersPagePage');
  }
myorderslk() {
  let alert = this.alertCtrl.create({
    title: 'تم إرسال طلب ترقية عضويتك بنجاح',
    message: 'تم إرسال طلب ترقية حسابك بنجاح و هو قيد المراجعة',
    buttons: ['حسنا']
  });
  alert.present();

}
}
