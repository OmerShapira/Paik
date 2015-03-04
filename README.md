# Paik

Paik is a library for synchronising time-based events to a single video. 

## Features
* Tick-based event loop timed by a `<video>` element's timecode.
* Clips with timed, async asset loading (work in progress)
* A Timeline to synchronise `clip` loading 
* Integration with THREE.js

## Usage:

Import Build\Paik.js, that's as stable as can be (source isn't, until Paik hits a tagged version).
 
 ```javascript
 
 Pk.Timeline.Add(
 	//new Pk.Clip(from_timecode, to_timecode, [assets...], tickfunction)
	new Pk.Clip(0, 1500, clipassets_0, tickfunction_0),
	// ...
	new Pk.Clip(5000, 5200, clipassets_n, tickfunction_n)
	);
//Locks the timeline(may be removed in later versions)
Pk.Timeline.Build();

//The video object wraps a playable video
var Video = Pk.Video.FromUrl("video/video.mp4");
//The timecode track sends events to the player whenever the video timecode changes
Pk.Timeline.BindTimecodeController(video.GetTimecodeController());

Pk.Player.Start();
Video.StartPlaying();
 ```

### Example Usage with Three.js:

```javascript

var obj1 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1), 
	new THREE.MeshBasicMaterial({color: 0x00ff00}));

var obj2 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1), 
	new THREE.MeshBasicMaterial({color: 0x0000ff}));

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


Pk.Timeline.Add(
	new Pk.Clip(0, 1500, [obj1]),
	new Pk.Clip(1700, 2700, [obj2])
	);
Pk.Timeline.Build();

Pk.Player.ConnectMixin({
	Add  	: function(x){scene.add(x)},
	Remove  : function(x){scene.remove(x)},
	Draw 	: function(x){renderer.render(scene, camera);},
});

var video = Pk.Video.FromUrl("video/video.mp4");
Pk.Timeline.BindTimecodeController(video.GetTimecodeController());
video.StartPlaying();
Pk.Player.Start();
```

### Under development
This software is under development. It is proven to be capable of eating your family and your backup foster family. Be careful.