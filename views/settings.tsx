type Data = {
	channelUsername: string;
	videoId: string;
};

export default ({ channelUsername, videoId }: Data) => (
	<>
		<title>Projekt Alkemist - Pengaturan</title>
		<link rel="stylesheet" href="/css/settings.css" />
		<div id="container">
			<div className="section">
				<div id="title">PROJEKT ALKEMIST</div>
				<div id="subtitle">
					Alat Kendali & Manajemen Informasi Streaming
				</div>
			</div>

			<div className="section section--red section--padded" id="about">
				<div className="section__title">Tentang Projekt</div>
				<div className="gap"></div>
				<p className="section__description">
					<b>Projekt Alkemist</b> adalah sebuah aplikasi yang menampilkan informasi siaran langsung seperti <b>jumlah subscriber, jumlah penonton, dan lain-lain.</b> Dirancang untuk digunakan di <b>OBS Studio</b> atau software serupa yang memiliki fitur <b>browser source</b>.
				</p>
			</div>

			<div className="section section--yellow section--padded" id="youtube">
				<div className="section__title">Pengaturan YouTube</div>
				<div className="gap"></div>
				<p className="section__description">
					Di sini anda akan menetapkan <b>YouTube Channel Username</b> dan <b>Video ID</b> untuk mendapatkan informasi siaran langsung.
					<br /><br />
					Informasi akan ditampilkan <a href="/overlay">di sini.</a>
				</p>
				<div className="gap"></div>
				<form method="post">
					<div className="form__group">
						<label htmlFor="channelUsername">YouTube Channel Username</label>
						<input
							type="text"
							id="channelUsername"
							name="channelUsername"
							placeholder="channelusername"
							value={channelUsername}
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
							value={videoId}
							required
						/>
					</div>
					<div className="gap"></div>
					<div className="form__group">
						<button type="submit">Simpan</button>
					</div>
				</form>
			</div>

			<div id="footer">
				©2026 SekaliPakaiBuang
			</div>

			<dialog className="dialog">
				<p className="dialog__message" id="dialog__message"></p>
				<div className="gap"></div>
				<button>OK</button>
			</dialog>
		</div>
		<script src="/js/settings.js"></script>
	</>
);
