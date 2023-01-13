import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { NbCalendarModule, NbCardModule, NbCalendarMonthPickerComponent } from '@nebular/theme'


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NbCalendarModule,
    NbCardModule,
  ]
})
export class CalendarModule { }
