import { Injectable, inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Weather } from "./models/weather";
import { GoogleAuthServiceService } from './google-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;
  constructor(private googleAuthService: GoogleAuthServiceService) {
    
   }
   loadWeather(){
    let token = this.googleAuthService.getToken();
    console.log(token);
    return this.http.get<Weather[]>(this.baseUrl + '/WeatherForecast', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
   }
}
