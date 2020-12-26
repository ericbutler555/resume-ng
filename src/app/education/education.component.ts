import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './school';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
	schools: School[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<School[]>('data/education.json').subscribe(data => {
			this.schools = data;
		}, error => {
			console.log(error);
		});
	}
}
