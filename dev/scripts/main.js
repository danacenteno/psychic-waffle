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
		// console.log(movies);

		var images = picData[0];
 
		// need to figure out how to dynamically generate titles and images without making a billion variables!

		swApp.displayData(movies,images);
		// console.log(movies,images);
	});
	// swApp.getData(movies.title);
};

// when a movie is selected, movie title and opening crawl will show up 

// an image from that movie will also be randomly generated and displayed for the user.

// there will also be an option to grab a color palette using colorthief JS.

swApp.displayData = function(filminfo,pix){
	// console.log(filminfo,pix);

	filminfo.forEach(function(films){
		var filmsTitle = films.title;
		$('.title').text(filmsTitle);
		// console.log(filmsTitle);

		var filmDescription = films.opening_crawl;
		$('.description').text(filmDescription);
		// console.log(filmDescription);
	});

	var hope = pix[0];
	// console.log(hope);

	var hopeRandom = (Math.floor(Math.random() * hope.length));
	console.log(hope[hopeRandom]);

	// var hopeImg = $('<img>').attr('src', hopeRandom);
	// console.log(hopeImg);

	// var hopeDiv = $('<div>')
	// 				.addClass('results').append(hopeImg);

	// $('#images').append(hopeDiv);

	// var empire = pix[1];
	// console.log(empire);

	// var jedi = pix[2];
	// console.log(jedi);

	// var force = pix[3];
	// console.log(force);


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
};

//document ready!
$(function(){
	// will call initializing function!
	swApp.init();
});