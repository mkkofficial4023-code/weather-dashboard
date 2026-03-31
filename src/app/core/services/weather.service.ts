import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'YOUR_API_KEY';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {} 

  getWeather(city: string): Observable<WeatherData> {
    return this.http
      .get<any>(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`)
      .pipe(
        map(res => ({
          city: res.name,
          temperature: res.main.temp,
          humidity: res.main.humidity,
          windSpeed: res.wind.speed,
          condition: res.weather[0].main,
          icon: `https://openweathermap.org/img/wn/${res.weather[0].icon}.png`,
          timestamp: new Date()
        }))
      );
  }
}