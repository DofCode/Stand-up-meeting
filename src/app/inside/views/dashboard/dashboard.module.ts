import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MaterializeModule } from 'angular2-materialize';

//Components
import { IndexComponent } from './index/index.component';

//Services
import { TaksService } from '../../../services/taks.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterializeModule,
    FilterPipeModule
  ],
  providers: [
    TaksService
  ],
  declarations: [
    IndexComponent
  ]
})
export class DashboardModule { }
