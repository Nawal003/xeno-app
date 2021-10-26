import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { TestsComponent } from './tests/tests.component';
import { ProfilsComponent } from './profils/profils.component';


@NgModule({
  declarations: [
    AccueilAdminComponent,
    TestsComponent,
    ProfilsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
