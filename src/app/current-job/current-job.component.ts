import { Component, Input } from '@angular/core';
import { Job } from '../experience/job';

@Component({
	selector: 'app-current-job',
	templateUrl: './current-job.component.html',
	styleUrls: ['./current-job.component.scss']
})
export class CurrentJobComponent {
	@Input() job: Job;
}
