$(document).ready(onReady);

function onReady() {
    console.log($('#newPlantButton'));
    // $('#newPlantButton').on('click', onNewPlant);
    $(document).on('click', '#newPlantButton', onNewPlant); // this is better than the previous
    // $('.deletePlantButton').on('click', onDeletePlant); // doesnt work

    //listen for clicks anywhere on the DOM
    //then check if we're clicking on a .deletePlantButton element
    //before running 'onDeletePlant()'
    //
    //"event delegation"
    //"using the decendent selector"
    $(document).on('click', '.deletePlantButton', onDeletePlant);
}

function onDeletePlant() {
    // `this` is the DOM element that the event happened to
    console.log('buh-bye cruel world', this);

    //remove the plant from the DOM
    $(this).parent().remove();
}

function onNewPlant() {
    console.log('new plant');

    // grab the value of my <input>
    // save it to a variable (string)

    let plantName = $('#plantNameInput').val();
    console.log(plantName);

    // and render it in a <li> on the DOM

    $('#plantList').append(`<li>
        ${plantName}
        <button class="deletePlantButton">
            Delete
        </button>
        </li>`);

    // reset the new plant input

    $('#plantNameInput').val('').focus();

}