# JSMaps - v3.1.3

jQuery plugin to build deployable and zipped svg maps - available maps are located in src maps.

You can also download individual maps from http://jsmaps.io/

Documentation: http://jsmaps.io/support/documentation

License: http://jsmaps.io/support/license

Demo: http://jsmaps.io/demo

### Installation
* $ npm install

### build - builds distributable map in build folder
* $ grunt build --map={mapName}

### dev - same as build + watches src folder + creates server on http://localhost:8000/
* $ grunt development --map={mapName}

### zip - builds and zips map in zip folder
* $ grunt zip --map={mapName}


### Create all zips

grunt zip --map=africa && grunt zip --map=asia && grunt zip --map=australia && grunt zip --map=belgium && grunt zip --map=brazil && grunt zip --map=canada && grunt zip --map=caribbean && grunt zip --map=china && grunt zip --map=continents && grunt zip --map=denmark && grunt zip --map=europe && grunt zip --map=france && grunt zip --map=germany && grunt zip --map=india && grunt zip --map=iraq && grunt zip --map=italy && grunt zip --map=libya && grunt zip --map=mexico && grunt zip --map=monaco && grunt zip --map=palestineIsrael && grunt zip --map=romania && grunt zip --map=singapore && grunt zip --map=southAfrica && grunt zip --map=southAmerica && grunt zip --map=spain && grunt zip --map=syria && grunt zip --map=turkey && grunt zip --map=ukraine && grunt zip --map=uk && grunt zip --map=usa && grunt zip --map=world && grunt zip --map=yemen && grunt zip --map=middleEast && grunt zip --map=centralAmerica && grunt zip --map=newZealand && grunt zip --map=europeanUnion && grunt zip --map=saudiArabia && grunt zip --map=japan && grunt zip --map=egypt && grunt zip --map=northAfrica && grunt zip --map=russia && grunt zip --map=newYorkCityBoroughs && grunt zip --map=southKorea && grunt zip --map=indonesia && grunt zip --map=netherlands && grunt zip --map=nigeria && grunt zip --map=franceDepartements && grunt zip --map=LondonBoroughs && grunt zip --map=venezuela && grunt zip --map=argentina && grunt zip --map=switzerland && grunt zip --map=taiwan && grunt zip --map=poland && grunt zip --map=algeria && grunt zip --map=sweden && grunt zip --map=cuba && grunt zip --map=austria && grunt zip --map=thailand && grunt zip --map=iran && grunt zip --map=norway && grunt zip --map=ireland && grunt zip --map=finland && grunt zip --map=portugal && grunt zip --map=czechRepublic && grunt zip --map=hungary && grunt zip --map=slovekia && grunt zip --map=luxembourg && grunt zip --map=croatia && grunt zip --map=bulgaria && grunt zip --map=belarus && grunt zip --map=slovenia && grunt zip --map=lithuania && grunt zip --map=centralAfricanRepublic && grunt zip --map=israel && grunt zip --map=kenya && grunt zip --map=morocco && grunt zip --map=uae && grunt zip --map=philippines && grunt zip --map=malaysia && grunt zip --map=pakistan && grunt zip --map=colombia && grunt zip --map=greece && grunt zip --map=bangladesh && grunt zip --map=vietnam && grunt zip --map=peru && grunt zip --map=qatar && grunt zip --map=kazakhstan && grunt zip --map=kuwait && grunt zip --map=puertoRico && grunt zip --map=ecuador && grunt zip --map=angola && grunt zip --map=sudan && grunt zip --map=florida && grunt zip --map=california && grunt zip --map=sriLanka && grunt zip --map=usaTerritories && grunt zip --map=ethiopia && grunt zip --map=texas && grunt zip --map=dominicanRepublic && grunt zip --map=newYork && grunt zip --map=guatemala && grunt zip --map=illinois && grunt zip --map=uzbekistan && grunt zip --map=worldJammuKashmir && grunt zip --map=pennsylvania && grunt zip --map=ohio && grunt zip --map=georgia && grunt zip --map=michigan && grunt zip --map=northCarolina && grunt zip --map=newJersey && grunt zip --map=myanmar && grunt zip --map=virginia && grunt zip --map=washington && grunt zip --map=massachusetts && grunt zip --map=oman && grunt zip --map=arizona && grunt zip --map=costaRica && grunt zip --map=indiana && grunt zip --map=panama && grunt zip --map=tennessee && grunt zip --map=missouri && grunt zip --map=maryland && grunt zip --map=uruguay && grunt zip --map=wisconsin && grunt zip --map=lebanon && grunt zip --map=minnesota && grunt zip --map=tanzania && grunt zip --map=colorado && grunt zip --map=macau && grunt zip --map=alabama && grunt zip --map=northeastUSA && grunt zip --map=southCarolina && grunt zip --map=louisiana && grunt zip --map=kentucky && grunt zip --map=oregon && grunt zip --map=oklahoma && grunt zip --map=connecticut && grunt zip --map=iowa && grunt zip --map=mississippi && grunt zip --map=arkansas && grunt zip --map=utah && grunt zip --map=kansas && grunt zip --map=nevada && grunt zip --map=newMexico && grunt zip --map=nebraska && grunt zip --map=westVirginia && grunt zip --map=idaho && grunt zip --map=hawaii && grunt zip --map=maine && grunt zip --map=newHampshire && grunt zip --map=rhodeIsland && grunt zip --map=montana && grunt zip --map=delaware && grunt zip --map=southDakota && grunt zip --map=alaska && grunt zip --map=northDakota && grunt zip --map=vermont && grunt zip --map=wyoming && grunt zip --map=ghana && grunt zip --map=tunisia && grunt zip --map=democraticRepublicCongo && grunt zip --map=jordan && grunt zip --map=serbia && grunt zip --map=azerbaijan && grunt zip --map=turkmenistan && grunt zip --map=coteIvoire && grunt zip --map=bolivia && grunt zip --map=bahrain && grunt zip --map=cameroon && grunt zip --map=latvia && grunt zip --map=paraguay && grunt zip --map=elSalvador && grunt zip --map=zimbabwe && grunt zip --map=uganda && grunt zip --map=estonia && grunt zip --map=honduras && grunt zip --map=zambia && grunt zip --map=nepal && grunt zip --map=trinidadAndTobago && grunt zip --map=usaCanada && grunt zip --map=northAmerica



