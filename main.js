const tagBtns = document.querySelectorAll("span.badge");

tagBtns.forEach(el => {
	el.addEventListener("click", function (e) {
		const val = parseInt(el.getAttribute("value"));
		const textArea = document.getElementById("insertedText");

		switch (val) {
			case 1:
				textArea.value = textArea.value.toLowerCase();
				break;
			case 2:
				textArea.value = textArea.value.toUpperCase();
				break;
			case 3:
				textArea.value = allFirstLettersUp(textArea);
				break;
			case 4:
				textArea.value = allLastLettersUp(textArea);
				break;
			case 5:
				textArea.value = phraseCase(textArea);
				break;
			case 6:
				textArea.value = invertCase(textArea);
				break;
			case 7:
				textArea.value = oneDownOneUp(textArea);
				break;
			case 8:
				textArea.value = oneUpOneDown(textArea);
				break;
		}
	});
});

function allFirstLettersUp(text) {
	let newText = "";
	text.value.split(" ").forEach(el => {
		if (el != "") {
			newText += el[0].toUpperCase() + el.substr(1, el.length).toLowerCase() + " ";
		}
	});
	return newText;
}

function allLastLettersUp(text) {
	let newText = "";
	text.value.split(" ").forEach(el => {
		if (el != "") {
			newText += el.substr(0, el.length - 1).toLowerCase() + el.slice(-1).toUpperCase() + " ";
		}
	});
	return newText;
}

function phraseCase(text) {

	let newText = '';
	let hasDot = false;

	[...text.value].forEach((letter, index) => {
		if (letter.match('[a-zA-Z]')) {
			if (hasDot) {
				newText += letter.toUpperCase();
				hasDot = false;
			} else {
				newText += letter;
			}
		} else if (letter === ".") {
			hasDot = true;
			newText += letter;
		} else {
			newText += letter;
		}
	});

	return newText;
}

function oneDownOneUp(text) {
	let newText = "";
	[...text.value.toLowerCase()].forEach((letter, index) => {
		if (index % 2 === 0) {
			newText += letter;
		} else {
			newText += letter.toUpperCase();
		}
	});
	return newText;
}

function oneUpOneDown(text) {
	let newText = "";
	[...text.value.toLowerCase()].forEach((letter, index) => {
		if (index % 2 === 0) {
			newText += letter.toUpperCase();
		} else {
			newText += letter;
		}
	});
	return newText;
}

function invertCase(text) {
	let newText = "";
	[...text.value].forEach((letter, index) => {
		if (letter === letter.toUpperCase()) {
			newText += letter.toLowerCase();
		} else if (letter === letter.toLowerCase()) {
			newText += letter.toUpperCase();
		} else {
			newText += letter;
		}
	});
	return newText;
}

