import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { type Task } from '../task/task.model';
import { type User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.less'
})
export class TasksComponent {
  @Input() user?: User;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user?.id!)
  }

  onCompleteTask(id: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onSetIsAddingTask(value: boolean) {
    this.isAddingTask = value
  }
}
