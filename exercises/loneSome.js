module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
try {
  var sum_unique_nums = 0;
  var number_container = {};
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("All arguments must be numbers");
    }
		// add number to number_container and update count of that number
    number_container[arguments[i]] = 1 + (number_container[arguments[i]] || 0);
  }

  var numsWithOneCount = Object.keys(number_container).filter(function (key) {
    return number_container[key] === 1;
  });
  numsWithOneCount.forEach((integer) => (sum_unique_nums += parseInt(integer)));
  return sum_unique_nums;
} catch (error) {
  return "Error: " + error.message;
}
};

