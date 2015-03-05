Pk.Timeline = ( function( ){
	
	var current_time = 0;
	var IntervalQuery =  null;
	var AllClips = [ ];
	var isBuilt = false;
	var playMode = true;
	
	var IntervalsInCurrentFrame = {};
	
	//TODO ( OS ): Create lookahead

	var HandleClipsInRange = function( interval_list ){

		/* 
		* In set language:
		* objects for insertion  = in \ current
		* objects for removal = current \ in
		* but js doesn't have set algebra, so we use IDs instead.
		*/
		var ClipsForRemoval = [ ];	
		//Find set difference and set excluded cilps for removal
		Object.keys( IntervalsInCurrentFrame ).forEach(

			function( key ){
				if ( ! Pk.Util.Exists( interval_list[ key ] ) ){
					//Doesn't exist? mark for deletion
					var removed = IntervalsInCurrentFrame[ key ];
					delete IntervalsInCurrentFrame[ key ];
					ClipsForRemoval.push( removed.clip );
				} else {
					//Does exist? Keep it playing
					delete interval_list[ key ];
				}	} 

			);

		//First, clean up.
		HandleRemovedClips( ClipsForRemoval );

		// The keys that weren't plucked from interval_list are new. Insert them into the scene.
		HandleNewClips( Object.keys( interval_list ).map( 

			function( key ){ return interval_list[ key ].clip; } )

			);

		//Finally, add the new clips to the "currently playing" set.
		Object.keys( interval_list ).forEach( 

			//TODO (OS) : This means duplicate state. Shouldn't be a thing.
			function( key ){ IntervalsInCurrentFrame[ key ] = interval_list[ key ]; }

			);

	};

	var HandleNewClips = function( clips ){

		clips.forEach( 
			function( clip ){
				clip.group.ActivateClip(clip);
			} );

	};

	var HandleRemovedClips = function( clips ){

		clips.forEach( 
			function( clip ){
			clip.group.DeactivateClip(clip);
		} );

	};

	return {
		
		SetTimecode : function( time, sweep ){

			if ( !Pk.Util.Exists( sweep ) ){
				sweep = true;
			}

			if ( sweep ){
				//TODO: Maybe play next frame, not current?
				var opts = {
					resultFn : HandleClipsInRange.bind( this )
				};
				IntervalQuery.queryInterval( current_time, time, opts );
			}

			Pk.Groups.forEach(
				function( group ){
					group.Tick( time );
				} );


			Pk.Groups.forEach(
				function( group ){
					group.Draw( );
				} );


			current_time = time;

		},


		/*
		 * Must be called before the timeline is functional
		 * Due to using static tree, no more additions can be made
		 * after calling this. This can be switched by a dynamic
		 * interval query, like in here:
		 * https://github.com/toberndo/interval-query
		 */
		Build : function( ){

			IntervalQuery = new Pk.IntervalTree( );
			AllClips.forEach( 

				function( clip ){
					IntervalQuery.pushInterval( clip.interval );
				} 

				);
			IntervalQuery.buildTree( );
			isBuilt = true;

		},

		/*
	    * Adds any number of clips to the timeline
	    */
	    Add : function( ){

	    	if ( isBuilt === true ){ 
	    		console.warn( "Trying to add clips to a built timeline" );
	    		return;
	    	}

	    	for ( var i = arguments.length - 1; i >= 0; i-- ) {

	    		if ( arguments[i] instanceof Pk.Clip ){
		    		AllClips.push( arguments[ i ] );
	    		} else {
	    			throw "Trying to add a non-clip to the timeline"
	    		}

	    	};

	    },


	    SetPlayMode : function( status ) {

	    	if ( !Pk.Util.IsBool( status ) ){
	    		return;
	    	} else {
	    		playMode = status;
	    	}

	    },

	}


	} )(  );




	


