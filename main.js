var main = $('#mainText');
var next = $('#next');
var options = $('#Options');
var optionOne = " ";
var optionTwo = " ";
var optionThree = " ";

$(document).ready(function () {
    start();

    function start() {
        main.html('Welcome to the Adventure of a lifetime. You will embark on a voyage to save the princess from the evil Bowser. Choose carefully, adventurer, as your decisions affect the outcome!');
        next.click(function () {
            next.hide();
            load(chap1);
        });
    };

    function load(object) {
        main.html(object.mainText);
        options.html('<button value="1"  >' + object.buttonOne + '</button><button value="2">' + object.buttonTwo + '</button><button value="3">' + object.buttonThree + '</button>');
        var buttons = options.children($('button'));
        buttons.attr('data-object', object.optionTwo);
        buttons.first().attr('data-object', object.optionOne);
        buttons.last().attr('data-object', object.optionThree);
    };

    options.on('click', 'button', function (value) {
        var nextStep = eval($(this).attr('data-object'));
        load(nextStep);
    });
    var reset = function() {
        options.html(' ');
        next.show();
        start();
    };

});
