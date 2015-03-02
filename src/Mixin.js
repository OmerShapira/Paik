Pk.Mixin = function (options){

	//TODO: Yes, I know it's bad, but I don't have a different solution right now
	this.type = "Pk.Mixin";

	if (!Pk.Util.Exists(options)){
		console.error("Not a valid Mixin");
		return;
	}

	['Add', 'Remove', 'Begin', 'Tick', 'Draw', 'End'].forEach(
			function (property){
				if (Pk.Util.IsFunction(options[property])){
					this[property] = options[property];
				} else {
					console.warn(property + " is not implemented in this mixin");
				}			
			}
			.bind(this)
		);
};

Pk.Mixin.prototype.Add = function(resource_list) {};

Pk.Mixin.prototype.Remove = function(resource_list) {};

Pk.Mixin.prototype.Begin = function(resource_list) {};

Pk.Mixin.prototype.Tick = function(time) {};

Pk.Mixin.prototype.Draw = function() {};

Pk.Mixin.prototype.End = function(time) {};