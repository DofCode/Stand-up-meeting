import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { LayoutRoutingModule } from './layout-routing.module';

//Components
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { MaterializeModule } from 'angular2-materialize';
// import 'materialize-css';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterializeModule
    ],
    providers: [ ],
    declarations: [
        LayoutComponent,
        NavbarComponent,
    ]
})
export class LayoutModule {}
