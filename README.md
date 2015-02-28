# Paik

Paik is a library for synchronising time-based events to a single video. 

## Features
* Tick-based event loop timed by a `<video>` element's timecode.
* Clips with timed, async asset loading (work in progress)
* A Timeline to synchronise `clip` loading 
* Integration with THREE.js

## Usage:
 
 ```javascript
 
 Pk.Timeline.Add(
	new Pk.Clip(0, 1500, clipassets_0, tickfunction_0),
	// ...
	new Pk.Clip(5000, 5200, clipassets_n, tickfunction_n)
	);
Pk.Timeline.Build();

var Video = Pk.Video.FromUrl("video/video.mp4");
Pk.Timeline.BindTimecodeController(video.GetTimecodeController());
Pk.Player.Start();
Video.StartPlaying();
 ```

