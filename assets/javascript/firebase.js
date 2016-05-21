$(document).ready(function () {

var inputInfo= new Firebase("https://trainhome.firebaseio.com/");
	
	var name="";
	var name2="";
	var name3="";

	$(".clickHere").on("click", function() {

		inputInfo.push({
			Name: name,
			Name2: name2;
			Name3: name3;

		});
});