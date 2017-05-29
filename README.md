# lg-map
App to build deployable and zipped svg maps - available maps are located in src maps, maps currently available include:

* Africa
* Asia
* Australia
* Belgium
* Brazil
* Canada
* Caribbean
* China
* Continents
* Denmark
* Europe
* France
* Germany
* India
* Iraq
* Italy
* Libya
* Mexico
* Monaco
* Palestine-Israel
* Romania
* Singapore
* South Africa
* South America
* Spain
* Syria
* Turkey
* Ukraine
* United Kingdom Regions
* USA
* World

/////
Create all zips

["africa","asia","australia","belgium","brazil","canada","caribbean","china","continents","denmark","europe","france","germany","india","iraq","italy","libya","mexico","monaco","palestineIsrael","romania","singapore","southAfrica","southAmerica","spain","syria","turkey","ukraine","uk","usa", "world"]

var tasks = '';
for (map in mymaps) {
var task = 'grunt zip --map=' + mymaps[map] + ' && ';
tasks += task;
}
console.log(tasks);

grunt zip --map=africa && grunt zip --map=asia && grunt zip --map=australia && grunt zip --map=belgium && grunt zip --map=brazil && grunt zip --map=canada && grunt zip --map=caribbean && grunt zip --map=china && grunt zip --map=continents && grunt zip --map=denmark && grunt zip --map=europe && grunt zip --map=france && grunt zip --map=germany && grunt zip --map=india && grunt zip --map=iraq && grunt zip --map=italy && grunt zip --map=libya && grunt zip --map=mexico && grunt zip --map=monaco && grunt zip --map=palestineIsrael && grunt zip --map=romania && grunt zip --map=singapore && grunt zip --map=southAfrica && grunt zip --map=southAmerica && grunt zip --map=spain && grunt zip --map=syria && grunt zip --map=turkey && grunt zip --map=ukraine && grunt zip --map=uk && grunt zip --map=usa && grunt zip --map=world

/////

You can also download individual maps from http://freehtml5maps.com/

Documentation for map use can be found here: http://freehtml5maps.com/documentation/

### Installation
* $ npm install

### build - builds distributable map in build folder
* $ grunt build --map={mapName}

### dev - same as build + watches src folder + creates server on http://localhost:8000/
* $ grunt development --map={mapName}

### zip - builds and zips map in zip folder
* $ grunt zip --map={mapName}

### zipall - builds and zips lg-map package with all maps in zip folder
* $ grunt zip --map={mapName}


