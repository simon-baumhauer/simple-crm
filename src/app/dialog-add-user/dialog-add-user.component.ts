import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.user.brithDate = this.birthDate.getTime();
    console.log('Current user is', this.user);
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((results: any) => {
        this.loading = false;
        console.log('Adding user finished', results);
        this.dialogRef.close();
      });
  }
}
