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
		scale: [1, 0.75, 1],

		duration: 1,

		playbackEase: easings.eases.outIn(2),
	}, '<<');
}

setInterval(flip, 10000);