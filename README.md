# lg-svg-map
App to build deployable and zipped svg maps - available maps are located in src maps, maps currently available include:

* Africa
* Australia
* Asia
* Belgium
* Brazil
* Caribbean
* France
* Germany
* India
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


