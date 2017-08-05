// Copyright 2010-2017 - jsmaps.io
// License: http://jsmaps.io/support/license/

// First convert the svg to json: http://www.utilities-online.info/xmltojson/
$(function() {

  var colors = ["#59798e","#B12401","#9a9a68"];
  var curColor = 0;
  var totalColors = colors.length;
  var newPaths = [];

  $.getJSON("maps/colombia.json", function(json) {

    var states = json.svg.g.path;

    console.log(states.length)

    for(state in states) {

      var name = states[state].desc.name;

      if (name.toLowerCase() !== 'null') {

        var obj = {
          "enable": true,
          "name": name,
          "abbreviation": states[state].desc['hc-a2'] || "",
          "textX": 0,
          "textY": 0,
          "color": colors[curColor],
          "hoverColor": "#E32F02",
          "selectedColor": "#feb41c",
          "url": "http://jsmaps.io/",
          "text": "<h1>" + name + "</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>",
          "path": states[state]['-d']
        }

        newPaths.push(obj);
        curColor = curColor < totalColors - 1 ? curColor + 1 : 0;
      }

    }

    $('textarea').val(JSON.stringify(newPaths));

  });


});