//PSEUDO CODE:

//grab data from star wars API
	//make multiple API calls

//user chooses a film
	// That will prompt a character or planet 
	// From there, a random image will pop up
	
// From that image, a colour palette will generate.

var swApp = {};

swApp.films = 'http://swapi.co/api/films/';
swApp.images = 'https://sheetsu.com/apis/v1.0/0c44167aca42';

swApp.init = function(){
	swApp.getData();

	// $('select').on('change', function(){
	// 	$('#films').empty();
	// 	var episode = $('select').val();

	// 	swApp.getData(episode);
	// });

};

// grab data from sw api (film titles, opening crawl)
// also grab image URLs from sheetsu api you made
swApp.getData = function(){
	var films = $.ajax({
		url: swApp.films,
		method: 'GET',
		dataType: 'json'
	})
	
	var pics = $.ajax({
		url: swApp.images,
		method: 'GET',
		dataType: 'json'
	})

	$.when(films,pics)
	.then(function(filmData,picData){
		// console.log(filmData,picData);
		var movies = filmData[0].results;
		console.log(movies);

		var images = picData[0];
		console.log(images);
 
		// need to figure out how to dynamically generate titles and images without making a billion variables!

		// var title = movies[1].title;	
		// // console.log(title);

		// var description = movies[1].opening_crawl;
		// console.log(description);

		// var hope = images[0];
		// // console.log(hope);
		// var empire = images[1];
		// // console.log(empire);
		// var jedi = images[2];
		// // console.log(jedi);
		// var force = images[3];
	});
	// swApp.getData(movies.title);
};

// when a movie is selected, movie title and opening crawl will show up 

// an image from that movie will also be randomly generated and displayed for the user.

// there will also be an option to grab a color palette using colorthief JS.

swApp.displayData = function(){

};

//document ready!
$(function(){
	// will call initializing function!
	swApp.init();
});