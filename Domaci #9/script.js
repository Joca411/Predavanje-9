for (let i = 1; i <= 100; i++) {
	var div = document.createElement("div");

	if (i % 2 == 0) {
		div.className = "square squareEven";
	} else {
		div.className = "square squareOdd";
	}

	document.getElementById("container").append(div);
}

var squareNumber = document.getElementsByClassName("square").length;
for (let i = 0; i < squareNumber; i++) {
	document
		.getElementsByClassName("square")
		[i].addEventListener("click", function () {
			this.style.backgroundColor = "black";
		});
}
