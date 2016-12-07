// http://www.geeksforgeeks.org/majority-element/

var sampleArr = [2,2,3,5,2,2,6];

function findCandidate(inputArr) {
	var candidate = inputArr[0];
  var count = 0
  for(var i = 1; i < inputArr.length; i++) {
  	if(inputArr[i] == candidate) {
    	count++;
    }
    else {
    	count--;
    }
    if(count == 0) {
    	candidate = inputArr[i];
      count = 1;
    }
  }
  return candidate;
}

function findMajority(inputArr) {
	var candidate = findCandidate(inputArr);
  var limit = inputArr.length / 2;
  var count = 0;
  inputArr.forEach(function(ele){
  	if(ele == candidate) {
    	count++;
    }
  });
  console.log("Candidate::"+candidate);
  console.log("Count::"+count);
  if(count > limit) {
  	return candidate;
  }
  return -1;
}