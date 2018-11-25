# Kwartet

Kwartet (Quartets) started as school project, but I was so interested in the project that I worked on it even after the project was due. The project is finished, but I still want to work on it, and is on the backlog for polishment.

## What I did

### Sockets

I learned how to use Sockets. It's pretty easy, it communicates by serializing classes to JSON and sending them over to either devices. I developed ways to track what players were connected and, send messages to them.

### Message system

Messages use a base class, that provide the player ID, event, and other data that needs to be provided for the server/client. This is a very simple system, but I had some problems properly serializing to a Json so the code is kind of messy. 

### Scenes

The server client works using scenes. Right now, there are 2 scenes, the connection phase scene, and the game scene. The players connect first, and when the server receives a "start" message and there are enough players, the scene switches to the game scene.

## What I could've done better

What I'm not happy with is how the game looks, the animations are weird, the positions are just set and then the objects automatically lerp to the positions with the speed that is specified. I'd like to improve this to increase the quality of animations. It works, but right now it's just _ugly_.

When there are no cards anymore, the game freezes for a bit and then closes. There is no logic to check whether the game is done and declare a winner. This would be a simple task, so I'll add this first.

The game is also very ugly, the background is a disgusting weird green. This could be easily improved as well.