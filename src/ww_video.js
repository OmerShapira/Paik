WW.Video = function(videoElement){
	time = -0.01; //Before start
	this.videoElement = videoElement;
	this.Initialize();
};

WW.Video.FromUrl = function (url){
	var videoElement = document.createElement('video');
	//TODO: Add cases for more than one url
	var source = document.createElement('source');
	source.src = url;
	videoElement.appendChild(source);
	return new WW.Video(videoElement);
}

WW.Video.prototype = {

	get Time(){
		//Millisecond time.
		return Math.trunc(this.videoElement.currentTime*1000);
	},

	Initialize : function(){
		var w = window.innerWidth, h = window.innerHeight;
		videoImage = document.createElement( 'canvas' );

		videoImage.width = this.videoElement.videoWidth;
		videoImage.height = this.videoElement.videoHeight;
		console.log('Video Size :' + videoImage.width + ' ' + videoImage.height);

		videoContext = videoImage.getContext('2d');
		videoContext.fillStyle = '#000000';
		videoContext.fillRect( 0, 0, videoImage.width, videoImage.height );

		this.context = videoContext;

	//TODO: Bind events abort, error, pause, stalled, suspend to "Interrupted"
	},

	StartPlaying : function(){
		var ve = this.videoElement;
		ve.play();
		ve.muted = true;
		ve.loop = true;
	},

	GetMaterial : function(){
		
		//FIXME (OS): Make sure this works with THREE
		//TODO (OS): Make this a proper mixin
		if (! this.texture){
			videoTexture = new THREE.Texture( videoImage );
			videoTexture.minFilter = THREE.LinearFilter;
			videoTexture.magFilter = THREE.LinearFilter;
			this.texture = videoTexture;
		}

		movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );

		return movieMaterial;
	},

	Tick : function() {
		var video = this.videoElement;
		if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
			this.context.drawImage( video, 0, 0 );
			if ( this.texture ){
				this.texture.needsUpdate = true;
			}
		}
	},

	Interrupted : function(){},

	GetTimecodeController : function(){
		var self = this;
		var query = function(){
			return self.Time;
		};
		return new WW.TimecodeController(query);
	}
};

