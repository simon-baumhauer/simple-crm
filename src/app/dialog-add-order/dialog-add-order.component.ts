import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss'],
})
export class DialogAddOrderComponent implements OnInit {
  order = new Order();
  loading = false;
  selectedUser = new FormControl('');
  finalSum: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogAddOrderComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'userId' })
      .subscribe((changes: any) => {
        this.users = changes;
      });
  }

  users: any = [];

  saveOrder() {
    this.loading = true;
    this.order.user = this.selectedUser.value;
    this.order.price = this.finalSum;
    this.firestore
      .collection('orders')
      .add(this.order.toJson())
      .then((results: any) => {
        this.loading = false;
        console.log('Adding user finished', results);
        this.dialogRef.close();
        console.log('User', this.users);
      });
    console.log('selected User:', this.selectedUser.value);
  }

  deleteOrder() {
    this.loading = true;
    this.firestore.collection('orders').doc('').delete();
  }

  selectProduct(produkt, array, sum) {
    array.push(produkt);
    this.finalSum = this.finalSum + sum;
    console.log('finalsumm', this.finalSum);
  }

  //console.log(finalSum);
}
