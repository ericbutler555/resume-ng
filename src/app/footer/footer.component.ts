import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	@Output() contactClicked = new EventEmitter<string>();

	onContactClick() {
		this.contactClicked.emit('pulsing');
	}
}
