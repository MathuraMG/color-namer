var gap = 64;
var total = 64;

function hexCalculateColor(){
  var color = $(".hexinput-color")[0].value;
  $(".input-color-box").css("background","#"+color);
  var colorName = hexColorName(color);
  $(".input-color-name").html(colorName);
}

function rgbCalculateColor(){
  var color = $(".rgbinput-color")[0].value;
  var rgbcolor = color.split(",");
  $(".input-color-box").css("background", "rgb("+parseInt(rgbcolor[0])+","+parseInt(rgbcolor[1])+","+parseInt(rgbcolor[2])+")");
  var colorName = rgbColorName(parseInt(rgbcolor[0]),parseInt(rgbcolor[1]),parseInt(rgbcolor[2]));
  $(".input-color-name").html(colorName);
}


///Create Color Blocks///
function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

$(document).ready(function() {

  //create hsb blocks
  var colors_hsb = [];
  for(var i =0;i<0.9;i+=0.05) {
    color_rgb = hsvToRgb(i,1,1);
    color = "#" + pad(Math.round(+color_rgb[0]).toString(16), 2) + pad(Math.round(+color_rgb[1]).toString(16), 2) + pad(Math.round(+color_rgb[2]).toString(16), 2);
    colors_hsb.push(color);
  }
  for (var i = 0; i < colors_hsb.length; i++) {
    var div = $("<div>");
    div.addClass("color-box-hsb");
    div.html(colors_hsb[i]);
    div.css("background", colors_hsb[i]);
    $(".container-hsb-1").append(div);
  }

  for(var i =0;i<0.9;i+=0.05) {
    color_rgb = hsvToRgb(i,0.5,1);
    color = "#" + pad(Math.round(+color_rgb[0]).toString(16), 2) + pad(Math.round(+color_rgb[1]).toString(16), 2) + pad(Math.round(+color_rgb[2]).toString(16), 2);
    colors_hsb.push(color);
  }
  for (var i = colors_hsb.length/2; i < colors_hsb.length; i++) {
    var div = $("<div>");
    div.addClass("color-box-hsb");
    div.html(colors_hsb[i]);
    div.css("background", colors_hsb[i]);
    $(".container-hsb-2").append(div);
  }

  for(var i =0;i<0.9;i+=0.05) {
    color_rgb = hsvToRgb(i,1,0.5);
    color = "#" + pad(Math.round(+color_rgb[0]).toString(16), 2) + pad(Math.round(+color_rgb[1]).toString(16), 2) + pad(Math.round(+color_rgb[2]).toString(16), 2);
    colors_hsb.push(color);
  }
  for (var i = colors_hsb.length*2/3; i < colors_hsb.length; i++) {
    var div = $("<div>");
    div.addClass("color-box-hsb");
    div.html(colors_hsb[i]);
    div.css("background", colors_hsb[i]);
    $(".container-hsb-3").append(div);
  }
  
});