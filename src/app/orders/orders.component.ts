import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  order = new Order();
  allOrders = [];
  allUsers = [];
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('orders')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Receive changes from DB', changes);
        this.allOrders = changes;
      });
  }

  openDialog() {
    this.dialog.open(DialogAddOrderComponent);
  }

  getAllUsers() {
    this.firestore
      .collection('Users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Receive changes from DB', changes);
        this.allUsers = changes;
      });
  }
}
