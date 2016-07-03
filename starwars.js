//PSEUDO CODE:

//grab data from star wars API
	//make multiple API calls

//user chooses a film
	// That will prompt a character or planet 
	// From there, a random image will popup
	
// From that image, the 

var swApp = {}

var swApiFilms = 'http://swapi.co/api/films/';
var swApiChars = 'http://swapi.co/api/people/';
var swApiPlanets = 'http://swapi.co/api/planets/';

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

	$.when(films,characters,planets)
	.then(function(movie,people,places){
		console.log(movie,people,places);
	});

	swApp.getData(movie.title);
};

swApp.getData = function(){

};

swApp.displayData = function(){

};

$(function(){
	swApp.init();
});