const tagBtns = document.querySelectorAll("span.badge");
const txtArea = document.getElementById("insertedText");

txtArea.addEventListener("keyup", function (e) {
	const oldSelectedEl = document.querySelector(".bg-dark .text-light");
	if (oldSelectedEl != null) {
		oldSelectedEl.classList.remove("bg-dark");
		oldSelectedEl.classList.remove("text-light");
		oldSelectedEl.classList.add("bg-light");
		oldSelectedEl.classList.add("text-dark");
	}
});

tagBtns.forEach(el => {
	el.addEventListener("click", function (e) {
		const val = parseInt(el.getAttribute("value"));
		const textArea = document.getElementById("insertedText");
		const oldSelectedEl = document.querySelector(".bg-dark .text-light");

		if (oldSelectedEl != null) {
			oldSelectedEl.classList.remove("bg-dark");
			oldSelectedEl.classList.remove("text-light");
			oldSelectedEl.classList.add("bg-light");
			oldSelectedEl.classList.add("text-dark");
		}
		if (el.classList.contains("bg-light")) {
			el.classList.remove("bg-light");
			el.classList.remove("text-dark");
			el.classList.add("bg-dark");
			el.classList.add("text-light");
		}
		switch (val) {
			case 1:
				textArea.value = textArea.value.toLowerCase().trim();
				break;
			case 2:
				textArea.value = textArea.value.toUpperCase().trim();
				break;
			case 3:
				textArea.value = allFirstLettersUp(textArea).trim();
				break;
			case 4:
				textArea.value = allLastLettersUp(textArea).trim();
				break;
			case 5:
				textArea.value = phraseCase(textArea).trim();
				break;
			case 6:
				textArea.value = invertCase(textArea).trim();
				break;
			case 7:
				textArea.value = oneDownOneUp(textArea).trim();
				break;
			case 8:
				textArea.value = oneUpOneDown(textArea).trim();
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
			} else if (index === 0) {
				newText += letter.toUpperCase();
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

