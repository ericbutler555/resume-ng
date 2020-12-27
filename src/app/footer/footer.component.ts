import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	constructor(private appService: AppService) { }

	onContactClick() {
		this.appService.contactAnimationState.next('pulsing');
	}
}
