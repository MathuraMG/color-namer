# Color-namer
A simple npm module/js client library that gives back the color-name of a hex or rgb value

##NPM 
	For use with Node.js: `npm install color-namer`

	```js
	var color = require('color-namer');
	
	color.rgbColorName(255,0,0); //returns red
	color.hexColorName(ff0000); //returns red

	```

##Client library

  Link your html to the library https://cdn.rawgit.com/lm-n/colour-namer/1228bc4d/lib/colorNamer.js
  
  Use the following functions to get a color name: 
  ### hexColorName(hexvalue)
  hexColorName(ff0000) returns "Red"
  <br />the expected input is a string of six characters without "#" at the beginning
  ### rgbColorName(r,g,b)
  rgbColorName(0,0,255) returns "Blue"
  <br />the expected input is three ints
