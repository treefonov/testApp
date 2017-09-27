import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'table-info',
  templateUrl: 'table-info.html'
})
export class TableInfo {
  data = [];
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get('assets/data/filters.json').map(res => res.json()).subscribe(data => {
      
      this.data = data.features;
      console.log(this.data);
  });
  }

}
