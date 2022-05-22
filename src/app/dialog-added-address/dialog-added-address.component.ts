import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-added-address',
  templateUrl: './dialog-added-address.component.html',
  styleUrls: ['./dialog-added-address.component.scss'],
})
export class DialogAddedAddressComponent implements OnInit {
  user: User;
  userId: string;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddedAddressComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJson())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
