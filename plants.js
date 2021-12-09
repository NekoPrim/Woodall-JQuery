$(document).ready(onReady);

function onReady() {
    console.log($('#newPlantButton'));
    $('#newPlantButton').on('click', onNewPlant);
}

function onNewPlant() {
    console.log('new plant');

    // grab the value of my <input>
    // save it to a variable (string)

    let plantName = $('#plantNameInput').val();
    console.log(plantName);

    // and render it in a <li> on the DOM

    $('#plantList').append(`<li>${plantName}</li>`);

    // reset the new plant input

    $('#pantNameInput').val('').focus();

}