Pk.GroupController = function ( options ){

	//TODO: Yes, I know it's bad, but I don't have a different solution right now
	this.type = "Pk.GroupController";

	if ( ! Pk.Util.Exists( options ) ){
		console.error( "Not a valid GroupController" );
		return;
	}

	[ 'Add', 'Remove', 'Begin', 'Tick', 'Draw', 'End' ].forEach( 
			function ( property ){
				if ( Pk.Util.IsFunction( options[ property ] ) ){
					this[ property ] = options[ property ];
				} else {
					console.warn( property + " is not implemented in this GroupController" );
				}			
			}
			.bind( this )
		 );
};

Pk.GroupController.prototype.Add = function( resource_list ) {};

Pk.GroupController.prototype.Remove = function( resource_list ) {};

Pk.GroupController.prototype.Begin = function( resource_list ) {};

Pk.GroupController.prototype.Tick = function( time ) {};

Pk.GroupController.prototype.Draw = function(  ) {};

Pk.GroupController.prototype.End = function( time ) {};