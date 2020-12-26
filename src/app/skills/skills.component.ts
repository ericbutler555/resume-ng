import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	skills: Observable<string[]>;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.skills = this.appService.getSkills();
	}
}
