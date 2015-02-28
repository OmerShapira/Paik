WW.Timeline = (function(){
	
	var current_time = 0;
	var IntervalQuery =  null;
	var Clips = [];

	return {

		Add : function(){
			for (var i = arguments.length - 1; i >= 0; i--) {
				Clips.push(arguments[i]);
			};
		},

		BindTimecodeController : function(controller){
			//FIXME:This way one can subscribe to multiple controllers
			controller.Subscribe(this.SetTimecode.bind(this));
		},
		
		SetTimecode : function(time, sweep){
			if (typeof(sweep) === 'undefined'){
				sweep = true;
			}
			if (sweep){
				var interval = new WW.Interval(current_time, time);
				//TODO: Create a list of events in that range
	 		}
			current_time = time;
		},

		Build : function(){
			IntervalQuery = new WW.IntervalTree();
			Clips.forEach(
				function(clip){IntervalQuery.pushInterval(clip.interval);}
				);
			//FIXME (OS): Problem is here.
			IntervalQuery.buildTree();
		},

		Test : function(from, to, opts){
			// var interval = WW.Interval(from, to);
			console.log(IntervalQuery.queryInterval(from, to, opts));
		}

	}
	

})();




	


