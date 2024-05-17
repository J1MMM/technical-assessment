function sumArray(arr) {
  var sum = 0;

  //your conde goes here
  sum = arr.reduce((total, current) => total + current);

  return sum;
}

var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(array_of_numbers);
console.log(sum);
//should return the sum of 145
