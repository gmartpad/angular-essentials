import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {
  @Output() newTaskDialogVisibility = new EventEmitter<boolean>()
  @Output() newTaskAdd = new EventEmitter<NewTaskData>
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseTask() {
    this.newTaskDialogVisibility.emit(false)
  }

  onSubmit() {
    this.newTaskAdd.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
