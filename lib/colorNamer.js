function calculateColor(hsv) {
  var colortext;
    if (hsv[0]!=0){
      hsv[0] = Math.round(hsv[0]*100);
      hue = hsv[0].toString().split('');
      var last = hue.length-1;
      hue[last]=parseInt(hue[last]);
      if (hue[last] < 2.5){
        hue[last]=0;
      } else if (hue[last] >= 2.5 && hue[last] < 7.5){
        hue[last]=5;
      } 
      if (hue.length == 2){
        hue[0]=parseInt(hue[0]);
        if (hue[last]>=7.5){
          hue[last]=0;
          hue[0]= hue[0]+1;
        }
      hsv[0] = (hue[0]*10)+hue[1];
      }else{
        if (hue[last]>=7.5){
          hsv[0]=10;
        }else{
          hsv[0]=hue[last];
        }
      }
    }
    for (var i = hsv.length - 1; i >= 1; i--) {
      if(hsv[i] <= 0.25) {
        hsv[i] = 0;
      } else if(hsv[i] > 0.25 &&  hsv[i] < 0.75){
        hsv[i] = 0.5;
      }
      else {
        hsv[i] = 1;
      }
    }
    if ((hsv[0]==0)&&(hsv[1]==0)&&(hsv[2]==1)){
    	for (var i = oghsv.length - 1; i >= 0; i--) {
    		oghsv[i]=Math.round(oghsv[i] * 10000) / 10000;
    	}  	
    	for (var e =0;e<xcp.length;e++){
    		if((xcp[e].h == oghsv[0]) && (xcp[e].s == oghsv[1]) && (xcp[e].b == oghsv[2]) ) {
        		colortext = xcp[e].name;
       			break;
      		}else{
      			colortext = "white";
      		}
    	}
    }else{
    	for(var i =0;i<color_lookup.length;i++) {
      		if((color_lookup[i]["h"] == hsv[0]) && (color_lookup[i]["s"] == hsv[1]) && (color_lookup[i]["b"] == hsv[2]) ) {
        		colortext = color_lookup[i].name;
       			break;
      		}
    	}
    	
    }
  return colortext;
}

function hexToHsv(value){
  var r = parseInt(value[0]+value[1],16);
  var g = parseInt(value[2]+value[3],16);
  var b = parseInt(value[4]+value[5],16);
  var hsv = rgbToHsv(r,g,b);
  return hsv;
}

function rgbToHsv(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;
  var d = max - min;
  s = max == 0 ? 0 : d / max;
  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  oghsv = [h, s, v];
  return[h, s, v];
}

function rgbColorName(r, g, b){
  if (0<=r && r<=255 && 0<=g && g<=255 && 0<=b && b<=255){
    var colorname = calculateColor(rgbToHsv(r,g,b));
    return colorname;
  }else{
    return("Requires a valid rgb value");
  }

}

function hexColorName(value){
  var regEx = /[0-9A-Fa-f]{6}/g;
    if(regEx.test(value) && value.length == 6 ) {
      var colorname = calculateColor(hexToHsv(value));
      return colorname;
    }else{
      return("Requires a valid hex value");
    }
}

var oghsv;

var xcp = 
[
	{
		"h":0,
		"s":0,
		"b":0.8275,
		"name":"gray"
	},
	{
		"h":0,
		"s":0,
		"b":0.8627,
		"name":"gray"
	},
	{
		"h":0,
		"s":0,
		"b":0.7529,
		"name":"gray"
	},
	{
		"h":0.0167,
		"s":0.1176,
		"b":1,
		"name":"light pink"
	},
];

