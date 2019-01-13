import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { take, map, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private afsAuth: AngularFireAuth
    ) {
    }

    canActivate() {
        return this.afsAuth.authState
        .pipe(take(1))
        .pipe(map(authState => !!authState))
        .pipe(tap(auth => {
            if(!auth) {
                this.router.navigate(['/account/login'])
            }
        }))
    }
}
