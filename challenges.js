console.log('Running Challenges!');

console.log('Challenge 1:');

if (returnBigger(10, 20) === 20 && returnBigger(100, 1) === 100) {
  console.log('passed!');
} else {
  console.log('failed!');
}

function returnBigger (intailNum,finalNum) {
	if (intailNum < finalNum) {
		return finalNum
	} else {
		return intailNum
	}
}

console.log('Challenge 2a (returnBiggest):');

if (returnBiggest(10, 15, 20) === 20 && returnBiggest(100, 1, 4) === 100) {
  console.log('passed!');
} else {
  console.log('failed!');
}

function returnBiggest (num1, num2, num3) {
	if (returnBigger (num1, num2) === num1) {
		if (returnBigger(num1, num3) === num3) {
			return num3
		}else {
			return num1
		};
	} else {
		if (returnBigger(num2, num3) === num3) {
			return num3
		}else {
			return num2
		};
	};
}
console.log('Challenge 2b (returnBiggest2):');
if (returnBiggest2(10, 15, 20) === 20 && returnBiggest2(100, 1, 4) === 100) {
  console.log('passed!');
} else {
  console.log('failed!');
}

function returnBiggest2 (num1, num2, num3) {
	if (num1 > num2) {
		if (num1 > num3) {
			return num1
		}
	} else{
		if (num3 > num2) {
			return num3
		}else {
			return num2
		};
	};
}

console.log('Challenge 2c (returnBiggest3):');
if (returnBiggest3(10, 15, 20) === 20 && returnBiggest3(100, 1, 4) === 100) {
  console.log('passed!');
} else {
  console.log('failed!');
}

function returnBiggest3 (num1, num2, num3) {
	return returnBigger(returnBigger(num1, num2), num3)
}

console.log('Challenge 3 (returnAlphabetical):');
if (returnAlphabetical('hi ', 'there') === 'hi there' && returnAlphabetical('before', 'again') === 'againbefore') {
  console.log('passed!');
} else {
  console.log('failed!');
}

