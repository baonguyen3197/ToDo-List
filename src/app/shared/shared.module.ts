import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NbIconModule, NbCalendarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbCalendarModule,
    NbEvaIconsModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    NbIconModule,
    NbCalendarModule,
    NbEvaIconsModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
})
export class SharedModule {}
