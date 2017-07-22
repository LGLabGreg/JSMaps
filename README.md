# LGMap - v3.1.0

jQuery plugin to build deployable and zipped svg maps - available maps are located in src maps, maps currently available include:

* Africa
* Algeria
* Argentina
* Asia
* Australia
* Austria
* Belgium
* Brazil
* Canada
* Caribbean
* Central America
* China
* Continents
* Cuba
* Czech Republic
* Denmark
* Egypt
* Europe
* Finland
* France Regions
* France Departments
* Germany
* Hungary
* India
* Indonesia
* Iran
* Iraq
* Ireland
* Italy
* Japan
* Libya
* London Boroughs
* Mexico
* Middle East
* Monaco
* Netherlands
* New York City Boroughs
* New Zealand
* Nigeria
* North Africa
* Norway
* Palestine-Israel
* Poland
* Portugal
* Romania
* Russia
* Saudi Arabia
* Singapore
* South Africa
* South America
* South Korea
* Spain
* Sweden
* Switzerland
* Syria
* Taiwan
* Thailand
* Turkey
* Ukraine
* United Kingdom Regions
* USA
* Venezuela
* Yemen
* World


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

grunt zip --map=africa && grunt zip --map=asia && grunt zip --map=australia && grunt zip --map=belgium && grunt zip --map=brazil && grunt zip --map=canada && grunt zip --map=caribbean && grunt zip --map=china && grunt zip --map=continents && grunt zip --map=denmark && grunt zip --map=europe && grunt zip --map=france && grunt zip --map=germany && grunt zip --map=india && grunt zip --map=iraq && grunt zip --map=italy && grunt zip --map=libya && grunt zip --map=mexico && grunt zip --map=monaco && grunt zip --map=palestineIsrael && grunt zip --map=romania && grunt zip --map=singapore && grunt zip --map=southAfrica && grunt zip --map=southAmerica && grunt zip --map=spain && grunt zip --map=syria && grunt zip --map=turkey && grunt zip --map=ukraine && grunt zip --map=uk && grunt zip --map=usa && grunt zip --map=world && grunt zip --map=yemen && grunt zip --map=middleEast && grunt zip --map=centralAmerica && grunt zip --map=newZealand && grunt zip --map=europeanUnion && grunt zip --map=saudiArabia && grunt zip --map=japan && grunt zip --map=egypt && grunt zip --map=northAfrica && grunt zip --map=russia && grunt zip --map=newYorkCityBoroughs && grunt zip --map=southKorea && grunt zip --map=indonesia && grunt zip --map=netherlands && grunt zip --map=nigeria && grunt zip --map=franceDepartements && grunt zip --map=LondonBoroughs && grunt zip --map=venezuela && grunt zip --map=argentina && grunt zip --map=switzerland && grunt zip --map=taiwan && grunt zip --map=poland && grunt zip --map=algeria && grunt zip --map=sweden && grunt zip --map=cuba && grunt zip --map=austria && grunt zip --map=thailand && grunt zip --map=iran && grunt zip --map=norway && grunt zip --map=ireland && grunt zip --map=finland && grunt zip --map=portugal && grunt zip --map=czechRepublic && grunt zip --map=hungary

#### To do

* change pan/zoom icons