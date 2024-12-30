var UserInput = [1, 2, 3, 4,5];
var CombinationLength = 3;
var AllowReusingNumbers = 'NO';
var MathType = 'ADDITION';
var TargetValue = 10;

function generateCombinations(input, length) {
    let result = [];

    function combine(current, start) {
        if (current.length === length) {
            result.push(current.slice());
            return;
        }
        for (let i = start; i < input.length; i++) {
        		if (AllowReusingNumbers === 'NO' && current.includes(UserInput[i])) {
							continue;
						}
            current.push(input[i]);
            combine(current, i); // allow duplicates by passing i
            current.pop();
        }
    }

    combine([], 0);
    return DoMathType(result);
}

function DoMathType(results) {
	if (MathType === 'ADDITION') {
		results = results.filter(array => {
			return array.reduce((acc, curr) => acc + curr, 0) === TargetValue;
		});
	} else if (MathType === 'MULTIPLICATION') {
		results = results.filter(TempVar1 => {
			const TempVar2 = TempVar1.reduce((acc, val) => acc * val, 1);
			return TempVar2 === TargetValue;
		});
	}
	for (let i = 0; i < results.length; i++) {
		//document.getElementById('Output').innerHTML += '[' + results[i] + ']' + ',';
	}
	return results
}
var combinations = generateCombinations(UserInput, CombinationLength);
console.log(combinations);
