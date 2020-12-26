import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Job } from './experience/job';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	currentJob: Observable<Job>;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.currentJob = this.appService.getCurrentJob();
	}
}
