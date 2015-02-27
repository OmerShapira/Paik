WW.Timeline = (function(){
	
	var current_time = 0;

	return {
		
		BindTimecodeController : function(controller){
			//FIXME:This way one can subscribe to multiple controllers
			controller.Subscribe(this.SetTimecode.bind(this));
		},
		
		SetTimecode : function(time, sweep){
			if (typeof(sweep) === 'undefined'){
				sweep = true;
			}
			if (sweep){
				var range = new WW.Range(current_time, time);
				//TODO: Create a list of events in that range
	 		}
			current_time = time;
		}	
	}
	

})();




	


