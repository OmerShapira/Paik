Pk.TimecodeController = function(getTime){
	timePoll = getTime;
	Pk.Player.Subscribe(this.Tick.bind(this));
};

Pk.TimecodeController.prototype = {
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
		var read_timecode = timePoll();
		if (read_timecode != this.currentTimecode){
			this.currentTimecode	= read_timecode;
			this.SendTimecodeTick(read_timecode);
		}
	}

};