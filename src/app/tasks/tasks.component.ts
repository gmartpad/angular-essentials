import { Component, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.less'
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

}
