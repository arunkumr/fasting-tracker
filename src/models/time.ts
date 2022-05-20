export class Time {
  hour: number;
  minute: number;
  internalNotation: number;

  constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minute = minute;
    this.updateTime();
  }

  updateTime(): void {
    let minuteAsPercent = Math.round((this.minute / 60) * 100);
    this.internalNotation = this.hour * 100 + minuteAsPercent;
  }
}
