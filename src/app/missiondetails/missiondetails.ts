import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexService } from '../services/spacex';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css'
})
export class MissiondetailsComponent implements OnInit {
  // Store selected mission
  mission: Mission | null = null;
  loading = false;
  errorMessage = '';

  // Inject route, router, and API service
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    const stateMission = history.state?.mission as Mission | undefined;
    // If mission exists in state, use it
    if (stateMission) {
      this.mission = stateMission;
      this.loading = false;
      return;
    }

    const flightNumberParam = this.route.snapshot.paramMap.get('flight_number');
    //error handeling
    if (!flightNumberParam) {
      this.errorMessage = 'Invalid selection.';
      this.loading = false;
      return;
    }

    const flightNumber = Number(flightNumberParam);

    if (isNaN(flightNumber)) {
      this.errorMessage = 'Invalid selection.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.spacexService.getMissionByFlightNumber(flightNumber).subscribe({
      next: (data) => {
        this.mission = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Mission details error:', err);
        this.errorMessage = 'Unable to load mission details.';
        this.loading = false;
      }
    });
  }
}
