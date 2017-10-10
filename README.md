# colornamer
A simple npm module/js client library that gives back the color-name of a hex or rgb value. 

Created to provide accessible color names to the blind and vissually impared as part of the p5 accessible canvas project (https://github.com/MathuraMG/p5-interceptor) for the p5.js web editor (https://github.com/processing/p5.js-web-editor).

## NPM module
For use with Node.js: `npm install colornamer`

	var color = require('colornamer');
	
	color.rgbColorName(255,0,0); //returns red
	color.hexColorName(ff0000); //returns red



## Client library

  Link your html to the library: https://cdn.rawgit.com/lm-n/colour-namer/1228bc4d/lib/colorNamer.js
  <br>
  Use the following functions to get a color name:
  <br>
  `rgbColorName(255,0,0); //returns red`
  the expected input is three ints
  <br>
  `hexColorName(ff0000); //returns red`
  the expected input is a string of six characters without "#" at the beginning
