import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  orderId = '';
  order: Order = new Order();
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.firestore
      .collection('orders')
      .doc(this.orderId)
      .valueChanges()
      .subscribe((order: any) => {
        this.order = new Order(order);
        console.log('Retrieved order', this.order);
      });
  }
}
