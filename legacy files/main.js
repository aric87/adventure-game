var main = $('#mainText');
var next = $('#next');
var options = $('#Options');
var optionOne = " ";
var optionTwo = " ";
var optionThree = " ";

$(document).ready(function () {
//start the game
    start();
    function start() {
        //main text block
        main.html('Welcome to the Adventure of a lifetime. You will embark on a voyage to save the princess from the evil Bowser. Choose carefully, adventurer, as your decisions affect the outcome!');
        //next button, goes away after game start
        next.click(function () {
            next.hide();
            load(chap1);
        });
    };
//main load function, passes in object that replaces the maintext and button text, and assigns a data attribute to each button that contains the name of the object for next stage
    function load(object) {
        main.html(object.mainText);
        options.html('<button value="1"  >' + object.buttonOne + '</button><button value="2">' + object.buttonTwo + '</button><button value="3">' + object.buttonThree + '</button>');
        var buttons = options.children($('button'));
        buttons.attr('data-object', object.optionTwo);
        buttons.first().attr('data-object', object.optionOne);
        buttons.last().attr('data-object', object.optionThree);
    };
//evaluates the string from the data attribute, and load's new object
    options.on('click', 'button', function() {
        var data = $(this).attr('data-object');
//if data equal reset, start a new game
        if (data == 'reset'){
            reset();
        } else {
            var nextStep = eval(data);
            load(nextStep);
        }
    });
//start new game, clears the buttons, and shows the next button
    var reset = function() {
        options.html(' ');
        next.show();
        start();
    };

});
