import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from './api-service.service'; // Adjust path as needed

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
