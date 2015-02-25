WW.Timeline = (function(){
	
	var current_time = 0;

	return {
		
		BindTimecodeController : function(controller){
			//FIXME:This way one can subscribe to multiple controllers
			controller.Subscribe(this.SetTimecode.bind(this));
			WW.Player.Subscribe(controller);
		},
		
		SetTimecode : function(time, sweep){
			if (typeof(sweep) === 'undefined'){
				sweep = true;
			}
			console.log("Set Timecode : " + time);

			if (sweep){
				var range = new WW.Range(current_time, time);
				//TODO: Create a list of events in that range
	 		}
			current_time = time;
		}	
	}
	

})();




	


