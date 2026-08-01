import { engine, easings, createTimeline } from 'animejs';

engine.pauseOnDocumentHidden = false;
engine.timeUnit = 's';

const body = document.querySelector('body');
const container = document.querySelector('#container');

function flip() {
	let tl = createTimeline();

	tl.add(container, {
		rotateY: '-=180deg',

		duration: 1,

		easings: easings.eases.inOut(2),
	});

	tl.add(body, {
		scale: [1, 0.75],

		duration: 0.5,

		playbackEase: easings.eases.out(2),

		alternate: true,
		loop: 1
	}, '<<');
}

setInterval(flip, 1500);