WW.Clip = function (resources, range, playFunction){
	this.range = range;
	this.resources = resources;
	this.playFunction = playFunction;
};

WW.Clip.prototype = {
	
	Preload : function(){
		resources.forEach(function(x){x.Load();});
	},

	Dispose : function(){
		resources.forEach(function(x){x.Dispose();});	
	},

	Play : function(tickService){
		resources.forEach(function(x){x.Begin();});	
		//TODO: Require parent
		tickService.Register(this.playFunction);
	},

	Stop : function(tickService){
		resources.forEach(function(x){x.End();});	
		//TODO: Require parent
		tickService.Unregister(this.playFunction);
	}
};