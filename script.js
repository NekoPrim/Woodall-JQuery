$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $('.box').first().text('I am a humble box');
    $('.box').css({
        color: 'white',
        'font-size': '28px'
    })
    $('#plantList').append(`
        <li>   
        Bamboo
            <p>Bamboo is a fast growing grass that is native to the northern part of 
            <strong> Alaska></strong></p>
        </li>`);
    $('body').append(`
        <h1>My awesome new jQuery app</h1>
        <h5>Welcome, this will be so nice</h5>
        <p>
        Let me tell you about myself...
        </p>
    `);
    $('ul').empty()
}

let plants = [
    'Monstera',
    'Rose',
    'Cactus',
    'Hosta'
];


