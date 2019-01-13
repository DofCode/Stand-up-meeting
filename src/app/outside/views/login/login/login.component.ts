import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public isValid: boolean = false

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router,
    private titleService: Title,
    private userService: UsersService
  ) {
    this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if (user == null) {
          this.router.navigate(['/account/login']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }
    )
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((data) => {
      
      this.userService.addUser(data.user.uid, {
        name: data.user.displayName,
        email: data.user.email,
        photoUrl: data.user.photoURL,
        id_user: data.user.uid
      })

      this.router.navigate(['/dashboard'])
      
    })
    .catch(() => {
      console.log("Eror al iniciar sesión")
    })
  }
  async ngOnInit() {
    this.titleService.setTitle('Login - Stand Up Meeting Luminux');
  }

}
