
module.exports.run = function(x, y) {
  /*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.
*/
  const twoDArray = [
    [0, 4, 2, 1],
    [3, -1, 1, 0],
    [0, 0, 2, 3],
    [1, 3, -3, 0],
  ];
	validateInputBetweenZeroAndArraySize(x, twoDArray[0].length-1);
	validateInputBetweenZeroAndArraySize(y, twoDArray.length-1);
  var sum = 0;
  for (let i = 0; i <= y; i++) {
    for (let j = 0; j <= x; j++) {
      sum += twoDArray[i][j];
    }
  }
  return sum;
};

function validateInputBetweenZeroAndArraySize(value, array_length) {
  if (typeof value !== "number") {
    throw new Error(`Value: ${value} must be a number`);
  }
  if (!Number.isInteger(value)) {
    throw new Error(`Value: ${value} must be an integer`);
  }
  if (value < 0 || value > array_length) {
    throw new Error(`Value: ${value} must be between 0 and ${array_length} (inclusive)`);
  }
}

