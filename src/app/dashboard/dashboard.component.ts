import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from 'src/models/order.class';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  order = new Order();
  allOrders = [];
  finalSum = 0;
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('orders')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Receive changes from DB', changes);
        this.allOrders = changes;
        console.log('after', this.allOrders);
        this.sumUp();
      });
  }

  sumUp() {
    for (let i = 0; i < this.allOrders.length; i++) {
      const element = this.allOrders[i];
      this.finalSum = this.finalSum + element.price;
      console.log(this.finalSum);
    }
  }
}
