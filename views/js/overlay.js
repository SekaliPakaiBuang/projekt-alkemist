import { engine, easings, createTimeline } from "animejs";

engine.pauseOnDocumentHidden = false;
engine.timeUnit = "s";

const body = document.querySelector("body");
const container = document.querySelector("#container");

function flip() {
	let tl = createTimeline();

	tl.add(container, {
		rotateY: "-=180deg",

		duration: 1,

		easings: easings.eases.inOutSine,
	});

	tl.add(body, {
		scale: [1, 0.8],

		duration: 0.5,

		playbackEase: easings.eases.outSine,

		alternate: true,
		loop: 1
	}, "<<");
}

setInterval(flip, 1500);