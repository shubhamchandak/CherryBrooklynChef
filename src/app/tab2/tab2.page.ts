import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data = [];
  constructor(
    private apiService: ApiService,
    public navCtrl: NavController,
    ) {
    this.loadOrder();
  }

  ionViewDidLoad() {
    this.loadOrder();
  }

  loadOrder() {
    this.apiService.getOrders().subscribe(data => {
        this.data = data['orders'];
        console.log('Load data', this.data);
    });
  }

  navToDetailPage(id: string) {
    console.log('data', id);
    this.navCtrl.navigateForward('/contact');
  }
}
