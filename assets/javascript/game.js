// create a function that generates a random numbers.

function random_number_generator(min, max) 
{
    var number = Math.floor(Math.random()*(max-min)+min);
    return number;
}

// define variables

var wins = 0;
var losses = 0;
var score = 0;
var random_number=random_number_generator(19, 120);

//initiated event handler/game functionality
$(document).ready(function()
{
    //Game set up
    $(".random_number").html(random_number);
    $(".wins").html("Wins: "+wins);
    $(".losses").html("Losses: "+losses);
    $(".counter").html(score);
    $('#crystal_1').attr('value', random_number_generator(1, 19));
    $('#crystal_2').attr('value', random_number_generator(1, 19));
    $('#crystal_3').attr('value', random_number_generator(1, 19));
    $('#crystal_4').attr('value', random_number_generator(1, 19));
    
    //event handler
    $('.crystal').on('click', function(event)
    {
        crystal_clicked = event.target;
        crystalValue = crystal_clicked.getAttribute('value');
        score += Number(crystalValue);
        $('.counter').html(score);
     
        if(score === random_number)//winning logic
        {
            alert("Congratulations, you won! Let's guess another number");
            wins += 1;
            $(".wins").html("Wins: "+wins);
            random_number=random_number_generator(19, 120);
            $(".random_number").html(random_number);
            score = 0;
            $(".counter").html(score);
            $('#crystal_1').attr('value', random_number_generator(1, 19));
            $('#crystal_2').attr('value', random_number_generator(1, 19));
            $('#crystal_3').attr('value', random_number_generator(1, 19));
            $('#crystal_4').attr('value', random_number_generator(1, 19));
        }
        else if(score > random_number)//Losing logic
        {
            alert("Unfortunatelly, you lost! Let's give it another try");
            losses += 1;
            $(".losses").html("Losses: "+losses);
            random_number=random_number_generator(19, 120);
            $(".random_number").html(random_number);
            score = 0;
            $(".counter").html(score);
            $('#crystal_1').attr('value', random_number_generator(1, 19));
            $('#crystal_2').attr('value', random_number_generator(1, 19));
            $('#crystal_3').attr('value', random_number_generator(1, 19));
            $('#crystal_4').attr('value', random_number_generator(1, 19));
        }
    });
    






});



