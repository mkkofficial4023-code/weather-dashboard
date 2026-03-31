import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../core/services/weather.service';
import { LoggerService } from '../../core/services/logger.service';
import { WeatherData } from '../../core/models/weather.model';

import { CitySearchComponent } from '../city-search/city-search.component';
import { SavedCitiesComponent } from '../saved-cities/saved-cities.component';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { ComparisonComponent } from '../comparison/comparison.component';
import { ActivityLogComponent } from '../activity-log/activity-log.component';


@Component({
  selector: 'app-weather-dashboard',
  imports: [
    CommonModule,
    CitySearchComponent,
    SavedCitiesComponent,
    WeatherCardComponent,
    ComparisonComponent,
    ActivityLogComponent
  ],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.scss'
})
export class WeatherDashboardComponent {
  savedCities: WeatherData[] = [];
  selectedCities: WeatherData[] = [];
  currentWeather: WeatherData | null = null;

  loading = false;
  error = '';

  constructor(
    private weatherService: WeatherService,
    private logger: LoggerService
  ) {}

onCitySearch(city: string) {
  this.weatherService.getWeather(city).subscribe({
    next: (data) => {
      this.currentWeather = data;
      this.logger.log(`Searched: ${city}`);
    },
    error: () => {
      this.logger.log(`API failed: ${city}`);
    }
  });
}

  onSaveCity(city: WeatherData) {
    if (this.savedCities.find(c => c.city === city.city)) {
      alert('City already exists');
      return;
    }

    if (this.savedCities.length >= 5) {
      alert('Max 5 cities allowed');
      return;
    }

    this.savedCities.push(city);
    this.logger.log(`Saved: ${city.city}`);
  }

  onRemoveCity(city: WeatherData) {
    this.savedCities = this.savedCities.filter(c => c.city !== city.city);
    this.selectedCities = this.selectedCities.filter(c => c.city !== city.city);
    this.logger.log(`Removed: ${city.city}`);
  }

  onRefreshCity(city: WeatherData) {
    this.weatherService.getWeather(city.city).subscribe({
      next: (updated) => {
        const i = this.savedCities.findIndex(c => c.city === city.city);
        this.savedCities[i] = updated;
      },
      error: () => this.logger.log(`Refresh failed: ${city.city}`)
    });
  }

  onSelectForCompare(city: WeatherData) {
    if (this.selectedCities.includes(city)) return;

    if (this.selectedCities.length === 2) {
      this.selectedCities = [];
    }

    this.selectedCities.push(city);
  }

  get logs() {
    return this.logger.getLogs();
  }
}
