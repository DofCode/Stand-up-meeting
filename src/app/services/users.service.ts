import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { UsersInterface } from '../models/usersinterface'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection: AngularFirestoreCollection<UsersInterface>
  users: Observable<UsersInterface[]>
  usersDoc: AngularFirestoreDocument<UsersInterface>

  constructor(
    public afs: AngularFirestore
  ) {
    this.users = afs.collection('users').valueChanges()
  }

  getAllUsers() {
    return this.users
  }

  public addUser( id_user: string, data: any) {
    return this.afs.collection('users').doc(id_user).set(data);
  }

  public deteleUser(documentId: string) {
    return this.afs.collection('users').doc(documentId).delete().then(function() {
    }).catch(function(error) {
        return error
    });
  
  }

}
