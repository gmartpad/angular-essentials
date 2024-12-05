import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { type User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angular-essentials';
  users: User[] = DUMMY_USERS;
  selectedUser?: User

  onSelectUser(id: string) {
    const newSelectedUser: User | undefined = DUMMY_USERS.find(user => user.id === id)
    this.selectedUser = newSelectedUser
  }
}
