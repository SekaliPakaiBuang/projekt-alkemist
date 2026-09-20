export default () => (
	<>
		<title>Projekt Alkemist - Overlay</title>
		<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		<link rel="stylesheet" href="/css/overlay.css" />

		<div id="container">
			<div className="card card--front full-width full-height">
				<div className="flex flex--row">
					<p id="clock--time" className="card__element--big">00:00:00</p>
					<p id="clock--tz" className="card__element--small">UTC+7</p>
				</div>
				<div className="flex flex--row">
					<p id="calendar--date" className="card__element--big">0000-00-00</p>
					<p id="calendar--day" className="card__element--small">Monday</p>
				</div>
			</div>
			<div className="card card--back full-width full-height">
				<div className="flex flex--row flex--space full-width">
					<div className="flex flex--row">
						<img src="/svg/person.svg" alt="Subscribers" width="24" height="24" />
						<p id="counter--subscribers" className="card__element--big">0</p>
					</div>
					<div className="flex flex--row">
						<img src="/svg/play.svg" alt="Views" width="24" height="24" />
						<p id="counter--views" className="card__element--big">0</p>
					</div>
					<div className="flex flex--row">
						<img src="/svg/heart.svg" alt="Likes" width="24" height="24" />
						<p id="counter--likes" className="card__element--big">0</p>
					</div>
				</div>
			</div>
		</div>
		<script src="/js/overlay.js"></script>
	</>
);
