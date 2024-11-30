import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {
  @Output() newTaskDialogVisibility = new EventEmitter<boolean>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseTask() {
    this.newTaskDialogVisibility.emit(false)
  }

  onSubmit() {
    
  }
}
