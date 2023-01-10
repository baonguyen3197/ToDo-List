import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component'
import { SidebarComponent } from '../components/sidebar/sidebar.component'
import { NbIconModule, NbCalendarModule } from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbCalendarModule,
    NbEvaIconsModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
