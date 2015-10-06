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
  console.log('expected ', returnAlphabetical('hi ', 'there'), ' tp equal ', 'hi there' )
  console.log('expected ', returnAlphabetical('before', 'again'), ' tp equal ', 'againbefore')
  console.log('failed!');
}

function returnAlphabetical ( var1, var2) {
	var vars = [var1, var2]
	vars.sort ();
	return vars.join('')
}

// BASIC DATA TYPES: string, number, boolean (true, false), array ([]), objects ({})

console.log('Challenge 4 (multiplyAll):');
// need to use a *loop*. there are "for" loops and "while" loops in javascript
if (multiplyAll([2, 3, 4]) === 24 && multiplyAll([10, 10, 5, 2]) === 1000) {
  console.log('passed!');
} else {
  console.log('expected ', multiplyAll([2, 3, 4]), ' to equal ', 24)
  console.log('expected ', multiplyAll([10, 10, 5, 2]), ' to equal ', 1000)
  console.log('failed!');
}

// function multiplyAll (array) {
// 	if(array.length == 0 && typeof array === 'array')
// 		return false;

// 	var total = array[0];
// 	for(var currentIndex = 1;currentIndex < array.length;currentIndex = currentIndex + 1){
// 		total = total * array[currentIndex];
// 	}
// 	return total;
// }


// for(var i = 0;i < threshold;i++){

// }

// var i = 0;
// while(i < threshold){
// 	// Do stuff here
// 	i++;
// }


function multiplyAll(array, mult){
	if(mult == undefined){
		mult = 1;
	}

	if(array.length > 0){
		mult  = mult * array.pop();
		return multiplyAll(array, mult);
	} else {
		return mult;
	}
}

http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("{ 'demo': 'hello, world!' }");
}).listen(8888, "127.0.0.1");