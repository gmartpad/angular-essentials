import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angular-essentials';
  users: User[] = DUMMY_USERS;
  selectedUser?: User = DUMMY_USERS[0]

  onSelectUser(id: string) {
    const newSelectedUser: User | undefined = DUMMY_USERS.find(user => user.id === id)
    this.selectedUser = newSelectedUser
  }
}
