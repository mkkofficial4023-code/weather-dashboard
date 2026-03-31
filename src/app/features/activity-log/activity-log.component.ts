import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogEntry } from '../../core/models/log.model';

@Component({
  selector: 'app-activity-log',
  imports: [CommonModule],
  templateUrl: './activity-log.component.html',
  styleUrl: './activity-log.component.scss'
})
export class ActivityLogComponent {
  @Input() logs: LogEntry[] = [];
}
