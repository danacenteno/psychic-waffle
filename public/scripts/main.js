'use strict';

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

swApp.init = function () {
	swApp.getData();
};

swApp.getData = function () {
	var films = $.ajax({
		url: swApp.films,
		method: 'GET',
		dataType: 'json'
	});

	var pics = $.ajax({
		url: swApp.images,
		method: 'GET',
		dataType: 'jsonp'
	});

	$.when(films).then(function (filmData, picData) {
		// console.log(filmData);
		var movies = filmData.results;
		console.log(movies);
	});

	// swApp.getData(movies.title);
};

swApp.displayData = function () {};

//document ready!
$(function () {
	// will call initializing function!
	swApp.init();
});