import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../core/models/weather.model';

@Component({
  selector: 'app-comparison',
  imports: [CommonModule],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent {
  @Input() city1!: WeatherData;
  @Input() city2!: WeatherData;

  get higherTemp(): string {
    return this.city1.temperature > this.city2.temperature
      ? this.city1.city
      : this.city2.city;
  }

  get higherHumidity(): string {
    return this.city1.humidity > this.city2.humidity
      ? this.city1.city
      : this.city2.city;
  }

  get fasterWind(): string {
    return this.city1.windSpeed > this.city2.windSpeed
      ? this.city1.city
      : this.city2.city;
  }

  get summary(): string {
    if (this.city1.temperature > this.city2.temperature) {
      return `${this.city1.city} is hotter than ${this.city2.city}`;
    }
    return `${this.city2.city} is hotter than ${this.city1.city}`;
  }
}
