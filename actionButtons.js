document.getElementById("clear").addEventListener("click", () => {
	document.getElementById("insertedText").value = '';
});

document.getElementById("download").addEventListener("keyup", (e) => {
	e.preventDefault();
	downloadTxtFile();
});

function downloadTxtFile() {

	const element = document.getElementById('download');
	const text = document.getElementById("insertedText").value;
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', 'document.txt');
	element.click();

}