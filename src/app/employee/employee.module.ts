import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [EmployeeListComponent, EmployeeCreateComponent]
})
export class EmployeeModule { }
