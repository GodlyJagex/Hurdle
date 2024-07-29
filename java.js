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
function Init(){
	Input = "";
	Correct = 0;
	Incorrect = 0;
	rownumber+=1;
	var table = document.getElementById("table");

	var row = document.createElement("tr");

	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	var td5 = document.createElement("td");
	var td6 = document.createElement("td");
	var td7 = document.createElement("td");

	td6.classList.add("Green");
	td7.classList.add("Yellow");

	row.id = ("row"+rownumber);
	td6.id = ("row"+rownumber+"Green");
	td7.id = ("row"+rownumber+"Yellow")
	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	row.appendChild(td5);
	row.appendChild(td6);
	row.appendChild(td7);

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

	Checked = ['0', '0', '0', '0', '0'];
	Spotted = ['0', '0', '0', '0', '0'];

	for (i = 0; i < 5; i++) {
		if (Answer[i] == Input[i] && Spotted[i] != 1 && Checked[i] != 1) {
			Correct += 1;
			Spotted[i] = 1;
			Checked[i] = 1;
		}
	}
	for (i = 0; i < 5; i++) {
		if (Answer[i] == Input[0] && Spotted[i] != 1 && Checked[0] != 1) {
			Incorrect += 1;
			Spotted[i] = 1;
			Checked[0] = 1;
		}
	}
	for (i = 0; i < 5; i++) {
		if (Answer[i] == Input[1] && Spotted[i] != 1 && Checked[1] != 1) {
			Incorrect += 1;
			Spotted[i] = 1;
			Checked[1] = 1;
		}
	}
	for (i = 0; i < 5; i++) {
		if (Answer[i] == Input[2] && Spotted[i] != 1 && Checked[2] != 1) {
			Incorrect += 1;
			Spotted[i] = 1;
			Checked[2] = 1;
		}
	}
	for (i = 0; i < 5; i++) {
		if (Answer[i] == Input[3] && Spotted[i] != 1 && Checked[3] != 1) {
			Incorrect += 1;
			Spotted[i] = 1;
			Checked[3] = 1;
		}
	}
	for (i = 0; i < 5; i++) {
		if (Answer[i] == Input[4] && Spotted[i] != 1 && Checked[4] != 1) {
			Incorrect += 1;
			Spotted[i] = 1;
			Checked[4] = 1;
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
