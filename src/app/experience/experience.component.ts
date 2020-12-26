import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Job } from './job';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
	jobs: Observable<Job[]>;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.jobs = this.appService.getPastJobs();
	}
}
