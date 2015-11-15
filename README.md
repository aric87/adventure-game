# adventure-game
##Purpose 
This is a choose your own adventure game. The story line offers three options at each juncture, but some overlap.
The story is very loosely inspired by a popular Disney movie.

##Contribution
To contribute, fork the repo, and submit all pull requests to the preview branch. Contributors will be added to the
credits page, once that is implemented. Any issues or ideas should be submitted as repo issues.

To add pieces to the story, create a new object, following the format of the others. The mainText will be the story element,
buttonOne, buttonTwo, and buttonThree are the text on the buttons, and optionOne, optionTwo, and optionThree are the name of
the objects that will load if the user clicks the corresponding button. You can add story anywhere, as long as it makes sense.


##Project needs
Chapter Three
More story options
Visual Engagement/ animation


###Gulp Tasks

####Default Gulp Task

```
$ gulp
```
Concatenate all AngularJS files located inside /app/ folder to /assets/js/ng-scripts.js. Inject HTML partials into $templateCache. Start dev server at http://localhost:8000, serve index.html at directory root. Set watchers on AngularJS files, HTML partials, index.html, and CSS styles, recompile files and reload server on change.

####Build - Complie minified code for production

```
$ gulp build
```
Minify Angular, vendor libraries, and css code to /build/ folder. Copy additional assets to /build/assets/ folder.

####Start Build Server

```
$ gulp connectBuild
```
Start build server at http://localhost:8080, serve index.html in /build/ folder.