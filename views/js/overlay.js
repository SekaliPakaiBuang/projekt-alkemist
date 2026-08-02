import { engine, easings, createTimeline } from 'animejs';

engine.pauseOnDocumentHidden = false;
engine.timeUnit = 's';

const body = document.querySelector('body');
const container = document.querySelector('#container');

const clockTime = document.querySelector('#clock--time');
const clockTz = document.querySelector('#clock--tz');
const calendarDate = document.querySelector('#calendar--date');
const calendarDay = document.querySelector('#calendar--day');

const subscriberCount = document.querySelector('#counter--subscribers');
const viewCount = document.querySelector('#counter--views');
const likeCount = document.querySelector('#counter--likes');

let isFlipped = false;

function flip() {
	let tl = createTimeline({
		playbackEase: easings.eases.inOutCirc,
	});

	tl.add(container, {
		rotateX: '-=180deg',

		duration: 1,

		ease: easings.eases.linear,
	});

	tl.add(body, {
		scale: [1, 0.875, 1],

		duration: 1,

		playbackEase: easings.eases.inOutCirc,
	}, '<<');

	tl.call(() => {
		isFlipped = !isFlipped;
		if (!isFlipped) {
			youtubeData();
		}
	}, '<');
}

function clock() {
	const now = new Date();

	clockTime.textContent = now.toLocaleTimeString('en-GB', { hour12: false });
	clockTz.textContent = `UTC${now.getTimezoneOffset() > 0 ? '-' : '+'}${Math.abs(now.getTimezoneOffset() / 60)}`;

	calendarDate.textContent = now.toLocaleDateString('en-CA');
	calendarDay.textContent = now.toLocaleDateString('en-GB', { weekday: 'long' });
}

async function youtubeData() {
	try {
		const request = await fetch('/api/youtube');
		const data = await request.json();

		if (!request.ok) {
			throw new Error(request.statusText);
		}

		const { subscribers, views, likes } = data;

		subscriberCount.textContent = new Intl.NumberFormat('en', {
			notation: 'compact',
			maximumSignificantDigits: 3
		}).format(subscribers);
		viewCount.textContent = new Intl.NumberFormat('en', {
			notation: 'compact',
			maximumSignificantDigits: 3
		}).format(views);
		likeCount.textContent = new Intl.NumberFormat('en', {
			notation: 'compact',
			maximumSignificantDigits: 3
		}).format(likes);
	}
	catch (error) {
		console.error(error);
	}
}

clock();
youtubeData();

setInterval(clock, 1000);
setInterval(flip, 10000);