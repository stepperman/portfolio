# Cuphead

Cuphead is a game for the vertical slice assignment at school. We had to choose a game to recreate from 10 seconds of footage, and we chose Cuphead! We could make our own twist on this, so we decided to make our own boss fight.

## What I did and learn

### Player

I made the player. This is really quite
simple because it uses a rigidbody, and nothing much happens with the verticality of the game. You can jump, and fall of the platform and that's about it. You can move left or right, but there are no slopes or anything so it was really done in a short amount of time. 

I also made the shooting, also quite easy...

### Crazy Mode

This version of Cuphead comes with a mode called Crazy mode! At the start of each phase the player can turn the slot machine, which then spins around
and gives you a random modifier that makes the game harder or easier.  

Here is a quick summary of these modes:

 * Limited bullets - you get an ammo count which can run out, and ammo packs fly through the world.
 * Inverted controls - the direction keys are inverted, and the shoot and jump is replaced.
 * Jump delay - it takes a random amount of time to actually jump
 * Rotating screen
 * Short range
 * Fast bullets
 * More damage - to the enemy 
 * Cool mode - Fire in the background, explosions, screen shake, and metal music (this is my favourite.)
 
This was done by using a **state machine** that adjusts the game world based on what the current mode is.  
It's really easy to add new modes since the state machine can add objects to the world, or adjusts other objects.

## Other problems

One big mistake of the game that makes it less fun is that it takes a _really long time_ to load. This is because the images were way too large and all separated into different images. We could have fixed it, but due to time constraints we kept it.

I really like the crazy mode,it's such a shame it takes so long to load though.