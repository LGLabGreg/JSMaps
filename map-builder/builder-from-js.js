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

  $.getScript('maps/world.js', function(data) {

    $.each(paths, function(key, val){

      val.name = val.name.replace(/[_-]/g, ' ');
      val.name = val.name.replace(/[0-9]/g, '');
      
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



});