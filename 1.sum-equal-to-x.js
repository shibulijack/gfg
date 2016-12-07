/* http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/ */

var inputArr = [-8, 1, 4, 6, 10, 45];

// Sort and check sum
function checkSum(inputArr) {
	var left = 0;
	var right = inputArr.length - 1;
	var sum = 16;
  
  inputArr.sort(function(a, b){return a - b});
  
	while(left < right) {
  	var currentSum = inputArr[left] + inputArr[right];
		if(currentSum == sum) {
  		return 1;
  	}
    else if (currentSum > sum) {
    	right--;
    }
    else {
    	left++;
    }
	}
}

document.getElementById("result").innerHTML = checkSum(inputArr);
