import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexService } from '../services/spacex';
import { MissionfilterComponent } from '../missionfilter/missionfilter';
import { MissionYearPipe } from '../pipes/mission-year.pipe';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,

  // Import all required modules, components, and pipes
  imports: [
    CommonModule,
    RouterModule,
    MissionfilterComponent,
    MissionYearPipe,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class MissionlistComponent implements OnInit {
  missions = signal<Mission[]>([]);
  loading = signal(false);
  errorMessage = signal('');

  // Inject the SpaceX service into the component
  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    // Load missions when component loads
    this.loadMissions();
  }

  //fetch all missions from API
  loadMissions(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('error loading missions:', err);
        this.errorMessage.set('Unable to load missions.');
        this.loading.set(false);
      }
    });
  }

  onYearSelected(year: string): void {
    // If no year selected, reload all missions
    if (!year) {
      this.loadMissions();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.spacexService.getMissionsByYear(year).subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      //error handeling
      error: (err) => {
        console.error('Error filtering missions:', err);
        this.errorMessage.set('Unable to filter missions by year.');
        this.loading.set(false);
      }
    });
  }
}
