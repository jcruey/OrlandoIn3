$(document).ready(function () {
	// Initial array of GIFs
	var foodType = ['Asian', 'Mexican', 'Italian', 'Steak', "Sushi", "Pizza", 'Cuban', 'Pasta', 'Chinese'];
    var priceType = [1,2,3,4];



	// Function to create the menu that will pull choices from FS Api
	function renderfoodType(){ 

		// clears the div prior to adding new drop down
		$('#foodChoices').empty();

		// Loops through the array of categories
		for (var i = 0; i < foodType.length; i++){

		    var a = $('<option>'); // This code creates the list items for the dropdown
            a.text(foodType[i]); // Provided the initial button text
            a.attr('data-name', foodType[i]); // Adds data attribute with category name
            a.addClass('foodBtn'); // Adds a class for later use as selector to the menu choice
		    $('#foodChoices').append(a); // Added the dropdown choices to the HTML
		} 
	}
    renderfoodType();
	return false;
	})

	$('#venueChoices').on('change', '#foodChoices', function() {
        var choice = $.trim($('#foodChoices option:selected').html());
        var queryURL = "https://api.foursquare.com/v2/venues/explore?near=Orlando,Fl&Price=1,2,3,4&Photos=1&openNow=1&venuePhotos=1&query=" + choice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20130815";
        $('#fsquareResults').empty();
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                // console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                //------------put step 2 in between these dashes--------------------
                var results = response.response.groups[0].items;

                function shuffleArray (a) {
                        var j, x, i;
                        for (i = a.length; i; i -= 1) {
                            j = Math.floor(Math.random() * i);
                            x = a[i - 1];
                            a[i - 1] = a[j];
                            a[j] = x;
                        }
                        return a;
                    }

                results = shuffleArray(results);
            
                
                //--------------------------------

                for (var i = 0; i < 3; i++) {

                    // console.log(results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix);
                    // console.log(results[i].venue.name);
                    // console.log(results[i].venue.id);
                    // // console.log(results[i].venue.hours.status);
                    // console.log(results[i].venue.price.currency);
                    // console.log(results[i].venue.location.formattedAddress);
                    // console.log(results[i].venue.rating);

                //     //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
                    var venueName = $('<p>').text("Venue Name: " + results[i].venue.name);
                    var rating = $('<p>').text("Rating: " + results[i].venue.rating)
                    var price = $('<p>').text("Price: " + results[i].venue.price.currency);
                    var address = $('<p>').text("Address: " + results[i].venue.location.formattedAddress);
                    var venueImage = $('<img>').attr('src', results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix);
                    
                     venueDiv.append(venueImage);
                     venueDiv.append(venueName);
                     venueDiv.append(rating);
                     venueDiv.append(price);
                     venueDiv.append(address);
                    $('#fsquareResults').prepend(venueDiv);

                 }

            });
    });
      
