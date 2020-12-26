import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Site } from './site';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	sites: Observable<Site[]>;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.sites = this.appService.getSites();
	}
}