# Installation

All our maps come with a working example in your download, refer to these files for examples.

## Files

Start by including the _jsmaps_ and _maps_ folders in the root of your project i.e. the same directory as the html file that will hold your map.

## Jquery

Jquery is required for this map to work, if jquery is already included in your page you don’t need to include it again. If not, include the following script in the head section of your page:

<pre class="lg-code-block"><script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
</pre>

## Map scripts

Include the following map files in the head section of your page:

<pre class="lg-code-block"><link href="jsmaps/jsmaps.css" rel="stylesheet" type="text/css" />
<script src="jsmaps/jsmaps-libs.js" type="text/javascript"></script>
<script src="jsmaps/jsmaps-panzoom.js" type="text/javascript"></script>
<script src="jsmaps/jsmaps.min.js" type="text/javascript"></script>
<script src="maps/world.js" type="text/javascript"></script>
</pre>

**Note:** jsmaps-panzoom.js is used by the pan/zoom functionality, if you don’t use this option, you don’t have to load this file.  
**Note:** maps/world.js is the location of the map data, it can be any map and the location is up to you, but it must be loaded last.

## Map markup

Add the following HTML in the body tag of your page where you want to include the map. Note that the map size will be defined by its parent container size, so if you have a responsive website, include the following markup directly inside a responsive container.

<pre class="lg-code-block"><div class="jsmaps-wrapper" id="world-map"></div>
</pre>

**Note:** the _jsmaps-wrapper_ class is required, you may choose any id to use as a target when initiating the map plugin.

## Javascript

Add the following javascript just before the closing body tag:

<pre class="lg-code-block">  <script type="text/javascript">

    $(function() {

      $('#world-map').JSMaps({
        map: 'world'
      });

    });

  </script>
</pre>

# Settings

## Global settings

Here is a list of the global settings and their default values, you can override these when initiating the plugin, see below the list for an example:

<pre class="lg-code-block">**"mapWidth" : 800**
**"mapHeight" : 600**
These are the original svg dimensions and are there purely so the plugin knows the map ratio when resizing the map. Do not change these values. The map will always fill the space available in the container you put it in, so to change the size of the map, change the size of its container.

**"responsive" : true**
If true, will trigger a window resize listener

**"offColor" : '#ccc'**
Color when a state is disabled

**"strokeColor" : '#24221f'**
Stroke color for states

**"offStrokeColor" : '#444'**
Stroke color for disabled states

**"strokeWidth": 1**
Size of te stroke in pixels

**"abbreviationColor" : '#f2f2f2'**
Text color of state abbreviations

**"abbreviationFontSize" : 12**
Font size of state abbreviations

**"displayAbbreviations" : true**
Show/hide abbreviations on states

**"displayAbbreviationOnDisabledStates": false**
Show/hide abbreviations on disabled states

**"autoPositionAbbreviations": false**
Position abbreviations automatically using Raphael getBBox. If true textX/textY state properties become offset values

**"stateClickAction" : "text"**
Action to take when state is clicked, can be either _text_, _url_ or _none_

**"textPosition" : "right"**
Position of textarea if stateClickAction is set to text, can be either _left_, _right_ or _bottom_

**"hrefTarget": '_blank'**
href target when state is clicked if using urls

**"textAreaWidth" : 300**
Width of text area if to the right of the map, if bottom textarea will be width of map

**"textAreaHeight" : 300**
Height of textarea if at bottom, if to the right height will be height of the map

**"pinSize" : 10**
Size of pins on the map

**"displayMousePosition": false**
If true, displays current mouse position on screen to help position pins

**"displayViewBox": false**
If true, displays current map position and zoom level, this is handy to figure out initialZoom/initialMapX/initialMapY

