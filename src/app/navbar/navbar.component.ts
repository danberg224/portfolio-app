import { Component } from '@angular/core';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { GoogleAuthServiceService } from '../google-auth-service.service';

@Component({
  selector: 'app-navbar',
  imports: [LogoutButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public googleAuthService: GoogleAuthServiceService) {}
}
