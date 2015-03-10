# SpaceStory
A mini project created to try understand the limitations of physics engines and its ability to depict realistic environments

Currently, circular objects (asteroids) are depicted as a collection of atoms randomly chosen within the radius of the object
, this creates a more immervise environment where objects are not all identical.

In order to allow for collision detection, I implemented the Graham scan to detect the convex hull's of built objects.
Those convex hulls are then used in conjunction with the Seperate Axis Theorem to detect collisions.

To Do:
Break objects into concave or convex mini parts after collision based on momentum.
Implement ear-clipping to allow use of the Seperate Axis Theorem on concave objects.
Seperate the environment into various sectors to improve performance of the physics engine.
Add gravity between two objects that are within the same sector.
Implement a game which uses the physics engine.
