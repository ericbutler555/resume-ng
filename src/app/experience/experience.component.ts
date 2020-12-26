import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './job';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
	jobs: Job[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Job[]>('data/experience.json').subscribe(data => {
			this.jobs = data.filter(j => !j.is_current);
		}, error => {
			console.log(error);
		});
	}
}
