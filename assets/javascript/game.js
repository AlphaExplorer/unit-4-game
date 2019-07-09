var wins = 0;
var losses = 0;
var score = 0;

// create a function that generates a random number from 19 to 120 which will be used to generate the target number every game reset

random_number = function random_number_generator() 
{
    var random_number = Math.floor(Math.random()*(120-19)+19);
    return random_number;
}

// create a function that generates a random value from 1 to 12 which will be used to assign values to the crystals
crystal_value = function crystal_valur_generator() 
{
    var random_value = Math.floor(Math.random()*(12-1)+1);
    return random_value;
}

// load random number
$(document).ready(function(){
    $(".random_number").html(random_number);
    $(".wins").html("Wins: "+wins);
    $(".losses").html("Losses: "+losses);
    $(".counter").html(score);
    $("crystal_1").val(crystal_value);
    $("crystal_2").val(crystal_value);
    $("crystal_3").val(crystal_value);
    $("crystal_4").val(crystal_value);
})

console.log(document.getElementsByClassName("crystal_1"))



