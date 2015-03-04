Pk.Group = function(name, controller){
	
	//TODO: Safety checks
	this.name = name;
	this.controller = controller;
	this.subscribers = new Set();
	this.self = this;
}

Pk.Group.prototype = {
	
	Add : function (clip){
		if ( !( clip instanceof Clip ) ){
			
			throw "Not a valid clip";

		} else {

			clip.group = self;
			//TODO (OS): Not sure this should go here
			Pk.Timeline.Add(clip);

		}
	}

	ActivateClip : function( clip ){

		//TODO (OS): check that this is a tick function
		subscribers.add( clip.tickFunction );

		clip.resources.forEach( 
				function( asset ){
					controller.Add( asset );
				}); 
	},

	DeactivateClip : function( clip ){

		subscribers.delete( clip.tickFunction );

		clip.resources.forEach( 
			function( asset ){
				controller.Remove( asset );
			}); 

	},


	Tick : function ( time ){

		//opinionated : will tick scene before components.
		// maybe it's better to do the other way around.
		controller.Tick( time );
		subscribers.forEach(
			function( tickFunction ){
				// TODO (OS) : Check what 'this' is bound to
				tickFunction( time );
			} );

	},

	Draw : function ( ){

		controller.Draw( );

	}
}





