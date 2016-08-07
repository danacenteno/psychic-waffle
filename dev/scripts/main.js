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
		console.log(filmData,picData);
		var movies = filmData.results;
		// console.log(movies);

		var ep1img = picData[0]
		var ep2img = picData[1]
		var ep3img = picData[2]
		var ep4img = picData[3]
		var ep5img = picData[4]
		var ep6img = picData[5]
		var ep7img = picData[6]

		// console.log(images);
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