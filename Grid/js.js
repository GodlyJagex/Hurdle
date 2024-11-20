var tableWidth = 3;
var tableHeight = 3;

var currenttableHeight = 3;
var currenttableWidth = 3;

var minesTotal = 0;
var hiddenCells = 0;
var goldTotal = 0;
var ClickingVar  = false;
const table = document.getElementById("table");

function createTable(){
    document.getElementById('Gold').innerHTML = 'Gold: ' + goldTotal;
    hiddenCells = 0;
    table.innerHTML="";
    for (var i = 0; i < tableHeight; i++) {
        var row = table.insertRow();
        for (var j = 0; j < tableWidth; j++) {
            var cell = row.insertCell();
        }
    }
    const cells = document.querySelectorAll('#table td');
    cells.forEach(cell => {
        cell.setAttribute('onclick', 'makeInvisible(this)');
    });

    currenttableHeight = tableHeight;
    currenttableWidth = tableWidth;
}

function additionalBoard() {
    var interactionTotal = (hiddenCells + minesTotal);
    var boardSize = (currenttableHeight * currenttableWidth);
    var userDifference = (boardSize - interactionTotal);
    if (interactionTotal == boardSize) {
        setTimeout( function() { createTable(); }, 500);
    }
}

function makeInvisible(cell) {
    cell.removeAttribute("onclick");
    cell.setAttribute("style","visibility: hidden;");
    hiddenCells +=1;
    goldTotal +=1;
    document.getElementById('Gold').innerHTML = 'Gold: ' + goldTotal;
    if (hiddenCells >= currenttableHeight+currenttableWidth){
        additionalBoard();
    }
}

function increaseRows(){
    tableHeight +=1;
    document.getElementById("HeaderRow").innerHTML= "Rows: "+tableHeight;
}
function decreaseRows(){
    tableHeight -=1;
    document.getElementById("HeaderRow").innerHTML= "Rows: "+tableHeight;
}
function increaseColumns(){
    tableWidth +=1;
    document.getElementById("HeaderColumn").innerHTML= "Columns: "+tableWidth;
}
function decreaseColumns(){
    tableWidth -=1;
    document.getElementById("HeaderColumn").innerHTML= "Columns: "+tableWidth;
}
  
  function toggleLayer() {
    document.getElementById('layer1').classList.toggle('active');
    document.getElementById('layer2').classList.toggle('active');
}

createTable();
