/**
 * @constructor
 */
Pk.Group = function(name, controller){
	
	this.name = name;
	if (controller instanceof Pk.GroupController){
		this.controller = controller;
	} else {
		console.warn("Group " + name + ": controller argument isn't of type Pk.GropuController")
	}
	
	this.subscribers = new Set();

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

		if ( Pk.Util.IsFunction( clip.tickFunction ) ){
			this.subscribers.add( clip.tickFunction );
		};

		clip.resources.forEach( 
				function( asset ){
					this.controller.Add( asset );
				}.bind(this)); 
	},

	DeactivateClip : function( clip ){

		if ( Pk.Util.IsFunction( clip.tickFunction ) ){
			this.subscribers.delete( clip.tickFunction );
		};

		clip.resources.forEach( 
			function( asset ){
				this.controller.Remove( asset );
			}.bind(this)); 

	},


	Tick : function ( time ){

		//Tick scene before components.
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





