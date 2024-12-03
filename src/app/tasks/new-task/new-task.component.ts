import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {
  @Input() user?: User 
  @Output() newTaskDialogVisibility = new EventEmitter<boolean>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)

  onCloseTask() {
    this.newTaskDialogVisibility.emit(false)
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.user?.id!)
    this.newTaskDialogVisibility.emit(false)
  }
}
