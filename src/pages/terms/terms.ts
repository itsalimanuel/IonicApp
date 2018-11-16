import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Custom
import { Core } from '../../service/core.service';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ComplaintsPage } from '../complaints/complaints';

@Component({
	selector: 'page-terms',
	templateUrl: 'terms.html'
})
export class TermsPage {
	constructor(private navCtrl: NavController) {
	
	}
	contact(){
		this.navCtrl.push(ContactPage);
	}
	about(){
		this.navCtrl.push(AboutPage);
	}
	complaints(){
		this.navCtrl.push(ComplaintsPage);
	}
}