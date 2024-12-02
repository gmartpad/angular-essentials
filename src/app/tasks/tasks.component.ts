import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { type Task } from '../task/task.model';
import { type User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task.model';

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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onSetIsAddingTask(value: boolean) {
    this.isAddingTask = value
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user?.id!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false
  }
}
