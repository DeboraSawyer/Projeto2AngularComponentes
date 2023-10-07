import { Component } from '@angular/core';

@Component({
  selector: 'app-useridentification',
  templateUrl: './useridentification.component.html',
  styleUrls: ['./useridentification.component.css']
})
export class UseridentificationComponent {
  loggedIn: boolean = false;
  username: string = '';

  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }

  login() {
    // Implementa a lógica do login e envia this.loggedIn e this.username de acordo.
    this.loggedIn = true;
    this.username = 'John Doe'; // Substitui com o username atual.
  }

  logout() {
    //Implementa a lógica do login
    this.loggedIn = false;
    this.username = '';
  }
}