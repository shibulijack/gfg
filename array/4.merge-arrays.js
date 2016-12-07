// http://www.geeksforgeeks.org/merge-one-array-of-size-n-into-another-one-of-size-mn/

var bArr = [2, 8, "NA", "NA", "NA", 13, "NA", 15, 20];
var sArr = [5, 7, 9, 25];

function sanitizeArray(iArr) {
  var length = iArr.length;
  var j = length - 1;
  for (var i = length - 1; i >= 0; i--) {
    if (!isNaN(iArr[i])) {
      iArr[j] = iArr[i];
      j--;
    }
  }
  return iArr;
}

function mergeArray(bArr, sArr) {
  var sLength = sArr.length;
  var bLength = (bArr.length) - sLength;
  var total = bLength + sLength;
  var current, s = 0;
  var b = sLength;


  rArr = sanitizeArray(bArr);

  while (current < total) {
    if ((b < total && rArr[b] < rArr[s]) || (s == sLength)) {
      rArr[current] = rArr[b];
      b++;
      current++;
    } else {
      rArr[current] = sArr[s];
      s++;
      current++;
    }
  }
  return rArr;
}
