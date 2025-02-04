import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    this.usersSubject.next(storedUsers);
  }

  addUser(user: any) {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = [...currentUsers, user];
    this.usersSubject.next(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  getUsers() {
    return this.users$;
  }
}
