import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, stagger, state } from '@angular/animations';
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
		]),
		trigger('wordBubbleAnimation', [
			state('unspoken', style({
				transform: 'scale(0) translateY(-50px) rotate(45deg)'
			})),
			state('spoken', style({
				transform: 'scale(1) translateY(0) rotate(0deg)'
			})),
			transition('unspoken => spoken', animate(400))
		])
	]
})
export class HeroComponent implements OnInit {
	showWordBubble: string = 'unspoken';
	animationState: string = 'static';
	tagline: string = 'Front-End Website Developer';

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		setTimeout(() => this.showWordBubble = 'spoken', 1500);

		// listen for contactAnimationState to change:
		this.appService.contactAnimationState.subscribe(status => {
			this.animationState = status;
			setTimeout(() => this.animationState = 'static', 1500);
		});
	}
}
