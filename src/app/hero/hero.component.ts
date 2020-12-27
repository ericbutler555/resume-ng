import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
	showWordBubble: boolean = false;
	tagline: string = 'Front-End Website Developer';

	contacts = {
		email:    'ericbutler555@gmail.com',
		location: 'https://goo.gl/maps/5BjhKaPbmcu',
		github:   'https://github.com/ericbutler555',
		codepen:  'https://codepen.io/ericbutler555/pens/public/'
	};

	ngOnInit(): void {
		setTimeout(() => {
			this.showWordBubble = true;
		}, 1500);
	}
}
