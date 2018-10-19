# Destructible Map

Something I wanted to learn was how to make a terrain that can be demolished, and then have objects collide with that collision.  
I ran into some trouble with making this, and I'll explain what in the following text.

## What did I do and learn?

### SFML

I first went for Monogame, and I went to work there to allow the ground to be drawn. I quickly ran into trouble trying to apply a stencil buffer to it, which for some reason didn't work on Mac OS. I then tried the shaders approach, for which Monogame does not have a Mac OS compiler as well.  
After that I just decided to use SFML, I wanted to learn more C++ after all, so it was a fun experiment.

### GLSL Shaders

I dabbled a bit with shaders, which is what I wanted to do a long time ago. The shader is actually incredibly simple, so I didn't learn much at all, but now I at least a fundumental knowledge of what it is and what it does. It's pretty fun, and it's something I will learn more about soon.

The shader is just the mask of the ground, which decides what is shown or not.

### Pixel Perfect Collision

The ground has 2 textures, the original texture with the alpha and the mask, which is black-and-white. All collision happens to the mask.  
This in turn is very hard on perfomance, and I don't have anything better put it in place. It's something I will definitely look into further, but as long as not many objects have physics, it will run fine. 