import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex])
  imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return '/assets/users/' + this.selectedUser().avatar
  // }

  onSelectUser() {
    const newRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // this.selectedUser = DUMMY_USERS[newRandomIndex]
    this.selectedUser.set(DUMMY_USERS[newRandomIndex])
  }
}
