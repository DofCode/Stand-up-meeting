import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  inputs: ['user']
})
export class NavbarComponent implements OnInit {

  public user

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router,
  ) { }

  logout() {
    this.afAuth.auth.signOut().then((data) => {
      this.router.navigate(['/account/login'])
    })
    .catch(() => {
        console.log("Eror al cerrar sesión")
    })
  }

  ngOnInit() {
  }

}
