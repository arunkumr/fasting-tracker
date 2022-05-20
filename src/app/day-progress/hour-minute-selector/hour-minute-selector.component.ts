import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Time } from '../../../models/time';

@Component({
  selector: 'app-hour-minute-selector',
  templateUrl: './hour-minute-selector.component.html',
  styleUrls: ['./hour-minute-selector.component.css'],
})
export class HourMinuteSelectorComponent implements OnInit {
  public hours: Array<number> = [...Array(24).keys()];

  @Input() time: Time;
  @Input() title: string;

  @Output() timeUpdated = new EventEmitter<Time>();

  constructor() {}

  ngOnInit() {}

  onChange(): void {
    this.timeUpdated.emit(this.time);
  }
}
