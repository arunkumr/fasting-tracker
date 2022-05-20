import { Component, VERSION } from '@angular/core';
import { ProfileData } from '../models/profile-data';
import { Time } from '../models/time';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public profileData: ProfileData = new ProfileData();

  ngOnInit() {
    this.profileData.startTime = new Time(8, 30);
    this.profileData.endTime = new Time(18, 30);
  }
}
