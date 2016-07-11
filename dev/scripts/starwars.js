//PSEUDO CODE:

//grab data from star wars API
	//make multiple API calls

//user chooses a film
	// That will prompt a character or planet 
	// From there, a random image will pop up
	
// From that image, a colour palette will generate.

var swApp = {}

var swApiFilms = 'http://swapi.co/api/films/';
var swApiChars = 'http://swapi.co/api/people/';
var swApiPlanets = 'http://swapi.co/api/planets/';

var swPics = 'https://sheetsu.com/apis/v1.0/0c44167aca42'

swApp.init = function(){
	var films = $.ajax({
		url: swApiFilms,
		method: 'GET',
		dataType: 'json'
	})
	
	var characters = $.ajax({
		url: swApiChars,
		method: 'GET',
		dataType: 'json'
	})

	var planets = $.ajax({
		url: swApiPlanets,
		method: 'GET',
		dataType: 'json'
	})

	var pics = $.ajax({
		url: swPics,
		method: 'GET',
		dataType: 'jsonp'
	})

	$.when(films,characters,planets)
	.then(function(movies,photos){
		console.log(movies,photos);
	});

	swApp.getData(movie.title);
};

swApp.getData = function(){

};

swApp.displayData = function(){

};

//document ready!
$(function(){
	// will call initializing function!
	swApp.init();
});