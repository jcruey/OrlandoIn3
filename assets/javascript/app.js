$(document).ready(function () {
<<<<<<< HEAD
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
=======
    // Initial array of GIFs
    var app = {
     choice: "",
     eventchoice: "", 
     price: "",
     inputInfo: new Firebase("https://project-6671229764144633849.firebaseio.com/"),
     eventprice: "",   
     foodType: ['Japanese', 'American', 'Burgers', 'Vegetarian', 'Seafood', 'Mexican', 'Italian', 'Sushi', 'Steakhouse', "Pizza", 'Cuban', 'Pasta', 'Chinese'],
     eventType: ['Theme Park', "Movie Theater", "Music", "Performing Arts", "Park", "Garden", "Ballet", "Aquarium"],
     priceType: ["$","$$","$$$"],
     eventPrice: ["$","$$","$$$"],

 

    // Function to create the menu that will pull choices from FS Api
    renderfoodType: function (){ 

        // clears the div prior to adding new drop down
        $('#foodChoices').empty();
        $('#eventChoices').empty();

        // Loops through the array of categories
        for (var i = 0; i < app.foodType.length; i++){

            var a = $('<option>'); // This code creates the list items for the dropdown
            a.text(app.foodType[i]); // Provided the initial button text
            a.attr('data-name', app.foodType[i]); // Adds data attribute with category name
            a.addClass('foodBtn'); // Adds a class for later use as selector to the menu choice
            $('#foodChoices').append(a); // Added the dropdown choices to the HTML
        }

        // Loops through the array of categories
        for (var i = 0; i < app.eventType.length; i++){

            var a = $('<option>'); // This code creates the list items for the dropdown
            a.text(app.eventType[i]); // Provided the initial button text
            a.attr('data-name', app.eventType[i]); // Adds data attribute with category name
            a.addClass('eventBtn'); // Adds a class for later use as selector to the menu choice
            $('#eventChoices').append(a); // Added the dropdown choices to the HTML
        }

        $('#foodChoices').on('change', function() {
            app.choice = $.trim($('#foodChoices option:selected').html());
        });
        $('#eventChoices').on('change', function() {
            app.eventchoice = $.trim($('#eventChoices option:selected').html());
            console.log(app.eventchoice);
        });
    },

    

    // Function to create the price options to pull from FS Api
    renderpriceType: function(){ 

        // clears the div prior to adding new drop down
        $('#priceChoices').empty();
        $('#eventPrices').empty();

        // Loops through the array of categories
        for (var i = 0; i < app.priceType.length; i++){

            var b = $('<option>'); // This code creates the list items for the dropdown
            if (app.priceType[i] == "$") {
                b.attr('data-value', "1"); // Adds data attribute with price point
            } else if (app.priceType[i] == "$$") {
                b.attr('data-value', "2"); // Adds data attribute with price point
            } else if (app.priceType[i] == "$$$") {
                b.attr('data-value', "3"); // Adds data attribute with price point
            }; // else if (app.priceType[i] == "$$$$") {
            //     b.attr('data-value', "4"); // Adds data attribute with price point
            // };
            b.text(app.priceType[i]); // Provided the initial button text
            b.addClass('priceBtn'); // Adds a class for later use as selector to the menu choice
            $('#priceChoices').append(b); // Added the dropdown choices to the HTML
        } 

        // Loops through the array of categories
        for (var i = 0; i < app.eventPrice.length; i++){

            var c = $('<option>'); // This code creates the list items for the dropdown
            if (app.eventPrice[i] == "$") {
                c.attr('data-value', "1"); // Adds data attribute with price point
            } else if (app.eventPrice[i] == "$$") {
                c.attr('data-value', "2"); // Adds data attribute with price point
            } else if (app.eventPrice[i] == "$$$") {
                c.attr('data-value', "3"); // Adds data attribute with price point
            }; // else if (app.eventPrice[i] == "$$$$") {
            //     b.attr('data-value', "4"); // Adds data attribute with price point
            // };
            c.text(app.eventPrice[i]); // Provided the initial button text
            c.addClass('eventPriceBtn'); // Adds a class for later use as selector to the menu choice
            $('#eventPrices').append(c); // Added the dropdown choices to the HTML
        } 

        $('#priceChoices').on('change', function() {
            app.price = $.trim($('#priceChoices option:selected').attr("data-value"));
        });
        $('#eventPrices').on('change', function() {
            app.eventprice = $.trim($('#eventPrices option:selected').attr("data-value"));
            console.log(app.eventprice);
        });
    }
}

   
    app.renderfoodType();
    app.renderpriceType();

    $('#clickButton').on('click', function() {
        var nameInput = $('#inputName').val();
        var name_regex = /^[a-zA-Z]+$/;

            if (nameInput.length == 0) {
                $('#modalNameEmpty').modal('show');
                $("#nameInput").focus();
                return false;
                }
            else if (!nameInput.match(name_regex) || nameInput.length == 0) {
                $('#modalNameIllegal').modal('show');
                $("#nameInput").focus();
                return false;
                } else {
                console.log(nameInput);
                $('#modalSuccess').modal('show');
                return true;
                }

    });
  
    $('#submitQuery').on('click', function () {   
        var queryURL = "https://api.foursquare.com/v2/venues/explore?near=Orlando,Fl&radius=100000&price=" + app.price + "&openNow=1&venuePhotos=1&query=" + app.choice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20160523";
        $('#fsquareResults').empty();
>>>>>>> 866335133714e808949720cee9c622ebf84117ef
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

<<<<<<< HEAD
                // for (var i = 0; i < results.length; i++) {
=======
            var apidataReturn = [];   

                for (var i = 0; i < 3; i++) {

                    apidataReturn[i] = {
                        venueName: results[i].venue.name,
                        rating: results[i].venue.rating,
                        price: results[i].venue.price.message,
                        currency: results[i].venue.price.currency,
                        address: results[i].venue.location.formattedAddress,
                        contact: results[i].venue.contact,
                        venueImage: results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix
                    };

                    // console.log(results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix);
                    // console.log(results[i].venue.name);
                    // console.log(results[i].venue.id);
                    // // console.log(results[i].venue.hours.status);
                    // console.log(results[i].venue.price.tier);
                    // console.log(results[i].venue.location.formattedAddress);
                    console.log(results[i].venue.name);
                    console.log(results[i].venue.contact);
>>>>>>> 866335133714e808949720cee9c622ebf84117ef

                    //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
<<<<<<< HEAD
                    var venueName = $('<p>').text("Venue Name: " + response.response.groups[0].items[2].venue.name);
                    var rating = $('<p>').text("Rating: " + response.response.groups[0].items[2].venue.rating)
                    var price = $('<p>').text("Price: " + response.response.groups[0].items[2].venue.price.currency);
                    var address = $('<p>').text("Address: " + response.response.groups[0].items[2].venue.location.formattedAddress);
                    var venueImage = $('<img>').attr('src', response.response.groups[0].items[2].venue.photos.groups[0].items[0].prefix+"500x300"+response.response.groups[0].items[2].venue.photos.groups[0].items[0].suffix);
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
=======
                    var selectBtn = $('<button>');
                        selectBtn.addClass("btn btn-info Select");
                        selectBtn.text("Select");
                        selectBtn.attr('data-value', [i]);
                    venueDiv.append('<img src='+apidataReturn[i].venueImage+'>');
                    venueDiv.append('<h3>'+apidataReturn[i].venueName+'</h3>');
                    venueDiv.append('<p>Rating: '+apidataReturn[i].rating+'</p>');
                    venueDiv.append('<p>Price: '+apidataReturn[i].price+'</p>');
                    venueDiv.append('<p>Address: '+apidataReturn[i].address[0]+'<br>'+apidataReturn[i].address[1]+'<br>'+apidataReturn[i].address[2]+'</p>');
                    venueDiv.append('<p>Contact: '+apidataReturn[i].contact+'</p><br>')
                    venueDiv.append(selectBtn);
                $('#fsquareResults').prepend(venueDiv);

             }

             $('#fsquareResults').on('click', 'button', function () {
                var firebaseFoodSelect = apidataReturn[$(this).attr("data-value")]
                $('#fsquareResults').empty();
                $('#foodChoices').hide();
                $('#priceChoices').hide();
                $('#submitQuery').hide();
                $('#modalFoodSelection').modal('show');
                console.log(firebaseFoodSelect);


                app.inputInfo.push({
                    firebaseFoodSelect
                });
                    

            });
         });
    });

    $('#submitEventQuery').on('click', function () {   
        var queryURL = "https://api.foursquare.com/v2/venues/explore?&near=Orlando,Fl&price=" + app.eventprice + "&venuePhotos=1&query=" + app.eventchoice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20160501&m=foursquare";
        $('#fsquareEventResults').empty();
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                
                var results = response.response.groups[0].items;
                // console.log(results);

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

                shuffleArray(results);
                console.log(results);
                
                //--------------------------------

            var apidataReturn = [];   

                for (var i = 0; i < 3; i++) {

                    apidataReturn[i] = {
                        venueName: results[i].venue.name,
                        address: results[i].venue.location.formattedAddress,
                        contact: results[i].venue.contact,
                        venueImage: results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix
                    };

                    // console.log(results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix);
                    console.log(results[i].venue.name);
                    console.log(results[i].venue.contact);
                    // console.log(results[i].venue.id);
                    // // console.log(results[i].venue.hours.status);
                    // console.log(results[i].venue.price.tier);
                    // console.log(results[i].venue.location.formattedAddress);
                    // console.log(results[i].venue.rating);

                //     //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
                    var selectBtn = $('<button>');
                        selectBtn.addClass("btn btn-info Select");
                        selectBtn.text("Select");
                        selectBtn.attr('data-value', [i]);
                    venueDiv.append('<img src='+apidataReturn[i].venueImage+'>');
                    venueDiv.append('<h3>'+apidataReturn[i].venueName+'</h3>');
                    venueDiv.append('<p>Contact: '+apidataReturn[i].contact+'</p>');
                    venueDiv.append('<p>Address: '+apidataReturn[i].address[0]+'<br>'+apidataReturn[i].address[1]+'<br>'+apidataReturn[i].address[2]+'</p>');
                    venueDiv.append(selectBtn);
                $('#fsquareEventResults').prepend(venueDiv);

             }

             $('#fsquareEventResults').on('click', 'button', function () {
                var firebaseEventSelect = apidataReturn[$(this).attr("data-value")]
                $('#fsquareEventResults').empty();
                $('#eventChoices').hide();
                $('#submitEventQuery').hide();
                $('#modalEventSelection').modal('show');
                console.log(firebaseEventSelect);

                 app.inputInfo.push({
                    firebaseEventSelect
                });
                    
                    

            }); 
            return false;
    
        });
>>>>>>> 866335133714e808949720cee9c622ebf84117ef
    });
      
});
