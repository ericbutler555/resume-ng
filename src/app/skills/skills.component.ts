import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	skills: string[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<string[]>('data/skills.js').subscribe(data => {
			this.skills = data;
		}, error => {
			console.log(error);
		});
	}
}
