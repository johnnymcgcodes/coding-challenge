module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

const [headers, ...row_values] = convertCSVTo2DArray(csv);

const arrayObjects = convertNestedArraysToObjects(headers, row_values);

return arrayObjects;
};

function convertCSVTo2DArray(csv){
	return csv
    .trim()
    .split("/n")
    .map((val) => val.split(","));
}

function convertNestedArraysToObjects(headers, row_values) {
  return row_values.map((item) => {
    let object = {};
    headers.forEach((key, index) => (object[key] = item[index]));
    return object;
  });
};
