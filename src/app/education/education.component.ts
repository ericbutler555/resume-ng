import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { School } from './school';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
	schools: Observable<School[]>;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.schools = this.appService.getSchools();
	}
}
