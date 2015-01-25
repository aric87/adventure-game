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
            chapter1();
        });
    };

    function choice(mainText, buttonOne, buttonTwo, buttonThree, optionOne, optionTwo, optionThree) {

        main.html(mainText);
        options.html('<button value="1" >' + buttonOne + '</button><button value="2">' + buttonTwo + '</button><button value="3">' + buttonThree + '</button>');
        };
        options.on('click', 'button', function (value) {
            var value = $(this).val();
            console.log(value);
            if (value == 1) {
                optionOne();
            } else if (value == 2) {
                optionTwo();

            } else {
                optionThree();
            };
        });


    function reset() {
        start();
    };

    function chapter1() {
        var mainText = 'We meet our hero in a tavern, enjoying a flaggon of ale. An elder man spills through the door, ranting about a beast in a castle, who kidnapped his daughter. Everyone laughs, and brushes him off. What would you do?';
        var buttonOne = 'Ignore the Crazy man';
        var buttonTwo = 'Ask him about his daughter';
        var buttonThree = 'Rally the crowd into a mob and kill the man';
        optionOne = ignore;
        optionTwo = help;
        optionThree = mob;
        choice(mainText, buttonOne, buttonTwo, buttonThree);

    };

    function ignore() {
        var mainText = '\"Wow!\" gasped the old man. \"No one will help!\" He comes to you and shows you a picture of his daughter. She is the most beautiful woman you have ever seen, and the man offers her to you, if you save her life';
        var buttonOne = 'Kill him for bothering you further';
        var buttonTwo = 'Tell him your not interested, and leave';
        var buttonThree = 'Listen to his story';
         optionOne = mob;
         optionTwo = quit;
         optionThree = help;
        choice(mainText, buttonOne, buttonTwo, buttonThree);

    };

    function help() {
        var mainText = '\"Great!\", he says. The old man leads you to his home, where he outlines his story. Apparently, he was really intoxicated, and got lost in the woods. His daughter came to save him, and they were both captured by a terrible beasty, who kept his daughter to be his wife, releasing the useless old man.';
        var buttonOne = 'Listen to more of the story';
        var buttonTwo = 'Tell him you lost interest, and leave';
        var buttonThree = 'Stop him, your wasting time, and get going.';
        optionOne = listen;
        optionTwo = quit;
         optionThree = headOut;
        choice(mainText, buttonOne, buttonTwo, buttonThree);

    };

    function mob() {
        var mainText = '\"Kill the crazy!\" Your rally cry rings out. The town gather around the tree in the middle of the square, and hang the old man. You hear a howl from the woods, and see a beast run through the square, take the old mans body, and leave. oops. ';
        var buttonOne = 'Chase the beast';
        var buttonTwo = 'Not your problem';
        var buttonThree = 'Loathe in self pity';
         optionOne = alone;
         optionTwo = quit;
         optionThree = quit;
        choice(mainText, buttonOne, buttonTwo, buttonThree);

    };

    function alone() {
        var mainText = 'Well, since the old man is dead, there\'s no one that knows where the beast lives... So, you decide to search his house, and find a map with a castle and a princess drawn on it. Coincidence? ';
        var buttonOne = 'Follow the map';
        var buttonTwo = 'Give up, this map is a hoax';
        var buttonThree = 'Grab some friends, this will be tough';
        optionOne = chaptwo;
         optionTwo = quit;
         optionThree = friends;
    choice(mainText, buttonOne, buttonTwo, buttonThree);

};

function quit() {
    var mainText = 'Well, I guess someone else can save the day, be the hero, get the girl... ';
    var buttonOne = 'Game over';
    var buttonTwo = 'Want to save the girl?';
    var buttonThree = 'Try again!';
   optionOne = reset;
     optionTwo = reset;
     optionThree = reset;
    choice(mainText, buttonOne, buttonTwo, buttonThree);

};

function headOut() {
    var mainText = 'The old man points down a dark, and dreary trail. You ask the man if he\'s coming, and he hands you a map and runs away. Well, that sucks. What to do now?';
    var buttonOne = 'If he isn\'t going, you aren\'t either';
    var buttonTwo = 'Take the map, and start walking';
    var buttonThree = 'Go grab some friends';
    optionOne = quit;
    optionTwo = chaptwo;
     optionThree = friends;
    choice(mainText, buttonOne, buttonTwo, buttonThree);
};

function listen() {
    var mainText = 'The man continues on, blathering about the beast... and on, and on, and on. The beast had hair, and claws, and he was 10 feet tall... and lion\'s and tiger\'s and bear\'s , oh my.  Finally, you stop him in mid sentence...';
    var buttonOne = '\"Ok, old man.Let\'s go.\"';
    var buttonTwo = '\"I changed my mind.\"?';
    var buttonThree = '\"Strangle the old man, and go alone.\"';
    optionOne = headOut;
   optionTwo = quit;
    optionThree = alone;
    choice(mainText, buttonOne, buttonTwo, buttonThree);
};

function tavern() {

    var mainText = 'You burned the tavern down.Well done. Now everyone is in the street, and really mad at you. They chase you out of town. You had better go get that princess to prove you were right.';
    var buttonOne = 'Head into the woods after the beast';
    var buttonTwo = 'Give up, because everyone hates you anyway';
    var buttonThree = 'Mo, really, go into the woods';
    optionOne = chaptwo;
     optionTwo = quit;
  optionThree = chaptwo;
    choice(mainText, buttonOne, buttonTwo, buttonThree);
};

function friends() {
    var mainText = 'You run back to the tavern, and spill through the door, ranting about a beast in a castle, who kidnapped the old man\'s daughter. Everyone laughs. They just heard this story. No one believed him, and they won\'t believe you. Are you insane? ';
    var buttonOne = 'Darn, guess I\'m going alone ';
    var buttonTwo = 'This is impossible alone, guess she is on her own';
    var buttonThree = 'Burn the tavern, then save the girl';
   optionOne = chaptwo;
   optionTwo = quit;
  optionThree = tavern;
    choice(mainText, buttonOne, buttonTwo, buttonThree);
};

function chaptwo() {
    var mainText = 'You have reached chapter two';
    var buttonOne = 'Sorry, writing';
    var buttonTwo = 'the next chapter';
    var buttonThree = 'for your enjoyment';
   optionOne = reset;
    optionTwo = reset;
    optionThree = reset;
    choice(mainText, buttonOne, buttonTwo, buttonThree);

};

});
