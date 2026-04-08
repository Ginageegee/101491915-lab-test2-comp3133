import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./missionlist/missionlist').then((m) => m.MissionlistComponent)
  },
  {
    path: 'mission/:flight_number',
    loadComponent: () =>
      import('./missiondetails/missiondetails').then((m) => m.MissiondetailsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
