Pk.Timeline = (function(){
	
	var current_time = 0;
	var IntervalQuery =  null;
	var AllClips = [];
	var isBuilt = false;
	var playMode = true;
	//TODO: Use these
	var ClipsInCurrentFrame = [];
	var ClipsInLookahead = [];
	var ClipsForRemoval = [];

	var HandleClipsInRange = function(interval_list){
		//TODO (OS): 
	}

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
				//TODO: Maybe play next frame, not current?
				//TODO: Create list of differences for removing clips from teh list
				var clipsInRange = [];
				var opts = {
					resultFn : function(x) {clipsInRange = x}.bind(this)
				};
				IntervalQuery.queryInterval(current_time, time, opts);
				if (clipsInRange.length > 0) {console.log(clipsInRange);}
				
	 		}
			current_time = time;
		},


		/*
		 * Must be called before the timeline is functional
		 * Due to using static tree, no more additions can be made
		 * after calling this. This can be switched by a dynamic
		 * interval query, like in here:
		 * https://github.com/toberndo/interval-query
		 */
		Build : function(){
			IntervalQuery = new Pk.IntervalTree();
			AllClips.forEach(
				function(clip){
					IntervalQuery.pushInterval(clip.interval);
				});
			IntervalQuery.buildTree();
			isBuilt = true;
		},

		/*
	     * Adds any number of clips to the timeline
	     */
		Add : function(){
			if (isBuilt === true){ 
				console.warn("Trying to add clips to a built timeline");
				return;
			}
			for (var i = arguments.length - 1; i >= 0; i--) {
				AllClips.push(arguments[i]);
			};
		},


		SetPlayMode : function(status) {
			if ((status !== true) && (status !== false)){
				return;
			} else {
				playMode = status;
			}
		}

	}
	

})();




	


