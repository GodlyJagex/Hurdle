var tableWidth = 3;
var tableHeight = 3;

var currenttableHeight = 3;
var currenttableWidth = 3;

function createTable(){
    var table = document.getElementById("table");
    for (let index = 0; index < tableHeight; index++) {
        var row = table.insertRow(index);
        var rowNumber = index+1
        row.id = ("row"+rowNumber);
        for (let index2 = 0; index2 < tableWidth; index2++){
            var row = table.rows[index];
            var cell = row.insertCell();
            var cellNumber = index2+1;
            cell.id = ("Cell"+cellNumber);
            cell.setAttribute("onclick","deleteCell(this)");
        }
    }
    currenttableHeight = tableHeight;
    currenttableWidth = tableWidth;
}

function deleteTable(){
    var table = document.getElementById("table");
    table.innerHTML = "";
}

function refreshTable(){
    deleteTable();
    createTable();
    document.getElementById("HeaderRow").innerHTML= "Rows: "+tableHeight;
    document.getElementById("HeaderColumn").innerHTML= "Columns: "+TableWidth;
}

function deleteCell(CellData){
    var table = document.getElementById("table");
    for (let index = 0; index < currenttableHeight; index++) {
        for (let index2 = 0; index2 < currenttableWidth; index2++){
            var row = table.rows[index];
            if (row.children[index2]=CellData) {
               CellData.setAttribute("style","visibility: hidden;");
            }
        }
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