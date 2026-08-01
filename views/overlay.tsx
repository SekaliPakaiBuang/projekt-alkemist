export default () => (
	<>
		<title>Projekt Alkemist - Overlay</title>
		<link rel="stylesheet" href="/css/overlay.css" />
		<div id="container">
			<div className="card card--front">
				<div className="flex flex--row">
					<div id="clock--time" className="card__element--big">00:00:00</div>
					<div id="clock--tz" className="card__element--small">UTC+7</div>
				</div>
				<div className="flex flex--row">
					<div id="calendar--date" className="card__element--big">0000-00-00</div>
					<div id="calendar--day" className="card__element--small">Monday</div>
				</div>
			</div>
			<div className="card card--back">
				<div className="flex flex--row flex--evenly flex--full-width">
					<div className="flex flex--row">
						<img src="/svg/person.svg" alt="Subscribers" width="20" height="20" />
						<div id="counter--subscribers" className="card__element--big">0</div>
					</div>
					<div className="flex flex--row">
						<img src="/svg/play.svg" alt="Views" width="20" height="20" />
						<div id="counter--views" className="card__element--big">0</div>
					</div>
					<div className="flex flex--row">
						<img src="/svg/heart.svg" alt="Likes" width="20" height="20" />
						<div id="counter--likes" className="card__element--big">0</div>
					</div>
				</div>
			</div>
		</div>
		<script src="/js/overlay.js"></script>
	</>
);
