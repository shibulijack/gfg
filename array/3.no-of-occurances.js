// http://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/

var sampleArr = [1,1,2,2,3,3,4,4,4];

function findOddOccurance(inputArr) {
	var map = {};
  inputArr.forEach(function(ele){
    if(map[ele] == null) {
    	map[ele] = 1;
    }
    else {
    	map[ele] = parseInt(map[ele]) + 1;
    }
  });
  console.log(JSON.stringify(map));
  
  for(var key in map) {
    var count = parseInt(map[key]);
    if(count % 2 == 1) {
    	return key;
    }
  }
  return -1;
}

function findOddByXOR(inputArr) {
	var result = 0;
	inputArr.forEach(function(ele) {
  	result = result ^ ele;
  });
  return result;
}

document.getElementById("result-hash").innerHTML = "Hash:: " + findOddOccurance(sampleArr);

document.getElementById("result-xor").innerHTML = "XOR:: " + findOddByXOR(sampleArr);