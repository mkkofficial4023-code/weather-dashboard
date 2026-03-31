import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () =>
      import('./features/weather-dashboard/weather-dashboard.component')
        .then(m => m.WeatherDashboardComponent)
  }];
