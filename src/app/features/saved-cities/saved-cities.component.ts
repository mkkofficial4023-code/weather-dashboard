import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../core/models/weather.model';

@Component({
  selector: 'app-saved-cities',
  imports: [CommonModule],
  templateUrl: './saved-cities.component.html',
  styleUrl: './saved-cities.component.scss'
})

export class SavedCitiesComponent {
  @Input() cities: WeatherData[] = [];
  @Input() selectedCities: WeatherData[] = []; // 👈 NEW

  @Output() remove = new EventEmitter<WeatherData>();
  @Output() refresh = new EventEmitter<WeatherData>();
  @Output() compare = new EventEmitter<WeatherData>();

  isSelected(city: WeatherData): boolean {
    return this.selectedCities.some(c => c.city === city.city);
  }
}