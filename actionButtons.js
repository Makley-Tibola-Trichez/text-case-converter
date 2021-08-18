document.getElementById("clear").addEventListener("click", e => document.getElementById("insertedText").value = '');

document.getElementById("download").addEventListener("mousedown", (e) => {
	e.preventDefault();
	document.getElementById("download").style.pointerEvents = "none";
	setTimeout(function () {
		document.getElementById("download").style.pointerEvents = "auto";
	}, 1200);
	downloadTxtFile();
	console.log("adasd");
});

document.getElementById("copy").addEventListener("click", copyText);

function downloadTxtFile() {

	const element = document.getElementById('download');
	const text = document.getElementById("insertedText").value;
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', 'document.txt');
	element.click();

}

function copyText() {
	const copyText = document.getElementById("insertedText");

	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	navigator.clipboard.writeText(copyText.value);
}