console.log('scripts.js was sourced');

$(document).ready(function() {
    $('body').append('<h2>Hey there!!</h2>');
    $('body').prepend('<h2>I am going to the top!!!</h2>');
    $('li').css('color', 'blue');
    $('#Kevin li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    //$('#Kevin li:last-child').css('color', 'black');
    $('ul').first().children().last().css('color','black');

    $('#kevinNewFavorite').on('click', function(){
        console.log('button was clicked');
    });
    
});

