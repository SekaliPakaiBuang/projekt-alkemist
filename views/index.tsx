export default () => (
	<>
		<title>Project L.O.N.T.E. Rewrite Edition - Settings Menu</title>
		<link rel="stylesheet" href="/css/index.css" />
		<div id="container">
			<div className="section">
				<div id="title">PROJECT L.O.N.T.E.</div>
				<div id="subtitle">
					Live Online Notes for Tally and Events
					<br />
					<b>Rewrite Edition</b>
				</div>
			</div>

			<div className="section section--red section--padded" id="about">
				<div className="section__title">About Project</div>
				<div className="gap"></div>
				<div className="section__description">
					<b>Project L.O.N.T.E. (Live Online Notes for Tally and Events)</b> is
					an app that shows the live stream information such as
					<b> subscriber count, view count, etc. </b>This also shows donation
					information from <b>Trakteer</b> following the upcoming
					<b> Stream Overlay 2.0</b>.
					<br />
					Designed for use in <b>OBS Studio</b> or similar broadcasting software
					that has a <b>browser source</b> feature.
					<br />
					<i>This project is a rewrite of my older web app with the same name,
					mainly as an exercise for better programming skills.</i>
				</div>
			</div>

			<div className="section section--yellow section--padded" id="youtube">
				<div className="section__title">YouTube Settings</div>
				<div className="gap"></div>
				<div className="section__description">
					Here you will set the <b>YouTube Channel Username</b> and
					<b> Video ID</b> to get the live stream information.
					<br />
					Information will be shown <a href="/overlay">here.</a>
				</div>
				<div className="gap"></div>
				<form action="/api/youtube" method="post">
					<div className="form__group">
						<label htmlFor="channelUsername">YouTube Channel Username</label>
						<input
							type="text"
							id="channelUsername"
							name="channelUsername"
							placeholder="channelusername"
							required
						/>
					</div>
					<div className="gap"></div>
					<div className="form__group">
						<label htmlFor="videoId">YouTube Video ID</label>
						<input
							type="text"
							id="videoId"
							name="videoId"
							placeholder="Video ID"
							required
						/>
					</div>
					<div className="gap"></div>
					<div className="form__group">
						<button type="submit">Save Settings</button>
					</div>
				</form>
			</div>

			<div className="section section--green section--padded" id="trakteer">
				<div className="section__title">Trakteer Settings</div>
				<div className="gap"></div>
				<div className="section__description">Section Description</div>
			</div>

			<div id="footer">
				©2026 SekaliPakaiBuang.
				<br />
				All rights reserved.
			</div>
		</div>
	</>
);
