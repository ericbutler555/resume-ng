import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from './site';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	sites: Site[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Site[]>('data/sites.json').subscribe(data => {
			this.sites = data;
		}, error => {
			console.log(error);
		});
	}
}
