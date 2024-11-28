import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {
  @Output() newTaskDialogVisibility = new EventEmitter<boolean>()

  onCloseTask() {
    this.newTaskDialogVisibility.emit(false)
  }
}
