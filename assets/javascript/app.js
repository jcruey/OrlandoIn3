$(document).ready(function () {
    // Initial array of GIFs
    var app = {
     choice: "", 
     price: "",   
     foodType: ['Japanese', 'American', 'Burgers', 'Vegetarian', 'Seafood', 'Mexican', 'Italian', 'Sushi', 'Steakhouse', "Pizza", 'Cuban', 'Pasta', 'Chinese'],
     priceType: ["$","$$","$$$"],

 

    // Function to create the menu that will pull choices from FS Api
    renderfoodType: function (){ 

        // clears the div prior to adding new drop down
        $('#foodChoices').empty();

        // Loops through the array of categories
        for (var i = 0; i < app.foodType.length; i++){

            var a = $('<option>'); // This code creates the list items for the dropdown
            a.text(app.foodType[i]); // Provided the initial button text
            a.attr('data-name', app.foodType[i]); // Adds data attribute with category name
            a.addClass('foodBtn'); // Adds a class for later use as selector to the menu choice
            $('#foodChoices').append(a); // Added the dropdown choices to the HTML
        }

        $('#foodChoices').on('change', function() {
            app.choice = $.trim($('#foodChoices option:selected').html());
        });
    },

    

    // Function to create the price options to pull from FS Api
    renderpriceType: function(){ 

        // clears the div prior to adding new drop down
        $('#priceChoices').empty();

        // Loops through the array of categories
        for (var i = 0; i < app.priceType.length; i++){

            var b = $('<option>'); // This code creates the list items for the dropdown
            if (app.priceType[i] == "$") {
                b.attr('data-value', "1"); // Adds data attribute with category name
            } else if (app.priceType[i] == "$$") {
                b.attr('data-value', "2"); // Adds data attribute with category name
            } else if (app.priceType[i] == "$$$") {
                b.attr('data-value', "3"); // Adds data attribute with category name
            }; // else if (app.priceType[i] == "$$$$") {
            //     b.attr('data-value', "4"); // Adds data attribute with category name
            // };
            b.text(app.priceType[i]); // Provided the initial button text
            b.addClass('priceBtn'); // Adds a class for later use as selector to the menu choice
            $('#priceChoices').append(b); // Added the dropdown choices to the HTML
        } 

        $('#priceChoices').on('change', function() {
            app.price = $.trim($('#priceChoices option:selected').attr("data-value"));
        });
    }

    }
    app.renderfoodType();
    app.renderpriceType();
  
    $('#submitQuery').on('click', function () {   
        var queryURL = "https://api.foursquare.com/v2/venues/explore?near=Orlando,Fl&radius=100000&price=" + app.price + "&Photos=1&openNow=1&venuePhotos=1&query=" + app.choice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20130815";
        $('#fsquareResults').empty();
        console.log(app.price);
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
                // console.log(results);
                
                //--------------------------------

                for (var i = 0; i < 3; i++) {

                    // console.log(results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix);
                    // console.log(results[i].venue.name);
                    // console.log(results[i].venue.id);
                    // // console.log(results[i].venue.hours.status);
                    // console.log(results[i].venue.price.tier);
                    // console.log(results[i].venue.location.formattedAddress);
                    // console.log(results[i].venue.rating);

                //     //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
                    var venueName = $('<p>').text("Venue Name: " + results[i].venue.name);
                    var rating = $('<p>').text("Rating: " + results[i].venue.rating)
                    var price = $('<p>').text("Price: " + results[i].venue.price.message);
                    var currency = $('<p>').text("Price: " + results[i].venue.price.currency);
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
            return false;
    });
});
      