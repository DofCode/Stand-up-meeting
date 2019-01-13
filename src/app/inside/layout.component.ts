import { Component, OnInit } from '@angular/core';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

    public user : {}

    constructor(
        public afAuth: AngularFireAuth
    ){
        this.afAuth.auth.onAuthStateChanged(
            (user) => {
              if (user == null) {
                this.user = {}
              } else {
                  this.user = {
                    displayName : user.displayName,
                    photoURL: user.photoURL
                  }
              }
            }
          )
    }

    async ngOnInit() {
        
    }

    
}
