WW.Timeline = function(){

};

WW.Timeline.prototype = {
	current_time = 0,

	BindTimecodeController : function(clip){
		
	},
	
	Tick : function(time, sweep){
		if (typeof(sweep) === undefined){
			sweep = true;
		}

		if (sweep){
			var range = new WW.Range(current_time, time);
			//TODO: Create a list of events in that range
			
 		}

		current_time = time;
	},
};

