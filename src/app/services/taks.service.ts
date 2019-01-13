import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { TaksInterface } from '../models/taksinterface'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TaksService {

  taksCollection: AngularFirestoreCollection<TaksInterface>
  taks: Observable<TaksInterface[]>
  taksDoc: AngularFirestoreDocument<TaksInterface>
  tak: Observable<TaksInterface>

  constructor(
    public afs: AngularFirestore
  ) {
    this.taksCollection = afs.collection<TaksInterface>('taks')
  }

  getAllTaks() {
    return this.taks = this.taksCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as TaksInterface
        const id = action.payload.doc.id
        return {id, ...data }
      })
    }))
  }

  public addTak(data: any) {
    return this.afs.collection('taks').add(data);
  }

  public updateTak(documentId: string, data: any) {
    return this.afs.collection('taks').doc(documentId).update(data);
  }

  public deleteTak(documentId: string) {
    return this.afs.collection('taks').doc(documentId).delete().then(function() {
    }).catch(function(error) {
        return error
    });
  
  }
  
}
