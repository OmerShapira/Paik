WW.Player = (
	function(){
		
		//Singleton pattern! Object is instantiated.
		var requestID;
		var playing = false;
		var lastCall = 0;
		var subscribers = [];
		function doRequest(){
			requestID = window.requestAnimationFrame(animationRequest);
		}

		function animationRequest(hiresTimestamp){
			// var loadtime = Date.now() - hiresTimestamp;
			doRequest(); //This is a loop
			Tick(hiresTimestamp);
			Draw();

			// console.log ("Timing : " + hiresTimestamp - lastCall);
			// console.log (hiresTimestamp - Date.now() + loadtime);
			lastCall = hiresTimestamp;
		}

		function Tick(time){
			subscribers.forEach(
					function(f){f(time);}
				);
			}

		function Draw(){
			WW.Timeline.GetDrawables
			//TODO: Implement
		}

		return {
			Start: function(){
				if (playing !== true){
					doRequest();
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

			Tick: Tick,
			Draw: Draw
		}
	})();




