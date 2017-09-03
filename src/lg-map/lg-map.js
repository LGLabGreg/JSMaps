// Copyright 2010-2017 - http://jsmaps.io
// License: http://jsmaps.io/support/license/
// Version 3.1.2
(function($) {

  /////////////////////////////
  //Create global LGMaps object
  /////////////////////////////
  window.LGMaps = window.LGMaps || {
    "maps": {}
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
  $.fn.LGMap = function(options) {


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
      'enablePanZoom': false,
      'mapFolder': 'maps/',
      'initialZoom': 1,
      'initialMapX': 0,
      'initialMapY': 0,
      'zoomSpeed': 1,
      'displayPreloader': true,
      'preloaderText': 'Loading map...',
      onReady: function() {},
      onStateClick: function() {},
      onStateOver: function() {},
      onStateOut: function() {}
    }, options);

    // Catch missing map data
    if (!settings.map) {
      throw new Error('LGMap plugin was called without a map property');
    }

    // Map element
    var mapWrapper = $(this);

    // Preloader
    if (settings.displayPreloader) {
      var preloader = $('<div class="lg-map-preloader">' + settings.preloaderText + '</div>').appendTo(mapWrapper);
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
    var map = $('<div class="lg-map"></div>').appendTo(mapWrapper);
    var mapId = 'lg-map-' + generateUUID();
    map.attr('id', mapId);
    var textArea;
    


    /////////////////////////////
    //Init map
    /////////////////////////////
    var mapFile = settings.mapFolder + settings.map + '.js';
    $.getScript(mapFile, function(data) {

      var mapData = window.LGMaps.maps[settings.map];
      var config = $.extend(settings, mapData.config);
      var paths = mapData.paths;
      var pins = mapData.pins;

      function renderMap() {

        /////////////////////////////
        //Config
        /////////////////////////////
        var mapWidth = config.mapWidth;
        var mapHeight = config.mapHeight;
        var ratio = mapWidth / mapHeight;
        var oMapWidth = mapWidth;

        // Pan/zoom
        if (config.enablePanZoom) {
          var mapConsole = $('<div class="lg-map-console"><ul><li class="lg-map-zoom-in"></li><li class="lg-map-zoom-out"></li><li class="lg-map-move-up"></li><li class="lg-map-move-down"></li><li class="lg-map-move-left"></li><li class="lg-map-move-right"></li><li class="lg-map-zoom-reset"></li></ul></div>').appendTo(mapWrapper);
        }

        // Check values are not outside of bounds
        config.initialZoom = config.initialZoom >= 1 ? config.initialZoom : 1;
        var minMapX = -(config.mapWidth/2);
        var maxMapX = config.mapWidth/2;
        var minMapY = -(config.mapHeight/2);
        var maxMapY = config.mapHeight/2;
        config.initialMapX = config.initialMapX >= minMapX && config.initialMapX <= maxMapX ? config.initialMapX : 0;
        config.initialMapY = config.initialMapY >= minMapY && config.initialMapY <= maxMapY ? config.initialMapY : 0;
        
        var mapZoom = config.initialZoom;
        var originW = mapWidth;
        var originH = mapHeight;
        var curMapX = config.initialMapX;
        var curMapY = config.initialMapY;
        var viewBoxCoords = [curMapX, curMapY, originW, originH];
        var maxTransX, maxTransY, minTransX, maxTransY;

        var maxX = 0;
        var scale = 1;
        var isOverState = false;
        var draggable = false;
        var _window = $(window);
        var dragStartX = 0;
        var dragStartY = 0;
        var curMouseX = 0;
        var curMouseY = 0;
        var mapOffset = 0;
        var backPan;

        var pan = {};
        var originViewBox = {};
        var isPanning = false;
        var readyToAnimate = true;

        /////////////////////////////
        //Mouse position
        /////////////////////////////
        if (config.displayMousePosition) {
          $('<div class="mouse-position"><div class="xPos">X: 0</div><div class="yPos">Y: 0</div><div class="mapXPos">Map X: 0</div><div class="mapYPos">Map Y: 0</div></div>').appendTo(mapWrapper);
          $('body').css('cursor', 'crosshair');
        }

        /////////////////////////////
        //Text area
        /////////////////////////////

        //Set initial default text
        if (config.stateClickAction === 'text') {
          // Create text div
          textArea = $('<div class="lg-map-text"></div>').appendTo(mapWrapper);
          textArea.html(config.defaultText);
          // Handle text left
          if (config.textPosition === 'left') {
            map.css({
              'left': 'auto',
              'right': '0'
            });
            mapConsole.css({
              'left': 'auto',
              'right': '10px'
            });
          }
        }

        /////////////////////////////
        //Groups
        /////////////////////////////

        if (config.groups && config.groups.length) {

          function mergeGroupPaths(members) {
            var merged = '';
            var separator = ' ';
            $.each(members, function(memberIndex, member) {
              $.each(paths, function(stateIndex, state) {
                if (state.name === member) {
                  merged += state.path + separator;
                }
              });
            });
            return merged;
          }
          function removeGroupMembers(paths, members) {
            var i;
            $.each(members, function(memberIndex, member) {
              i = paths.length;
              while (i--) {
                if (paths[i].name === member) {
                  paths.splice(i, 1);
                }
              }
            });
            return paths;
          }
          $.each(config.groups, function(index, group) {
            if (group.members && group.members.length) {
              group.path = mergeGroupPaths(group.members);
              paths.push(group);
              paths = removeGroupMembers(paths, group.members);
            }
          });
        }

        /////////////////////////////
        //Main map function
        /////////////////////////////
        function createMap() {


          r = new ScaleRaphael(mapId, config.mapWidth, config.mapHeight);
          var pathsAr = [];
          var regions = {};
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


          for (var i = 0, len = paths.length; i < len; i++) {

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
            path.node.id = i;
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
            var hitArea = r.path(paths[i].path).attr(hitAreaProperties);
            hitArea.node.id = i;
            hitArea.node.setAttribute('lg-map-name', paths[i].name);
            statesHitAreas.push(hitArea);

            hitArea.mouseover(function(e) {

              e.stopPropagation();
              var id = $(this.node).attr('id');

              if (paths[id].enable) {

                //Animate if not already the current state
                if (pathsAr[id] != current) {
                  pathsAr[id].animate({
                    fill: paths[id].hoverColor
                  }, 500);
                }

                //tooltip
                showTooltip(paths[id].name);

                // Trigger state mouseover callback
                if ($.isFunction(settings.onStateOver)) {
                  settings.onStateOver.call(this, paths[id]);
                }

              }
            });


            hitArea.mouseout(function(e) {

              var id = $(this.node).attr('id');

              if (paths[id].enable) {

                //Animate if not already the current state
                if (pathsAr[id] != current) {
                  pathsAr[id].animate({
                    fill: paths[id].color
                  }, 500);
                }

                removeTooltip();

                // Trigger state mouseout callback
                if ($.isFunction(settings.onStateOut)) {
                  settings.onStateOut.call(this, paths[id]);
                }

              }
            });

            hitArea.click(function(e) {

              var id = $(this.node).attr('id');

              if (paths[id].enable) {

                //Reset scrollbar
                if (config.stateClickAction === 'text') {
                  var t = textArea[0];
                  t.scrollLeft = 0;
                  t.scrollTop = 0;
                }

                //Animate previous state out
                if (current) {
                  var curid = $(current.node).attr('id');
                  current.animate({
                    fill: isPin ? pins[curid].color : paths[curid].color
                  }, 500);
                }
                isPin = false;

                //Animate next
                pathsAr[id].animate({
                  fill: paths[id].selectedColor
                }, 500);

                current = pathsAr[id];

                if (config.stateClickAction === 'text') {
                  textArea.html(paths[id].text);
                } else if (config.stateClickAction === 'url') {
                  window.open(paths[id].url, config.hrefTarget);
                }
              }

              // Trigger state click callback
              if ($.isFunction(settings.onStateClick)) {
                settings.onStateClick.call(this, paths[id]);
              }

            });

          }

          if (!config.displayMousePosition) {
            resizeMap();
            if (config.responsive) {
              $(window).resize(function() {
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

            pin.node.id = i;
            pin.node.setAttribute('lg-map-name', pins[i].name);
            statesHitAreas.push(pin);

            pin.mouseover(function(e) {

              e.stopPropagation();

              var id = $(this.node).attr('id');

              //Animate if not already the current state
              if (this != current) {
                this.animate({
                  fill: pins[id].hoverColor
                }, 500);
              }

              //tooltip
              showTooltip(pins[id].name);

              // Trigger state click callback
              if ($.isFunction(settings.onStateOver)) {
                settings.onStateOver.call(this, pins[id]);
              }

            });

            pin.mouseout(function(e) {

              var id = $(this.node).attr('id');

              //Animate if not already the current state
              if (this != current) {
                this.animate({
                  fill: pins[id].color
                }, 500);
              }

              removeTooltip();

              // Trigger state click callback
              if ($.isFunction(settings.onStateOut)) {
                settings.onStateOut.call(this, pins[id]);
              }

            });

            pin.click(function(e) {

              var id = $(this.node).attr('id');

              //Reset scrollbar
              if (config.stateClickAction === 'text') {
                var t = textArea[0];
                t.scrollLeft = 0;
                t.scrollTop = 0;
              }

              //Animate previous state out
              if (current) {
                var curid = $(current.node).attr('id');
                current.animate({
                  fill: isPin ? pins[curid].color : paths[curid].color
                }, 500);
              }
              isPin = true;

              //Animate next
              this.animate({
                fill: pins[id].selectedColor
              }, 500);

              current = this;

              if (config.stateClickAction === 'text') {
                textArea.html(pins[id].text);
              } else if (config.stateClickAction === 'url') {
                window.open(pins[id].url, config.hrefTarget);
              }

              // Trigger state click callback
              if ($.isFunction(settings.onStateClick)) {
                settings.onStateClick.call(this, pins[id]);
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

          r.changeSize(mapWidth, mapHeight, true, false);

        }

        /////////////////////////////
        //Tooltip
        /////////////////////////////
        function showTooltip(text) {
          if (isTouchDevice && isMobile) {
            return;
          }
          removeTooltip();
          map.after($('<div />').addClass('lg-map-tooltip'));
          $('.lg-map-tooltip').html(text);

          // Check tootip fits at the top
          calculateTooltipOffset();

          $('.lg-map-tooltip').fadeIn();
        }

        function calculateTooltipOffset() {
          tooltipOffsetY = -40;
          isTooltipBelowMouse = (mouseY - $('.lg-map-tooltip').height() + tooltipOffsetY) < 0;
          tooltipOffsetY = isTooltipBelowMouse ? 40 : tooltipOffsetY - $('.lg-map-tooltip').height();

          $('.lg-map-tooltip').css({
            left: mouseX - $('.lg-map-tooltip').width()/2,
            top: mouseY + tooltipOffsetY
          });
        }

        function removeTooltip() {
          map.next('.lg-map-tooltip').remove();
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
            $('.mouse-position .xPos').text('X: ' + relX);
            $('.mouse-position .yPos').text('Y: ' + relY);
            $('.mouse-position .mapXPos').text('Map X: ' + mapXPos);
            $('.mouse-position .mapYPos').text('Map Y: ' + mapYPos);
          }
        }

        // Set-up to use getMouseXY function onMouseMove
        //document.body.onmousemove = getMouseXY;
        mapWrapper.mousemove(function(event) {
          getMouseXY(event);
        });


        /////////////////////////////
        //Pan/Zoom
        /////////////////////////////
        function getViewBox() {
          originViewBox.x = viewBoxCoords[0];
          originViewBox.y = viewBoxCoords[1];
          originViewBox.width = viewBoxCoords[2];
          originViewBox.height = viewBoxCoords[3];
        }

        function animationFinished(x, y, w, h) {
          originViewBox.x = x;
          originViewBox.y = y;
          originViewBox.width = w;
          originViewBox.height = h;
          readyToAnimate = true;
        }

        //Pan start handler
        function panStart() {
          pan.dx = viewBoxCoords[0];
          pan.dy = viewBoxCoords[1];
          isPanning = true;
        };

        //Pan move handler
        function panMove(dx, dy) {
          pan.dx = viewBoxCoords[0] - dx / scale;
          pan.dy = viewBoxCoords[1] - dy / scale;
          var limitY = originH - viewBoxCoords[3];
          var limitX = originW - viewBoxCoords[2];
          if (pan.dx >= limitX) pan.dx = limitX;
          if (pan.dx <= 0) pan.dx = 0;
          if (pan.dy >= limitY) pan.dy = limitY;
          if (pan.dy <= 0) pan.dy = 0;
          r.setViewBox(pan.dx, pan.dy, viewBoxCoords[2], viewBoxCoords[3], false);
        };

        //Pan end handler
        function panEnd() {
          isPanning = false;
          viewBoxCoords[0] = pan.dx;
          viewBoxCoords[1] = pan.dy;
        };


        //Reset zoom and pan
        function resetMap(map) {

          mapZoom = 1;

          viewBoxCoords[0] = 0;
          viewBoxCoords[1] = 0;
          viewBoxCoords[2] = originW;
          viewBoxCoords[3] = originH;

          originViewBox.x = 0;
          originViewBox.y = 0;
          originViewBox.width = originW;
          originViewBox.height = originH;

          map.animateViewBox(originViewBox, viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], 250, animationFinished);

          readyToAnimate = true;

        }

        function enablePanZoom() {

          //Create invisible raphael rectangle for panning
          backPan = r.rect(viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3]).attr({
            fill: '#F00',
            'fill-opacity': 0,
            'stroke': 'none'
          }).data({
            disabled: false,
            'name': '_backpan'
          }).toBack();

          //Add panning event handlers
          backPan.drag(panMove, panStart, panEnd);

          //Stop window scroll if scrolling inside the map
          $('body').on({
            'mousewheel': function(e) {
              if (!$(e.target).parents('.lg-map').length) return;
              e.preventDefault();
              e.stopPropagation();
            }
          });

          //Add mouse wheel handler for zoom
          map.bind('mousewheel.map', function(event, delta, deltaX, deltaY) {

            if (readyToAnimate) {

              readyToAnimate = false;

              mapZoom += delta * config.zoomSpeed * (1 + mapZoom / 100);

              if (mapZoom <= 1) mapZoom = 1;
              if (mapZoom == 1) resetMap(r);
              if (mapZoom == 1 && delta < 0) return;

              getViewBox();
              var vWidth = viewBoxCoords[2];
              var vHeight = viewBoxCoords[3];
              viewBoxCoords[2] = originW / mapZoom;
              viewBoxCoords[3] = originH / mapZoom;
              viewBoxCoords[0] += (vWidth - viewBoxCoords[2]) / 2;
              viewBoxCoords[1] += (vHeight - viewBoxCoords[3]) / 2;
              r.animateViewBox(originViewBox, viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], 250, animationFinished);

              scale = originW / viewBoxCoords[2];
              scale = scale.toFixed(1);

              return false;
            }

          });


          //mouse move to change cursor for panning
          map.mousemove(function(event) {

            if (!isOverState && mapZoom != 1) {
              $(this).css('cursor', 'move');
            } else {
              $(this).css('cursor', 'default');
            }

          });


          //zoom in/out buttons
          function zoomMap() {
            getViewBox();

            var vWidth = viewBoxCoords[2];
            var vHeight = viewBoxCoords[3];
            viewBoxCoords[2] = originW / mapZoom;
            viewBoxCoords[3] = originH / mapZoom;
            viewBoxCoords[0] += (vWidth - viewBoxCoords[2]) / 2;
            viewBoxCoords[1] += (vHeight - viewBoxCoords[3]) / 2;

            r.animateViewBox(originViewBox, viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], 250, animationFinished);

            scale = originW / viewBoxCoords[2];
            scale = scale.toFixed(1);
          }


          mapConsole.find('.lg-map-zoom-in').add(mapConsole.find('.lg-map-zoom-out')).click(function(e) {

            if (readyToAnimate) {

              var zoomingOut = $(this).hasClass('lg-map-zoom-out');

              readyToAnimate = false;
              if (zoomingOut && mapZoom === 1) {
                resetMap(r);
                return;
              }

              var diff = .5 * config.zoomSpeed * (1 + mapZoom / 100);
              mapZoom = zoomingOut ? mapZoom - diff : mapZoom + diff;

              if (mapZoom <= 1) mapZoom = 1;
              zoomMap();
              
              e.stopPropagation();
              e.preventDefault();

            }

          });


          //Reset zoom and pan
          mapConsole.find('.lg-map-zoom-reset').click(function(e) {
            resetMap(r);
            e.stopPropagation();
            e.preventDefault();
          });

          //Manual panning not needed anymore
          mapConsole.find('.lg-map-move-up').click(function(e) {
            viewBoxCoords[1] -= 20;
            if (viewBoxCoords[1] <= 0) viewBoxCoords[1] = 0;
            r.setViewBox(viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], false);
            e.stopPropagation();
            e.preventDefault();
          });

          //move down
          mapConsole.find('.lg-map-move-down').click(function(e) {
            viewBoxCoords[1] += 20;
            var limitY = originH - viewBoxCoords[3];
            if (viewBoxCoords[1] >= limitY) viewBoxCoords[1] = limitY;
            r.setViewBox(viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], false);
            e.stopPropagation();
            e.preventDefault();
          });

          //move left
          mapConsole.find('.lg-map-move-left').click(function(e) {
            viewBoxCoords[0] -= 20;
            if (viewBoxCoords[0] <= 0) viewBoxCoords[0] = 0;
            r.setViewBox(viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], false);
            e.stopPropagation();
            e.preventDefault();
          });

          //move right
          mapConsole.find('.lg-map-move-right').click(function(e) {
            viewBoxCoords[0] += 20;
            var limitX = originW - viewBoxCoords[2];
            if (viewBoxCoords[0] >= limitX) viewBoxCoords[0] = limitX;
            r.setViewBox(viewBoxCoords[0], viewBoxCoords[1], viewBoxCoords[2], viewBoxCoords[3], false);
            e.stopPropagation();
            e.preventDefault();
          });

          // Display console
          mapConsole.fadeIn();
          if (config.initialZoom > 1) {
            zoomMap();
          }
          
        }

        createMap();
        layerMap();
        
        if (pins && pins.length) {
          createPins();
        }
        if (config.enablePanZoom && !config.displayMousePosition) {
          enablePanZoom();
        }

        if (preloader && preloader.length) {
          preloader.fadeOut();
        }

      }

      function clearMap() {
        // clear svg
        r.clear();
        // clear html
        if (mapWrapper.find('.lg-map-console').length) {
          mapWrapper.find('.lg-map-console').remove();
        }
        if (mapWrapper.find('.mouse-position').length) {
          mapWrapper.find('.mouse-position').remove();
        }
        if (mapWrapper.find('.lg-map-text').length) {
          mapWrapper.find('.lg-map-text').remove();
        }
        // Reset variables
        statesHitAreas = [];
        statesTexts = [];
      }

      renderMap();

      /////////////////////////////
      // stateClick event listener
      /////////////////////////////
      mapWrapper.on('stateClick', function(_, name) {
        $.each(statesHitAreas, function(index, elem) {
          pathName = elem.node.getAttribute('lg-map-name');
          if (name === pathName) {
            statesHitAreas[index].trigger('click');
          }
        });
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
        if (data.pins) {
          pins = data.pins;
        }
        if (data.paths) {
          paths = data.paths;
        }
        if (preloader && preloader.length) {
          preloader.fadeIn();
        }
        clearMap();
        renderMap();
      });

      /////////////////////////////
      // Map is ready
      /////////////////////////////
      settings.onReady.call(this);

    });// End getScript

  };// End plugin

})(jQuery);