**"enablePanZoom": false**
Enable pan/zoom functionality

**"initialZoom": 1**
The initial zoom level of the map, default is 1 which is the minimum, any number greater will zoom deeper

**"initialMapX": 0**
The initial part of the map to be displayed in the center X of the view if initialZoom is greater than 1, to obtain this number, set the displayViewBox and using the pan/zoom functionality, set the map to your desired initial position and zoom level, the initialMapX/initialMapY/Zoom values will be displayed in the top right corner of the map

**"initialMapY": 0**
The initial part of the map to be displayed in the center Y of the view if initialZoom is greater than 1, to obtain this number, set the displayViewBox and using the pan/zoom functionality, set the map to your desired initial position and zoom level, the initialMapX/initialMapY/Zoom values will be displayed in the top right corner of the map

**"retainPanZoomOnRedraw": true**
If true, the map position and zoom level will be retained when using the reDraw event

**"displayPreloader": true**
Whether to display a preloader while the map renders.

**"preloaderText": "Loading map..."**
Text to display in the preloader, set this to an empty string if you want to use a css spinner instead.

**"disableTooltip": false**
Disable tooltip

**"groups": []**
List of groups of state/regions, visit our [forum tutorial](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/creating-groups/) for more information.

**"selectElement": true**
Display a select element above the map, including all regions/states, groups and pins.

**"selectElementDevices": ['mobile']**
Filter which device to display the select element on: ['mobile', 'tablet', 'desktop']

**"selectElementDefaultText": "Please select"**
Text value of the default select option
</pre>

**Tip:** See how to override global settings in our [forum](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/overriding-global-settings/)

## Individual state/region settings

All the state/region settings for the map are located in _maps/{mapName}.js_ and need to be altered in that file:

<pre class="lg-code-block">**"enable": true**
Set to false if you don't want the state/region to respond to mouse events

**"name": "Bangladesh"**
Text displayed in tooltip, supports html

**"abbreviation": ""**
Abbreviation (if available) displayed on the state/region

**"textX": 0**
Abbreviation X position, set the global displayMousePosition option to true, mouse over the map and use the X value displayed in the top left of the screen

**"textY": 0**
Abbreviation Y position, set the global displayMousePosition option to true, mouse over the map and use the Y value displayed in the top left of the screen

**"color": "#59798e"**
Default state/region background color

**"hoverColor": "#E32F02"**
State/region hover background color

**"selectedColor": "#feb41c"**
State/region selected background color

**"url": "http:jsmaps.io/"**
URL to redirect to when State/region is clicked (if global stateClickAction = url)

**"text": "<h1>Bangladesh</h1><br /><p>Lorem ipsum dolor sit amet.</p>"**
Text displayed in textarea when State/region is clicked (if global stateClickAction = text)
</pre>

## Individual pin settings

All the pin settings for the map are located in _maps/{mapName}.js_ and need to be altered in that file:

<pre class="lg-code-block">**"name": "Paris"**
Text displayed in tooltip, supports html

**"abbreviation": ""**
Abbreviation (if available) displayed on the state/region

**"xPos": 594**
Pin X position (see global displayMousePosition to figure out this value)

**"yPos": 592**
Pin Y position (see global displayMousePosition to figure out this value)

**"color": "#59798e"**
Default pin background color

**"hoverColor": "#E32F02"**
Pin hover background color

**"selectedColor": "#feb41c"**
Pin selected background color

**"url": "http:jsmaps.io/"**
URL to redirect to when pin is clicked (if global stateClickAction = url)

**"text": "<h1>Paris</h1><br /><p>Lorem ipsum dolor sit amet.</p>"**
Text displayed in textarea when pin is clicked (if global stateClickAction = text)
</pre>

**Tip:** See how to add pins in our [forum](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/adding-pins/)

# Events

The map includes custom events which you can trigger externally:

<pre class="lg-code-block">**reDraw**
Trigger a map redraw, see our [tutorial](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/redraw-map-new-data/) for more information

**stateClick**
**stateUnClick**
Trigger click/unclick events on state/regions or groups, see our [tutorial](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/clickunclick-states-external-code/) for more information
</pre>

**Tip:** You can see a usage example in our [forum](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/using-event-callbacks/)

# Callbacks

The map will dispatch event callbacks so you can add custom interactivity to your project, see below for the full list.

<pre class="lg-code-block">**onReady**
The map is fully rendered and ready for interactions

**onStateClick**
A state/region has been clicked, data is passed to the listener which includes all data defined for the state/region in _maps/{mapName}.js_

**onStateOver**
The mouse enters a state, data is passed to the listener which includes all data defined for the state/region in _maps/{mapName}.js_

**onStateOut**
The mouse leaves a state, data is passed to the listener which includes all data defined for the state/region in _maps/{mapName}.js_
</pre>

**Tip:** You can see a usage example in our [forum](https://web.archive.org/web/20191215045356/https://www.jsmaps.io/topic/using-event-callbacks/)


