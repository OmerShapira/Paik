"use strict";
Pk.Clip = function ( from, to, resources, tickFunction ){ 

	this.interval 		= new Pk.Interval( from, to );
	this.interval.clip 	= this;
	this.resources 		= resources;
	this.tickFunction 	= tickFunction.bind(this);

};


//TODO: Perhaps all of this isn't necessary?
Pk.Clip.prototype = { 

	Tick : function ( time ){

		//The tick function should know about the resources.
		tickFunction ( time );

	},
	
	Load : function( ){ 

		resources.forEach( function( x ){ x.Load( ); } );

	},

	Dispose : function( ){ 

		resources.forEach( function( x ){ x.Dispose( ); } );	

	},

	Play : function( ){ 

		resources.forEach( function( x ){ x.Begin( ); } );	

	},

	Stop : function( ){ 

		resources.forEach( function( x ){ x.End( ); } );	
			
	}
};