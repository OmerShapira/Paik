/**
 * @constructor
 */
Pk.Group = function(name, controller){
	
	//TODO: Safety checks
	this.name = name;
	this.controller = controller;
	this.subscribers = new Set();
	this.self = this;

}

Pk.Group.prototype = {
	
	Add : function ( clip ){
		if ( !( clip instanceof Pk.Clip ) ){
			
			throw "Not a valid clip";

		} else {

			clip.group = this;
			//TODO (OS): Not sure this should go here
			Pk.Timeline.Add( clip );

		}
	},

	ActivateClip : function( clip ){

		//TODO (OS): check that this is a tick function
		this.subscribers.add( clip.tickFunction );

		clip.resources.forEach( 
				function( asset ){
					this.controller.Add( asset );
				}.bind(this)); 
	},

	DeactivateClip : function( clip ){

		this.subscribers.delete( clip.tickFunction );

		clip.resources.forEach( 
			function( asset ){
				this.controller.Remove( asset );
			}.bind(this)); 

	},


	Tick : function ( time ){

		//opinionated : will tick scene before components.
		// maybe it's better to do the other way around.
		this.controller.Tick( time );
		this.subscribers.forEach(
			function( tickFunc ){
				// TODO (OS) : Check what 'this' is bound to
				tickFunc( time );
			} );

	},

	Draw : function ( ){

		this.controller.Draw( );

	}
}





