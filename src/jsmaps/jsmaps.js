// Copyright 2010-2017 - http://jsmaps.io
// License: http://jsmaps.io/support/license/
// Version 3.1.3
(function($) {

  /////////////////////////////
  //Create global JSMaps object
  /////////////////////////////
  window.JSMaps = window.JSMaps || {
    "maps": {}
  }


  /////////////////////////////
  //Polyfills
  /////////////////////////////
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          k++;
        }
        return undefined;
      }
    });
  }
    
  /////////////////////////////
  //Mobile detection
  /////////////////////////////
  window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }
  var isMobile = window.mobileAndTabletcheck();
  var isTouchDevice = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;


  /////////////////////////////
  //Extend raphael methods
  /////////////////////////////
  Raphael.el.trigger = function(eventName) {
    for (var i = 0, len = this.events.length; i < len; i++) {
      if (this.events[i].name == eventName) {
        this.events[i].f.call(this);
      }
    }
  }

  /////////////////////////////
  //Generate unique id
  /////////////////////////////
  function generateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }


  /////////////////////////////
  //Plugin definition
  /////////////////////////////
  $.fn.JSMaps = function(options) {

    /////////////////////////////
    //Settings
    /////////////////////////////
    var settings = $.extend({
      'responsive': true,
      'offColor': '#ccc',
      'strokeColor': '#24221f',
      'offStrokeColor': '#444',
      'strokeWidth': 1,
      'abbreviationColor': '#f2f2f2',
      'abbreviationFontSize': 12,
      'displayAbbreviations': true,
      'displayAbbreviationOnDisabledStates': false,
      'autoPositionAbbreviations': false,
      'stateClickAction': 'text',
      'textPosition': 'right',
      'hrefTarget': '_blank',
      'textAreaWidth': 300,
      'textAreaHeight': 300,
      'pinSize': 10,
      'displayMousePosition': false,
      'displayViewBox': false,
      'enablePanZoom': false,
      'mapFolder': 'maps/',
      'initialZoom': 0,
      'initialMapX': 0,
      'initialMapY': 0,
      'retainPanZoomOnRedraw': false,
      'displayPreloader': true,
      'preloaderText': 'Loading map...',
      'disableTooltip': false,
      'selectElement': true,
      'selectElementDevices': ['mobile'],
      'selectElementDefaultText': 'Please select',
      onReady: function() {},
      onStateClick: function() {},
      onStateOver: function() {},
      onStateOut: function() {}
    }, options);

    // Catch missing map data
    if (!settings.map) {
      throw new Error('JSMaps plugin was called without a map property');
    }
    if (!window.JSMaps.maps[settings.map]) {
      throw new Error('The data for ' + settings.map + ' is missing');
    }

    // Map element
    var mapWrapper = $(this);

    // Preloader
    if (settings.displayPreloader) {
      var preloader = $('<div class="jsmaps-preloader">' + settings.preloaderText + '</div>').appendTo(mapWrapper);
    }

    var r;
    var mouseX = 0;
    var mouseY = 0;
    var current = null;
    var isPin = false;
    var textPosition;
    var win = $(window);
    var winWidth = win.width();
    var tooltipOffsetY = 0;
    var isTooltipBelowMouse = false;
    var statesHitAreas = [];
    var statesTexts = [];
    var containerWidth = mapWrapper.parent().width();
    var map = $('<div class="jsmaps"></div>').appendTo(mapWrapper);
    var mapId = 'jsmaps-' + generateUUID();
    map.attr('id', mapId);
    var textArea;
    var pathsAr = [];
    var pinsAr = [];
    var mapSelect = null;
    var panZoom;


    /////////////////////////////
    //Init map
    /////////////////////////////
    var mapData = window.JSMaps.maps[settings.map];
    var config = $.extend(settings, mapData.config);
    var paths = mapData.paths;
    var pins = mapData.pins;


    /////////////////////////////
    //Helpers
    /////////////////////////////
    function animatePaths(paths, ids, color) {
      $.each(ids, function(index, id) {
        paths[id].animate({
          fill: color
        }, 500);
      });
    }

    function setPathsGroups(paths) {
      var path;
      for (var i = 0, len = paths.length; i < len; i++) {
        path = paths[i];
        $.each(config.groups, function(index, group) {
          $.each(group.members, function(index, member) {
            if (path.name === member) {
              path.group = group.name;
              path.color = group.color;
              path.hoverColor = group.hoverColor;
              path.selectedColor = group.selectedColor;
            }
          });
        });
      }
      return paths;
    }

    function resetScrollBar() {
      if (config.stateClickAction === 'text') {
        var t = textArea[0];
        t.scrollLeft = 0;
        t.scrollTop = 0;
      }
    }
    
    /////////////////////////////
    //Render map
    /////////////////////////////
    function renderMap() {

      /////////////////////////////
      //Config
      /////////////////////////////
      var mapWidth = config.mapWidth;
      var mapHeight = config.mapHeight;
      var ratio = mapWidth / mapHeight;
      
      // Pan/zoom
      if (config.enablePanZoom) {
        var mapConsole = $('<div class=jsmaps-console><ul><li class=jsmaps-zoom-in><button type=button><div class="jsmaps-icon jsmaps-icon-plus"></div></button><li class=jsmaps-zoom-out><button type=button><div class="jsmaps-icon jsmaps-icon-minus"></div></button><li class=jsmaps-move-up><button type=button><div class="jsmaps-icon jsmaps-icon-chevron jsmaps-icon-chevron-up"></div></button><li class=jsmaps-move-down><button type=button><div class="jsmaps-icon jsmaps-icon-chevron jsmaps-icon-chevron-down"></div></button><li class=jsmaps-move-left><button type=button><div class="jsmaps-icon jsmaps-icon-chevron jsmaps-icon-chevron-left"></div></button><li class=jsmaps-move-right><button type=button><div class="jsmaps-icon jsmaps-icon-chevron jsmaps-icon-chevron-right"></div></button><li class=jsmaps-zoom-reset><button type=button><div class="jsmaps-icon jsmaps-icon-reset"></div></button></ul></div>').appendTo(mapWrapper);
      }

      
      /////////////////////////////
      //Mouse position
      /////////////////////////////
      if (config.displayMousePosition) {
        $('<div class="jsmaps-mouse-position"><div class="xPos">X: 0</div><div class="yPos">Y: 0</div></div>').appendTo(mapWrapper);
        $('body').css('cursor', 'crosshair');
      }

      /////////////////////////////
      //Mouse position
      /////////////////////////////
      if (config.displayViewBox) {
        $('<div class="jsmaps-viewbox-data"><div class="xPos">X: {0}</div><div class="yPos">Y: {0}</div><div class="zoom">Zoom: {0}</div></div>').appendTo(mapWrapper);
      }

      /////////////////////////////
      //Text area
      /////////////////////////////

      //Set initial default text
      if (config.stateClickAction === 'text') {
        // Create text div
        textArea = $('<div class="jsmaps-text"></div>').appendTo(mapWrapper);
        textArea.html(config.defaultText);
        // Handle text left
        if (config.textPosition === 'left') {
          map.css({
            'left': 'auto',
            'right': '0'
          });
          if (mapConsole) {
            mapConsole.css({
              'left': 'auto',
              'right': '10px'
            });
          }
          
        }
      }


      /////////////////////////////
      //Main map function
      /////////////////////////////
      function createMap() {

        r = Raphael(mapId, config.mapWidth, config.mapHeight);
        var path;
        var pathBBox;
        var textX;
        var textY;
        var pathProperties = {
          'stroke-width': config.strokeWidth || 1
        };
        var textProperties = {
          'font-family': 'Arial, sans-serif',
          'font-weight': 'bold',
          'font-size': config.abbreviationFontSize,
          'fill': config.abbreviationColor,
          'z-index': 1000
        };
        var hitAreaProperties = {
          'fill': '#f00',
          'stroke-width': 0,
          'opacity': 0
        };

        /////////////////////////////
        //Groups
        /////////////////////////////
        if (config.groups && config.groups.length) {
          $.each(config.groups, function(index, group) {
            group.set = r.set();
            group.groupIds = [];
          });
          paths = setPathsGroups(paths);
        }


        /////////////////////////////
        //Paths
        /////////////////////////////
        for (var i = 0, len = paths.length; i < len; i++) {

          paths[i].id = i;

          // Extend paths properties
          if (!paths[i].enable) {
            pathProperties = $.extend(pathProperties, {
              'fill': config.offColor,
              'stroke': config.offStrokeColor
            });
          } else {
            pathProperties = $.extend(pathProperties, {
              'fill': paths[i].color,
              'stroke': config.strokeColor,
              'id': i
            });
          }
          hitAreaProperties = $.extend(hitAreaProperties, {
            'cursor': paths[i].enable ? (config.displayMousePosition ? 'crosshair' : 'pointer') : 'default'
          });

          // Create path
          path = r.path(paths[i].path).attr(pathProperties);
          pathsAr.push(path);

          // Create text on enabled states unless disabled in config 
          if (paths[i].enable && config.displayAbbreviations || !paths[i].enable && config.displayAbbreviationOnDisabledStates) {
            if (config.autoPositionAbbreviations) {
              pathBBox = path.getBBox();
              textX = pathBBox.x + (pathBBox.width / 2) + paths[i].textX;
              textY = pathBBox.y + (pathBBox.height / 2) + paths[i].textY;
            }
            else {
              textX = paths[i].textX;
              textY = paths[i].textY;
            }
            statesTexts.push(r.text(textX, textY, paths[i].abbreviation).attr(textProperties));
          }

          // Create hit area layer
          var group;
          var hitArea;
          var groupIndex;
          if (paths[i].group) {
            group = config.groups.find(function(group, index) {
              if (paths[i].group === group.name) {
                groupIndex = index;
                group.groupIds.push(i);
                return group;
              }
            });
            hitArea = group.set.push(r.path(paths[i].path)).attr(hitAreaProperties);
            hitArea.data('group', group);
            hitArea.data('id', groupIndex);
            hitArea.name = group.name;
            hitArea.enable = group.enable;
          }
          else {
            hitArea = r.path(paths[i].path).attr(hitAreaProperties);
            hitArea.data('id', i);
            hitArea.name = paths[i].name;
            hitArea.enable = paths[i].enable;
          }

          statesHitAreas.push(hitArea);


          function hitAreaOverOut(e) {
            
            var id = this.data('id');
            var isGroup = !!this.data('group');
            var target = isGroup ? this.data('group') : paths[id];
            var enabled = target.enable;
            var isMouseover = e.type === 'mouseover';
            var color = isMouseover ? target.hoverColor : target.color;
            var callback = isMouseover ? settings.onStateOver : settings.onStateOut;

            if (enabled) {

              // Animate paths
              if (target != current) {
                var pathIds = isGroup ? this.data('group').groupIds : [id];
                animatePaths(pathsAr, pathIds, color);
              }
              
              // Tooltip
              isMouseover ? showTooltip(target.name) : removeTooltip();

              // Trigger callback
              if ($.isFunction(callback)) {
                callback.call(this, target);
              }
            }
          }
          hitArea.mouseover(hitAreaOverOut);
          hitArea.mouseout(hitAreaOverOut);


          hitArea.click(function(e) {

            if (panZoom && panZoom.isDragging()) return;

            var id = this.data('id');
            var isGroup = !!this.data('group');
            var target = isGroup ? this.data('group') : paths[id];
            var enabled = target.enable;
            var pathIds;
            var color;

            if (enabled) {

              //Reset scrollbar
              resetScrollBar();
              
              //Animate previous state out
              if (current && current != target) {
                pathIds = current.groupIds || [current.id];
                color = current.color;
                animatePaths(isPin ? pinsAr : pathsAr, pathIds, current.color);
              }
              isPin = false;

              //Animate next
              if (target != current) {
                pathIds = isGroup ? this.data('group').groupIds : [id];
                animatePaths(pathsAr, pathIds, target.selectedColor);
                if (mapSelect) {
                  mapSelect.val(target.name);
                }
              }

              current = target;
              
              if (config.stateClickAction === 'text') {
                textArea.html(target.text);
              } else if (config.stateClickAction === 'url') {
                window.open(target.url, config.hrefTarget);
              }
            }

            // Trigger state click callback
            if ($.isFunction(settings.onStateClick)) {
              settings.onStateClick.call(this, target);
            }

          });

        }

        if (!config.displayMousePosition) {
          resizeMap();
          r.setViewBox(0, 0, config.mapWidth, config.mapHeight);
          //resetMap(r);
          if (config.responsive) {
            $(window).on('resize', function() {
              resizeMap();
            });
          }
        }

      }

      /////////////////////////////
      //Arrange order of elements
      /////////////////////////////
      function layerMap() {
        statesTexts.forEach(function(element) {
          element.toFront();
        });
        statesHitAreas.forEach(function(element) {
          element.toFront();
        });
      }

      /////////////////////////////
      //Main pins function
      /////////////////////////////
      function createPins() {

        for (var i = 0; i < pins.length; i++) {

          pins[i].id = i;

          var pinattrs = {
            'cursor': 'pointer',
            'fill': pins[i].color,
            'stroke': config.strokeColor,
            'id': i
          };

          var pin;

          // If image
          if (pins[i].src && pins[i].src !== '') {
            var transformRatio = pins[i].pinWidth / pins[i].srcWidth;
            pin = r.image(pins[i].src, 0, 0, pins[i].srcWidth, pins[i].srcHeight).attr(pinattrs);
            var transformX = -pins[i].srcWidth / 2 + pins[i].xPos;
            var transformY = -pins[i].srcHeight / 2 + pins[i].yPos;
            pin.animate({
              transform: 'T' + transformX + ',' + transformY + ' S' + transformRatio
            }, 0);
          }
          // or circle
          else {
            pin = r.circle(pins[i].xPos, pins[i].yPos, pins[i].pinWidth || config.pinSize).attr(pinattrs);
          }

          pin.data('id', i);
          pin.name =  pins[i].name;
          pin.enable =  pins[i].enable;
          pinsAr.push(pin);
          statesHitAreas.push(pin);

          function pinOverOut(e) {

            var id = this.data('id');
            var target = pins[id];
            var isMouseover = e.type === 'mouseover';
            var color = isMouseover ? target.hoverColor : target.color;
            var callback = isMouseover ? settings.onStateOver : settings.onStateOut;

            //Animate if not already the current state
            if (target != current) {
              animatePaths(pinsAr, [id], color);
            }

            // Tooltip
            isMouseover ? showTooltip(target.name) : removeTooltip();

            // Trigger callback
            if ($.isFunction(callback)) {
              callback.call(this, target);
            }
          }
          pin.mouseover(pinOverOut);
          pin.mouseout(pinOverOut);

          pin.click(function(e) {

            if (panZoom && panZoom.isDragging()) return;

            var id = this.data('id');
            var target = pins[id];

            //Reset scrollbar
            resetScrollBar();

            if (current) {
              pathIds = current.groupIds || [current.id];
              animatePaths(isPin ? pinsAr : pathsAr, pathIds, current.color);
            }
            isPin = true;

            //Animate next
            animatePaths(pinsAr, [id], target.selectedColor);
            current = target;

            if (config.stateClickAction === 'text') {
              textArea.html(target.text);
            } else if (config.stateClickAction === 'url') {
              window.open(target.url, config.hrefTarget);
            }

            // Trigger state click callback
            if ($.isFunction(settings.onStateClick)) {
              settings.onStateClick.call(this, target);
            }

          });

        }
      }


      /////////////////////////////
      //Resize map functions
      /////////////////////////////
      function resizeMap() {

        containerWidth = mapWrapper.parent().width();
        winWidth = win.width();

        if (config.stateClickAction === 'text') {

          //Force text to bottom on mobile
          textPosition = winWidth >= 767 ? config.textPosition : 'bottom';

          if (textPosition === 'bottom') {
            mapWidth = containerWidth;
            mapHeight = mapWidth / ratio;
            mapWrapper.css({
              'width': mapWidth + 'px',
              'height': mapHeight + textArea.height() + 'px'
            });
            textArea.css({
              'width': mapWidth + 'px',
              'marginTop': mapHeight + 'px',
              'height': 'auto'
            });
          } else {
            mapWidth = containerWidth - config.textAreaWidth;
            mapHeight = mapWidth / ratio;
            mapWrapper.css({
              'width': winWidth >= 767 ? mapWidth + config.textAreaWidth + 'px' : mapWidth + 'px',
              'height': mapHeight + 'px'
            });
            textArea.css({
              'width': winWidth >= 767 ? config.textAreaWidth + 'px' : mapWidth + 'px',
              'height': winWidth >= 767 ? mapHeight + 'px' : config.textAreaHeight,
              'display': 'inline',
              'float': winWidth >= 767 ? config.textPosition : 'none',
              'marginTop': winWidth >= 767 ? 0 : mapHeight + 'px'
            });
          }
        } else {
          mapWidth = containerWidth;
          mapHeight = mapWidth / ratio;
          mapWrapper.css({
            'width': mapWidth + 'px',
            'height': mapHeight + 'px'
          });
        }

        r.setSize(mapWidth, mapHeight);
      }

      /////////////////////////////
      //Tooltip
      /////////////////////////////
      function showTooltip(text) {
        if (isTouchDevice && isMobile || config.disableTooltip) {
          return;
        }
        removeTooltip();
        map.after($('<div />').addClass('jsmaps-tooltip'));
        $('.jsmaps-tooltip').html(text);

        // Check tootip fits at the top
        calculateTooltipOffset();

        $('.jsmaps-tooltip').fadeIn();
      }

      function calculateTooltipOffset() {
        tooltipOffsetY = -40;
        isTooltipBelowMouse = (mouseY - $('.jsmaps-tooltip').height() + tooltipOffsetY) < 0;
        tooltipOffsetY = isTooltipBelowMouse ? 40 : tooltipOffsetY - $('.jsmaps-tooltip').height();

        $('.jsmaps-tooltip').css({
          left: mouseX - $('.jsmaps-tooltip').width()/2,
          top: mouseY + tooltipOffsetY
        });
      }

      function removeTooltip() {
        map.next('.jsmaps-tooltip').remove();
      }

      /////////////////////////////
      //Select
      /////////////////////////////
      function createSelect() {
        // Create element
        var markup = $('<div class="jsmaps-select"><select><option value="default"></option></select><div class="jsmaps-select-icon"><div class="jsmaps-icon jsmaps-icon-chevron jsmaps-icon-chevron-down jsmaps-theme-light"></div></div></div>')
          .insertBefore(mapWrapper);
        // Add classes
        if (config.selectElementDevices && config.selectElementDevices.length) {
          markup.addClass(config.selectElementDevices.join(' '));
        }
        else {
          markup.addClass('all-devices');
        }
        // Build select
        mapSelect = markup.find('select');
        mapSelect.find('option[value="default"]').text(config.selectElementDefaultText);
        // Sort alphabetically
        var sorted = statesHitAreas.sort(function(a, b) {
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
        // Remove disabled
        sorted = sorted.filter(function(item){
          return item.enable;
        });
        // Add options
        sorted.forEach(function(element) {
          $('<option>')
            .val(element.name)
            .text(element.name)
            .appendTo(mapSelect);
        });
        // Event listeners
        mapSelect.on('change', function() {
          if (this.value !== 'default') {
            mapWrapper.trigger('stateClick', this.value);
          }
          else {
            mapWrapper.trigger('stateUnClick');
          }
        });
      }

      /////////////////////////////
      //Mouse events
      /////////////////////////////


      // Main function to retrieve mouse x-y pos.s
      function getMouseXY(e) {

        var scrollTop = $(window).scrollTop();

        if (e && e.pageX) {
          mouseX = e.pageX;
          mouseY = e.pageY - scrollTop;
        } else {
          mouseX = event.clientX + document.body.scrollLeft;
          mouseY = event.clientY + document.body.scrollTop;
        }
        // catch possible negative values
        if (mouseX < 0) {
          mouseX = 0;
        }
        if (mouseY < 0) {
          mouseY = 0;
        }

        calculateTooltipOffset();

        if (config.displayMousePosition) {
          var scrollTop = win.scrollTop();
          var offset = mapWrapper.offset();
          var relX = Math.round(mouseX - offset.left);
          var relY = Math.round(mouseY - offset.top + scrollTop);
          var mapXPos = Math.round(relX - config.mapWidth / 2);
          var mapYPos = Math.round(relY - config.mapHeight / 2);
          $('.jsmaps-mouse-position .xPos').text('X: ' + relX);
          $('.jsmaps-mouse-position .yPos').text('Y: ' + relY);
          $('.jsmaps-mouse-position .mapXPos').text('Map X: ' + mapXPos);
          $('.jsmaps-mouse-position .mapYPos').text('Map Y: ' + mapYPos);
        }
      }

      // Set-up to use getMouseXY function onMouseMove
      //document.body.onmousemove = getMouseXY;
      mapWrapper.mousemove(function(event) {
        getMouseXY(event);
      });

      function enablePanZoom() {

        $('body').on('mousewheel DOMMouseScroll', function(e){
          if (!$(e.target).parents('.jsmaps').length) return;
          e.preventDefault();
          e.stopPropagation();
        });

        panZoom = r.panzoom({
          displayViewBox: config.displayViewBox,
          initialZoom: config.initialZoom,
          initialPosition: {
            x: config.initialMapX,
            y: config.initialMapY
          },
          originSize: {
            width: config.mapWidth,
            height: config.mapHeight
          }
        });
        panZoom.enable();

        mapConsole.on('click', function(e) {
          switch($(e.target).parents('li').prop('class')) {
            case 'jsmaps-zoom-in':
              panZoom.zoomIn(1);
              break;
            case 'jsmaps-zoom-out':
              panZoom.zoomOut(1);
              break;
            case 'jsmaps-zoom-reset':
              panZoom.zoomReset();
              break;
            case 'jsmaps-move-up':
              panZoom.pan(0, 20);
              break;
            case 'jsmaps-move-down':
              panZoom.pan(0, -20);
              break;
            case 'jsmaps-move-left':
              panZoom.pan(20, 0);
              break;
            case 'jsmaps-move-right':
              panZoom.pan(-20, 0);
              break;
          }
        })

        // Display console
        mapConsole.fadeIn();
        
      }

      createMap();
      layerMap();
      
      if (pins && pins.length) {
        createPins();
      }
      if (config.enablePanZoom && !config.displayMousePosition) {
        enablePanZoom();
      }
      if (config.selectElement) {
        createSelect();
      }
      if (preloader && preloader.length) {
        preloader.fadeOut();
      }

      mapWrapper.fadeIn();

    
    }

    function clearMap() {
      // clear svg
      r.remove();
      // clear html
      if (mapWrapper.find('.jsmaps-console').length) {
        mapWrapper.find('.jsmaps-console').remove();
      }
      if (mapWrapper.find('.jsmaps-mouse-position').length) {
        mapWrapper.find('.jsmaps-mouse-position').remove();
      }
      if (mapWrapper.find('.jsmaps-text').length) {
        mapWrapper.find('.jsmaps-text').remove();
      }
      if (mapWrapper.siblings('.jsmaps-select').length) {
        mapWrapper.siblings('.jsmaps-select').remove();
      }
      // Reset variables
      if (panZoom) {
        panZoom = null;
      }
      pathsAr = [];
      statesHitAreas = [];
      statesTexts = [];
      renderMap();
    }

    renderMap();

    /////////////////////////////
    // stateClick event listener
    /////////////////////////////
    mapWrapper.on('stateClick', function(_, name) {
      $.each(statesHitAreas, function(index, elem) {
        pathName = elem.name;
        if (name === pathName) {
          var target = statesHitAreas[index].type === 'set' ? statesHitAreas[index][0] : statesHitAreas[index];
          target.trigger('click');
        }
      });
    });

    mapWrapper.on('stateUnClick', function() {
      if (current) {
        var pathIds = current.groupIds || [current.id];
        animatePaths(isPin ? pinsAr : pathsAr, pathIds, current.color);
        //reset initial default text
        if (config.stateClickAction === 'text') {
          textArea.html(config.defaultText);
        }
        current = null;
      }
    });

    /////////////////////////////
    // reDraw event listener
    /////////////////////////////
    mapWrapper.on('reDraw', function(_, data) {
      if (!data) {
        return;
      }
      if (data.config) {
        config = $.extend(config, data.config);
      }
      if (panZoom && config.retainPanZoomOnRedraw) {
        config.initialZoom = panZoom.getCurrentZoom();
        config.initialMapX = panZoom.getCurrentPosition().x;
        config.initialMapY = panZoom.getCurrentPosition().y;
      }
      if (data.pins) {
        pins = data.pins;
      }
      if (data.paths) {
        paths = data.paths;
      }
      if (preloader && preloader.length) {
        preloader.fadeIn('fast', clearMap);
      }
      else {
        clearMap();
      }
    });

    /////////////////////////////
    // Map is ready
    /////////////////////////////
    settings.onReady.call(this);

  };// End plugin

})(jQuery);