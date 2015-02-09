
WW.TimecodeController = function(getTime){
	TimeQuery = getTime;
};

WW.TimecodeController.prototype = {
	TimeQuery   = null,
	subscribers = [],
	interval_ms = 20,
	currentTime	= 0,
	interval_id = null,

	Subscribe : function(callback){
		this.subscribers.push(callback);
	},

	Tick : function(time){
		var action = function(currentValue){
				currentValue(time);
			};
		this.subscribers.forEach(action);
	},

	Start : function(){
		var action = function(){
			var read_time = getTime();
			if (read_time != currentTime){
				currentTime	= read_time;
				Tick(currentTime);
			}
		};
		interval_id = setInterval(action, _interval_ms);
	},

	Stop : function(){
		clearInterval(interval_id);
		interval_id = null;
	},
};