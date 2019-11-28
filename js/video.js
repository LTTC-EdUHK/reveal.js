(function() {
//something ad hoc run here
})();

function defVideoTag(){
	var zoomEg       = document.querySelector('a#uiZoom'); //the element id cannot have _,- characters
	var panEg        = document.querySelector('a#uiPan'); //the element id cannot have _,- characters
	var projEg       = document.querySelector('a#uiProj'); //the element id cannot have _,- characters
	var transEg      = document.querySelector('a#uiTranslateObj'); 
	var rotEg        = document.querySelector('a#uiRotateObj'); 
	var scaleEg      = document.querySelector('a#uiScaleObj'); 
	var addMatEg     = document.querySelector('a#propAddMat'); 
	var colorMatEg   = document.querySelector('a#propColorMat'); 
	var addCompEg    = document.querySelector('a#propAddComp'); 
	var addSkyboxEg  = document.querySelector('a#propAddSkybox'); 

	if(zoomEg != 'null') {
		zoomEg.addEventListener("click", function(event){
			event.preventDefault();movie.play();movie.pause();movie.currentTime=13;movie.play();
		},true);
	};
	if(panEg != 'null') {
		panEg.addEventListener("click", function(event){
			event.preventDefault();movie.play();movie.pause();movie.currentTime=20;movie.play();
		},true);
	};
	if(projEg != 'null') {
		projEg.addEventListener("click", function(event){
			event.preventDefault();movie.play();movie.pause();movie.currentTime=24;movie.play();
		},true);
	};

	rotEg.addEventListener("click", function(event){
		event.preventDefault();movieObjC.play();movieObjC.pause();movieObjC.currentTime=23;movieObjC.play();
	},true);

	scaleEg.addEventListener("click", function(event){
		event.preventDefault();movieObjC.play();movieObjC.pause();movieObjC.currentTime=31;movieObjC.play();
	},true);

    addMatEg.addEventListener("click", function(event){
		event.preventDefault();movieProp.play();movieProp.pause();movieProp.currentTime=0;movieProp.play();
	},true);   

    colorMatEg.addEventListener("click", function(event){
		event.preventDefault();movieProp.play();movieProp.pause();movieProp.currentTime=40;movieProp.play();
	},true); 

    addCompEg.addEventListener("click", function(event){
		event.preventDefault();movieProp.play();movieProp.pause();movieProp.currentTime=68;movieProp.play();
	},true);  

    addSkyboxEg.addEventListener("click", function(event){
		event.preventDefault();movieProp.play();movieProp.pause();movieProp.currentTime=116;movieProp.play();
	},true);

}
