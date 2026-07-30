const form = document.querySelector('#youtube form');
const submitButton = form.querySelector('button[type="submit"]');

const dialog = document.querySelector('dialog');
const dialogMessage = dialog.querySelector('p');
const dialogButton = dialog.querySelector('button');

dialogButton.addEventListener('click', () => {
	dialog.close();
});

dialog.addEventListener('click', (event) => {
	if (event.target === dialog) {
		dialog.close();
	}
});

form.addEventListener('submit', async (e) => {
	submitButton.disabled = true;
	submitButton.textContent = 'Sedang Menyimpan...';

	// Submission
	e.preventDefault();
	const channelUsername = form.querySelector('input[name="channelUsername"]').value.trim();
	const videoId = form.querySelector('input[name="videoId"]').value.trim();

	const request = await fetch('/api/youtube', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ channelUsername, videoId })
	});

	if (request.ok) {
		dialogMessage.textContent = 'Pengaturan berhasil disimpan!';
	}
	else {
		let { errors } = await request.json();
		dialogMessage.innerHTML = `<b>Gagal menyimpan pengaturan!</b><br>${errors.join('<br>')}`;
	}

	submitButton.disabled = false;
	submitButton.textContent = 'Simpan';
	dialog.showModal();
});

