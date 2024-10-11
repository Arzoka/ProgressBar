const progressBar = document.querySelector('.progress-bar');

function changeProgressBar(progress) {
	const color = progressBar.dataset.progressColor;

	if (!color) {
		throw new Error('You need to set the data-progress-color attribute');
	}

	progressBar.style.background = `linear-gradient(90deg, ${color} ${progress}%, transparent ${progress}%)`;
}

document.getElementById('progress').addEventListener('change', e => {
	changeProgressBar(parseInt(e.target.value));
});


