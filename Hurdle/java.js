//Create Answer
const Answer = wordList[Math.floor(Math.random() * wordList.length)];

//Global Variables
var Input = "";
var Correct = 0;
var Incorrect = 0;
var rownumber = 0;
var cellnumber = 1;

//Create Table On Load
window.onload = Init();

//Create Table
function Init() {
	Input = "";
	Correct = 0;
	Incorrect = 0;
	rownumber += 1;
	var table = document.getElementById("table");
 
	var row = document.createElement("tr");
	row.id = "row" + rownumber;

	var cells = [];
	for (let i = 0; i < Answer.length+2; i++) {
		cells[i] = document.createElement("td");
	}
 
	cells[4].classList.add("SpacingRight");
	cells[5].classList.add("Green");
	cells[6].classList.add("Yellow");
 
	cells[5].id = "row" + rownumber + "Green";
	cells[6].id = "row" + rownumber + "Yellow";
 
	cells.forEach(cell => row.appendChild(cell));
	table.children[0].appendChild(row);
}

//Listen For Input
document.addEventListener(
	"keyup",(event) => 
	{const keyName = event.key;
	if (keyName == "Backspace"){
		trim();
	}
	if (keyName == "Enter" && Input.length == 5 && wordList.includes(Input)){
			compare();
	}
	if (/^[a-z]$/i.test(event.key) & Input.length < 5) {
			Input += keyName;
			updatePreview();
	}
	},
	false,
);

// Compare Input with Answer
function compare() {
	Correct = 0;
	Incorrect = 0;
	const used = new Array(Answer.length).fill(false);
	const inputUsed = new Array(Input.length).fill(false);
  
	// Check for correct letters
	for (let i = 0; i < Answer.length; i++) {
	  if (Answer[i] === Input[i]) {
		Correct++;
		used[i] = true;
		inputUsed[i] = true;
	  }
	}
  
	// Check for incorrect but matching letters
	for (let i = 0; i < Answer.length; i++) {
	  if (!used[i]) {
		for (let j = 0; j < Input.length; j++) {
		  if (!inputUsed[j] && Answer[i] === Input[j]) {
			Incorrect++;
			inputUsed[j] = true;
			break;
		  }
		}
	  }
	}
  
	editRow();
	Init();
  }

function Cheat() {
	const Header = document.getElementById("title");
	let text = "Press OK to reveal the answer, or press Cancel to Cancel";
	if (confirm(text) == true) {
		NewHtml = '<a href="https://en.wiktionary.org/wiki/' + Answer + '">' + Answer + '</a>';
		document.getElementById("title").innerHTML = NewHtml.toLowerCase();
	}
};
function trim() {
	Input = Input.replace(/.$/, "");
	updatePreview();
}
function updatePreview(){
	var rowclass = "row" + rownumber;
	var table = document.getElementById("table");
	document.getElementById(rowclass).innerHTML = "<td>"+Input.charAt(0)+"</td><td>"+Input.charAt(1)+"</td><td>"+Input.charAt(2)+"</td><td>"+Input.charAt(3)+"</td><td>"+Input.charAt(4)+"</td><td class=Green>"+'-'+"</td><td class=Yellow>"+'-'+"</td>";
}

function editRow()
{
	var rowclass = "row" + rownumber;
	var table = document.getElementById("table");
	if (Correct != 5){
		document.getElementById(rowclass).innerHTML = "<td>"+Input.charAt(0)+"</td><td>"+Input.charAt(1)+"</td><td>"+Input.charAt(2)+"</td><td>"+Input.charAt(3)+"</td><td>"+Input.charAt(4)+"</td><td class=Green>"+Correct+"</td><td class=Yellow>"+Incorrect+"</td>";
	}else{
		document.getElementById(rowclass).innerHTML = "<td class=Green>"+Input.charAt(0)+"</td><td class=Green>"+Input.charAt(1)+"</td><td class=Green>"+Input.charAt(2)+"</td><td class=Green>"+Input.charAt(3)+"</td><td class=Green>"+Input.charAt(4)+"</td><td class=Green>"+Correct+"</td><td class=Yellow>"+Incorrect+"</td>";
		throw new Error("Fake Error To Hault Code");
	} return;
}
