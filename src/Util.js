Pk.Util = {};

//Test Methods

Pk.Util.Work 	= function(times){for (var i = 0 ; i < times ; i++ ){}}

//Convenience Functions

Pk.Util.Exists 	= function (def) {return (typeof(def) !== "undefined");}
Pk.Util.IsBool 	= function (def) {return ((def === true) || (def === false));}

