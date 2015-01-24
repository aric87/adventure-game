var m = $('#mainText');
var b = $('#next');
var o = $('#Options');
$(document).ready(function () {
    start();



    function start() {
        m.html('Welcome to the Adventure of a lifetime. You will embark on a voyage to save the princess from the evil Bowser. Choose carefully, adventurer, as your decisions affect the outcome!');
        b.click(function () {
            b.hide();
            chapter1();
        });
    };

    function text(text, b, c, d, h, f, g) {

        m.html(text);
        o.html('<button value="1" >' + b + '</button><button value="2">' + c + '</button><button value="3">' + d + '</button>');
        o.on('click', 'button', function (value) {

            var value = $(this).val();
            console.log(value);
            if (value == 1) {

                h();
            } else if (value == 2) {
                f();
            } else {
                g();
            };
        });
    };

    function reset() {
        start();
    };

    function chapter1() {
        text('We meet our hero in a tavern, enjoying a flaggon of ale. An elder man spills through the door, ranting about a beast in a castle, who kidnapped his daughter. Everyone laughs, and brushes him off. What would you do?', 'Ignore the Crazy man', 'Ask him about his daughter', 'Rally the crowd into a mob and kill the man', ignore, help, mob);
    };

    function ignore() {
        text('\"Wow!\" gasped the old man. \"No one will help!\" He comes to you and shows you a picture of his daughter. She is the most beautiful woman you have ever seen, and the man offers her to you, if you save her life', 'Kill him for bothering you further', 'Tell him your not interested, and leave', 'Listen to his story', mob, quit, help);
    };

    function help() {
        text('\"Great!\", he says. The old man leads you to his home, where he outlines his story. Apparently, he was really intoxicated, and got lost in the woods. His daughter came to save him, and they were both captured by a terrible beasty, who kept his daughter to be his wife, releasing the useless old man.', 'Listen to more of the story', 'Tell him you lost interest, and leave', 'Stop him, your wasting time, and get going.', listen, quit, headOut);
    };

    function mob() {
        text('\"Kill the crazy!\" Your rally cry rings out. The town gather around the tree in the middle of the square, and hang the old man. You hear a howl from the woods, and see a beast run through the square, take the old mans body, and leave. oops. ', 'Chase the beast', 'Not your problem', 'Loathe in self pity', alone, quit, quit);
    };

    function alone() {
        text('Well, since the old man is dead, there\'s no one that knows where the beast lives... So, you decide to search his house, and find a map with a castle and a princess drawn on it. Coincidence? ', 'Follow the map', 'Give up, this map is a hoax', 'Grab some friends, this will be tough', chaptwo, quit, friends);
    };

    function quit() {
        text('Well, I guess someone else can save the day, be the hero, get the girl... ', 'Game over', 'Want to save the girl?', 'Try again!', reset, reset, reset);
    };

    function headOut() {
        text('The old man points down a dark, and dreary trail. You ask the man if he\'s coming, and he hands you a map and runs away. Well, that sucks. What to do now?', 'If he isn\'t going, you aren\'t either', 'Take the map, and start walking', 'Go grab some friends', quit, chaptwo, friends);
    };

    function listen() {
        text('The man continues on, blathering about the beast... and on, and on, and on. The beast had hair, and claws, and he was 10 feet tall... and lion\'s and tiger\'s and bear\'s , oh my.  Finally, you stop him in mid sentence...', '\"Ok, old man.Let\'s go.\"', '\"I changed my mind.\"?', '\"Strangle the old man, and go alone.\"', headOut, quit, alone);
    };

    function tavern() {

        text('You burned the tavern down.Well done. Now everyone is in the street, and really mad at you. They chase you out of town. You had better go get that princess to prove you were right.', 'hard', 'nice', 'crazy', mob, quit, help);
    };

    function friends() {
        text('You run back to the tavern, and spill through the door, ranting about a beast in a castle, who kidnapped the old man\'s daughter. Everyone laughs. They just heard this story. No one believed him, and they won\'t believe you. Are you insane? ', 'Darn, guess I\'m going alone ', 'This is impossible alone, guess she is on her own', 'Burn the tavern, then save the girl', chaptwo, quit, tavern);
    };

    function chaptwo() {

        text('Welcome to chapter 2', 'hard', 'nice', 'crazy', mob, quit, help);
    };

});
