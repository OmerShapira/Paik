Pk.Util = { };

//Test Methods

Pk.Util.Work 	= function( times ){ for ( var i = 0 ; i < times ; i++  ){ } }

//Convenience Functions

Pk.Util.Exists 	= function ( def ) { return ( typeof( def ) !== "undefined" ); }

Pk.Util.IsBool 	= function ( def ) { return ( ( def === true ) || ( def === false ) ); }

Pk.Util.IsFunction = function ( thing ){ 
	
	//http://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
	var getType = {  };
 	return Pk.Util.Exists( thing ) && getType.toString.call( thing ) === '[object Function]';

 }
