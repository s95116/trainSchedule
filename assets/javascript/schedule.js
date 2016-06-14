//Readies the document
$(document).ready(function() {

//Connect to Firebase
var trainData = new Firebase("https://zop01999837.firebaseio.com/");

//Add train on click function
$("#addTrain").on("click", function(){

	//Define variables and grabs data from input boxes
	var trainName = $("#trainNameInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	var trainTime = $("#trainTimeInput").val().trim();
	var frequency = $("#frequencyInput").val().trim();







});//End of AddTrain on click




}); //End of Document.ready