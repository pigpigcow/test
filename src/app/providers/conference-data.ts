import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    this.data = data;
    return this.data;
  }
  getMockData(
    queryText = '',
    excludeTracks: any[] = [],
    segment = 'all'
  ) {
    return this.load().pipe(
      map((data: any) => {
        const mockData = data.MockData;
        mockData.shownSessions = 0;

        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        const queryWords = queryText.split(' ').filter(w => !!w.trim().length);

        mockData.forEach((sections: any) => {
          sections.hide = true;

          sections.records.forEach((record: any) => {
            this.filterSession(record, queryWords, excludeTracks, segment);
            if (!record.hide) {
              sections.hide = !(!segment || segment == 'all' || record.segment == segment);
              record.hide = !(record.segment == segment || (segment == 'all' && !record.segment));
            }
          });

          if (!sections.hide) {
            sections.hide = false;
            mockData.shownSessions++;
          }
        });

        return mockData;
      })
    );
  }

  filterSession(
    session: any,
    queryWords: string[],
    excludeTracks: any[],
    segment: string
  ) {
    let matchesQueryText = false;
    if (queryWords.length) {
      queryWords.forEach((queryWord: string) => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      matchesQueryText = true;
    }
    session.hide = !(matchesQueryText);
  }
}
