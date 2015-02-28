"use strict";

/* 
 * Player Singleton
 */
Pk.Player = (
	function(){
		var requestID;
		var playing = false;
		var lastCall = 0;
		var subscribers = [];
		function RequestLoop(){
			requestID = window.requestAnimationFrame(ProgramMainLoop);
		}

		/*
		 * Main Loop for running the timing functions
		 */
		function ProgramMainLoop(hiresTimestamp){
			RequestLoop(); 
			//TODO (OS): Check timing between begin and end, to see if preloading can be done
			
			Tick(hiresTimestamp);
			Draw();

			
			lastCall = hiresTimestamp;
		}

		function Tick(time){
			subscribers.forEach(
					function(f){f(time);}
				);
			}

		function Draw(){
			//TODO: Implement
			// Pk.Timeline.GetDrawables
		}

		return {
			Start: function(){
				if (playing !== true){
					RequestLoop();
					playing = true;
				}
			},

			Stop: function(){
					window.cancelAnimationFrame(requestID);
					playing = false;
				},

			Subscribe: function(thing){
				subscribers.push(thing);
			},
		}
	})();




