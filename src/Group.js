Pk.Group = function(name, controller){
	
	//TODO: Safety checks
	this.name = name;
	this.controller = controller;
	this.subscribers = new Set();

}

Pk.Group.prototype = {
	
	Subscribe : function( asset ){

		subscribers.add( asset );

	},

	Unsubscribe : function( asset ){

		subscribers.delete( asset );

	},

	Tick : function ( time ){

		controller.Tick( time );
		//TODO: Figure out what to do with clips

	},

	Draw : function ( ){

		controller.Draw( );

	}
}





