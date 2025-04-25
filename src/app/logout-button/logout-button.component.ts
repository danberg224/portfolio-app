import { Component } from '@angular/core';
import { GoogleAuthServiceService } from '../google-auth-service.service';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-logout-button',
  imports: [NgIf],
  template: `<button *ngIf="!googleAuthService.isTokenExpired()" (click)="logout()">Logout</button>`,
})
export class LogoutButtonComponent {
  constructor(public googleAuthService: GoogleAuthServiceService) {}

  logout(): void {
    this.googleAuthService.logout();
  }
}
