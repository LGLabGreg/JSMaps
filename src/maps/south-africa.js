////////////////////
//Version 2.0.3
////////////////////

////////////////////
//Global config
////////////////////
var config = {
	//The original map width, usually found in original SVG file, don't change this unless you are creating a new map
	mapWidth : 625.460,
	//The original map height, usually found in original SVG file, don't change this
	mapHeight : 483.099,
	//If true, will trigger a window resize listener
	responsive : true,
	//Color when a state is disabled
	offColor : '#ccc',
	//stroke color for states
	strokeColor : '#24221f',
	//stroke color for disabled states
	offStrokeColor : '#444',
	//text color of state abbreviations
	abbreviationColor : '#f2f2f2',
	//font size of state abbreviations
	abbreviationFontSize : 12,
	//show/hide abbreviations on disabled states
	displayAbbreviations : true,
	//show/hide abbreviations on disabled states
	displayAbbreviationOnDisabledStates : false,
	//true and state trigger text chnage, false to go to url on state click
	useText : true,
	//if useText true, set if text is to the right of the map or below
	useTextAtBottom : false,
	//href target when state is clicked if using urls
	hrefTarget: '_blank',
	//width of text area if to the right of the map, if bottom textarea will be width of map
	textAreaWidth : 400,
	//height of textarea if at bottom, if to the right height will be height of the map
	textAreaHeight : 300,
	//size of pins on the map
	pinSize : 10,
	//default text on map load if using text
	defaultText: "<h1>South Africa</h1><br /><p>South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.</p>",
	//if true, displays current mouse position on screen to help position pins
	//Note that when this is true, the map is not resized so the mouse position is to original scale
	displayMousePosition: false
}

