(function() {
//something ad hoc run here
})();

function defVideoTag(){
	var zoomEg = document.querySelector('a#uiZoom'); //the element id cannot have _,- characters
	var panEg = document.querySelector('a#uiPan'); //the element id cannot have _,- characters
	var projEg = document.querySelector('a#uiProj'); //the element id cannot have _,- characters

	if(zoomEg != 'null') {
		console.log('a');
		zoomEg.addEventListener("click", function(event){
			event.preventDefault();movie.play();movie.pause();movie.currentTime=13;movie.play();
		},true);
	};
	if(panEg != 'null') {
		console.log('b');
		panEg.addEventListener("click", function(event){
			event.preventDefault();movie.play();movie.pause();movie.currentTime=20;movie.play();
		},true);
	};
	if(projEg != 'null') {
		console.log('c');
		projEg.addEventListener("click", function(event){
			event.preventDefault();movie.play();movie.pause();movie.currentTime=24;movie.play();
		},true);
	};}
