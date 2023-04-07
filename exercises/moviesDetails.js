const { forEach } = require("lodash");

module.exports.run = async function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/
var collected_movies = []
// api key for OMDB
// const api = "&apikey=f061929b";
const axios = require("axios");
for (var i = 0; i < movies.length; i++) {
  // +api;
  var movie_url = movies[i];
  try {
    const response = await axios.get(movie_url);
    let title = response.data.Title;
    let year = response.data.Year;
    let genres = response.data.Genre;
    let newMovie = { Title: title, Year: year, Genre: genres };
    collected_movies.push(newMovie);
  } catch (error) {
    console.error("Error reading URL", movie_url, ":", error.message);
  }
}
	return collected_movies;
};



