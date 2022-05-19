import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { DayProgressComponent } from './day-progress/day-progress.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoundProgressModule],
  declarations: [AppComponent, HelloComponent, DayProgressComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
