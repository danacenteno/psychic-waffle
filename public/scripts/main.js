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
// swApp.images = 'https://sheetsu.com/apis/v1.0/0c44167aca42';

swApp.init = function () {
	swApp.getData();

	// $('select').on('change', function(){
	// 	$('#films').empty();
	// 	var episode = $('select').val();

	// 	swApp.getData(episode);
	// });
};

// grab data from sw api (film titles, opening crawl)
// also grab image URLs from sheetsu api you made
swApp.getData = function () {
	var films = $.ajax({
		url: swApp.films,
		method: 'GET',
		dataType: 'json'
	});

	var pics = $.ajax({
		url: './scripts/images.json',
		method: 'GET',
		dataType: 'json'
	});

	$.when(films, pics).then(function (filmData, picData) {
		// console.log(filmData,picData);
		var movies = filmData[0].results;
		// console.log(movies);

		var images = picData[0];

		swApp.displayData(movies, images);
		// console.log(movies,images);
	});
	// swApp.getData(movies.title);
};

// when a movie is selected, movie title and opening crawl will show up

// an image from that movie will also be randomly generated and displayed for the user.

// there will also be an option to grab a color palette using colorthief JS.

// need to figure out how to dynamically generate titles and images without making a billion variables!
swApp.displayData = function (filminfo, pix) {
	console.log(filminfo, pix);
};

// var hopeTitle = filminfo[0].title;
// // console.log(hopeTitle);

// var hopeDescription = filminfo[0].opening_crawl;
// // console.log(hopeDescription);

// var empireTitle = filminfo[5].title;
// // console.log(empireTitle);

// var empireDescription = filminfo[5].opening_crawl;
// // console.log(empireDescription);

// var jediTitle = filminfo[4].title;
// // console.log(jediTitle);

// var jediDescription = filminfo[4].opening_crawl;
// // console.log(jediDescription);

// var forceTitle = filminfo[6].title;
// // console.log(forceTitle);

// var forceDescription = filminfo[6].opening_crawl;
// // console.log(forceDescription);

// // Corresponding images
// var hopePix = pix[0];
// // console.log(hopePix);

// // assigns random number from 1-20 to movie image arrays
// var picRandom = (Math.floor(Math.random() * 20));

// // A New Hope
// var hopeImg = $('<img>').attr('src', hopePix[picRandom]);
// // console.log(hopeImg);

// var hopeDiv = $('<div>')
// 				.addClass('results').append(hopeImg);

// $('#images').append(hopeDiv);

// var empirePix = pix[1];
// // console.log(empirePix);

// var jediPix = pix[2];
// // console.log(jediPix);

// var forcePix = pix[3];
// console.log(forcePix);

// filminfo.forEach(function(films,photos){
// 	var filmsTitle = films.title;
// 	$('.title').text(filmsTitle);

// 	// console.log(filmsTitle);

// 	var filmDescription = films.opening_crawl;
// 	$('.description').text(filmDescription);
// 	// console.log(filmDescription);

// // A New Hope
// var hope = pix[0];
// // console.log(hope);

// var hopeRandom = (Math.floor(Math.random() * 20));
// // console.log(hope[hopeRandom]);

// var hopeImg = $('<img>').attr('src', hope[hopeRandom]);
// // console.log(hopeImg);

// var hopeDiv = $('<div>')
// 				.addClass('results').append(hopeImg);

// $('#images').append(hopeDiv);

// // The Empire Strikes Back
// var empire = pix[1];
// console.log(empire);

// // Return of The Jedi
// var jedi = pix[2];
// console.log(jedi);

// // The Force Awakens
// var force = pix[3];
// console.log(force);

// });

// // A New Hope
// var hope = pix[0];
// console.log(hope);

// // The Empire Strikes Back
// var empire = pix[1];
// console.log(empire);

// // Return of The Jedi
// var jedi = pix[2];
// console.log(jedi);

// // The Force Awakens
// var force = pix[3];
// console.log(force);

// var hope = pix[0];
// console.log(hope);

// var hopeRandom = (Math.floor(Math.random() * 20));
// console.log(hope[hopeRandom]);

// var hopeImg = $('<img>').attr('src', hope[hopeRandom]);
// console.log(hopeImg);

// var hopeDiv = $('<div>')
// 				.addClass('results').append(hopeImg);

// $('#images').append(hopeDiv);

// // The Empire Strikes Back

// var empire = pix[1];
// console.log(empire);

// var empireRandom = (Math.floor(Math.random() * 20));
// console.log(empire[empireRandom]);

// // Return of The Jedi

// var jedi = pix[2];
// console.log(jedi);

// var jediRandom = (Math.floor(Math.random() * 20));
// console.log(jedi[jediRandom]);

// // The Force Awakens

// var force = pix[3];
// console.log(force);

// var forceRandom = (Math.floor(Math.random() * 20));
// console.log(force[forceRandom]);

// var title = filminfo[0].title;	
// $('.title').text(title);

// var description = filminfo[0].opening_crawl;
// $('.description').text(description);

// var hope = pix[0].img1;
// console.log(hope);

// var movieimg = $('<img>').attr('src', hope);
// var empire = images[1];
// // console.log(empire);
// var jedi = images[2];
// // console.log(jedi);
// var force = images[3];
// };

//document ready!
$(function () {
	// will call initializing function!
	swApp.init();
});