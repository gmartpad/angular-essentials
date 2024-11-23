import { Component, Input } from '@angular/core';
import { Task } from '../tasks/tasks.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
}
