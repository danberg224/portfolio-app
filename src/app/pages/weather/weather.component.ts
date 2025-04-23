import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service'; // Adjust path as needed
import { Weather } from "../../models/weather";

@Component({
  selector: 'app-weather',
  imports: [],
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
