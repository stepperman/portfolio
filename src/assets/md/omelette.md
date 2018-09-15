# Space Omelette

Space Omelette was puzzle platformer game made in the first year at school.  
The goal of this game is to complete each room as you progress through the level and eventually
complete the game.  

## What I did and learned

### Player Collision

I learned how to make a custom 2D player collider without using Rigidbodies. 
This was done by using Unity's raycasts, which also calculates slopes when going up (but not down).

### Grabbing and throwing

The player can grab objects, and drop or throw them. They can adjust the power of the throw by moving the mouse further away from the player. This was quite an easy task, but I've never done it.

### Line trajectory

When the player holds down the throw button, a blue line trajectory appears to guess where the egg will land. Unless something is in the way, this is accurate.  
If there is a wall in the way, it won't add this into the calculations because it will only test it with a simple raycast, but it helps a lot.

### Water physics

The game also includes water, which I created with the help of a guide, but I implemented my own stuff in it.  
Light eggs float, heavy eggs sink, and the player is slowly submerged in the water.  
I created my own collision detection for this water, where it detects the point of the player in accordance to the position of the water and checks if he's in the water.
Meaning, if there are heavy waves, the objects can exit or enter the water condition depending on the height of the waves.