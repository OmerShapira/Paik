"use strict";
Pk.Clip = function (from, to, resources, playFunction){
	this.interval 		= new Pk.Interval(from,to);
	this.interval.clip 	= this;
	this.resources 		= resources;
	this.playFunction 	= playFunction;
};

Pk.Clip.prototype = {
	
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