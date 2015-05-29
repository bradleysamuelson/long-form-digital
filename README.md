# long-form-digital
AngularJS one page web app for long form digital comics

-----------------------

## Features

* One page responsive web application
* Dynamically creates new episodes based on json data
* Touch friendly, so swiping on the comic image advances to the next screen
* HTML content can be updated to customize to your comic

A demo can be found here: http://lineheight.co/dn/

### Documentation 
The web app is using a json file to drive the comic/episodes. 

Update the file in /js/services/episodes.js to point to the correct .json file for your comic.

For the last comic episode in a series, add this to the last episode in the .json file:
"finalEpisode": false

For the credits, you can add other options to the array rather than just 'creator' in the .json file
Currently it's set up to handle the following options:
"creator", "writer", "artist", "colorist", "pencils", "inker", and "letters"
So if you have a createive team of a writer, penciller and inker you could replace "creator" in the array with:
"writer": "Stan Lee",
"pencils": "Jack Kirby",
"inker": "Sol Brodsky",

Other content can be added to the page in the view files located in /views/episode.html or /views/home.html

For styling customization, the application uses LESS to preprocess css or you can just edit the /css/dn.css file directly (not recommended).

All images and artwork contained in this demo are Copyright (c) 2015 Brad Samuelson. Please don't steal them.


