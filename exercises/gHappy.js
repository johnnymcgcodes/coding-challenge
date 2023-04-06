module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
if (typeof str !== "string") {
  throw new Error("Input must be a string");
}
try {
  if (str.length === 0) {
    return "Empty string entered";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "g") {
      if (str[i - 1] !== "g" && str[i + 1] !== "g") {
        return false;
      }
    }
  }
  return true;
} catch (error) {
  return "Error: " + error.message;
}
};
