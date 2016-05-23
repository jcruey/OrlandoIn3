$(document).ready(function () {

var inputInfo= new Firebase("https://orlandoin3.firebaseio.com/");
	
	var venueImageF="";
	var venueNameF="";
	var ratingF="";
	var priceF="";
	var addressF="";

	$(".clickHere").on("click", function() {

		inputInfo.push({
			Name: name,
			Name2: name2;
			Name3: name3;

		});
});