import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';
import { AppService } from '../app.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
	animations: [
		trigger('iconAnimation', [
			transition('* => pulsing', [
				query('li', [
					style({ transform: 'translateY(0)' }),
					animate(600),
					stagger(150, [
						animate(200, style({ transform: 'translateY(-12px)' })),
						animate(200, style({ transform: 'translateY(0)' }))
					])
				])
			])
		])
	]
})
export class HeroComponent implements OnInit {
	showWordBubble: boolean = false;
	tagline: string = 'Front-End Website Developer';
	animationState: string = 'static';
	contacts = {
		email:    'ericbutler555@gmail.com',
		location: 'https://goo.gl/maps/5BjhKaPbmcu',
		github:   'https://github.com/ericbutler555',
		codepen:  'https://codepen.io/ericbutler555/pens/public/'
	};

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		setTimeout(() => this.showWordBubble = true, 1500);

		this.appService.contactAnimationState.subscribe(status => {
			this.animationState = status;
			setTimeout(() => this.animationState = 'static', 1500);
		});
	}
}
