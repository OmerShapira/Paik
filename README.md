# Paik

Paik is a library for synchronising time-based events to a single video. 

## Features
* Tick-based event loop timed by a `<video>` element's timecode.
* Clips with timed, async asset loading (work in progress)
* A Timeline to synchronise `clip` loading 
* Integration with THREE.js


### Example Usage with Three.js:

```javascript
//Three.JS stuff

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


// Set up the scene controller.

var scenectrl = new Pk.GroupController({
	Add  	: function(x){scene.add(x)},
	Remove  : function(x){scene.remove(x)},
	Draw 	: function(x){renderer.render(scene, camera);},
});

var sceneGroup = new Pk.Group("Scene", scenectrl);
Pk.Groups.push(sceneGroup);

var PrintTime = function(time){console.log("TICK " + time)}

sceneGroup.Add( new Pk.Clip(0, 1500, [obj1], PrintTime));
sceneGroup.Add( new Pk.Clip(1700, 2700, [obj2],PrintTime));


Pk.Timeline.Build();

var video = Pk.Video.FromUrl("video/video.mp4");
Pk.Player.SetTimecodeTrack(video.GetTimecodeController());
video.StartPlaying();
Pk.Player.Start();

```

### Under development
This software is under development. It is proven to be capable of eating your family and your backup foster family. Be careful.