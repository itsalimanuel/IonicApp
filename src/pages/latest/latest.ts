import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

// Custom
import { Core } from '../../service/core.service';

// Page
import { DetailPage } from '../detail/detail';
import { SearchPage } from '../search/search';
import { AccountPage } from '../account/account';
declare var wordpress_url: string;
declare var wordpress_per_page: Number;

@Component({
	selector: 'page-latest',
	templateUrl: 'latest.html',
	providers: [Core]
})
export class LatestPage {
	DetailPage = DetailPage;
	SearchPage = SearchPage;
	AccountPage = AccountPage;
	page = 1; products: Object[] = [];

	constructor(private core: Core, private http: Http,private navCtrl: NavController) {
		core.showLoading();
		this.getProducts().subscribe(products => {
			if (products.length > 0) this.page++;
			this.products = products;
			core.hideLoading();
		});
	}
	getProducts(): Observable<Object[]> {
		return new Observable(observable => {
			let params = { post_num_page: this.page, post_per_page: wordpress_per_page };
			this.http.get(wordpress_url + '/wp-json/wooconnector/product/getproduct', {
				search: this.core.objectToURLParams(params)
			}).subscribe(products => {
				observable.next(products.json());
				observable.complete();
			});
		});
	}
	doRefresh(refresher) {
		this.page = 1;
		this.getProducts().subscribe(products => {
			if (products.length > 0) this.page++;
			this.products = [];
			this.products = products;
			refresher.complete();
		});
	}
	load(infiniteScroll) {
		this.getProducts().subscribe(products => {
			if (products.length > 0) this.page++;
			this.products = this.products.concat(products);
			infiniteScroll.complete();
		});
	}
	gotoaccount(){
		this.navCtrl.push(this.AccountPage);
	}
	gotoSearch(){
		this.navCtrl.push(this.SearchPage);
	}
}
