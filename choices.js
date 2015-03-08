var chapOne = {
    mainText:'We meet our hero in a tavern, enjoying a flaggon of ale. An elder man spills through the door, ranting about a beast in a castle, who kidnapped his daughter. Everyone laughs, and brushes him off. What would you do?',
    buttonOne: 'Ignore the Crazy man',
    buttonTwo: 'Ask him about his daughter',
    buttonThree: 'Rally the crowd into a mob and kill the man',
    optionOne: ignore,
    optionTwo: help,
    optionThree: mob
};

var ignore = {
    mainText: '\"Wow!\" gasped the old man. \"No one will help!\" He comes to you and shows you a picture of his daughter. She is the most beautiful woman you have ever seen, and the man offers her to you, if you save her life',
    buttonOne: 'Kill him for bothering you further',
    buttonTwo: 'Tell him your not interested, and leave',
    buttonThree: 'Listen to his story',
    optionOne: mob,
    optionTwo: quit,
    optionThree: help
};

var help = {
    mainText: '\"Great!\", he says. The old man leads you to his home, where he outlines his story. Apparently, he was really intoxicated, and got lost in the woods. His daughter came to save him, and they were both captured by a terrible beasty, who kept his daughter to be his wife, releasing the useless old man.',
    buttonOne: 'Listen to more of the story',
    buttonTwo: 'Tell him you lost interest, and leave',
    buttonThree: 'Stop him, your wasting time, and get going.',
    optionOne: listen,
    optionTwo: quit,
    optionThree: headOut
};

var mob = {
    mainText: '\"Kill the crazy!\" Your rally cry rings out. The town gather around the tree in the middle of the square, and hang the old man. You hear a howl from the woods, and see a beast run through the square, take the old mans body, and leave. oops. ',
    buttonOne: 'Chase the beast',
    buttonTwo: 'Not your problem',
    buttonThree: 'Loathe in self pity',
    optionOne: alone,
    optionTwo: quit,
    optionThree: quit
};

var alone = {
    mainText: 'Well, since the old man is dead, there\'s no one that knows where the beast lives... So, you decide to search his house, and find a map with a castle and a princess drawn on it. Coincidence? ',
    buttonOne :'Follow the map',
    buttonTwo :'Give up, this map is a hoax',
    buttonThree:'Grab some friends, this will be tough',
    optionOne: chaptwo,
    optionTwo :quit,
    optionThree: friends

};

var quit = {
    mainText:'Well, I guess someone else can save the day, be the hero, get the girl... ',
    buttonOne:'Game over',
    buttonTwo:'Want to save the girl?',
    buttonThree:'Try again!',
    optionOne:reset,
    optionTwo:reset,
    optionThree:reset

};

var headOut = {
    mainText:'The old man points down a dark, and dreary trail. You ask the man if he\'s coming, and he hands you a map and runs away. Well, that sucks. What to do now?',
    buttonOne:'If he isn\'t going, you aren\'t either',
    buttonTwo:'Take the map, and start walking',
    buttonThree:'Go grab some friends',
    optionOne:quit,
    optionTwo:chaptwo,
    optionThree:friends
};

var listen = {
    mainText:'The man continues on, blathering about the beast... and on, and on, and on. The beast had hair, and claws, and he was 10 feet tall... and lion\'s and tiger\'s and bear\'s , oh my.  Finally, you stop him in mid sentence...',
    buttonOne:'\"Ok, old man.Let\'s go.\"',
    buttonTwo:'\"I changed my mind.\"?',
    buttonThree:'\"Strangle the old man, and go alone.\"',
    optionOne:headOut,
    optionTwo:quit,
    optionThree:alone
};

var tavern = {
    mainText:'You burned the tavern down.Well done. Now everyone is in the street, and really mad at you. They chase you out of town. You had better go get that princess to prove you were right.',
    buttonOne:'Head into the woods after the beast',
    buttonTwo:'Give up, because everyone hates you anyway',
    buttonThree:'Mo, really, go into the woods',
    optionOne:chaptwo,
    optionTwo:quit,
    optionThree:chaptwo
};

