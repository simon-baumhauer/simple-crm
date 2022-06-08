import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/models/order.class';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss'],
})
export class DialogAddOrderComponent implements OnInit {
  order = new Order();
  loading = false;
  handschuhe = [];
  masken = [];
  desinfektionsmittel = [];

  constructor(
    public dialogRef: MatDialogRef<DialogAddOrderComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveOrder() {
    this.loading = true;
    this.firestore
      .collection('orders')
      .add(this.order.toJson())
      .then((results: any) => {
        this.loading = false;
        console.log('Adding user finished', results);
        this.dialogRef.close();
      });
  }

  selectProduct(produkt, array) {
    array.push(produkt);
    console.log(array);
  }
}
