// All Variables Are User Defined In The Web Interface
var UserInput = [1,2,3,4,5,6,7,8,9,10]; // Pool of Numbers Allowed In Calculations
var CombinationLength = 3; // Set your desired combination length
var AllowReusingNumbers = 'YES'; // Set to 'YES' to Allow duplicates
var MathType = 'ADDITION'; // Sets Math Type
var TargetValue = 10; // Target Outcome for sum or product of array
var Combinations = [];

//Function To JumpStart The Process
function StartProcess() {
	UserInput = "[" + document.getElementById('UserSelectedVariables').value + "]";
	TargetValue = document.getElementById('TargetValue').value;
	document.getElementById('Output').innerHTML = [];
	Combinations = generateCombinations(UserInput);
}

function generateCombinations(array) {
    let result = [];

    const combine = (start, current) => {
		console.log(current);
		 result.push(current);
        for (let i = start; i < array.length; i++) {
			if (AllowReusingNumbers === 'NO' && current.includes(UserInput[i])) {
				continue;
			}
            combine(i + 1, current.concat(array[i]));
        }
    };

    combine(0, []);
    result = result.filter(item => item.length === CombinationLength);
	DoMathType(result);
}

function DoMathType(results) {
	if (MathType === 'ADDITION') {
		results = results.filter(array => {
			return array.reduce((acc, curr) => acc + curr, 0) === TargetValue;
		});
	} else if (MathType === 'MULTIPLICATION') {
		results = results.filter(TempVar1 => {
			const TempVar2 = TempVar1.reduce((acc, val) => acc * val, 1);
			return TempVar2 == TargetValue;
		});
	}
	for (let i = 0; i < results.length; i++) {
		document.getElementById('Output').innerHTML += '<tr><td>' + results[i] + '</td></tr>';
	}
}

//UserInput To Variable

function SetMathType() {
	MathType = document.getElementById('ADDMUL').value.toUpperCase();
	console.log(MathType);
}

function SetDuplicateLocked() {
	AllowReusingNumbers = document.getElementById('DuplicateLockedCheckBox').checked ? 'YES' : 'NO';
	console.log(AllowReusingNumbers);
}

function SetUniqueSets() {
	UniqueSets = document.getElementById('UniqueSetsCheckBox').checked ? 'YES' : 'NO';
	console.log(UniqueSets);
}

function AddLength() {
	CombinationLength += 1;
	document.getElementById('LengthText').innerHTML = CombinationLength;
};

function SubLength() {
	CombinationLength -= 1;
	document.getElementById('LengthText').innerHTML = CombinationLength;
};


function SetUserInput() {
	UserInput = "[" + document.getElementById('UserSelectedVariables').value + "]";
	TargetValue = document.getElementById('TargetValue').value;
	console.log(TargetValue);
	console.log(UserInput);
}

