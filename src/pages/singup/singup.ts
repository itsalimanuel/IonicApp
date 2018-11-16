import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import { core } from '@angular/compiler';
import { Core } from '../../service/core.service';

// Custom
import { TranslateService } from '../../module/ng2-translate';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  formgroup : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams , 
  private formBuilder: FormBuilder , private http : Http , private core: Core ,
  translate : TranslateService,
  private Toast:Toast

) {
    
  }
  loginForm

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

}