////////////////////
//State config
////////////////////
var paths = [
	{
		//set to false to disable state i.e. no mouse events
		enable: true,
		//Name displayed in state tooltip
		name: 'Eastern Cape',
		//2 letters abbreviation displayed on the state
		abbreviation: 'EC',
		//abrreviation x position
		textX: 381,
		//abrreviation y position
		textY: 381,
		//state fill color
		color: '#59798e',
		//state hover color
		hoverColor: '#E32F02',
		//state selected color
		selectedColor: '#feb41c',
		//url when state is clicked if useText false
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		//text displayed in textarea when useText true
		text: '<h1>Eastern Cape</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 482.30274,293.43108 3.44658,3.03405 0.0293,1.4202 -1.71596,1.97536 -3.54925,0.95541 0.52798,1.1878 -1.96528,2.03992 -1.75996,-0.41315 -1.02664,2.36269 -3.28526,-1.17489 -1.3493,2.89203 1.01197,5.08689 1.7453,0.2453 1.56929,2.09157 3.40259,0.60681 1.96529,-2.86622 2.9186,1.26527 -0.10267,2.03992 9.35712,2.68546 5.54387,-1.52349 5.13321,2.93077 2.24395,-0.40023 3.44658,1.57512 1.86262,-0.67136 2.90394,2.63381 2.28794,0.0129 1.21731,2.34977 3.13859,0.52935 5.38254,8.96014 0,0 -12.68637,13.15618 -4.0479,1.29109 -8.08115,7.57868 -4.59056,1.92372 -12.74503,15.23483 -20.38619,19.41795 -4.57589,2.32396 -2.28795,2.94368 -8.52113,3.78288 -2.59594,4.46716 -6.71717,5.12562 -6.67317,3.05988 -27.54336,18.06231 -20.54752,8.09511 -6.42384,-0.37441 -8.5798,-2.31105 -8.8878,0.74883 -5.3092,2.73711 -2.53728,3.03405 -0.74798,3.17608 3.29992,3.25354 -4.61989,0.8392 -6.54118,-0.63263 -7.17183,-2.54344 -7.0985,0.0129 -3.81325,1.67841 -0.39599,2.76293 -3.35858,3.53758 1.40796,1.08451 -1.40796,0.89085 -7.25982,-1.84625 -1.29064,0.81338 -4.00391,-0.81338 -4.63455,-2.73711 -8.82913,-2.03992 -19.40355,-2.86621 0,0 -0.45465,-1.7817 2.25861,-2.63382 -5.3972,-1.7817 -0.132,-1.85916 -6.64385,-0.0258 1.75996,-2.71128 4.88389,-2.62091 4.15057,0.32278 0.20533,-1.5364 -2.74261,-2.13029 -0.30799,-3.02114 -3.60791,-2.16903 -5.95453,-0.10329 -1.18797,-1.6655 -20.66485,0.45188 -0.85065,-3.17607 1.37864,-0.20658 6.58517,-8.98597 0.0587,-5.92609 2.44928,-2.63381 3.37325,-0.64555 -1.12931,-3.53758 2.36128,2.80166 2.08262,-2.06574 7.0545,1.47184 0.26399,-2.29813 -4.63455,-4.5059 1.71596,-0.92958 -3.25593,-8.15967 4.45856,-2.76293 2.47861,0.96832 1.6133,-2.00119 8.12514,0.20658 0.30799,-3.87326 3.72525,-2.31105 4.63456,2.7371 5.89586,-2.81457 -0.176,-0.96831 1.83329,0.21948 1.71596,-1.22653 0.0147,-1.25235 -1.15864,-0.0904 -0.132,-1.44602 1.4813,-0.10328 -0.82131,-1.32982 2.27328,-0.54226 1.68663,-2.22067 -2.00929,-2.05283 -2.06795,0.32277 2.6106,-3.331 -0.73331,-1.12325 0,0 0.17599,-2.10447 4.06257,1.26527 1.86263,-2.2465 7.31849,-0.2453 0.58666,-8.57282 1.56929,-0.68428 0.088,-2.60799 8.50646,-0.2324 1.3493,-1.47184 1.33463,0.64554 0.14667,-1.75587 13.65434,-4.99651 6.24786,0.3615 -0.0147,-2.1432 3.12393,-2.63382 -0.86532,-0.94249 3.28526,-4.73829 -1.92129,-2.99533 2.69861,-2.8533 -2.74261,-0.30986 -0.57198,-6.66201 0,0 5.33854,-0.52934 1.15864,2.19484 4.51723,0.99414 4.60522,-2.63382 0.92398,-2.77583 1.97995,1.00704 4.2679,-2.13029 2.90393,0.91667 0.89465,-1.84625 4.72256,3.57631 5.99852,-0.67137 1.5693,2.68546 5.95453,1.26527 -0.20533,0.77465 6.57051,-1.58803 1.81862,1.35564 3.07993,-0.81339 1.3933,-2.36269 2.36128,-0.0904 -1.05598,-2.2465 4.16524,0.32278 0.71865,-1.79462 6.45318,-0.37441 -0.46932,-1.94954 2.58127,0.0258 -1.11464,-1.75588 2.7426,-0.67136 -1.84795,-1.94955 1.73062,-0.30986 0,0 3.0066,-0.2453 10.47175,10.97424 5.60254,0.1162 1.09997,1.67841 7.28916,1.08451 -0.088,-2.69837 2.66927,-4.06692 -1.18797,-1.32982 4.76655,-3.7958 -2.18528,-2.84039 3.57858,-1.34273 3.15326,-4.10566 3.1386,0.32277 2.81593,-1.43311 4.88388,0.76175 6.26252,-1.67842 6.92251,-3.74415 z'
	},
	
	{
		enable: true,
		name: 'Free State',
		abbreviation: 'FS',
		textX: 394,
		textY: 234,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Free State</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 425.51475,171.28132 3.25592,-1.61386 0.52799,1.14907 4.67856,0.7101 0.82131,-1.32982 3.65191,-0.52935 3.06527,-2.22067 2.18527,4.45425 4.48789,4.05402 1.12931,-1.52349 1.11464,1.62677 2.31728,-0.50352 1.31997,0.90376 0,0 4.0919,0.69719 1.20264,2.07865 2.18528,-0.95541 2.72794,2.20776 -0.80665,1.39438 4.29723,-1.85917 -1.33463,-0.89085 1.20264,-1.01996 9.06378,3.44721 4.20924,-1.85917 2.21461,0.9554 2.34661,4.90614 3.63725,-0.58099 4.45856,2.24649 0.308,1.43311 4.10657,0.51643 6.55584,9.52822 2.94793,-0.4777 0.77732,-1.61386 2.21461,0.0516 0,0 -2.25861,0.89085 2.63994,4.31223 -3.73991,2.44015 1.53996,5.92609 -3.78391,8.39207 1.81862,2.55635 -0.14666,2.20776 -2.62527,3.11152 -3.84258,0.52935 -3.09459,3.53758 -7.08384,3.4472 -1.33463,3.55049 -8.46247,1.47184 -3.95991,6.99769 0,0 -5.67586,-3.09861 -0.76265,-2.94368 -1.74529,-1.05869 -9.13712,1.7817 -1.93596,2.99532 -6.59984,-0.27113 -4.94255,4.67374 -0.87998,2.41433 -3.60791,-0.96831 -1.96529,2.38851 -5.05988,-0.63263 -1.04131,3.89908 -3.06526,1.6655 1.26131,1.14907 -1.31997,0.14202 0.45465,1.16198 -4.97188,4.14439 0.64532,1.42019 -3.15326,1.39438 -0.68932,2.87912 -1.17331,0.0646 0.61599,1.48475 -4.3559,3.29227 -0.044,1.27818 -5.79319,1.16197 -3.21193,1.54931 -0.42532,1.34273 -1.3053,-0.74883 11.51306,20.69613 3.06526,0.0258 -1.5693,2.68546 0.83598,3.73124 0,0 -1.74529,0.32277 1.84796,1.94954 -2.72794,0.67137 1.09998,1.75588 -2.56661,-0.0258 0.46932,1.96245 -6.45318,0.37441 -0.71865,1.79462 -4.16524,-0.32278 1.05598,2.2465 -2.36128,0.0904 -1.3933,2.3756 -3.09459,0.80048 -1.81863,-1.35565 -6.55584,1.58804 0.19066,-0.77465 -5.95453,-1.26527 -1.56929,-2.68546 -5.99853,0.67137 -4.72256,-3.57631 -0.89464,1.84625 -2.9186,-0.91667 -4.2679,2.13029 -1.97995,-1.00705 -0.93865,2.77584 -4.60522,2.63382 -4.51723,-0.98123 -1.14397,-2.19484 -5.33855,0.51643 0,0 -2.91859,-2.22067 -3.40259,-0.2324 -4.59056,-3.6925 -10.72108,-10.78058 -3.65192,-6.90732 -4.39989,-1.08451 -1.07063,-2.76293 -8.5798,-4.23476 -2.93327,-3.75707 -0.26399,-1.42019 20.6355,-38.71971 -2.00928,-0.64554 0.54265,-5.04815 1.77463,-1.75588 1.2173,-4.71247 -1.4813,-1.62677 2.84527,-1.16198 1.99462,-4.68664 -1.02664,-1.56222 0,0 3.19726,-0.76174 2.30261,-4.72538 4.16523,-2.23358 1.01198,-2.69837 11.87972,-5.216 2.94793,0.50353 5.49987,-3.52467 2.40528,1.44602 5.03055,0.55517 0.83598,2.95659 1.90662,-0.0129 0.60132,-3.93781 5.55854,-4.0411 1.33463,-3.04697 2.41995,0.1162 1.0413,-1.22654 6.13053,0.16785 -2.55194,-1.38147 1.61329,-3.46011 -3.03593,-3.73124 3.21193,-0.95541 1.12931,-1.57512 2.12661,0.23239 1.64263,-3.49884 2.66927,0.37441 1.75996,-2.29813 4.38523,-1.67842 2.12662,1.74297 0.74798,-3.39556 4.03324,2.3756 4.88388,-0.41315 0.65999,1.66551 5.17721,-4.41552 3.72525,2.54344 2.17061,-1.21362 z'
	},
	
	{
		enable: true,
		name: 'Gauteng',
		abbreviation: 'GT',
		textX: 444,
		textY: 149,
		color: '#9a9a68',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Gauteng</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 466.12578,111.36197 5.45588,-0.52935 1.0853,2.54344 -4.91321,2.05283 -1.33464,9.05052 2.05329,6.45544 5.91052,0.46479 4.16524,-4.44134 3.78391,-0.90376 0.90931,2.81457 -3.60791,1.27817 0.58665,2.38852 -1.80396,2.95659 0.29333,1.94954 -2.41994,-0.36151 -1.34931,6.2876 -8.4478,-1.304 -1.97995,3.24063 -4.01857,0.46479 2.24394,5.55167 3.57859,1.01996 0.11733,2.34978 2.68393,1.48475 5.10388,-1.23944 1.6573,3.02114 -4.25323,1.83335 -0.088,2.22067 -7.52383,1.12324 -3.27059,3.80871 -3.47591,0.96831 -0.77732,2.38852 1.02664,1.29108 -3.28525,1.49766 0.77731,1.71715 -0.93864,1.65259 0,0 -1.31997,-0.90376 -2.31728,0.50352 -1.11464,-1.62677 -1.12931,1.52349 -4.48789,-4.05402 -2.18527,-4.45425 -3.06527,2.22067 -3.65191,0.52935 -0.82131,1.32982 -4.67856,-0.7101 -0.52799,-1.14907 -3.25592,1.61386 0,0 1.09997,-5.35801 -1.31997,-1.45893 2.55194,-4.93195 -3.63725,0.1162 -1.14397,-1.60095 -5.33854,1.04578 0.35199,0.9554 -5.03055,1.70424 -1.62796,-4.36388 5.29454,-3.66668 -1.33463,-5.11271 2.52261,0.25822 0.11733,-1.40729 2.19994,-0.28404 1.73063,-9.21836 6.62918,-3.16316 1.73062,3.0857 1.95063,-0.91668 0.14666,1.47184 7.99314,-1.84625 0.41066,-3.29227 1.09997,-0.3486 -1.70129,-3.78288 3.05059,-0.41315 3.31459,-3.05988 -1.29064,-4.97068 2.88927,-0.41315 -0.64532,1.92372 6.71717,-1.44602 0,-3.5634 0,0 7.62649,-0.30986 0.27866,-1.74297 4.23857,0.89085 2.41994,-2.27231 -1.3493,0.0645 z'
	},

	{
		enable: true,
		name: 'Limpopo',
		abbreviation: 'LP',
		textX: 500,
		textY: 50,
		color: '#59798e',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Limpopo</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 506.73683,1.52918 9.56244,1.910809 7.62649,4.1960333 3.75458,-0.5293457 2.47861,2.0657395 20.51819,-2.1819373 16.4556,2.5047091 11.38107,29.5658961 -0.0587,10.574004 5.04522,5.435477 2.75726,9.502402 4.3119,2.685461 0,0 -3.73991,0.400237 -2.88926,3.201896 -2.05329,-1.48475 -2.17062,1.446018 -5.3972,-1.265266 -1.68663,1.562216 -5.60253,1.239444 8.50646,-0.206574 0,2.001185 -2.05328,1.691324 0.38132,3.873261 -3.32925,3.782886 2.09728,1.149067 -0.80665,1.316909 3.41726,0.05164 -1.7013,1.420196 0.89465,1.1878 5.51454,2.039918 0,1.962452 -3.0946,0.322772 -1.99462,2.246492 -5.13321,0 0.67465,4.1573 4.79589,0.451881 -0.33733,5.396744 -5.33854,-0.51643 -3.02125,1.62677 -5.77853,0.0129 -2.03862,-1.88499 -1.08531,-5.138528 -3.68125,-1.588037 0.23466,-5.280547 -3.37325,-2.117383 1.49596,-1.807522 -3.13859,-2.414333 -5.03055,2.646729 -1.62796,-0.684276 -0.0293,2.259402 -2.21462,1.949542 -1.51063,-1.755879 -5.49987,-1.613859 -0.61598,1.549305 -4.4439,-1.03287 -0.14666,2.311046 -2.05329,-1.394374 -3.41725,0.103287 0.38132,3.873262 2.08262,1.549304 -0.55732,2.440155 -2.24395,0.258217 -9.50377,6.881499 -0.0147,1.23944 -2.63994,0.21948 2.52261,3.52467 -1.71596,0.51644 -1.17331,2.36269 -6.74651,-1.03287 -5.76386,-7.30756 -2.55194,0.68428 1.24664,-1.83334 -1.24664,-4.157305 -3.93057,-0.865028 -2.18529,0.516435 -0.51332,4.002368 -4.03324,1.51057 -1.51063,-2.93076 -4.3559,-1.09743 0.61599,2.75002 -7.91981,-0.15493 -4.98655,2.27231 0.0587,2.78875 -5.60253,1.16198 -0.044,1.20071 -3.63725,0.99414 0.19066,2.1432 9.35711,-2.58217 0,0 1.33464,2.49179 1.3493,-0.0645 -2.41994,2.27231 -4.23857,-0.89085 -0.27866,1.74297 -7.62649,0.30986 0,0 -2.77193,-4.01528 -3.46125,0.33568 -0.20533,-1.87207 -2.08262,-0.30986 0.38132,-1.73006 1.45197,-0.29695 3.73991,1.13616 0.65999,-2.40143 -5.49987,-2.45306 -4.66389,-0.90376 -3.29992,0.86503 0.68932,-1.85917 -2.75727,-0.56808 -0.21999,2.07865 -4.23857,0.5939 -3.34392,-1.35564 -3.06526,5.06106 -1.97996,-1.92372 -4.83988,0.49062 -2.31728,-2.54345 -5.13322,-0.20657 -1.1293,-2.86621 -2.74261,-0.91668 -0.86531,-6.210125 -1.56929,0.03873 -0.19067,1.859165 -8.52113,3.615047 -2.19995,-0.12911 -2.6106,-1.730058 -7.93449,-0.374415 -1.40796,-2.491799 0.17599,-3.924905 0,0 2.74261,-1.794611 3.18259,-5.138527 4.1799,-2.091561 0.58665,-1.833344 6.90784,-2.930768 0.19066,-5.809892 5.30921,-16.693757 0.89465,1.497661 1.08531,-0.361505 0.0587,-2.104472 3.51992,-1.768789 -0.54266,-1.523483 2.49328,0.387326 -0.46932,-1.136156 4.34123,-1.730057 0.92398,-1.872077 1.64263,0.929583 1.1293,-1.291087 0.51332,1.174889 1.14398,-1.394374 3.21192,-0.232396 2.80127,-5.835714 3.18259,-0.568078 2.02395,1.071602 1.59863,-2.091561 -0.74798,-1.252354 6.39452,-3.111521 0.21999,-3.434291 3.97457,-1.962453 0.0293,-2.556353 4.16523,-2.504709 1.78929,-3.550489 5.48521,-3.39556 6.33585,0.374416 12.05572,-3.705421 1.3933,-1.368552 1.90662,0.477702 4.45856,-8.74066 4.45857,-0.1032869 1.87728,-1.1748894 5.08922,0.8262958 z'
	},

	{
		enable: true,
		name: 'Mpumalanga',
		abbreviation: 'MP',
		textX: 519,
		textY: 140,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Mpumalanga</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 590.68685,67.865239 1.33464,8.030562 2.8306,4.14439 0.86531,5.47421 0.87998,30.043599 -1.97995,7.88854 1.1733,5.60332 -2.8306,7.15262 1.67196,4.48008 -4.28256,1.73005 -16.9396,-10.32869 -3.95991,0.90376 -7.09849,6.49416 -5.67587,11.59397 -5.76386,6.92023 -1.4373,5.4742 0.63065,9.70898 1.12931,0.45188 2.30261,-1.7817 0.55732,2.54344 2.44927,2.16903 -0.19066,3.70542 6.61451,6.70074 5.32387,1.88499 0,0 -4.15056,4.71247 -2.81593,-1.31691 -5.63187,0.76174 -1.53997,-1.94954 -3.22659,1.34273 -5.6172,-2.47889 -4.0479,1.56222 -5.19188,-0.20658 -2.31728,-1.70423 -8.96112,4.54462 0,0 -3.1826,-0.91667 -1.89195,0.95541 0,0 -3.18259,-0.91668 -3.12393,0.90377 -1.77463,2.99532 -1.15864,-0.4777 0,0 -2.21461,-0.0516 -0.77732,1.61386 -2.94793,0.4777 -6.55584,-9.52822 -4.10657,-0.51643 -0.308,-1.43311 -4.45856,-2.24649 -3.63725,0.58099 -2.34661,-4.90614 -2.21461,-0.9554 -4.20924,1.85917 -9.06378,-3.44721 -1.20264,1.01996 1.33463,0.89085 -4.29723,1.85917 0.80665,-1.39438 -2.72794,-2.20776 -2.18528,0.95541 -1.20264,-2.07865 -4.0919,-0.69719 0,0 0.93864,-1.65259 -0.77731,-1.71715 3.28525,-1.49766 -1.02664,-1.29108 0.77732,-2.38852 3.47591,-0.96831 3.27059,-3.80871 7.52383,-1.12324 0.088,-2.22067 4.25323,-1.83335 -1.6573,-3.02114 -5.10388,1.23944 -2.68393,-1.48475 -0.11733,-2.34978 -3.57859,-1.01996 -2.24394,-5.55167 4.01857,-0.46479 1.97995,-3.24063 8.4478,1.304 1.34931,-6.2876 2.41994,0.36151 -0.29333,-1.94954 1.80396,-2.95659 -0.58665,-2.38852 3.60791,-1.27817 -0.90931,-2.81457 -3.78391,0.90376 -4.16524,4.44134 -5.91052,-0.46479 -2.05329,-6.45544 1.33464,-9.05052 4.91321,-2.05283 -1.0853,-2.54344 -5.45588,0.52935 0,0 -9.35711,2.58217 -0.19066,-2.1432 3.63725,-0.99414 0.044,-1.20071 5.60253,-1.16198 -0.0587,-2.78875 4.98655,-2.27231 7.91981,0.15493 -0.61599,-2.75002 4.3559,1.09743 1.51063,2.93076 4.03324,-1.51057 0.51332,-4.002368 2.18529,-0.516435 3.93057,0.865028 1.24664,4.157305 -1.24664,1.83334 2.55194,-0.68428 5.76386,7.30756 6.74651,1.03287 1.17331,-2.36269 1.71596,-0.51644 -2.52261,-3.52467 2.63994,-0.21948 0.0147,-1.23944 9.50377,-6.881499 2.24395,-0.258217 0.55732,-2.440155 -2.08262,-1.549304 -0.38132,-3.873262 3.41725,-0.103287 2.05329,1.394374 0.14666,-2.311046 4.4439,1.03287 0.61598,-1.549305 5.49987,1.613859 1.51063,1.755879 2.21462,-1.949542 0.0293,-2.259402 1.62796,0.684276 5.03055,-2.646729 3.13859,2.414333 -1.49596,1.807522 3.37325,2.117383 -0.23466,5.280547 3.68125,1.588037 1.08531,5.138528 2.03862,1.88499 5.77853,-0.0129 3.02125,-1.62677 5.33854,0.51643 0.33733,-5.396744 -4.79589,-0.451881 -0.67465,-4.1573 5.13321,0 1.99462,-2.246492 3.0946,-0.322772 0,-1.962452 -5.51454,-2.039918 -0.89465,-1.1878 1.7013,-1.420196 -3.41726,-0.05164 0.80665,-1.316909 -2.09728,-1.149067 3.32925,-3.782886 -0.38132,-3.873261 2.05328,-1.691324 0,-2.001185 -8.50646,0.206574 5.60253,-1.239444 1.68663,-1.562216 5.3972,1.265266 2.17062,-1.446018 2.05329,1.48475 2.88926,-3.201896 3.73991,-0.400237 0,0 z'
	},

	{
		enable: true,
		name: 'Northern Cape',
		abbreviation: 'NC',
		textX: 194,
		textY: 284,
		color: '#9a9a68',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Northern Cape</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 142.38141,100.45228 6.18918,2.29813 4.42923,3.86036 2.22929,4.54462 1.07064,0.0258 -0.308,2.14321 3.1386,2.82748 -0.77732,0.86503 1.6573,2.56926 1.61329,0.56808 0.74798,2.1432 1.87729,-0.11619 -1.64262,2.33686 2.36127,2.65964 -1.4813,1.63968 1.17331,0.0775 -0.24933,1.92372 2.9626,3.5634 -0.43999,1.56222 1.53996,-0.77466 1.97996,5.65497 -0.49866,5.5904 1.26131,1.45893 -9.26912,12.03293 0.67465,12.25242 2.33195,4.07984 7.90514,-4.1573 9.19579,2.91785 9.6211,-1.80752 4.86922,1.34273 6.71717,-0.0258 3.18259,-2.46598 -0.13199,-4.07983 10.17843,-1.91081 4.32656,-4.71247 1.42263,-4.07983 6.37985,-2.82749 2.36128,-3.49884 5.14788,-0.28404 0.71865,-2.80166 1.93596,-1.23944 0,0 2.33194,0.11619 -0.0147,16.65503 5.39721,0.27113 0.63065,1.17489 2.15595,-0.1162 1.14398,1.60095 0.96797,-0.74883 3.03593,1.9108 -1.5253,3.04697 1.30531,1.71715 -1.51063,2.19484 2.85993,5.48713 -2.7866,0.73591 -0.51332,3.42139 1.53996,3.69251 2.49328,-0.60682 4.67855,5.40966 4.70789,0.5939 2.71327,2.18194 1.4373,-0.49062 1.3053,1.25236 -0.55732,1.23944 4.75189,0.0258 5.60254,2.91786 2.05328,-2.4918 2.94793,0.54226 1.31997,-0.85212 -1.53996,-0.8392 1.2613,-1.8979 3.37326,0.65845 0.14666,-4.01528 2.8306,1.67841 -1.3933,8.96015 2.33194,0.72301 -0.96797,3.88617 1.27597,1.08451 11.79172,-2.36269 0.79198,5.00942 -3.06526,3.12443 4.16524,3.02115 -1.23197,2.31104 3.19725,2.10447 3.79858,-3.49884 0.132,-3.3181 3.07992,-3.39555 -0.27866,-6.93314 2.91859,-1.16198 0.71865,3.22772 8.85846,-0.0775 -7.20116,8.04347 4.19457,7.28174 1.84795,-0.99414 0,0 1.01198,1.56221 -1.97995,4.68665 -2.85994,1.16198 1.4813,1.62677 -1.2173,4.69956 -1.77463,1.75588 -0.54265,5.04815 2.00928,0.64554 -20.62084,38.7197 0.24933,1.4202 2.93327,3.76997 8.5798,4.22186 1.07063,2.76293 4.39989,1.08451 3.65192,6.90732 10.72108,10.78057 4.60523,3.6796 3.40258,0.2324 2.90393,2.22067 0,0 0.57199,6.66201 2.7426,0.30986 -2.6986,2.8533 1.92129,2.99532 -3.28526,4.73829 0.86531,0.9425 -3.12392,2.63381 0.0147,2.14321 -6.24785,-0.3615 -13.65435,4.9965 -0.14666,1.75588 -1.33463,-0.64554 -1.34931,1.47184 -8.50645,0.23239 -0.088,2.608 -1.5693,0.68427 -0.58665,8.57282 -7.3185,0.24531 -1.86262,2.24649 -4.06257,-1.26526 -0.176,2.10447 0,0 -3.19725,0.15493 -1.6133,-2.58218 0.65998,-0.80047 -3.15325,0.0387 -0.60132,2.4918 -3.15326,1.98828 -2.40528,-2.1303 1.23197,-1.70423 -3.41725,-1.304 -0.39599,-1.304 -4.79589,-0.37441 -3.43192,1.97536 -4.15057,-0.7101 -0.32266,1.09743 -4.79589,1.29108 -1.99462,4.93196 -5.4852,4.26058 -1.4813,-1.96245 0.58665,-1.62677 -3.37325,-1.34273 -3.07993,0.8263 -1.56929,-1.74297 -2.90394,0.8392 -1.37863,-1.84625 -6.02786,-0.0645 1.04131,-2.95659 -1.81862,-2.11739 -9.63578,-3.93781 -4.57589,8.05638 -0.22,4.02819 -3.37325,-1.29108 -0.0147,6.35215 1.80396,1.67841 -1.49596,2.86621 -0.73332,-1.94954 -2.37594,0.96832 -0.132,3.55049 -2.55194,0.87793 -0.48399,1.61386 -2.59594,0.42606 -4.82522,-2.51762 -1.97995,1.75588 -2.21462,-1.65259 -2.90393,0.90376 0.36666,3.21481 -3.32926,0.5939 -1.65729,1.65259 -4.66388,0.19366 -0.70399,2.02701 -3.15326,1.61386 -1.86262,4.40261 0.67465,1.67841 -5.85186,1.67841 -1.49596,-0.73592 -6.57052,2.36269 0.96798,4.53172 -0.89465,2.63382 -3.00659,2.027 -4.63456,0.33569 -1.5253,-2.07866 -2.44927,1.85917 -2.69861,0.21949 -2.84526,-1.32982 -0.14667,-1.7817 -2.6986,-2.65964 -3.63725,-1.34274 0.0733,-3.55048 -2.03862,-1.71715 -2.28794,-9.28292 1.68663,0.73592 1.27597,-2.54344 2.44927,-2.16903 0.96798,0.4648 -2.56661,-4.93196 -3.16792,2.94368 -1.62797,-0.0387 -4.42922,4.89322 -4.78123,-0.4777 -5.36787,4.07983 -1.08531,-1.67841 -0.86531,0.60681 -1.40797,4.35096 1.05598,2.99533 -2.8746,1.63968 -1.78929,-3.22772 0.71865,-4.45425 -3.53459,-7.06225 3.69592,-1.84625 -0.52799,-6.46835 -6.11586,-1.96245 -1.08531,-2.1303 -1.87729,-0.55516 0.90932,-3.58923 -2.90394,2.4918 -6.18918,-1.65259 2.19994,-5.52585 -1.78929,-4.01528 1.3933,-2.93077 -1.3053,-1.04578 0.82132,-1.56222 -2.59594,-0.7101 0.68931,-4.72538 -1.642623,-1.47183 1.437293,-1.78171 -2.170609,-0.71009 -0.586653,-6.26178 -1.862622,-2.93076 0.454656,-2.07865 2.625271,-1.84626 -3.871908,-1.96245 3.402586,-0.95541 -0.601319,-5.03524 -3.446585,-0.3615 -3.050595,-2.36269 0.55732,-1.45893 -1.510631,-2.07865 -3.769245,-0.73592 -3.549249,-4.44134 -2.830601,0.67137 0.99731,5.12561 -4.707889,-4.91904 0.703983,2.36269 -1.950621,5.5775 -3.827909,5.80989 -3.490585,1.35564 -3.065261,-2.38851 -3.593249,0.16784 -0.16133,4.89322 -4.429228,0.46479 1.759958,2.94368 -3.915908,3.15025 0.733316,3.55049 -2.581273,-0.92958 0,0 -18.303568,-31.46379 -9.078454,-27.69382 -3.519917,-9.32165 -3.94524,-6.13267 -0.953311,-4.59627 -2.493275,-1.84625 -2.229281,-4.3897 -3.285256,-2.2594 -1.231971,-5.33219 -4.238567,-3.46011 0.5719866,-2.02701 3.5199171,-1.05869 4.0185713,-3.12443 2.126617,0.94249 3.109261,-5.00942 -2.067952,-3.70542 2.419943,0.15493 -0.659984,-2.027 1.803958,-0.20658 -0.703984,-1.6655 2.111951,0.14202 -0.044,-3.17608 7.597154,-1.94954 3.974573,2.84039 0.586653,4.7512 4.135902,-0.51643 2.537274,2.65964 0.967977,4.37679 -2.815934,2.28522 1.803958,3.80871 1.891956,0.0516 -0.659985,5.68078 6.057191,-1.1878 2.977263,3.12443 3.754579,-0.98122 6.321185,0.72301 5.411872,4.32514 4.781221,1.32982 3.27059,-1.22653 9.137118,0.37441 8.638463,-1.98827 8.242473,0.89085 2.331942,2.7371 3.85724,1.32982 2.34662,-0.51643 4.56122,-2.06574 -1.96528,-3.34392 0.90931,-2.46597 7.37716,-1.35565 3.94524,-6.95896 4.95722,-0.45188 1.59862,-1.21362 2.77194,0.76174 2.46394,-2.46597 4.72256,-0.37442 0.132,-137.190922 3.78391,4.028192 z'
	},

	{
		enable: true,
		name: 'KwaZulu-Natal',
		abbreviation: 'NL',
		textX: 541,
		textY: 243,
		color: '#59798e',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>KwaZulu-Natal</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 599.57465,172.75316 2.80126,1.74297 1.67196,-1.04578 5.9252,1.11033 19.25688,-0.15493 -0.39599,1.48475 -1.23197,6.85568 -6.55585,15.95783 -4.63456,24.20789 -4.98655,8.7923 -0.85064,5.3451 -14.87165,13.60806 -9.38645,3.24063 -16.30895,16.09986 -10.66241,15.01534 0.176,3.88617 -6.68785,6.86859 -9.87043,17.57169 -16.27962,21.94849 0,0 -5.38254,-8.96015 -3.13859,-0.52934 -1.21731,-2.34978 -2.28794,-0.0129 -2.90394,-2.63382 -1.86262,0.67136 -3.44658,-1.57512 -2.24395,0.40023 -5.13321,-2.93076 -5.54387,1.52348 -9.35712,-2.68546 0.10267,-2.03992 -2.9186,-1.26527 -1.96529,2.86622 -3.40259,-0.60681 -1.56929,-2.09156 -1.7453,-0.24531 -1.01197,-5.08688 1.3493,-2.89204 3.28526,1.17489 1.02664,-2.36269 1.75996,0.41315 1.96528,-2.03992 -0.52798,-1.1878 3.54925,-0.9554 1.71596,-1.97537 -0.0293,-1.42019 -3.44658,-3.03406 0,0 5.27987,-2.75001 -1.49596,-3.26645 0.74798,-4.68665 1.26131,-2.06574 4.25323,-1.32982 -0.0147,-1.49766 1.42264,-0.45188 -0.99731,-3.46012 4.64922,-2.24649 1.42263,-3.22772 -4.97188,-9.82517 -2.7866,-0.0258 -1.55463,-2.24649 -5.30921,-2.22067 -8.08114,-8.10803 0,0 3.9599,-7.0106 8.46247,-1.45893 1.33464,-3.55049 7.0985,-3.4472 3.07993,-3.53758 3.84257,-0.52935 2.62527,-3.12443 0.132,-2.20776 -1.81862,-2.55635 3.78391,-8.39207 -1.5253,-5.92609 3.72525,-2.44015 -2.62528,-4.31223 2.25862,-0.89085 0,0 1.15864,0.4777 1.77462,-3.00823 3.12393,-0.89086 3.18259,0.91668 0,0 1.6133,-0.95541 3.47592,0.91667 0,0 8.96112,-4.54462 2.31728,1.70423 5.19188,0.21949 4.0479,-1.57513 5.6172,2.47889 3.24126,-1.34273 1.5253,1.96245 5.63187,-0.76174 2.8306,1.31691 4.15056,-4.71247 0,0 8.06647,2.65964 18.01025,0.0516 1.46663,-18.92734 3.72525,0.10329 z'
	},

	{
		enable: true,
		name: 'North West',
		abbreviation: 'NW',
		textX: 347,
		textY: 161,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>North West</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 382.29309,92.215143 -0.17599,3.924905 1.40796,2.491799 7.93449,0.374415 2.6106,1.730058 2.19995,0.12911 8.52113,-3.615047 0.19067,-1.859165 1.56929,-0.03873 0.86531,6.210125 2.74261,0.91668 1.1293,2.86621 5.13322,0.20657 2.31728,2.54345 4.83988,-0.49062 1.97996,1.92372 3.06526,-5.06106 3.34392,1.35564 4.23857,-0.5939 0.21999,-2.07865 2.75727,0.56808 -0.68932,1.85917 3.29992,-0.86503 4.66389,0.90376 5.49987,2.45306 -0.65999,2.40143 -3.73991,-1.13616 -1.45197,0.29695 -0.38132,1.73006 2.08262,0.30986 0.20533,1.87207 3.46125,-0.33568 2.77193,4.01528 0,0 0,3.5634 -6.71717,1.44602 0.64532,-1.92372 -2.88927,0.41315 1.29064,4.97068 -3.31459,3.05988 -3.05059,0.41315 1.70129,3.78288 -1.09997,0.3486 -0.41066,3.29227 -7.99314,1.84625 -0.14666,-1.47184 -1.95063,0.91668 -1.73062,-3.0857 -6.62918,3.16316 -1.73063,9.21836 -2.19994,0.28404 -0.11733,1.40729 -2.52261,-0.25822 1.33463,5.11271 -5.29454,3.66668 1.62796,4.36388 5.03055,-1.70424 -0.35199,-0.9554 5.33854,-1.04578 1.14397,1.60095 3.63725,-0.1162 -2.55194,4.93195 1.31997,1.45893 -1.09997,5.35801 0,0 -2.49328,4.07984 -2.17061,1.21362 -3.72525,-2.54344 -5.17721,4.41552 -0.65999,-1.66551 -4.88388,0.41315 -4.03324,-2.3756 -0.74798,3.39556 -2.12662,-1.74297 -4.38523,1.67842 -1.75996,2.29813 -2.66927,-0.37441 -1.64263,3.49884 -2.12661,-0.23239 -1.12931,1.57512 -3.21193,0.95541 3.03593,3.73124 -1.61329,3.46011 2.55194,1.38147 -6.13053,-0.16785 -1.0413,1.22654 -2.41995,-0.1162 -1.33463,3.04697 -5.55854,4.0411 -0.60132,3.93781 -1.90662,0.0129 -0.83598,-2.95659 -5.03055,-0.55517 -2.40528,-1.44602 -5.49987,3.52467 -2.94793,-0.50353 -11.87972,5.216 -1.01198,2.69837 -4.16523,2.23358 -2.30261,4.72538 -3.19726,0.76174 0,0 -1.84796,0.99414 -4.19457,-7.28173 7.20117,-8.04348 -8.85846,0.0775 -0.71865,-3.22772 -2.9186,1.14907 0.27866,6.94605 -3.09458,3.38264 -0.132,3.33101 -3.79858,3.49885 -3.19726,-2.10448 1.23197,-2.31104 -4.16523,-3.02115 3.06526,-3.11152 -0.79198,-5.02233 -11.79173,2.3756 -1.27597,-1.09742 0.96798,-3.88617 -2.33194,-0.72301 1.3933,-8.96015 -2.8306,-1.67841 -0.14667,4.01528 -3.37325,-0.65845 -1.2613,1.8979 1.53996,0.8392 -1.31997,0.86503 -2.94793,-0.54226 -2.05329,2.4918 -5.60253,-2.91785 -4.73722,-0.0258 0.54265,-1.23944 -1.3053,-1.25235 -1.4373,0.49061 -2.6986,-2.18194 -4.70789,-0.5939 -4.67856,-5.40965 -2.49328,0.60681 -1.53996,-3.69251 0.51332,-3.42138 2.80127,-0.73592 -2.85993,-5.50003 1.51063,-2.19485 -1.30531,-1.71715 1.53997,-3.04696 -3.03593,-1.92372 -0.96798,0.74883 -1.14397,-1.58804 -2.15595,0.10329 -0.63065,-1.17489 -5.39721,-0.27113 0.0147,-16.64212 -2.34661,-0.11619 0,0 1.51063,-3.35683 1.99462,-0.10329 0.93864,-3.60213 -1.18797,-0.81338 2.58127,-2.86622 -1.59863,-0.91667 3.07993,-3.76997 -0.48399,-2.2465 1.59863,-0.77465 -1.3493,-1.09742 1.17331,-3.49885 4.61989,-4.01528 1.55463,-3.21481 1.95062,-0.12911 0.51332,1.4202 4.64922,-2.06574 8.30114,1.36855 1.83329,-1.29108 6.61451,5.80989 0.90932,-0.64555 6.04252,3.84744 -0.33732,0.96832 3.65191,2.99532 3.84258,-0.1162 0.0733,1.03287 1.86262,0.10329 0.20533,-0.90376 4.83989,-0.28404 6.95183,5.28055 2.69861,-1.07161 7.90514,3.11152 5.49987,0.2324 4.03323,-0.45188 5.51454,-3.39556 2.8746,1.34273 8.35981,0.36151 9.40111,-5.35802 4.44389,-12.60101 6.70251,-13.49186 -0.60132,-5.861534 z'
	},

	{
		enable: true,
		name: 'Western Cape',
		abbreviation: 'WC',
		textX: 160,
		textY: 432,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Western Cape</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'm 274.34897,449.9754 -5.82253,1.60095 -1.59863,1.11033 -0.27866,2.38851 -13.81568,-1.35564 -1.62796,0.69719 -14.29966,-3.71833 -5.41188,2.59508 -7.75848,-0.1291 -4.34123,2.3756 -0.46933,1.88498 1.92129,0.99414 -8.77046,2.31105 -0.74798,1.39437 1.3493,0.87794 -1.15864,1.56222 -3.91591,1.67841 -4.48789,0.56808 -6.04253,-1.57513 -3.50525,0.46479 -5.3092,2.94368 -6.68784,-2.3756 -8.52113,-0.40024 -1.96529,1.03287 -0.24933,3.13734 -7.02517,-1.04578 -6.99583,1.61386 -2.97727,3.35683 -6.08652,3.15025 -0.36666,1.49766 -5.64653,1.87208 -0.89465,3.22772 -2.62527,0.91667 -4.38523,-2.77584 -7.02517,-0.16784 -1.96529,1.17489 -0.21999,-1.47184 -8.43314,-6.00355 -4.60522,1.04578 3.35859,-3.65378 -2.66927,-4.82867 -1.40797,-0.55516 -1.95062,1.21362 -3.71058,-0.83921 -0.89465,-2.02701 -2.34661,-1.09742 -8.007808,1.92372 -0.586653,-3.6796 1.642628,-1.88499 -1.4373,-2.49179 1.906622,-1.27818 -3.783911,-3.11152 -5.969193,-0.21948 -6.585178,2.32395 -0.498655,2.15612 2.023952,2.18194 -0.659984,3.0986 1.437299,1.6526 -0.909312,0.0387 -2.185282,-1.47184 -1.789291,-5.13853 -1.99462,-1.8979 1.686627,-3.86035 -2.141283,-0.54225 3.461252,-5.60332 1.598629,0.8392 1.833291,-1.71714 -1.906622,-7.39793 -3.050595,-4.48007 -1.906622,-0.5939 -0.821315,-4.36388 -5.33854,-4.06692 0.513321,-1.13616 -2.361278,-3.87326 -4.869219,-3.6796 -0.703983,-1.25235 1.085308,-1.57513 4.238567,5.37092 1.27597,-0.50352 -3.578583,-3.42138 -0.01467,-3.11152 -2.15595,-1.14907 -1.305302,1.71715 -1.745292,0.14202 -1.319969,-5.16435 0.894646,-1.93663 -1.466632,-1.52349 2.287946,-1.05869 -0.27866,-2.22067 2.654603,-1.74297 3.43192,3.38265 2.801267,-0.27113 6.702509,-7.6045 1.129307,-5.00942 -0.821314,-5.59041 1.231971,-1.42019 -2.478609,-15.09281 -6.233186,-12.32988 -13.845008,-17.06818 0,0 2.581273,0.92959 -0.733316,-3.55049 3.915908,-3.15025 -1.759958,-2.94368 4.429228,-0.46479 0.16133,-4.89323 3.593249,-0.16784 3.065261,2.38851 3.490585,-1.34273 3.827909,-5.80989 1.950621,-5.57749 -0.703983,-2.36269 4.707889,4.91904 -0.99731,-5.12562 2.830601,-0.67136 3.549249,4.44134 3.769245,0.73592 1.510631,2.07865 -0.55732,1.45892 3.050595,2.36269 3.446585,0.36151 0.601319,5.03524 -3.402586,0.9554 3.871908,1.96246 -2.625271,1.84625 -0.454656,2.0141 1.921288,3.00823 0.586653,6.26177 2.170617,0.7101 -1.437301,1.7817 1.642631,1.47184 -0.68932,4.72538 2.59594,0.7101 -0.82131,1.56221 1.3053,1.04578 -1.3933,2.93077 1.78929,4.01528 -2.19995,5.52586 6.18919,1.65259 2.90393,-2.4918 -0.90931,3.58922 1.87729,0.55517 1.08531,2.13029 6.11585,1.96245 0.52799,6.46835 -3.69591,1.84626 3.53458,7.06224 -0.71865,4.45425 1.78929,3.22772 2.8746,-1.63968 -1.05597,-2.99532 1.40796,-4.35097 0.86532,-0.60681 1.08531,1.67842 5.36787,-4.07984 4.78122,0.4777 4.42923,-4.89322 1.62795,0.0387 3.16793,-2.94368 2.5666,4.93195 -0.96797,-0.46479 -2.44928,2.16903 -1.27597,2.54344 -1.68662,-0.73592 2.28794,9.28291 2.03862,1.71715 -0.0733,3.55049 3.63725,1.34273 2.6986,2.65964 0.14666,1.7817 2.84527,1.32982 2.6986,-0.21948 2.44928,-1.85917 1.5253,2.07865 4.63455,-0.33568 3.0066,-2.02701 0.89465,-2.63382 -0.96798,-4.53171 6.57051,-2.36269 1.49597,0.73592 5.85186,-1.67842 -0.67465,-1.67841 1.86262,-4.40261 3.15326,-1.61386 0.70398,-2.027 4.66389,-0.19367 1.6573,-1.65259 3.32925,-0.5939 -0.36665,-3.2148 2.90393,-0.90377 2.21461,1.6526 1.97996,-1.75588 4.82522,2.51762 2.59593,-0.42606 0.48399,-1.61386 2.55194,-0.87794 0.132,-3.55049 2.37594,-0.96831 0.73332,1.94954 1.49597,-2.86622 -1.80396,-1.67841 0.0147,-6.35215 3.37326,1.29109 0.21999,-4.02819 4.5759,-8.05639 9.63577,3.93782 1.81862,2.11738 -1.0413,2.95659 6.02785,0.0646 1.37864,1.84625 2.90393,-0.83921 1.5693,1.74297 3.07992,-0.82629 3.37326,1.34273 -0.58665,1.62677 1.48129,1.96245 5.48521,-4.26059 1.99462,-4.93195 4.79588,-1.29109 0.32266,-1.09742 4.15057,0.71009 3.43191,-1.97536 4.79589,0.37442 0.39599,1.30399 3.41726,1.304 -1.23197,1.70424 2.40527,2.13029 3.15326,-1.98827 0.60132,-2.4918 3.15326,-0.0387 -0.65998,0.80047 1.61329,2.58217 3.19726,-0.15493 0,0 0.73332,1.12325 -2.61061,3.331 2.06795,-0.32277 2.00929,2.05283 -1.68663,2.22067 -2.27328,0.54226 0.82131,1.32982 -1.48129,0.10328 0.13199,1.44602 1.15864,0.0904 -0.0147,1.25235 -1.71596,1.22654 -1.83329,-0.21949 0.17599,0.96832 -5.89586,2.81457 -4.63456,-2.73711 -3.72524,2.31105 -0.308,3.87326 -8.12514,-0.20657 -1.61329,2.00118 -2.4786,-0.96831 -4.45857,2.76292 3.25593,8.15967 -1.71596,0.92959 4.63455,4.50589 -0.264,2.29813 -7.05449,-1.47183 -2.08262,2.06574 -2.36127,-2.80166 1.1293,3.53757 -3.37325,0.64555 -2.44928,2.63382 -0.0587,5.92609 -6.58518,8.98596 -1.37864,0.20658 0.85065,3.17607 20.66485,-0.45188 1.18797,1.6655 5.95452,0.10329 3.60791,2.16903 0.308,3.02114 2.7426,2.13029 -0.20533,1.5364 -4.15057,-0.32277 -4.88388,2.6209 -1.75996,2.71129 6.64384,0.0258 0.132,1.85916 5.3972,1.7817 -2.25861,2.63382 0.45466,1.7817 0,0 z'
	}
	
	
		
]

////////////////////
//Pins config
////////////////////
var pins = [
	{
		//text displayed in tooltip
		name: 'Cape Town',
		//pin x position
		xPos: 81,
		//pin y position
		yPos: 446,
		//pin fill color
		color: '#ffc90e',
		//pin hover color
		hoverColor: '#E32F02',
		//pin selected color
		selectedColor: '#feb41c',
		//pin url is useText false
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		//text displayed in textarea when pin is clicked and useText true
		text: '<h1>Cape Town</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'
	}

]
