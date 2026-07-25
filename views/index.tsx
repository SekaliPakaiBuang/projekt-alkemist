export default () => (
	<>
		<link rel="stylesheet" href="/css/index.css" />
		<div id="container">
			<div className="section">
				<div id="title">PROJECT L.O.N.T.E.</div>
				<div id="subtitle">
					Live Online Notes for Tally and Events<br />
					<b>Rewrite Edition</b>
				</div>
			</div>

			<div className="section section--red section--padded">
				<div className="section__title">About Project</div>
				<div className="gap"></div>
				<div className="section__description">
					<b>Project L.O.N.T.E. (Live Online Notes for Tally and Events)</b> is an app that shows the live stream information such as <b>subscriber count, view count, etc.</b><br /><br />
					This also shows donation information from <b>Trakteer</b> following the upcoming <b>Stream Overlay 2.0</b><br /><br />
					Designed for use in <b>OBS Studio</b> or similar broadcasting software that has a <b>browser source</b> feature.<br /><br />
					This project is a rewrite of my older web app with the same name, mainly as an exercise for better programming skills.
				</div>
			</div>

			<div className="section section--yellow section--padded">
				<div className="section__title">YouTube Settings</div>
				<div className="gap"></div>
				<div className="section__description">
					Section Description
				</div>
			</div>

			<div className="section section--green section--padded">
				<div className="section__title">Trakteer Settings</div>
				<div className="gap"></div>
				<div className="section__description">
					Section Description
				</div>
			</div>

			<div id="footer">
				©2026 SekaliPakaiBuang.<br />
				All rights reserved.
			</div>
		</div>
	</>
);