var friends = {
    mainText:'You run back to the tavern, and spill through the door, ranting about a beast in a castle, who kidnapped the old man\'s daughter. Everyone laughs. They just heard this story. No one believed him, and they won\'t believe you. Are you insane? ',
    buttonOne:'Darn, guess I\'m going alone ',
    buttonTwo:'This is impossible alone, guess she is on her own',
    buttonThree:'Burn the tavern, then save the girl',
    optionOne:chaptwo,
    optionTwo:quit,
    optionThree:tavern
};

var chaptwo = {
    mainText:'You look at your map... It seems there is a fork in the road up ahead. Well, isn\'t that exciting. There\'s a short road! When you arrive at the fork, you notice the shorter road is a little grown in, and it seems to have an ominous feeling. The longer way is very well worn, and looks to have been traveled frequently. ',
    buttonOne:'Take the sort route, and take your chances',
    buttonTwo:'The well traveled road seems safer',
    buttonThree:'Turn back',
    optionOne:shortRoute,
    optionTwo:safeRoute,
    optionThree:moral
};

function moral() {
    alert('Your conscience gets the best of you, and you decide not to stop. You have come this far, go get the girl');
};

var shortRoute = {
    mainText: 'You turn down the dark path, cutting your way through the thick brush. Suddenly, you hear growling sounds. You realize that you have been so distracted by the brush, that you didn\'t notice the footprints on the ground from the wolves, that have now decided to make you their dinner. Luckily, you brought some things with you.',
    buttonOne: 'Offer them your food',
    buttonTwo: 'Try to talk them out of eating you',
    buttonThree: 'Fight them',
    optionOne: feed,
    optionTwo: companion,
    optionThree: death

};

var feed = {
    mainText: 'You toss all your food to the wolves. They head towards the food, giving you an escape route. You are starting to see the perils of this route, but you now have no food. You can take the chance of going foward, or head back towards the safe route. With the wolves occupied, you can stop and gather food on the way, but it will take more time.',
    buttonOne: 'continue donw the short path',
    buttonTwo: 'hurry back to the long path, without food',
    buttonThree: 'Slowly head back, gathering food on the way',
    optionOne: shortRouteTwo,
    optionTwo: hungry,
    optionThree: gatherFoodLong

};

var companion = {
    mainText: 'You decide to try and talk to the wolves. You have dogs at home, afterall, and they are the same species. You offer some of your food, and crouch down to seem less intimidating. The wolves seem to entertain your friendly gesture. You decide to give them the rest of your food. The wolves now act very friendly, allowing you to pet them. You get up to leave, and the wolves follow you. Awesome! The friends you needed! Now you\'ll have to feed them too.',
    buttonOne: 'Continue down the short road',
    buttonTwo: 'Gather some food',
    buttonThree: 'Live with the wolves, who needs a princess',
    optionOne: shortRouteTwoWolves,
    optionTwo: gatherFoodShort,
    optionThree: liveWolves

};

function liveWolves() {
    var fork = confirm('Although your new friends have accepted you, they are migratory and don\'t have a place for you to live. You realize sleeping in the woods, and eating berries all the time, would not be very satisfying. You decide to gather food to feed your new friends.');
    if (fork == true) {
//        gatherFoodShort(),
    } else {//        shortRouteTwoWolves(),
    };
};

var fight = {
    mainText: 'You decide to fight the wolves off. You have a hatchet, but it has dulled from cutting through the brush. The first wolf challenges you, and you are able to hit it before it bites, but the hatchet does little damage. You decide that fighting will lead to certain death. You can try to feed them, but they are a little mad now. Talking might have worked before, but it definitely won\'t now. ',
    buttonOne: 'Try to feed them',
    buttonTwo: 'Run. Fast.',
    buttonThree: 'Fight them anyway, maybe you\'ll intimidate them',
    optionOne: feed,
    optionTwo: run,
    optionThree: death
};

