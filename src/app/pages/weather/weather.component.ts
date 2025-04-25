import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service'; // Adjust path as needed
import { Weather } from "../../models/weather";
import { GoogleSignInFedcmComponent } from '../../google-sign-in-fedcm-component/google-sign-in-fedcm-component.component';

@Component({
  selector: 'app-weather',
  imports: [GoogleSignInFedcmComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weather: Weather[] | null = null;
  constructor(private apiService: ApiServiceService) {

  }
  ngOnInit(): void {
    this.apiService.loadWeather().subscribe(weather => {
      this.weather = weather;
      console.log(this.weather);
    });
  }
}
