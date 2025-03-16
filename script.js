document.getElementById("buyButton").addEventListener("click", function () {
	var cena = document.getElementById("cenaProizvoda").getAttribute("data-cena");

	console.log("Cena ovog proizvoda je " + cena + " eura");
});

// for (i = 0; i < 100; i++) {
// 	console.log(i);
// }

// document
// 	.getElementsByClassName("dugme")[0]
// 	.addEventListener("click", function () {
// 		console.log("Dugme je kliknuto");
// 		this.style.color = "red";
// 	});

// document
// 	.getElementsByClassName("dugme")[1]
// 	.addEventListener("click", function () {
// 		console.log("Dugme je kliknuto");
// 		this.style.color = "red";
// 	});

// var dugmad = document.getElementsByClassName("dugme").length;
// for (var brojElementa = 0; brojElementa < dugmad; brojElementa++) {
// 	document
// 		.getElementsByClassName("dugme")
// 		[brojElementa].addEventListener("click", function () {
// 			console.log("Dugme je kliknuto");
// 			this.style.color = "red";
// 		});
// }

for (var parniBrojevi = 0; parniBrojevi < 100; parniBrojevi++) {
	if (parniBrojevi % 2 == 0) {
		console.log(parniBrojevi);
	}
}
for (var parniBrojevi = 0; parniBrojevi < 100; parniBrojevi++) {
	if (parniBrojevi % 2 !== 0) {
		console.log(parniBrojevi);
	}
}