function run() {
    var fork = confirm('The only way your going to make it is with a distraction. Yo can try dropping some of your food, to slow them down. If you don\t, the wolves will surely catch you.'),
    if (fork == true) {
//        runFood(),
    } else {
//        death(),
    };
};

var runFood = {
    mainText: 'Great! You drop some of your food, and the wolves slow down. You get to a clearing, and see that the small amount you dropped wasn\'t enough, and you drop the remainder, and start running again. Finally, you are safe. When you look around, you realize you are lost. Luckily, you still have the map. You take it out, and see that you ran almost all the way back to the fork in the road, and you are now on the longer, yet safer road. you can head back to the fork, and try the short route again, or you can stay on the long road, but you now have no food.',
    buttonOne: 'Short route, you don\'t want to be hungry',
    buttonTwo: 'Long road, you can make it without food.',
    buttonThree: 'Stop and gather some food. You\'ll need it to fight the beast.',
    optionOne: shortRouteTwo,
    optionTwo: hungry,
    optionThree: gatherFoodLong
};

function gatherFoodLong() {
    alert('You gather some food, and get ready to head down the long road. This route is safer, so it should be an easier trek.'),
    //safeRoute(),
};

var hungry = {
    mainText: 'You decide to go down the long path without food. That was really a bad idea! Who travels through the woods, to save a princess, without food?! You arrive at the gate of the castle, and faint from hunger. Luckily, a traveling merchant scoops you up and brings you back to town. After some nourishment, and some storytelling from the local crowd, he drops you back at the fork in the road. You wake up, fully refreshed... and wonder how you got back here? Luckily, he left you with food. '
    buttonOne: 'Short route',
    buttonTwo: 'Long road',
    buttonThree: 'Quit',
    optionOne: shortRouteTwo,
    optionTwo: safeRoute,
    optionThree: quit,
};

var gatherFoodShort = {
    /*this route has wolf companions*/
    mainText: 'You gather food up for you and your friends. You head doen the path, and the wolves follow you. You arrive at the edge of the path, and see the castle. Having a group of wolves with you prevents you from heading up the road to the nearest town to get more help, or provisions. The sun is starting to set.'
    buttonOne: 'Head into the castle',
    buttonTwo: 'Wait until morning',
    buttonThree: 'Head to town anyway',
    optionOne: castleDark,
    optionTwo: castleWolves,
    optionThree: townWolves,

};

function shortRouteTwoWolves() {
    alert('You decide to continue down the road. Although the wolves have become your friends, they know you have no more food and disband.'),
    //shortRouteTwo(),
};

var shortRouteTwo = {
    mainText: 'You can sense the end of the trail approaching. As you exit the woods, you see a massive castle. There are two ways to enter, but you can see that the path passing the castle is well used. You wonder if there is a chance there might be someone coming by soon that can help you. ',
    buttonOne: 'Head into the castle alone',
    buttonTwo: 'Wait for someone to help you',
    buttonThree: 'Go up the path, and look for help',
    optionOne: chapThree,
    optionTwo: wait,
    optionThree: goTown
};

function death() {
    alert('That went well. Your hero has died, leaving the princess in the clutches of the horrible beast. Bummer.');
    reset();
};

var safeRoute = {
    mainText: 'You take the safe route. It\'s a long, boring trip. You have to eat all the food you have to stay energized. As the sun begins to set, you see the castle in the distance. When you get to the gate, the daylight is completely gone, leaving only the moonlight to see the impressivness of the castle. You can see some light inside the castle, but the only way you see to get in, is the front door. You also notice a dim light up the path, that could be a town.',
    buttonOne: 'Walk up to the front door, and knock',
    buttonTwo: 'Stay at the edge of the path until morning',
    buttonThree: 'Start over',
    optionOne: overTheCliff,
    optionTwo: wait,
    optionThree: goTown

};

function overTheCliff() {
    alert('You knock on the front door, and a talking clock answers. He tells you to run. Thinking that you are losing it, you decide to walk to the edge of the path and wait. As soon as you turn around, a whoosh of air goes past your head. You are face to face with the beast. He picks you up, carries you to the top of the castle, and throws you off. Luckily, you land in a haystack and are brought to the local town by a merchant. ');
};

