// Copyright 2010-2017 - freehtml5maps.com
// License: http://freehtml5maps.com/license/
/*
"enable": true,
"name": "Europe",
"abbreviation": "",
"textX": 478,
"textY": 483,
"color": "#59798e",
"hoverColor": "#E32F02",
"selectedColor": "#feb41c",
"url": "http:freehtml5maps.com/",
"text": "<h1>Europe</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>",
"path": "http:freehtml5maps.com/",

"#59798e"
"#B12401"
"#9a9a68"
*/
$(function() {

  var colors = ["#59798e","#B12401","#9a9a68"];
  var curColor = 0;
  var totalColors = 3;
  var newPaths = [];

  var request = new XMLHttpRequest();
  request.open("GET", "maps/worldHigh.svg");
  request.setRequestHeader("Content-Type", "image/svg+xml");
  request.addEventListener("load", function(event) {

    var response = event.target.responseText;
    var doc = new DOMParser();
    var xml = doc.parseFromString(response, "image/svg+xml");
    var paths = xml.getElementsByTagName("path");
    var len = xml.getElementsByTagName("path").length;

    for(var i = 0; i < len; i++) {
      var path = paths[i];

      var obj = {
        "enable": true,
        "name": path.getAttribute('title'),
        "abbreviation": path.getAttribute('id'),
        "textX": 0,
        "textY": 0,
        "color": colors[curColor],
        "hoverColor": "#E32F02",
        "selectedColor": "#feb41c",
        "url": "http://jsmaps.io/",
        "text": "<h1>" + path.getAttribute('title') + "</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>",
        "path": path.getAttribute('d')
      }
      newPaths.push(obj);
      curColor = curColor < totalColors - 1 ? curColor + 1 : 0;
    }

    $('textarea').val(JSON.stringify(newPaths));

  });
  request.send();

  /*
  $.getScript('maps/canada.svg', function(data) {

    console.log(data)

    $.each(paths, function(key, val){

      val.name = val.name.replace(/[_-]/g, " ");
      
      var obj = {
        "enable": true,
        "name": val.name,
        "abbreviation": "",
        "textX": 0,
        "textY": 0,
        "color": colors[curColor],
        "hoverColor": "#E32F02",
        "selectedColor": "#feb41c",
        "url": "http:freehtml5maps.com/",
        "text": "<h1>" + val.name + "</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>",
        "path": val.path
      }
      newPaths.push(obj);
      curColor = curColor < totalColors - 1 ? curColor + 1 : 0;

    });

    $('textarea').val(JSON.stringify(newPaths));

  });
  */



});