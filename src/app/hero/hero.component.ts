import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

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
	@Input() animation: string;
	@Output() resetAnimationState = new EventEmitter<string>();
	showWordBubble: boolean = false;
	tagline: string = 'Front-End Website Developer';

	contacts = {
		email:    'ericbutler555@gmail.com',
		location: 'https://goo.gl/maps/5BjhKaPbmcu',
		github:   'https://github.com/ericbutler555',
		codepen:  'https://codepen.io/ericbutler555/pens/public/'
	};

	ngOnInit(): void {
		setTimeout(() => this.showWordBubble = true, 1500);
	}

	ngOnChanges(): void {
		if (this.animation === 'pulsing') {
			setTimeout(() => this.resetAnimationState.emit('static'), 1500);
		}
	}
}
