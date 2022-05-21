import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent implements OnInit, OnChanges {
  constructor() {}

  /** Current value of the progress bar. */
  @Input() currentProgress: number;

  /** Maximum value of the progress bar. */
  @Input() maxProgress: number;

  /** Current value of the progress bar. */
  @Input() segmentStart: number;

  /** Maximum value of the progress bar. */
  @Input() segmentEnd: number;

  progress: string;
  start: string;
  end: string;

  ngOnInit() {
    this.renderElements();
  }

  renderElements() {
    this.progress = (this.currentProgress / this.maxProgress) * 180 + 'deg';
    this.start = (this.segmentStart / this.maxProgress) * 180 + 'deg';
    this.end = (this.segmentEnd / this.maxProgress) * 180 + 'deg';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderElements();
  }
}
