import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missionYear',
  standalone: true
})
export class MissionYearPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return 'Unknown';
    }

    return value.toString();
  }
}
