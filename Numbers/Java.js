let UserInput = [1, 2, 3, 4, 5, 6]; // Pool of Numbers Allowed in Calculations
let CombinationLength = 3; // Desired combination length
let AllowReusingNumbers = false; // If 'true', allows duplicates
let MathType = 'MULTIPLICATION'; // Math operation: 'ADDITION' or 'MULTIPLICATION'
let TargetValue = 30; // Target outcome for sum or product of array

// Function to jumpstart the process
function startProcess() {
    const userInputValue = document.getElementById('UserSelectedVariables').value;
    const targetValue = parseInt(document.getElementById('TargetValue').value);
    const outputElement = document.getElementById('Output');
    
    // Parse UserInput
    UserInput = userInputValue.split(',').map(Number);

    // Update TargetValue
    TargetValue = targetValue;

    // Clear previous output
    outputElement.innerHTML = '';

    // Generate combinations and display results
    const result = generateCombinations(UserInput, CombinationLength, AllowReusingNumbers, MathType, TargetValue);
    result.forEach(combination => {
        outputElement.innerHTML += `<tr><td>${combination}</td></tr>`;
    });
}

// Function to generate combinations
function generateCombinations(userInput, combinationLength, allowReusingNumbers, mathType, targetValue) {
    const combinations = []; // Store valid combinations

    // Helper function for generating combinations recursively
    function generate(currentCombination, startIndex) {
        // If current combination has the desired length
        if (currentCombination.length === combinationLength) {
            let result = mathType === "ADDITION"
                ? currentCombination.reduce((sum, num) => sum + num, 0)
                : currentCombination.reduce((product, num) => product * num, 1);

            // Check if result matches the target value
            if (result === targetValue) {
                combinations.push([...currentCombination]);
            }
            return;
        }

        // Generate combinations recursively
        for (let i = startIndex; i < userInput.length; i++) {
            currentCombination.push(userInput[i]);

            // Reuse numbers if allowed, otherwise move to the next index
            generate(currentCombination, allowReusingNumbers ? i : i + 1);
            currentCombination.pop(); // Backtrack
        }
    }

    // Start generating combinations
    generate([], 0);

    return combinations;
}

//UserInput To Variable

function SetMathType() {
	MathType = document.getElementById('ADDMUL').value.toUpperCase();
}

function SetDuplicateLocked() {
	AllowReusingNumbers = document.getElementById('DuplicateLockedCheckBox').checked ? 'YES' : 'NO';
}

function SetUniqueSets() {
	UniqueSets = document.getElementById('UniqueSetsCheckBox').checked ? 'YES' : 'NO';
}

function AddLength() {
	CombinationLength += 1;
	document.getElementById('LengthText').innerHTML = CombinationLength;
};

function SubLength() {
	CombinationLength -= 1;
	document.getElementById('LengthText').innerHTML = CombinationLength;
};
