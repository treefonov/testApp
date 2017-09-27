import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableInfo } from '../tableinfo/tableinfo';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToTableInfo() {
    this.navCtrl.push(TableInfo);
  }
}
