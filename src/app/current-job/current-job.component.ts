import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../experience/job';

@Component({
	selector: 'app-current-job',
	templateUrl: './current-job.component.html',
	styleUrls: ['./current-job.component.scss']
})
export class CurrentJobComponent implements OnInit {
	job: Job = new Job();

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Job[]>('data/experience.json').subscribe(data => {
			this.job = data.find(j => j.is_current);
		}, error => {
			console.log(error);
		});
	}
}