var color_lookup =
[
  {
    "h" : 0,
    "s" : 0,
    "b" :0,
    "name" : "black"
  },
  {
    "h" : 0,
    "s" : 0,
    "b" :0.5,
    "name" : "gray"
  },
  {
    "h" : 0,
    "s" : 0,
    "b" :1,
    "name" : "white"
  },
  {
    "h" : 0,
    "s" : 0.5,
    "b" :0.5,
    "name" : "dark maroon"
  },
  {
    "h" : 0,
    "s" : 0.5,
    "b" :1,
    "name" : "salmon pink"
  },
  {
    "h" : 0,
    "s" : 1,
    "b" :0,
    "name" : "black"
  },
  {
    "h" : 0,
    "s" : 1,
    "b" :0.5,
    "name" : "dark red"
  },
  {
    "h" : 0,
    "s" : 1,
    "b" :1,
    "name" : "red"
  },
  {
    "h" : 5,
    "s" : 0,
    "b" :1,
    "name" : "very light peach"
  },
  {
    "h" : 5,
    "s" : 0.5,
    "b" : 0.5,
    "name" : "brown"
  },
  {
    "h" : 5,
    "s" : 0.5,
    "b" :1,
    "name" : "peach"
  },
  {
    "h" : 5,
    "s" : 1,
    "b" :0.5,
    "name" : "brick red"
  },
  {
    "h" : 5,
    "s" : 1,
    "b" :1,
    "name" : "crimson"
  },
  {
    "h" : 10,
    "s" : 0,
    "b" : 1,
    "name" : "light peach"
  },
  {
    "h" : 10,
    "s" : 0.5,
    "b" :0.5,
    "name" : "brown"
  },
  {
    "h" : 10,
    "s" : 0.5,
    "b" :1,
    "name" : "light orange"
  },
  {
    "h" : 10,
    "s" : 1,
    "b" :0.5,
    "name" : "brown"
  },
  {
    "h" : 10,
    "s" : 1,
    "b" :1,
    "name" : "orange"
  },
  {
    "h" : 15, 
    "s" : 0,
    "b" : 1,
    "name" : "very light yellow"
  },
  {
    "h" : 15, 
    "s" : 0.5,
    "b" : 0.5,
    "name" : "olive green"
  },
  {
    "h" : 15,
    "s" : 0.5,
    "b" :1,
    "name" : "light yellow"
  },
  {
    "h" : 15, 
    "s" : 1,
    "b" : 0,
    "name" : "dark olive green"
  },
  {
    "h" : 15, 
    "s" : 1,
    "b" : 0.5,
    "name" : "olive green"
  },
  {
    "h" : 15,
    "s" : 1,
    "b" :1,
    "name" : "yellow"
  },
  {
    "h" : 20,
    "s" : 0,
    "b" :1,
    "name" : "very light yellow"
  },
  {
    "h" : 20, 
    "s" : 0.5,
    "b" : 0.5,
    "name" : "olive green"
  },
  {
    "h" : 20,
    "s" : 0.5,
    "b" :1,
    "name" : "light yellow green"
  },
  {
    "h" : 20, 
    "s" : 1,
    "b" : 0,
    "name" : "dark olive green"
  },
  {
    "h" : 20,
    "s" : 1,
    "b" :0.5,
    "name" : "dark yellow green"
  },
  {
    "h" : 20,
    "s" : 1,
    "b" :1,
    "name" : "yellow green"
  },
  {
    "h" : 25,
    "s" : 0.5,
    "b" :0.5,
    "name" : "dark yellow green"
  },
  {
    "h" : 25,
    "s" : 0.5,
    "b" :1,
    "name" : "light green"
  },
  {
    "h" : 25,
    "s" : 1,
    "b" :0.5,
    "name" : "dark green"
  },
  {
    "h" : 25,
    "s" : 1,
    "b" :1,
    "name" : "green"
  },
  {
    "h" : 30,
    "s" : 0.5,
    "b" :1,
    "name" : "light green"
  },
  {
    "h" : 30,
    "s" : 1,
    "b" :0.5,
    "name" : "dark green"
  },
  {
    "h" : 30,
    "s" : 1,
    "b" :1,
    "name" : "green"
  },
  {
    "h" : 35,
    "s" : 0,
    "b" : 0.5,
    "name" : "light green"
  },
  {
    "h" : 35,
    "s" : 0,
    "b" :1,
    "name" : "very light green"
  },
  {
    "h" : 35,
    "s" : 0.5,
    "b" :0.5,
    "name" : "dark green"
  },
  {
    "h" : 35,
    "s" : 0.5,
    "b" :1,
    "name" : "light green"
  },
  {
    "h" : 35,
    "s" : 1,
    "b" :0,
    "name" : "very dark green"
  },
  {
    "h" : 35,
    "s" : 1,
    "b" :0.5,
    "name" : "dark green"
  },
  {
    "h" : 35,
    "s" : 1,
    "b" :1,
    "name" : "green"
  },
  {
    "h" : 40,
    "s" : 0,
    "b" : 1,
    "name" : "very light green"
  },
  {
    "h" : 40,
    "s" : 0.5,
    "b" :0.5,
    "name" : "dark green"
  },
  {
    "h" : 40,
    "s" : 0.5,
    "b" :1,
    "name" : "light green"
  },
  {
    "h" : 40,
    "s" : 1,
    "b" :0.5,
    "name" : "dark green"
  },
  {
    "h" : 40,
    "s" : 1,
    "b" :1,
    "name" : "green"
  },
  {
    "h" : 45,
    "s" : 0.5,
    "b" :1,
    "name" : "light turquoise"
  },
  {
    "h" : 45,
    "s" : 1,
    "b" :0.5,
    "name" : "dark turquoise"
  },
  {
    "h" : 45,
    "s" : 1,
    "b" :1,
    "name" : "turquoise"
  },
  {
    "h" : 50,
    "s" : 0,
    "b" :1,
    "name" : "light sky blue"
  },
  {
    "h" : 50,
    "s" : 0.5,
    "b" :0.5,
    "name" : "dark cyan"
  },
  {
    "h" : 50,
    "s" : 0.5,
    "b" :1,
    "name" : "light cyan"
  },
  {
    "h" : 50,
    "s" : 1,
    "b" :0.5,
    "name" : "dark cyan"
  },
  {
    "h" : 50,
    "s" : 1,
    "b" : 1,
    "name" : "cyan"
  },
  {
    "h" : 55,
    "s" : 0,
    "b" : 1,
    "name" : "light sky blue"
  },
  {
    "h" : 55,
    "s" : 0.5,
    "b" : 1,
    "name" : "light sky blue"
  },
  {
    "h" : 55,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark blue"
  },
  {
    "h" : 55,
    "s" : 1,
    "b" : 1,
    "name" : "sky blue"
  },
  {
    "h" : 60,
    "s" : 0,
    "b" : 0.5,
    "name" : "gray"
  },
  {
    "h" : 60,
    "s" : 0,
    "b" : 1,
    "name" : "very light blue"
  },
  {
    "h" : 60,
    "s" : 0.5,
    "b" : 0.5,
    "name" : "blue"
  },
  {
    "h" : 60,
    "s" : 0.5,
    "b" : 1,
    "name" : "light blue"
  },
  {
    "h" : 60,
    "s" : 1,
    "b" : 0.5,
    "name" : "navy blue"
  },
  {
    "h" : 60,
    "s" : 1,
    "b" :1,
    "name" : "blue"
  },
  {
    "h" : 65,
    "s" : 0,
    "b" : 1,
    "name" : "lavender"
  },
  {
    "h" : 65,
    "s" : 0.5,
    "b" : 0.5,
    "name" : "navy blue"
  },
  {
    "h" : 65,
    "s" : 0.5,
    "b" : 1,
    "name" : "light purple"
  },
  {
    "h" : 65,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark navy blue"
  },
  {
    "h" : 65,
    "s" : 1,
    "b" : 1,
    "name" : "blue"
  },
  {
    "h" : 70,
    "s" : 0,
    "b" : 1,
    "name" : "lavender"
  },
  {
    "h" : 70,
    "s" : 0.5,
    "b" : 0.5,
    "name" : "navy blue"
  },
  {
    "h" : 70,
    "s" : 0.5,
    "b" : 1,
    "name" : "lavender blue"
  },
  {
    "h" : 70,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark navy blue"
  },
  {
    "h" : 70,
    "s" : 1,
    "b" : 1,
    "name" : "blue"
  },
  {
    "h" : 75,
    "s" : 0.5,
    "b" : 1,
    "name" : "lavender"
  },
  {
    "h" : 75,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark purple"
  },
  {
    "h" : 75,
    "s" : 1,
    "b" : 1,
    "name" : "purple"
  },
  {
    "h" : 80,
    "s" : 0.5,
    "b" : 1,
    "name" : "pinkish purple"
  },
   {
    "h" : 80,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark purple"
  },
  {
    "h" : 80,
    "s" : 1,
    "b" : 1,
    "name" : "purple"
  },
  {
    "h" : 85,
    "s" : 0,
    "b" : 1,
    "name" : "light pink"
  },
  {
    "h" : 85,
    "s" : 0.5,
    "b" : 0.5,
    "name" : "purple"
  },
  {
    "h" : 85,
    "s" : 0.5,
    "b" : 1,
    "name" : "light fuchsia"
  },
   {
    "h" : 85,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark fuchsia"
  },
  {
    "h" : 85,
    "s" : 1,
    "b" : 1,
    "name" : "fuchsia"
  },
  {
    "h" : 90,
    "s" : 0.5,
    "b" : 0.5,
    "name" : "dark fuchsia"
  },
  {
    "h" : 90,
    "s" : 0.5,
    "b" : 1,
    "name" : "hot pink"
  },
  {
    "h" : 90,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark fuchsia"
  },
  {
    "h" : 90,
    "s" : 1,
    "b" : 1,
    "name" : "fuchsia"
  },
  {
    "h" : 95,
    "s" : 0,
    "b" : 1,
    "name" : "pink"
  },
  {
    "h" : 95,
    "s" : 0.5,
    "b" : 1,
    "name" : "light pink"
  },
  {
    "h" : 95,
    "s" : 1,
    "b" : 0.5,
    "name" : "dark magenta"
  },
  {
    "h" : 95,
    "s" : 1,
    "b" : 1,
    "name" : "magenta"
  },
];