# exoplanet_maker
A three.js app for creating, modifying, and saving custom 3D exoplanets and stellar systems based on mass, parent star(s), and other properties


#Exoplanet generator

It basically does this, but with a solid framerate:

 -![WIREFRAME 1](planetation.gif)

 **But How?**

This project uses three.js and react to create an editable stellar system.  You can change the star's size, brightness, color (rgb) values, as well as add an unlimited (fps permitting) number of custom planets and moons.  Then, you can navigate through them with three.js's excellent ![trackball controlls](http://threejs.org/examples/#misc_controls_trackball).  This is all rendered in WebGL, so it might run down your battery a bit.

Eventually, you will be able to save them, retrieve them, and edit them.  Look for that probably next week.

React is used to draw the scene and controls based on input provided by the user.


**Unsolved Problems**

Rings are tricky.  I also have to clean up the react a LOT.  Also, lots and lots and lots of CSS to do.  Also, the whole back end, minus login.

Copyright 2016 Michael Sturrus but feel free to fork it
