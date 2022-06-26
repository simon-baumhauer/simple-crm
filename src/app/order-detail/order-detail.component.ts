import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/models/order.class';
import { User } from 'src/models/user.class';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  orderId = '';
  order: Order = new Order();

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.orderId = paramMap.get('id');
      console.log('GOT ID', this.orderId);
      this.getOrder();
    });
  }

  saveOrder() {
    this.firestore
      .collection('orders')
      .doc(this.orderId)
      .update(this.order.toJson());
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

  cancelOrder() {
    this.firestore.collection('orders').doc(this.orderId).delete();
  }

  payedOrder() {
    this.order.status = true;
    this.saveOrder();
  }
}
