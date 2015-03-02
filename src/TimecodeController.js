Pk.TimecodeController = function( getTime ){

	timePoll = getTime;

};


Pk.TimecodeController.prototype = {

	currentTimecode	: 0,

	Subscribe : function( callback ){

		this.subscribers.push( callback );

	},

	SendTimecodeTick : function( time ){

		Pk.Timeline.SetTimecode(time);

	},

	Update : function( ){

		var read_timecode = timePoll( );
		
		if ( read_timecode != this.currentTimecode ){

			this.currentTimecode = read_timecode;
			this.SendTimecodeTick( read_timecode );
			
		}

	},

};