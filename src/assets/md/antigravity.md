# Anti-gravity, now this is epic

Anti gravity is a platformer game where you can.. well.. switch your gravity. 
It was made in Game Maker Studio in the span of 8 weeks, and I made everything myself.

## What did I do and learn? 

### Collision

Collision is actually quite simple in this one. It will check the next position, and if it detects an object there, it will half the distance until it finds a position it can move to.

### Custom gravity

When the player is grounded normally, it's very easy to do collision detection. 
Especially when there's so much going on! But when the player can effectively turn upside down, 
this changes. Now, the collision detection must be turned upside down as well! I'm making this
sound harder than it is, because it's really quite easy.

### Animations

It might be a surprise considering how extremely good the game looks (lol), but everything is drawn by 
me. Contrary to what others say, nothing has been rotoscoped, although I did use the jump animation from
Prince of Persia as reference, which was also an inspiration to this game. For the rest, I just looked up
videos of people, or googled images of them in certain poses as reference to draw those poses in my
game. Neat.

### State Machine 

Game maker has a ridiculously easy way of making a state machine. You just make a variable with a reference to the script, and call it with `script_execute`.
That's it. You can use references of the current object in that object! Extremely easy to do so. But yeah, I learned this.