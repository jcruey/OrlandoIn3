$(document).ready(function () {
	// Initial array of GIFs
//<<<<<<< HEAD
	var gifs = ['Asian', 'Mexican', 'Italian', 'Steak', "Sushi", "Pizza", 'Cuban', 'Pasta', 'Chinese'];

	// Function to create the buttons that will pull GIFs from Giphy
	function renderButtons(){ 

		// clears the div prior to adding new buttons (this is necessary otherwise you will have repeat buttons)
		$('#catChoices').empty();

		// Loops through the array of movies
		for (var i = 0; i < gifs.length; i++){

			// Then dynamicaly generates buttons for each movie in the array
                            // <li><a href="#">Action</a></li>
                            // <li><a href="#">Another action</a></li>
                            // <li><a href="#">Something else here</a></li>
                            // <li role="separator" class="divider"></li>
                            // <li><a href="#">Separated link</a></li>

			// Note the jQUery syntax here... 
		    var a = $('<li>'); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    var b = $('<a>');
            b.attr('href', '#');
            b.text(gifs[i]); // Provided the initial button text
            a.prepend(b)
		    $('#catChoices').append(a); // Added the button to the HTML
		} 
	}
    renderButtons();
	// ========================================================

	// This function handles events where one button is clicked
	$('#addAnimal').on('click', function(){

		// This line of code will grab the input from the textbox
		var newGif = $('#animal-input').val().trim();

		// The movie from the textbox is then added to our array
		gifs.push(newGif);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();
// =======
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
// >>>>>>> 1267b197f50241ca1aad2a9194889161d1ee4249

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

//<<<<<<< HEAD
	$('#animalButtons').on('click', '.animalBtn', function() {
        var animal = $(this).data('name');
        var queryURL = "https://api.foursquare.com/v2/venues/explore?near=Orlando,Fl&Photos=1&openNow=1&venuePhotos=1&query=" + animal + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20130815";


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
// <<<<<<< HEAD
                console.log(response.response.groups[0].items[2].venue.photos.groups[0].items[0].prefix+"width"+response.response.groups[0].items[2].venue.photos.groups[0].items[0].width+response.response.groups[0].items[2].venue.photos.groups[0].items[0].suffix);
                console.log(response.response.groups[0].items[2].venue.name);
                console.log(response.response.groups[0].items[2].venue.id);
                console.log(response.response.groups[0].items[2].venue.hours.status);
                console.log(response.response.groups[0].items[2].venue.price.currency);
                console.log(response.response.groups[0].items[2].venue.location.formattedAddress);
                console.log(response.response.groups[0].items[2].venue.rating);
// =======
                // console.log(response.response.groups[0].items[2].venue.photos.groups[0].items[0].prefix+"width"+response.response.groups[0].items[2].venue.photos.groups[0].items[0].width+response.response.groups[0].items[2].venue.photos.groups[0].items[0].suffix);
                // console.log(response.response.groups[0].items[2].venue.name);
                // console.log(response.response.groups[0].items[2].venue.id);
                // console.log(response.response.groups[0].items[2].venue.hours.status);
                // console.log(response.response.groups[0].items[2].venue.price.currency);
                // console.log(response.response.groups[0].items[2].venue.location.formattedAddress);
                // console.log(response.response.groups[0].items[2].venue.rating);
// >>>>>>> 1267b197f50241ca1aad2a9194889161d1ee4249
                //--------------------------------

                // for (var i = 0; i < results.length; i++) {

// <<<<<<< HEAD
                    /* step 3: 
                        * uncomment the for loop above and the closing curly bracket below
                        * make a div and reference it in a variable named animalDiv
                        * make a paragraph tag and put it in a variable named p
                            * set the text of the paragraph to the rating of the image in results[i]
                        * make an image and reference it in a variable named animalImage
                        * set the image's src to results[i]'s fixed_height.url 

                        * append the p variable to the animalDiv variable
                        * append the animalImage variable to the animalDiv variable

                        * prepend the animalDiv variable to the element with an id of gifsAppearHere

                    */

                    //------------put step 3 in between these dashes--------------------
                    // var gifRow = $("<div class='row>");
                    // var animalDiv = $("<div class='col-lg-4'>");
                    // var p = $('<p>').text("Rating: " + results[i].rating);
                    // var animalImage = $('<img>').attr('src', results[i].images.fixed_height_still.url);
// =======
                    //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
                    var venueName = $('<p>').text("Venue Name: " + response.response.groups[0].items[2].venue.name);
                    var rating = $('<p>').text("Rating: " + response.response.groups[0].items[2].venue.rating)
                    var price = $('<p>').text("Price: " + response.response.groups[0].items[2].venue.price.currency);
                    var address = $('<p>').text("Address: " + response.response.groups[0].items[2].venue.location.formattedAddress);
                    var venueImage = $('<img>').attr('src', response.response.groups[0].items[2].venue.photos.groups[0].items[0].prefix+"500x300"+response.response.groups[0].items[2].venue.photos.groups[0].items[0].suffix);
// >>>>>>> 1267b197f50241ca1aad2a9194889161d1ee4249
                    // animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                    // animalImage.attr('data-animate', results[i].images.fixed_height.url);
                    // animalImage.attr('data-state', 'still');
                    // animalImage.addClass('animalGif');
// <<<<<<< HEAD
                    // animalDiv.append(p);
                    // animalDiv.append(animalImage);
                    // // gifRow.append(animalDiv);
                    // $('#animals').prepend(animalDiv);
                    // console.log(gifRow);
                    // console.log(animalDiv);
// =======
                     venueDiv.append(venueImage);
                     venueDiv.append(venueName);
                     venueDiv.append(rating);
                     venueDiv.append(price);
                     venueDiv.append(address);
                    $('#choices').prepend(venueDiv);
                    // console.log(venueDiv);
// >>>>>>> 1267b197f50241ca1aad2a9194889161d1ee4249

                    //--------------------------------
                // }

            });
    });
// <<<<<<< HEAD
      $('#animals').on('click', '.animalGif', function(){
            //STEP ONE: study the html above. Look at all the data attributes. Run the file in the browser. Look at the images. After you fill in steps 1 and 2 you'll be able to pause gifs from giphy.

            //STEP TWO: make a variable named state and then reference the button's data-state into it. Do not use .data('state'). It won't work the way we expect.

            //---------------FILL IN CODE HERE FOR STEP TWO----------------------------
            var state = $(this).attr('data-state');
            var animate = $(this).attr('data-animate');
            var still = $(this).attr('data-still');
            // console.log(animate);
            //----------------------------------------------------

            /*STEP THREE: 
                * if variable state is equal to 'still' then 
                    * update the src attribute of this image that you clicked on to what data-animate is equal to for this image
                    * and update the data-state attribute to 'animate'
                * if state does not equal 'still' then 
                    * update the src attribute of this image that you clicked on to what data-still is equal to for this image
                    * and update the data-state attribute to 'still'
            */

            //---------------FILL IN CODE HERE FOR STEP THREE----------------------------
            if (state == 'still') {
                $(this).attr('src', animate);
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', still);
                $(this).attr('data-state', 'still');
            }
            //----------------------------------------------------

            //STEP FOUR: open the file in the browser and click on the images. Then click again to pause.
        });
// =======
      
// >>>>>>> 1267b197f50241ca1aad2a9194889161d1ee4249
})
