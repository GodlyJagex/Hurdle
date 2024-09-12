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
	for (let i = 0; i < 7; i++) {
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
			editRow();
	}
	},
	false,
);

function compare() {
	Checked = [0, 0, 0, 0, 0];
	Spotted = [0, 0, 0, 0, 0];

 
	for (let i = 0; i < 5; i++) {
		if (Answer[i] == Input[i] && Spotted[i] !== 1 && Checked[i] !== 1) {
			Correct += 1;
			Spotted[i] = 1;
			Checked[i] = 1;
		}
	}
 
	for (let j = 0; j < 5; j++) {
		if (Spotted[j] !== 1) {
			for (let k = 0; k < 5; k++) {
				if (Answer[j] == Input[k] && Checked[k] !== 1) {
					Incorrect += 1;
					Spotted[j] = 1;
					Checked[k] = 1;
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
	editRow();
}

function editRow()
{
	var rowclass = "row" + rownumber;
	var table = document.getElementById("table");
	if (Correct != 5){
		document.getElementById(rowclass).innerHTML = "<td>"+Input.charAt(0)+"</td><td>"+Input.charAt(1)+"</td><td>"+Input.charAt(2)+"</td><td>"+Input.charAt(3)+"</td><td>"+Input.charAt(4)+"</td><td class=Green>"+Correct+"</td><td class=Yellow>"+Incorrect+"</td>";
	}else{
		document.getElementById(rowclass).innerHTML = "<td class=Green>"+Input.charAt(0)+"</td><td class=Green>"+Input.charAt(1)+"</td><td class=Green>"+Input.charAt(2)+"</td><td class=Green>"+Input.charAt(3)+"</td><td class=Green>"+Input.charAt(4)+"</td><td class=Green>"+Correct+"</td><td class=Yellow>"+Incorrect+"</td>";
		Break;
	} return;
}
