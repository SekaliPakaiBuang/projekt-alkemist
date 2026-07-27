const form = document.querySelector('#youtube form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
	submitButton.disabled = true;
	submitButton.textContent = 'Now Saving';

	// Submission
	e.preventDefault();
	const channelUsername = form.querySelector('input[name="channelUsername"]').value.trim();
	const videoId = form.querySelector('input[name="videoId"]').value.trim();

	const request = fetch('/api/youtube', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ channelUsername, videoId })
	});

	try {
		const response = await request;
		const result = await response.json();
		console.log(result);
	}
	catch (error) {
		console.error('Error:', error);
	}
	finally {
		submitButton.disabled = false;
		submitButton.textContent = 'Save Settings';
	}
});