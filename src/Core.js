"use strict";

/* 
 * Player Singleton
 */
Pk.Player = ( 
	function( ){

		var requestID;
		var playing = false;
		var lastCall = 0;

		function RequestLoop( ){ 

			requestID = window.requestAnimationFrame( ProgramMainLoop );

		}

		/*
		 * Main Loop for running the timing functions
		 */
		function ProgramMainLoop( hiresTimestamp ){ 

			RequestLoop( ); 
			//TODO ( OS ): Check timing between begin and end, to see if preloading can be done

			Update( hiresTimestamp );

			lastCall = hiresTimestamp;

		}

		// Only updates the current timecode track.
		function Update( time ){ 

			Pk.TimecodeTrack.Update( time );

			}



		return { 

			Start: function( ){ 

				if ( playing !== true ){ 
					RequestLoop( );
					playing = true;
				}

			},

			Stop: function( ){ 

					window.cancelAnimationFrame( requestID );
					playing = false;

				},

			SetTimecodeTrack : function( tc_controller ) {

				if ( tc_controller instanceof Pk.TimecodeController ){

					Pk.TimecodeTrack = tc_controller;

				} else {

					throw "Trying to set an invalid timecode controller"

				}

			}

		}
	} )( );


Pk.Groups = [];

