import { Component, OnInit, Input } from '@angular/core';
import { ProfileData } from '../../models/profile-data';
import { Time } from '../../models/time';

@Component({
  selector: 'app-day-progress',
  templateUrl: './day-progress.component.html',
  styleUrls: ['./day-progress.component.css'],
})
export class DayProgressComponent implements OnInit {
  constructor() {}

  public currentTime: Time;
  @Input() profileData: ProfileData;

  ngOnInit() {
    let currentDateTime: Date = new Date();
    this.currentTime = new Time(
      currentDateTime.getHours(),
      currentDateTime.getMinutes()
    );
  }

  updateStartTime(time: Time): void {
    this.profileData.startTime = time;
    this.profileData.startTime.updateTime();
  }

  updateEndTime(time: Time): void {
    this.profileData.endTime = time;
    this.profileData.endTime.updateTime();
  }
}
