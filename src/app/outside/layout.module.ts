import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterializeModule } from 'angular2-materialize';

//Components
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterializeModule
    ],
    providers: [ ],
    declarations: [
        LayoutComponent,
    ]
})
export class LayoutModule {}
