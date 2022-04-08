function calculate() {
	let span = document.getElementById("penis");
	let input = document.getElementById("textinput");

	let value = parseInt(input.value);

	let text = "invalid data xd";
	if (!isNaN(value)) {
		text = String(3 * value);
	}

	span.innerText = text;
}
