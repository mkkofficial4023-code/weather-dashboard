import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  imports: [FormsModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent {
  city = '';

  @Output() citySearch = new EventEmitter<string>();

  search() {
    if (!this.city.trim()) return;
    this.citySearch.emit(this.city);
    this.city = '';
  }
}