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
  allPedingOrders = [];
  allPayedOrders = [];
  finalSumOfAllOrders = 0;
  finalSumOfAllPedingOrders = 0;
  finalSumOfAllPayedOrders = 0;
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('orders')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allOrders = changes;

        this.sumUpAllOrders();
        this.sumUpAllPedingOrders();
        this.sumUpAllPayedOrders();
      });
  }

  sumUpAllOrders() {
    for (let i = 0; i < this.allOrders.length; i++) {
      const element = this.allOrders[i];
      this.finalSumOfAllOrders = this.finalSumOfAllOrders + element.price;
      console.log(this.finalSumOfAllOrders);
    }
  }

  sumUpAllPedingOrders() {
    this.allPedingOrders = this.allOrders.filter(
      (order) => order.status === false
    );
    for (let i = 0; i < this.allPedingOrders.length; i++) {
      const element = this.allPedingOrders[i];
      this.finalSumOfAllPedingOrders =
        this.finalSumOfAllPedingOrders + element.price;
      console.log('finalSumOfAllPedingOrders:', this.finalSumOfAllPedingOrders);
    }
  }

  sumUpAllPayedOrders() {
    this.allPayedOrders = this.allOrders.filter(
      (order) => order.status === true
    );
    console.log(this.allPayedOrders);
    for (let i = 0; i < this.allPayedOrders.length; i++) {
      const element = this.allPayedOrders[i];
      this.finalSumOfAllPayedOrders =
        this.finalSumOfAllPayedOrders + element.price;
      console.log('finalSumOfAllPedingOrders:', this.finalSumOfAllPayedOrders);
    }
  }
}
