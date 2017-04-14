////////////////////
//Version 2.0.3
////////////////////

////////////////////
//Global config
////////////////////
var config = {
	//The original map width, usually found in original SVG file, don't change this unless you are creating a new map
	mapWidth : 800.080,
	//The original map height, usually found in original SVG file, don't change this
	mapHeight : 496.620,
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
	displayAbbreviations : false,
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
	defaultText: "<h1>Singapore</h1><br /><p>Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population. Its colonial core centers on the Padang, a cricket field since the 1830s and now flanked by grand buildings such as City Hall, with its 18 Corinthian columns. In Singapore's circa-1820 Chinatown stands the red-and-gold Buddha Tooth Relic Temple, said to house one of Buddha's teeth.</p>",
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
		name: 'Central Singapore',
		//2 letters abbreviation displayed on the state
		abbreviation: '01',
		//abrreviation x position
		textX: 0,
		//abrreviation y position
		textY: 0,
		//state fill color
		color: '#59798e',
		//state hover color
		hoverColor: '#E32F02',
		//state selected color
		selectedColor: '#feb41c',
		//url when state is clicked if useText false
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		//text displayed in textarea when useText true
		text: '<h1>Central Singapore</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M430.84,77.29l6.38,3.86l8.89,10.73l4.99,1.87l2.1,-2.6l4.36,0.42l14.99,4.56l5.66,4.3l0,0l-0.3,0.29l0,0l-5.15,7.86l0,0l-10.02,7.12l-1.68,7.58l0,0l-0.56,2.62l0,0l-7.4,6.09l-0.09,6.18l-6.67,10.65l-6.78,20.43l0,0l-11.34,-1.64l0,0l-6.87,1.29l-11.16,23.74l-0.14,5.87l5.29,13.45l-10.3,3.57v3.72l13.01,1.86l5.01,15.73l9.58,3.72l6.87,6.86l1.43,10.45l0,0l-5.15,4.15l0,0l-3.72,3l0,0l-1,3.43l2.86,7.44l-1.76,7.47l0,0l-10.47,10.12l0.83,17.15l-16.43,-0.12l-1.97,8.35l2.17,7.13l2.04,0.2l5.37,-10.93l3.46,0.07l11.41,5.5l5.92,8.69l-17,13.37l-8.41,-2.14l-1.64,-3.83l-6.05,-1.8l-2.53,2.03l0.63,20.97l-9.28,-9.6l-3.41,2.93l2.99,5.3l-9.56,-9.53l-13.39,-0.38l-13.13,7.39h-8.09l-4.05,-1.36l1.15,-1.43l-2.12,-1.4l-2.59,2.53l-2.15,-2.06l1.67,-2.1l-3.56,-1.63l0,0l-5.13,-8.36l7.97,-10.82l-0.38,-3.42l-1.52,-2.28l-17.85,0.19l-8.35,-4.94l-3.99,-17.09l-5.51,-9.3l3.23,-6.46l0,0l0.57,-3.41l2.3,1.78l0,0l5.13,2.93l2.44,-16.13l9.04,-12.46l7.82,-4.89l0.73,-10.51l5.13,-6.11l-0.49,-3.18l-8.55,-2.44l-14.17,-12.95l-0.98,-4.15l11,-17.35l12.22,-9.77l8.17,-20.84l0,0l-1.57,-2.62l0,0l-3.42,-10.02l0.49,-12.22l-4.4,-9.77l0,0l-3.66,-6.6l0,0l13.44,-6.11l8.8,-16.61l0,0l3.18,-10.51l0,0l6.84,-5.62l6.35,0.73l11.24,11.48l8.8,-1.71l0,0l5,-0.12l0,0l6.63,-1.66l0,0l-7.04,9.29l-26.84,9.1l-3,4.51l1.69,5.82l4.65,-3.03l2.76,-5.88l13.61,-0.28l15.89,-7.71l16.4,-25.38L430.84,77.29zM477.52,91.76h-12.86l-8.33,-4.04l9.73,-10.55l12.45,8.08L477.52,91.76zM454.77,85.74l-1.57,1.81l-6.76,-1.24L431.61,73.7l1.07,-3.38l8.33,-5.44l4.86,-0.25l6.92,3.63l8.9,6.51L454.77,85.74z'
	},
	
	{
		enable: true,
		name: 'North East',
		abbreviation: '02',
		textX: 0,
		textY: 0,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>North East</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M532.68,110.05l2.97,5.42l-8.2,-5.22l-3.22,1.37l0.62,-4.07L509.7,91.24l11.28,6.9L532.68,110.05zM505.91,92.39l0.34,8.23l21.14,16.76l-6.45,5.89l1.7,3.88l13.68,-6.35l5.13,4.37l6.46,11.58l12.92,8.89l13.26,4.87l1.42,3.27l0.84,-2.35l9.39,1l6.89,-2.26l5.65,2.19l4.07,-6.93l0,0l1.41,5.85l8.73,10.06l-0.76,3.61l-19.94,18.61l3.42,8.73v8.54l-11.77,3.8l-17.47,12.15l-8.16,-3.99l-15.38,1.33l-11.01,-2.09l-1.04,2.97l5.68,3.2l0,0l2.82,2.91l0,0l2.19,3.58l-1.48,3.09l-7.41,0.76l-12.53,7.79l1.33,2.85l-3.99,4.56l3.61,3.23l-1.9,6.27l-24.68,1.52l-2.85,-5.89l2.09,-6.08l-27.72,-26.96l-0.38,-7.41l-18.23,-5.51l-2.47,-3.23l-1.33,-6.08l-7.59,-8.92l4.05,-15.46l0,0l6.78,-20.43l6.67,-10.65l0.09,-6.18l7.4,-6.09l0,0l0.56,-2.62l0,0l1.68,-7.58l10.02,-7.12l0,0l5.15,-7.86l0,0l0.3,-0.29l0,0l1.51,-2.78l10.4,-3.9l5.79,-9.15l5.37,-1.76l3.19,1.01l-1.26,3.95L505.91,92.39z'
	},
	
	{
		enable: true,
		name: 'North West',
		abbreviation: '03',
		textX: 0,
		textY: 0,
		color: '#9a9a68',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>North West</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M411.58,35.23l11.68,14.27l0.66,5.35l-7.32,-8.07L411.58,35.23zM345.83,5.52l-2.63,4.41l1.22,1.41l6.38,-4.51l1.78,4.79l-2.44,3.19l2.35,0.66l9.49,-11.7l8.49,5.28l-2.63,7.98l8.26,-6.2l24.54,17.62l18.02,33.25l-11.08,14.64l-0.56,5.54l-6.49,11.59l0,0l-6.63,1.66l0,0l-5,0.12l0,0l-8.8,1.71l-11.24,-11.48l-6.35,-0.73l-6.84,5.62l0,0l-3.18,10.51l0,0l-8.8,16.61l-13.44,6.11l0,0l3.66,6.6l0,0l4.4,9.77l-0.49,12.22l3.42,10.02l0,0l1.57,2.62l0,0l-8.17,20.84l-12.22,9.77l-11,17.35l0.98,4.15l14.17,12.95l8.55,2.44l0.49,3.18l-5.13,6.11l-0.73,10.51l-7.82,4.89l-9.04,12.46l-2.44,16.13l-5.13,-2.93l0,0l-2.3,-1.78l0,0l-0.95,-3.42l-9.87,-3.79l-10.63,-7.97l-10.07,-2.47l-20.69,-16.9l-4.56,-7.21v-6.08l11.2,-0.2l8.92,-4.94l0.57,-4.36l8.35,-0.57l2.1,-2.28l-0.57,-4.36l-7.79,-5.13l-13.67,-16.7l-1.9,-20.13l-12.53,-30.76l-10.83,-16.33l-2.28,-14.05l4.94,-8.74l0.19,-21.46l12.16,-14.05l-2.3,-13.75l0,0l5.38,-2.15l3.85,-7.42l4.22,-0.66l0.28,-4.13l4.22,-3.75l16.61,-7.42l37.57,-26.17l22.57,-3.44l12.59,2.27L345.83,5.52z'
	},

	{
		enable: true,
		name: 'South East',
		abbreviation: '04',
		textX: 0,
		textY: 0,
		color: '#59798e',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>South East</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M633.27,131.52l17.34,4.94l10.94,8l6.47,13.49l-0.18,23.8l7.93,2.92l-26.61,64.37l5.74,2.83l15.59,-3.28l5.65,1.46l13.22,6.47l-2.06,7.73l-30,8.58l-17.28,-6.19l-10.13,2.74l-2.05,-7.71l-0.88,0.03l-37.83,4.84l-33.84,12.8l-24.92,3.53L508.45,289l-5,3.59l-12.07,1.65l-28.8,13.08L450,317.29l-4.15,0.43l-5.02,5.67l-11.01,-12.92l-3.94,-8.88l0.24,-6.05l17.17,-0.61l-7.12,-6.2l-0.21,-4.11l-3.76,-1.29l0,0l1.76,-7.47l-2.86,-7.44l1,-3.43l0,0l3.72,-3l0,0l5.15,-4.15l0,0l-1.43,-10.44l-6.87,-6.87l-9.58,-3.72l-5.01,-15.73l-13.02,-1.86v-3.72l10.3,-3.58l-5.29,-13.45l0.14,-5.86l11.16,-23.74l6.87,-1.29l0,0l11.34,1.64l0,0l-4.05,15.46l7.59,8.92l1.33,6.08l2.47,3.23l18.23,5.51l0.38,7.41l27.72,26.96l-2.09,6.08l2.85,5.89l24.68,-1.52l1.9,-6.27l-3.61,-3.23l3.99,-4.56l-1.33,-2.85l12.53,-7.79l7.41,-0.76l1.48,-3.09l-2.19,-3.58l0,0l-2.82,-2.91l0,0l-5.68,-3.2l1.04,-2.97l11.01,2.09l15.38,-1.33l8.16,3.99l17.47,-12.15l11.77,-3.8v-8.54l-3.42,-8.73l19.94,-18.61l0.76,-3.61l-8.73,-10.06l-1.41,-5.85l0,0l10.78,-11.89L633.27,131.52zM574.63,119.63l-6.92,-6.55l5.64,2.03L574.63,119.63zM693.46,97.65l-6.71,-3.1l-2.65,-5.59l4.57,-9.37l11.79,12.08l-1.47,4.74L693.46,97.65zM578.31,88.95l28.69,-1.5l13.24,2.61l10.33,-1.4l0.7,2.11l5.12,-1.81l2.61,6.32l-0.6,7.32l2.31,1.81l-24.68,1.6l-10.53,8.43l-23.07,4.92l-6.12,-9.63l-5.72,-1.1l-5.02,-8.02l-16.05,-7.42l-5.72,-0.1l-4.01,-4.11l-3.11,1l-5.22,-4.51l-1.3,-6.12l12.64,-7.02l18.96,6.82l7.42,6.72L578.31,88.95zM771.21,72.11l21.97,14.55l6.12,10.36l0.7,5.72l-8.13,26.98l-8.33,4.71l-6.92,-3.31l-5.92,2.11l-18.46,8.83l-10.53,8.53l-21.97,-25.48l-2.91,-8.48l-13.24,-10.83l5.82,-11.84L704.3,76.5l16.15,0.5l9.88,-10.91l3.66,3.41l11.54,3.11l6.92,-7.02L771.21,72.11z'
	},

	{
		enable: true,
		name: 'South West',
		abbreviation: '05',
		textX: 0,
		textY: 0,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>South West</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M185.99,484.54l-2.31,1.47l3.5,2.82l-1.13,1.81l-8.58,1.75l-5.36,3.84l-1.02,-8.13l6.83,-1.75l2.03,-6.32l3.72,0.62L185.99,484.54zM313.25,460.57l-11.94,-5.42l-3.31,-6.32l0.9,-4.41L313.25,460.57zM243.6,447.43l2.96,0.89l2.54,5.67l-3.43,4.95l-3.89,1.23l-2.67,-8.84l3.39,-7.19L243.6,447.43zM181.9,447.02l6.04,-2.48l1.41,1.47l-3.44,4.01l6.49,4.18l-3.39,4.18l-17.89,0.62l-18.68,-3.5l1.41,-3.27l13.54,-9.08l11.12,-1.97L181.9,447.02zM393.23,423.71l5.43,3.01l0.06,9.56l-11.5,-13.16l2.36,-1.71L393.23,423.71zM409.87,427.38l-6.73,-5.37l-0.71,-4.84l8.26,5.9L409.87,427.38zM230.19,421.81l-7.82,-0.1l-1.3,-7.32l9.73,4.11l1.6,2.11L230.19,421.81zM401.9,410.27l-4.25,0.59l4.37,-3.01L401.9,410.27zM238.92,412.28l-5.82,-6.52l4.51,-6.02l3.41,6.72L238.92,412.28zM216.25,407.47l-5.32,-0.2l-2.11,-3.41l10.03,-5.72l5.52,1.3l0.5,4.31L216.25,407.47zM260.48,403.16l9.93,7.72l4.21,8.23h-8.13l-2.61,-5.82l-6.92,-3.81l-1.5,1.71l4.92,3.01l-4.21,3.91l-14.44,-2.51l2.81,-5.92l5.72,1.5l2.01,-2.01l-6.82,-2.91l-2.51,-7.72l1.3,-4.51l7.82,1.2L260.48,403.16zM333.09,361.34l7,1.18l3.85,-2.52l14.79,8.97l8.57,-0.08l7.24,2.99l8.81,-1.26l1.42,4.09l8.18,-3.38l2.36,2.28l-9.56,14l-4.72,-5.19l0.63,9.44L367.38,398l-14.71,-16.52L341.74,377l-16.52,-15.97L333.09,361.34zM382.56,363.23l-9.28,5.35l-19.04,-7.79l7.94,-5.11l10.23,-1.26L382.56,363.23zM184.53,311.65l0.9,7.92l6.02,6.72l14.95,3.61l3.91,4.31l-0.3,3.91l-11.94,7.12l-16.05,-5.42l-6.52,5.12l1.1,3.21l6.42,-0.1l0.3,3.71l-5.22,5.92l-18.66,-9.13l-0.9,-4.81l-2.71,2.35l-3.81,-0.7l-2.81,4.71l16.85,9.83l-0.4,1.71l-9.03,3.21l-20.06,12.84l-9.53,-19.96l-6.82,4.51l6.62,19.76l-1,2.61l-5.92,3.51l-8.53,-20.86l-7.02,5.72l6.02,21.37l-15.95,5.22l-8.93,-5.92l-12.14,-19.36l-8.33,-24l19.56,-19.36l28.84,-20.46l11.99,-1.02l2.81,-3.51l4.31,-0.3l0.6,2.71l-8.13,6.42l-11.94,15.55l5.92,6.72l6.82,-5.72l2.41,1.6l4.11,-1.6l0.4,-7.46l6.02,-6.02l5.22,-0.6v-4.62l3.31,1.61l1.91,-2.61l-2.71,-3.61l5.92,-3.81l14.65,-3.01l5.82,1L184.53,311.65zM136.61,291.37l-3.4,-0.74l-1.77,-10.2l5.91,4.95L136.61,291.37zM177.87,38.94l13.14,-2.4l4.72,7.59l6.83,3.88l-0.32,5.98l14.01,-1.62l9.4,5.15l17.19,-2.3l0,0l2.3,13.75l-12.16,14.05l-0.19,21.46l-4.94,8.74l2.28,14.05l10.83,16.33l12.53,30.76l1.9,20.13l13.67,16.7l7.79,5.13l0.57,4.36l-2.1,2.28l-8.35,0.57l-0.57,4.36l-8.92,4.94l-11.2,0.2v6.08l4.56,7.21l20.69,16.9l10.07,2.47l10.63,7.97l9.87,3.79l0.95,3.42l0,0l-0.57,3.41l0,0l-3.23,6.46l5.51,9.3l3.99,17.09l8.35,4.94l17.85,-0.19l1.52,2.28l0.38,3.42l-7.97,10.82l5.13,8.36l0,0l-0.19,2.71l-6.79,2.08l-10.03,-7.06l4.74,6.11l-2.8,2.8l-11.72,-12.48l-5.5,-1.78l-2.34,1.78l-24.12,-13.84l-15.13,24.04l-40.49,-25.98l6.37,-12.66l3.06,-1.43l11.1,6.32l-0.36,2.6l3.57,2.19l6.62,-2.04v3.41l2.98,2.01l7.05,0.23l3.05,-7.04l-17.97,-11.55l2.55,-7.92l-9.07,-8.72l-4.36,-11.7l-5.42,-4.48l-13.16,-0.34l14.59,6.05l5.29,14.75l-12.16,0.61l-30.89,-8.41l-5.96,1.91l2.37,-21.1l6.73,-8.62l-1.68,-2.45l-3.13,0.92l-6.27,8.79l-3.44,20.41l-14.53,-10.93l-8.56,-0.61l-4.36,2.22l-2.68,9.46h-6.5l-1.22,-4.05l-10.93,-6.27l-4.89,6.19l1.05,6.94l-15.65,1.93l-2.06,-15.29l-2.45,-2.68l-2.52,2.83l1.3,17.81l-3.52,1.68l-9.25,-8.79l-1.39,-7.81l-6.66,0.72l0.25,10.99l7.03,8.79l-11.7,10.22l-4.74,-4.59l-5.35,4.43l-9.61,-11.59l1.85,-4.3l-3.37,-4.81l-4.55,1.52l-2.41,-2.33l13.54,-16.05l-4.81,-0.67l-10.12,9.53l-3.88,-4.89l8.26,-9.9l-2.38,-3.88l-3.52,0.67l-8.78,8.69l-8.81,-7.22l-7.38,6.5l6.48,5.64l22.44,43.15l-0.59,3.96l-39.04,0.76l-12.73,-7.59l-1.94,-17.79l30.18,-84.18l-1.01,-7.84l5.9,-3.96l17.52,-33.3l6.76,-3.42l7.13,-18.27l7.58,-7.7l1.95,-27.8l4.01,-2.93l-0.05,-4.71l3.37,-0.51l-0.51,4.64l7.49,-4.17l-2.05,-4.68l4.64,-1.43l-1.6,-6.41l2.56,-1.66l-0.96,-1.89l3.04,0.34l-0.25,-9.78l13.37,-9.73l6.61,0.54V68.1l4.3,0.51l1.11,-2.75l10.01,-2.76l29.79,-25.39l15.45,-3.36L177.87,38.94z'
	}
		
]

////////////////////
//Pins config
////////////////////
var pins = [
	{
		//text displayed in tooltip
		name: 'Choa Chu Kang',
		//pin x position
		xPos: 251,
		//pin y position
		yPos: 117,
		//pin fill color
		color: '#ffc90e',
		//pin hover color
		hoverColor: '#E32F02',
		//pin selected color
		selectedColor: '#feb41c',
		//pin url is useText false
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		//text displayed in textarea when pin is clicked and useText true
		text: '<h1>Choa Chu Kang</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'
	}

]
