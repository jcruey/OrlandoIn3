$(document).ready(function () {
	// Initial array of GIFs
	var categories = ['Asian', 'Mexican', 'Italian', 'Steak', "Sushi", "Pizza", 'Cuban', 'Pasta', 'Chinese'];

	// Function to create the menu that will pull choices from FS Api
	function renderMenu(){ 

		// clears the div prior to adding new drop down
		$('#catChoices').empty();

		// Loops through the array of categories
		for (var i = 0; i < categories.length; i++){

		    var a = $('<option>'); // This code creates the list items for the dropdown
            a.text(categories[i]); // Provided the initial button text
            a.attr('data-name', categories[i]); // Adds data attribute with category name
            a.addClass('choiceBtn'); // Adds a class for later use as selector to the menu choice
		    $('#catChoices').append(a); // Added the dropdown choices to the HTML
		} 
	}
    renderMenu();
	// ========================================================

	// This function handles events where one button is clicked
	$('#addCategory').on('click', function(){

		// This line of code will grab the input from the textbox
		var newCat = $('#category-input').val().trim();

		// The movie from the textbox is then added to our array
		categories.push(newCat);
		
		// Our array then runs which handles the processing of our movie array
		renderMenu();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	$('#venueChoices').on('change', '#catChoices', function() {
        var choice = $.trim($('#catChoices option:selected').html());
        var queryURL = "https://api.foursquare.com/v2/venues/explore?near=Orlando,Fl&Photos=1&openNow=1&venuePhotos=1&query=" + choice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20130815";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                // console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                //------------put step 2 in between these dashes--------------------
                var results = response.data;
                // console.log(response.response.groups[0].items[2].venue.photos.groups[0].items[0]);
                // console.log(response.response.groups[0].items[2].venue.photos.groups[0].items[0].prefix+"width"+response.response.groups[0].items[2].venue.photos.groups[0].items[0].width+response.response.groups[0].items[2].venue.photos.groups[0].items[0].suffix);
                // console.log(response.response.groups[0].items[2].venue.name);
                // console.log(response.response.groups[0].items[2].venue.id);
                // console.log(response.response.groups[0].items[2].venue.hours.status);
                // console.log(response.response.groups[0].items[2].venue.price.currency);
                // console.log(response.response.groups[0].items[2].venue.location.formattedAddress);
                // console.log(response.response.groups[0].items[2].venue.rating);
                //--------------------------------

                // for (var i = 0; i < results.length; i++) {

                    //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
                    var venueName = $('<p>').text("Venue Name: " + response.response.groups[0].items[2].venue.name);
                    var rating = $('<p>').text("Rating: " + response.response.groups[0].items[2].venue.rating)
                    var price = $('<p>').text("Price: " + response.response.groups[0].items[2].venue.price.currency);
                    var address = $('<p>').text("Address: " + response.response.groups[0].items[2].venue.location.formattedAddress);
                    var venueImage = $('<img>').attr('src', response.response.groups[0].items[2].venue.photos.groups[0].items[0].prefix+"width"+response.response.groups[0].items[2].venue.photos.groups[0].items[0].width+response.response.groups[0].items[2].venue.photos.groups[0].items[0].suffix);
                    // animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                    // animalImage.attr('data-animate', results[i].images.fixed_height.url);
                    // animalImage.attr('data-state', 'still');
                    // animalImage.addClass('animalGif');
                     venueDiv.append(venueImage);
                     venueDiv.append(venueName);
                     venueDiv.append(rating);
                     venueDiv.append(price);
                     venueDiv.append(address);
                    $('#choices').prepend(venueDiv);
                    // console.log(venueDiv);

                    //--------------------------------
                // }

            });
    });
      
});
