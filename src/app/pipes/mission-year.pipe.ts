import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missionYear',
  standalone: true // Allows this pipe to be used without declaring in a module
})
export class MissionYearPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      // If no value exists, return a default string
      return 'Unknown';
    }
    // Convert the value to a string and return it
    return value.toString();
  }
}
