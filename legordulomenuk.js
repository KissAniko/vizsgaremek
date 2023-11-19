let kalkulatorContent = document.getElementById("kalkulatorContent")
let tableContent = document.getElementById("tableContent")

function mouseEnteredCalculator() {
	tableContent.style.display = "block"
	kalkulatorContent.style.display="none"
}

function mouseEnteredCalculator2() {
	kalkulatorContent.style.display = "block"
	tableContent.style.display = "none"
}

function mouseLeavedCalculator() {
	tableContent.style.display = "none"
}

function mouseLeavedCalculator2() {
	kalkulatorContent.style.display = "none"
}

function mouseEnteredInformation() {
	tableContent.style.display = "block"
}

function mouseLeavedInformation() {
	tableContent.style.display = "none"
}

