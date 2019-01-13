import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Services
import { TaksService } from '../../../../services/taks.service';
import { UsersService } from '../../../../services/users.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { routerTransition } from 'src/app/animations/router.animations';

declare var Materialize:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  animations: [routerTransition()]
})
export class IndexComponent implements OnInit {

  public taks = []
  public users = []

  public id_user

  constructor(
    private titleService: Title,
    private taksService: TaksService,
    private usersService: UsersService,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if (user == null) {
          this.id_user = null
        } else {
            this.id_user = user.uid
        }
      }
    )
  }

  editTak(id, tak) {
    const code = prompt("Introduce el código de la tarea", tak.name)
    if(code) {
      this.taksService.updateTak(id, {
        name: code
      }).then(() => {
        Materialize.toast('Tarea actualiada...', 3000)
      }, (error) => {
        Materialize.toast(error, 3000)
      })
    }
  }

  moveTak(id, status) {
    this.taksService.updateTak(id, {
      status: status
    }).then(() => {
      Materialize.toast('Tarea movida...', 3000)
    }, (error) => {
      Materialize.toast(error, 3000)
    })
  }

  dTak(id) {
    const Confirm = confirm("¿Seguro que quieres eliminar esta tarea?")
    
    if(Confirm) {
      this.taksService.deleteTak(id).then(() => {
        Materialize.toast('Tarea eliminada...', 3000)
      }, (error) => {
        Materialize.toast(error, 3000)
      })
    }
  }

  aTak(status) {
    const code = prompt("Introduce el código de la tarea", 'LS-')
    if(code) {
      this.taksService.addTak({
        name: code,
        status: status,
        user_id: this.id_user
      }).then(() => {
        Materialize.toast('Agregaste una nueva tarea...', 3000)
      }, (error) => {
        Materialize.toast(error, 3000)
      })
    }
  }

  dUser(id) {
    this.usersService.deteleUser(id).then(() => {
      Materialize.toast('Usuario eliminado...', 3000)
    }, (error) => {
      Materialize.toast(error, 3000)
    })
  }

  getUsers(){
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users
      this.getTaks()
    })
  }

  getTaks() {
    this.taksService.getAllTaks().subscribe(taks => {
      this.taks = taks
    })
  }

  async ngOnInit() {
    this.titleService.setTitle('Dashboard - Stand Up Meeting Luminux')
    await this.getUsers()
    // this.dUser('')
  }

}
