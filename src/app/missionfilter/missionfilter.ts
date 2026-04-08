import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './missionfilter.html',
  styleUrl: './missionfilter.css'
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();

  yearControl = new FormControl('');

  years: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
  ];

  onYearChange(): void {
    this.yearSelected.emit(this.yearControl.value || '');
  }

  clearFilter(): void {
    this.yearControl.setValue('');
    this.yearSelected.emit('');
  }
}
