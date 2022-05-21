import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { DayProgressComponent } from './day-progress/day-progress.component';
import { HourMinuteSelectorComponent } from './day-progress/hour-minute-selector/hour-minute-selector.component';
import { CircleProgressComponent } from './day-progress/circle-progress/circle-progress.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DayProgressComponent,
    HourMinuteSelectorComponent,
    CircleProgressComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
