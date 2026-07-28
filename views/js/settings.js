const form = document.querySelector('#youtube form');
const submitButton = form.querySelector('button[type="submit"]');

const dialog = document.querySelector('dialog');
const dialogMessage = dialog.querySelector('p');
const dialogButton = dialog.querySelector('button');

dialogButton.addEventListener('click', () => {
	dialog.close();
});

form.addEventListener('submit', async (e) => {
	submitButton.disabled = true;
	submitButton.textContent = 'Now Saving';

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
		dialogMessage.textContent = 'Settings saved successfully!';
	}
	else {
		let { errors } = await request.json();
		dialogMessage.innerHTML = `<b>Failed to save settings!</b><br>${errors.join('<br>')}`;
	}

	submitButton.disabled = false;
	submitButton.textContent = 'Save Settings';
	dialog.showModal();
});

