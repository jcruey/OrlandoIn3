$(document).ready(function () {
    // app object with variables and functions
    var app = {
     choice: "",
     eventchoice: "", 
     price: "",
     // inputInfo: new Firebase("https://orlandoin3jc.firebaseio.com/"),
     eventprice: "",
     foodLat: "",
     foodLng: "",
     foodSelect: "",
     firebaseFoodSelect: "",
     firebaseEventSelect: "",
     eventLat: "",
     eventLng: "",
     eventSelect: "",
     nameInput: "",
     map: "",  
     foodType: ['Choose a Food Type', 'Japanese', 'American', 'Burgers', 'Vegetarian', 'Seafood', 'Mexican', 'Italian', 'Sushi', 'Steakhouse', "Pizza", 'Cuban', 'Pasta', 'Chinese'],
     eventType: ['Choose a Place Type', 'Theme Park', "Movie Theater", "Music", "Performing Arts", "Park", "Water Park", "Night Club", "Museum", "Aquarium"],
     priceType: ["$","$$","$$$"],
     eventPrice: ["$","$$","$$$"],
  

    // Function to create the menu that will pull choices from FS Api
    renderfoodType: function (){ 

        // clears the div prior to adding new drop down values
        $('#foodChoices').empty();
        $('#eventChoices').empty();

        // Loops through the array of food filters to populate drop down menu
        for (var i = 0; i < app.foodType.length; i++){

            var a = $('<option>'); // This code creates the option items for the dropdown
            a.text(app.foodType[i]); // Provides the initial button text
            a.attr('data-name', app.foodType[i]); // Adds data attribute with filter name
            a.addClass('foodBtn'); // Adds a class for later use as selector to the menu choice
            $('#foodChoices').append(a); // Adds the dropdown choices to the HTML
        }

        // Loops through the array of event filters to populate drop down menu
        for (var i = 0; i < app.eventType.length; i++){

            var a = $('<option>'); // This code creates the option items for the dropdown
            a.text(app.eventType[i]); // Provides the initial button text
            a.attr('data-name', app.eventType[i]); // Adds data attribute with filter name
            a.addClass('eventBtn'); // Adds a class for later use as selector to the menu choice
            $('#eventChoices').append(a); // Adds the dropdown choices to the HTML
        }

        // Event listener for the Food filter dropdown selection
        $('#foodChoices').on('change', function() {
            app.choice = $.trim($('#foodChoices option:selected').html());
            console.log(app.choice);
        });
        // Event listener for the event filter dropdown selection
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

        // Loops through the array to create the price filter drop down
        for (var i = 0; i < app.priceType.length; i++){

            var b = $('<option>'); // This code creates the option items for the dropdown
            if (app.priceType[i] == "$") {
                b.attr('data-value', "1"); // Adds data attribute with price filter
            } else if (app.priceType[i] == "$$") {
                b.attr('data-value', "2"); // Adds data attribute with price filter
            } else if (app.priceType[i] == "$$$") {
                b.attr('data-value', "3"); // Adds data attribute with price filter
            }; // else if (app.priceType[i] == "$$$$") {
            //     b.attr('data-value', "4"); // Adds data attribute with price filter
            // };
            b.text(app.priceType[i]); // Provided the initial button text
            b.addClass('priceBtn'); // Adds a class for later use as selector to the menu choice
            $('#priceChoices').append(b); // Added the dropdown choices to the HTML
        } 

        // Loops through the array to create the price filter drop down
        for (var i = 0; i < app.eventPrice.length; i++){

            var c = $('<option>'); // This code creates the option items for the dropdown
            if (app.eventPrice[i] == "$") {
                c.attr('data-value', "1"); // Adds data attribute with price filter
            } else if (app.eventPrice[i] == "$$") {
                c.attr('data-value', "2"); // Adds data attribute with price filter
            } else if (app.eventPrice[i] == "$$$") {
                c.attr('data-value', "3"); // Adds data attribute with price filter
            }; // else if (app.eventPrice[i] == "$$$$") {
            //     b.attr('data-value', "4"); // Adds data attribute with price filter
            // };
            c.text(app.eventPrice[i]); // Provides the initial button text
            c.addClass('eventPriceBtn'); // Adds a class for later use as selector to the menu choice
            $('#eventPrices').append(c); // Adds the dropdown choices to the HTML
        } 

        // Event listener for the food price filter dropdown selection
        $('#priceChoices').on('change', function() {
            app.price = $.trim($('#priceChoices option:selected').attr("data-value"));
        });
        
        // Event listener for the Event filter dropdown selection
        $('#eventPrices').on('change', function() {
            app.eventprice = $.trim($('#eventPrices option:selected').attr("data-value"));
            // console.log(app.eventprice);
        });
    },

    // function to shuffle the array of returned objects to randomize the results
    shuffleArray: function(a) {
            var j, x, i;
            for (i = a.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
            return a;
        },
    
    //Load google map of Orlando frmo the google maps javascript API
    initMap: function() {
          var myLatLng = {lat: 28.53834, lng: -81.37924};

          // Create a map object and specify the DOM element for display.
          app.map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            zoom: 9


          }); 
          
          // creates custom map styles to match theme of app
          app.map.set('styles', [
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  { color: '#DA552C' }
                  
                ]
              }, {
                featureType: 'landscape',
                elementType: 'geometry.fill',
                stylers: [
                  { color: "#00A79D"}
                ]
              }, {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [
                  { color: "#F5EFDF" }

                ]
              }, {
                featureType: 'poi.school',
                elementType: 'geometry',
                stylers: [
                 { color: "#83B1B1"}
                ]
              }, {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                 { color: "#83B1B1"}
                ]
              }, {
                featureType: "landscape.natural",
                stylers: [
                  { visibility: "on" }
                ]
              }, {
                featureType: "poi.park",
                stylers: [
                  { color: "#00A79D" }
                ]
              }
        ]);

      }

}
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyC65gezJxJLEcezILeiqxmD8HaeROhw8oM",
        authDomain: "orlandoin3jc.firebaseapp.com",
        databaseURL: "https://orlandoin3jc.firebaseio.com",
        storageBucket: "orlandoin3jc.appspot.com",
      };
      firebase.initializeApp(config);


    app.renderfoodType();
    app.renderpriceType();
    app.initMap();
    //$('#map').hide();

    // Validates the username input and pushes to Firebase and uses modals to provide feedback
    $('#clickButton').on('click', function() {
        var nameInput = $('#inputName').val();
        app.nameInput = nameInput;
        var name_regex = /^[a-zA-Z]+$/;

            if (nameInput.length == 0) {
                $('#modalNameEmpty').modal('show');
                return false;
                }
            else if (!nameInput.match(name_regex) || nameInput.length == 0) {   
                $('#modalNameIllegal').modal('show');
                $('#modalNameIllegal').on('hidden.bs.modal', function (e) {
                    $('#inputName').val('');
                    });
                return false;
                } else {
                // console.log(nameInput);
                
                      firebase.database().ref('users/' + nameInput).set({
                        foodVenue: app.foodSelect,
                        eventVenue: app.eventSelect
                      });
    
                   // console.log(test3);
               
                   $('#unload1').html(nameInput);
                $('#modalSuccess').modal('show');
                 $('html,body').animate({
                scrollTop: $("#step1").offset().top},
                'slow');
                return false;
                }
                

    });
    
    // Creates an Ajax query with the above food filters and returns data from the Foursquare API      
    $('#submitQuery').on('click', function () {   
        var queryURL = "https://api.foursquare.com/v2/venues/explore?near=Orlando,Fl&radius=60000&price=" + app.price + "&openNow=1&mode=url&venuePhotos=1&query=" + app.choice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20160301";
        $('#fsquareResults').empty();
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                
                // stores the returned data at the proper level of the object from Foursquare
                var results = response.response.groups[0].items;
                // console.log(results);

                app.shuffleArray(results);
                console.log(results);

                // checks results for missing properties and splices objects from return
                for (var i = results.length - 1; i > -1; i--) {
                    if (results[i].venue.name == undefined) {
                        results.splice(i, 1);
                    } else if (results[i].venue.price == undefined) {
                        results.splice(i, 1);
                    } else if (results[i].venue.photos.count == 0) {
                        results.splice(i, 1)
                    } else if (results[i].venue.contact.phone == undefined) {
                        results.splice(i, 1)
                    }  else if (results[i].venue.contact.formattedPhone == undefined) {
                        results.splice(i, 1)
                    }
                }
                
                //--------------------------------

            // creates a variable to store the object data in an array for easy retrieval from Firebase    
            var apidataReturn = [];   

                for (var i = 0; i < 3; i++) {

                    apidataReturn[i] = {
                        venueName: results[i].venue.name,
                        rating: results[i].venue.rating, 
                        price: results[i].venue.price.message,
                        address: results[i].venue.location.formattedAddress,
                        contact: results[i].venue.contact.formattedPhone || results[i].venue.contact.phone || null,
                        venueImage: results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix,
                        foodLat: results[i].venue.location.lat,
                        foodLng: results[i].venue.location.lng
                    };
                    
                    // console.log(results[i].venue.name);
                    // console.log(results[i].venue.id);
                    // // console.log(results[i].venue.hours.status);
                    // console.log(results[i].venue.price.tier);
                    // console.log(results[i].venue.location.formattedAddress);
                    // console.log(results[i].venue.name);
                    // console.log(results[i].venue.contact);

                //     //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
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

             // Listens for the select buttons dynamically created above
             $('#fsquareResults').on('click', 'button', function () {
                // creates a variable to store the selected object by passing a value for the index
                var firebaseFoodSelect = apidataReturn[$(this).attr("data-value")];
                app.firebaseFoodSelect =firebaseFoodSelect;
                // stores the lat, lng and venue name to create markers for the Google Map
                app.foodLat = apidataReturn[$(this).attr("data-value")].foodLat;
                app.foodLng = apidataReturn[$(this).attr("data-value")].foodLng;
                app.foodSelect = apidataReturn[$(this).attr("data-value")].venueName;
                // console.log(app.foodLatLng);
                $('#fsquareResults').empty();
                $('#foodChoices').hide();
                $('#priceChoices').hide();
                $('#submitQuery').hide();
                $('#modalFoodSelection').modal('show');
                // console.log(firebaseFoodSelect);

                //scrolls to the results page
                $('html,body').animate({
                scrollTop: $("#step2").offset().top},
                'slow');
                
                var pushFoodVenue = firebase.database().ref('users/' + app.nameInput).set({
                        foodVenue: app.firebaseFoodSelect,
                      });
                
                //returns the data from Firebase
               pushFoodVenue.on("child_added", function(childSnapshot) {
                   fbFoodImage = childSnapshot.val().firebaseFoodSelect.venueImage;
                   fbFoodName = childSnapshot.val().firebaseFoodSelect.venueName;
                   fbFoodAddress = childSnapshot.val().firebaseFoodSelect.address;
                   // console.log(fbFoodImage);

                   // writes the returned data to the page
                   $('#unload2').html('<img src=' + fbFoodImage + '>');
                   $('#upload2N').html('<h3>' + fbFoodName + '</h3>');  
                   $('#upload2A').html('<p>Address: ' + fbFoodAddress[0] + '</p>');
                   $('#upload2A').append('<p>' + fbFoodAddress[1] + '</p>');
                   $('#upload2A').append('<p>' + fbFoodAddress[2] + '</p>');
                });  

            });
         });
    });
    
    // Creates an Ajax query with the above food filters and returns data from the Foursquare API 
    $('#submitEventQuery').on('click', function () {   
        var queryURL = "https://api.foursquare.com/v2/venues/explore?&near=Orlando,Fl&price=" + app.eventprice + "&venuePhotos=1&query=" + app.eventchoice + "&client_id=HFKDICL41ZZNTP24SRFKEJVQBRX3CPRUUMQVERB3DW4BKP5Q&client_secret=MUWOHZZTQGRSAFO5XIQNBHOV01Q22PBSYIJBCJKNJLB4GYRH&v=20160301&m=foursquare";
        $('#fsquareEventResults').empty();
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                
                // stores the returned data at the proper level of the object from Foursquare
                var results = response.response.groups[0].items;
                // console.log(results);

                app.shuffleArray(results);
                console.log(results);
                
                // checks results for missing properties and splices objects from return
                for (var i = results.length - 1; i > -1; i--) {
                    if (results[i].venue.photos.count == 0) {
                        results.splice(i, 1);
                    } else if (results[i].venue.rating == undefined) {
                        results.splice(i, 1);
                    }  
                }


                //--------------------------------

            var apidataReturn = [];   

                for (var i = 0; i < 3; i++) {
                    console.log(results[i].venue.contact);
                    if (results[i].venue.contact == undefined) {
                        apidataReturn[i] = {
                        venueName: results[i].venue.name,
                        address: results[i].venue.location.formattedAddress,
                        venueImage: results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix,
                        eventLat: results[i].venue.location.lat,
                        eventLng: results[i].venue.location.lng
                    };

                     //     //------------Writes retrieved API data to page--------------------
                    var venueDiv = $("<div class='col-lg-4'>");
                    var selectBtn = $('<button>');
                        selectBtn.addClass("btn btn-info Select");
                        selectBtn.text("Select");
                        selectBtn.attr('data-value', [i]);
                    venueDiv.append('<img src='+apidataReturn[i].venueImage+'>');
                    venueDiv.append('<h3>'+apidataReturn[i].venueName+'</h3>');
                    venueDiv.append('<p>Address: '+apidataReturn[i].address[0]+'<br>'+apidataReturn[i].address[1]+'<br>'+apidataReturn[i].address[2]+'</p>');
                    venueDiv.append(selectBtn);
                $('#fsquareEventResults').prepend(venueDiv);
                  } else { 
                    apidataReturn[i] = {
                        venueName: results[i].venue.name,
                        address: results[i].venue.location.formattedAddress,
                        contact: results[i].venue.contact || null,
                        venueImage: results[i].venue.photos.groups[0].items[0].prefix+"500x300"+results[i].venue.photos.groups[0].items[0].suffix,
                        eventLat: results[i].venue.location.lat,
                        eventLng: results[i].venue.location.lng
                    };

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

             }
             // Listens for the select buttons dynamically created above
             $('#fsquareEventResults').on('click', 'button', function () {
                // creates a variable to store the selected object by passing a value for the index
                var firebaseEventSelect = apidataReturn[$(this).attr("data-value")]
                app.firebaseEventSelect = firebaseEventSelect;
                // stores the lat, lng and venue name to create markers for the Google Map
                app.eventLat = apidataReturn[$(this).attr("data-value")].eventLat;
                app.eventLng = apidataReturn[$(this).attr("data-value")].eventLng;
                app.eventSelect = apidataReturn[$(this).attr("data-value")].venueName;
                // console.log(app.eventLatLng);
                $('#fsquareEventResults').empty();
                $('#eventChoices').hide();
                $('#submitEventQuery').hide();
                $('#modalEventSelection').modal('show');
                // console.log(firebaseEventSelect);
                $('html,body').animate({
                scrollTop: $("#step3").offset().top},
                'slow');
                // Create markers and set their position to selections.
                  var foodMarker = new google.maps.Marker({
                    map: app.map,
                    position: {lat: app.foodLat, lng: app.foodLng},
                    title: app.foodSelect
                  });
                  var eventMarker = new google.maps.Marker({
                    map: app.map,
                    position: {lat: app.eventLat, lng: app.eventLng},
                    title: app.eventSelect
                  });
                $('#map').show();

                // pushes the data to firebase
                var pushEventVenue = firebase.database().ref('users/' + app.nameInput).set({
                        foodVenue: app.firebaseFoodSelect,
                        eventVenue: app.firebaseEventSelect
                      });
                 //returns the data from firebase
                 pushEventVenue.on("child_added", function(childSnapshot) {
                   fbEventImage = childSnapshot.val().firebaseEventSelect.venueImage;
                   fbEventName = childSnapshot.val().firebaseEventSelect.venueName;
                   fbEventAddress = childSnapshot.val().firebaseEventSelect.address;

                   
                   $('#unload3').html('<img src=' + fbEventImage + '>');
                   $('#upload3N').html('<h3>' + fbEventName + '</h3>');
                   $('#upload3A').html('<p>Address: ' + fbEventAddress[0] + '</p>');
                   $('#upload3A').append('<p>' + fbEventAddress[1] + '</p>');
                   $('#upload3A').append('<p>' + fbEventAddress[2] + '</p>');
                });
                });
            return false;
    
        });
    });
});

      