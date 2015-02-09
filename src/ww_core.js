WW.Core = function(){};

WW.Core.prototype.Setup = function(){
//Awake
};
WW.Core.prototype.Start = function(){
//Play
};
WW.Core.prototype.Tick = function(time){
//Update
};
WW.Core.prototype.Draw = function(){
//Render
};

WW.Core.Loop = (function(update, draw){
	//TODO (OS): Create a KeepAnimating boolean and a stop function
	var instance = {
		//TODO (OS): Send Tick as a update
		// update
		function animationRequest(hiresTimestamp){
			window.requestAnimationFrame(animationRequest);
			update();
			draw();
		}
	};

	function getInstance(){
		return instance;
	}

	function Begin(){
		window.requestAnimationFrame(instance.animationRequest);
	};
	
})();