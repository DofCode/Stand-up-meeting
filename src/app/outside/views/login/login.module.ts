import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { LoginRoutingModule } from './login-routing.module';

//Components
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
