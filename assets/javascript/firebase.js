$(document).ready(function () {

var inputInfo= new Firebase("https://console.firebase.google.com/project/project-6671229764144633849/overview");
	
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