function death() {
    alert('That went well. Your hero has died, leaving the princess in the clutches of the horrible beast. Bummer.');
    reset();
};

var goTown = {
    mainText: 'You venture around the town, speaking with some of the local people. They tell you that the beast used to be a prince, but was transformed by a spell. After spending some time in town, you get the feeling that the people will be of no help to you. They did, however, tell you that the tunnel into the basement is the only way into the castle.',
    buttonOne: 'Try to steal some supplies',
    buttonTwo: 'head to the tunnel',
    buttonThree: 'Head home',
    optionOne: steal,
    optionTwo: chapThree,
    optionThree: quit

};

function steal() {
    alert('You get caught, and the village people lock you into the stocks. They value honor, and decide to hang you.');
    death();
};

var wait = {
    mainText: 'You awake in the morning, to the sound of a cart passing. You realize that you slept through the night on the side of the road. Lucky for you, no creatures made dinner of you. The man on the cart see\'s you, and tell\'s you that the beast has a bad temper, but stays in his castle. You thank him for the tip, and he leaves. You see that there is a tunnel into the basement, and a front door, but no other way in. ',
    buttonOne: 'Head up to the door',
    buttonTwo: 'Try sneaking in the tunnel',
    buttonThree: 'Try climbing the castle.',
    optionOne: overTheCliff,
    optionTwo: chapThree,
    optionThree: climb

};

function climb() {
    alert('You start climbing the castle wall, and realize that it\'s too slippery. Having exhausted all other options, you head for the tunnel. Starting in the basement wasn\'t your first choice, but it will have to do.');
    //chapThree();
};

var castleWolves = {
    mainText: 'You awake in the morning, to the sound of a cart passing. You realize that you slept through the night on the side of the road. Lucky for you, no creatures made dinner of you. The man on the cart see\'s you, and tell\'s you that the beast has a bad temper, but stays in his castle, and the only way in is the tunnel into the basement. You thank him for the tip, and he leaves. You can head to the tunnel, head to town, or you can try the front door.',
    buttonOne: 'Head to the tunnel',
    buttonTwo: 'Head to town',
    buttonThree: 'Try the front door',
    optionOne: chapThreeWolves,
    optionTwo: townWolves,
    optionThree: frontDoor

};

function frontDoor() {
    alert('The beast smells the wolves and meets you at the front door. After he finishes wiping out the wolves, he turns to you. Luckily, you are able to run and hide before he see\'s you. You wait for hours before you look up. In front of you lies the entrance to the tunnel.');
    //chapThree();
};

function castleDark() {
    alert('You try to get into the castle at night. The beast catches you and scares off all of the wolves. Luckily, you make it outta there. You sleep in the woods until morning. When you wake up, a passing merchant points you to a tunnel that goes into the basement.'),
    //chapThree(),
};

function townWolves() {
    alert('You bring your pack of wolves into town. The towns folk start shooting. You just lost the only allies you had, and the townsfolk sent you packing. Whoops. Guess it\'s you versus the beast. Luckily, on the way back to the castle, you notice there is a tunnel into the castle... You decide it\'s shorter than going all the way to the front door.');
    //chapThree();
};

/* chapter three will begin at the tunnel. */
var chapThree = {
    mainText: 'You have reaches chapter three, which is still being written. Cheers!',
    buttonOne:'Try again, for more action',
    buttonTwo:'Sorry, this takes time.',
    buttonThree:'Start over',
    optionOne: reset,
    optionTwo: reset,
    optionThree: reset

};

var chapThreeWolves = {
    mainText:'You have reaches chapter three, which is still being written. Cheers!',
    buttonOne:'Try again, for more action',
    buttonTwo:'Sorry, this takes time.',
    buttonThree:'Start over',
    optionOne:reset,
    optionTwo:reset,
    optionThree: reset
};

/**
 * Created by aricjohnson on 3/7/15.
 */
