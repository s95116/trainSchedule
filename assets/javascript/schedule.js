//Readies the document
$(document).ready(function() {

//Connect to Firebase
var trainData = new Firebase("https://zop01999837.firebaseio.com/");

//Add train on click function
$("#addTrain").on("click", function(){

	//Define variables and grabs data from input boxes
	var trainName = $("#trainNameInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	var trainTime = moment($("#trainTimeInput").val().trim(), "DD/MM/YY").format("X");
	var frequency = $("#frequencyInput").val().trim();
	var convertedDate = moment(new Date(randomDate));
	var randomDate = "02/23/1999";

	// Creates new variable that holds time-train data
	var newTrain = {
		name: trainName,
		destination: destination,
		trainTime: trainTime,
		frequency: frequency
	}

	// Uploads schedule data to the Firebase database
	trainData.push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.trainTime);
	console.log(newTrain.frequency);

	// Alerts the user that the new train has been added to the schedule
	alert("Train has been successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#trainTimeInput").val("");
	$("#frequencyInput").val("");

	// Prevents moving to new page
	return false;

});//End of AddTrain on click

	// Creates new Firebase event when adding train data to the database
	//Adds a row in the html when the user adds an entry
	trainData.on("child_added", function(childSnapshot, prevChildKey){

		console.log(childSnapshot.val());

		// Store everything into a variable.
		var trainName = childSnapshot.val().name;
		var destination = childSnapshot.val().destination;
		var trainTime = childSnapshot.val().trainTime;
		var frequency = childSnapshot.val().frequency;
		

		// Base time calculations
		var tFrequency = 3;
		var firstTime = "07:30"; // Time is 7:30 AM(time is in military time)


		// Employee Info
		console.log(trainName);
		console.log(destination);
		console.log(trainTime);
		console.log(frequency);

		// First Time (pushed back 1 year to make sure it comes before current time)
		var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");
		console.log(firstTimeConverted);

		// Current Time
		var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

		// Difference between the times
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
		var tRemainder = diffTime % tFrequency;
		console.log(tRemainder);

		// Minute Until Train
		var tMinutesTillTrain = tFrequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

		// Next Train
		var nextTrain = moment().add(tMinutesTillTrain, "minutes")
		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))

		// Add each train's data into the table
		$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + trainTime + "</td><td>");

		var tableRow = $("<tr>");
		var tableData1 = $("<td>");
		tableData1.html(empName);
		var tableData2 = $("<td>");
		tableData2.html(empRole);
		var tableData3 = $("<td>");
		var tableData4 = $("<td>");
		tableRow.append(tableData1);
		tableRow.append(tableData2);
		tableRow.append(tableData3);
		tableRow.append(tableData4);
		$("#train-table > tbody").append(tableRow);

	}); //End of trainData function





}); //End of Document.ready