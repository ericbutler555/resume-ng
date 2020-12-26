import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Site } from './portfolio/site';
import { Job } from './experience/job';
import { School } from './education/school';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSites() {
    return this.http.get<Site[]>('data/sites.json');
  }

  getCurrentJob() {
    return this.http.get<Job[]>('data/experience.json').pipe(map(jobs => {
      return jobs.find(x => x.is_current);
    }));
  }

  getPastJobs() {
    return this.http.get<Job[]>('data/experience.json').pipe(map(jobs => {
      return jobs.filter(x => !x.is_current);
    }));
  }

  getSchools() {
    return this.http.get<School[]>('data/education.json');
  }

  getSkills() {
    return this.http.get<string[]>('data/skills.js');
  }
}
