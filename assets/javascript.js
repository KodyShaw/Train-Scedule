$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBu_mDEhaG0IzAQP7cnteiOEkhSq73X3Ps",
        authDomain: "train-schedule-project-8bf0a.firebaseapp.com",
        databaseURL: "https://train-schedule-project-8bf0a.firebaseio.com",
        projectId: "train-schedule-project-8bf0a",
        storageBucket: "train-schedule-project-8bf0a.appspot.com",
        messagingSenderId: "109283625995"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    //retrieve data from user inputs
    $('#add-train-btn').on('click', function (event) {
        event.preventDefault();

        var trainName = $('#train-name-input').val().trim();
        var trainDestination = $('#destination-input').val().trim();
        var trainFrequency = $('#frequency-input').val().trim();
        var trainFirstStop = $('#first-stop-input').val().trim();

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFrequency,
            firstStop: trainFirstStop
        };

        database.ref().push(newTrain);

        // console.log(newTrain.name);
        // console.log(newTrain.destination);
        // console.log(newTrain.frequency);
        // console.log(newTrain.firstStop);

        $('#train-name-input').val('');
        $('#destination-input').val('');
        $('#frequency-input').val('');
        $('#first-stop-input').val('');
    });

//add data to Firebase
database.ref().on('child_added', function(childSnapshot){
    console.log(shildSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().frequency;
    var trainFirstStop = childSnapshot.val().firstStop;

    // console.log(trainName);
    // console.log(trainDestination);
    // console.log(trainFrequency);
    // console.log(trainFirstStop);
    
})});