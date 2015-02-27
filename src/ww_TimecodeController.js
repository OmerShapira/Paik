WW.TimecodeController = function(getTime){
	timeQuery = getTime;
	WW.Player.Subscribe(this.Tick.bind(this));
};

WW.TimecodeController.prototype = {
	subscribers : [],
	currentTimecode	: 0,

	Subscribe : function(callback){
		this.subscribers.push(callback);
	},

	SendTimecodeTick : function(time){
		var action = function(currentValue){
				currentValue(time);
			};
		this.subscribers.forEach(action);
	},

	Tick : function(){
		var read_timecode = timeQuery();
		if (read_timecode != this.currentTimecode){
			this.currentTimecode	= read_timecode;
			this.SendTimecodeTick(read_timecode);
		}
	}

};