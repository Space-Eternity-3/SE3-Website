---
title: "Transform commands"
sidebar_position: 1
---

Transform commands are used to change position, rotation, scale and other physical parameters
of objects.

## Contents

-   [Contents](#contents)
-   [Children system](#children-system)
-   [Move](#move)
-   [Rotate](#rotate)
-   [Scale](#scale)
-   [Layer](#layer)
-   [Reset](#reset)
-   [Parent](#parent)
-   [Steal](#steal)
-   [Usage examples](#usage-examples)

## Children system

Asteroids have some objects on them. We call them children. Every child has its own settings,
despite this they don't have #IDs like other objects. They have $IDs instead. To access a child
you have to put the key-word `child` between command and its arguments. Children have $IDs, which can have numbers from $0 up to $19.
They never repeat on the same asteroid. The $ID will be taken from [findex](./#interpreter-variables). If you want to modify multiple objects at once, you can use
the key-word `children`. Then objects IDs will be taken from between [findex_min & findex_max](./#interpreter-variables) including.

```text showLineNumbers
catch #0
catch child $0 move child 0 10
catch #1
catch children $0 $10 scale children 0.5 0.5 0.5
```

Note: If you change child position, it will be reseted to center of an asteroid.  
Note: If you change child rotation, it will be reseted to value 0.  
Note: If you change scale of the parent asteroid, objects scales and distances from the asteroid center will also change.

## Move

Command `move` moves a selected object by a given position.
It rotates the given vector by the actual rotation.

```text showLineNumbers
move <X> <Y>
```

-   X: Horizontal position change.
-   Y: Vertical position change.

## Rotate

Command `rotate` rotates a selected object by a given angle counterclockwise.

```text showLineNumbers
rotate <angle>
```

-   Angle: Delta angle in degrees.

## Scale

Command `scale` sets the scale of a selected object to a given value.

```text showLineNumbers
scale <X> <Y> <Z>
```

-   X: Scale on the X-axis
-   Y: Scale on the Y-axis
-   Z: Scale on the Z-axis

Note: Changing the scale of a parent object can affect its children. Be careful and
never change the scale of a second level parent of an asteroid.

## Layer

Command `layer` sets the Z layer of the selected object's position. You can hide the object
with this command by setting a very low (for example -500) value.

```text showLineNumbers
layer <Z>
```

-   Z: Layer in coordinates

Note: It's recommended to not set absolute Z values to over 100.

## Reset

Command `reset` resets the selected object's position, rotation or local position.

```text showLineNumbers
reset <prm>
```

-   Prm: Something, you want to reset: [position, rotation, localpos].

Note: Reseting rotation will replace it with a parent's rotation.

## Parent

Command `parent` changes or removes a parent of a selected object.

```text showLineNumbers
parent set #<ID>
parent remove
```

-   ID: New parent's ID.

Note: Doesn't work for objects with $IDs.

## Steal

Command `steal` can be used to attach asteroid objects to walls easily.
It works properly even if the wall scale is changed before stealing objects. It
steals objects from an asteroid and hides that asteroid. Changing asteroid
scale will change asteroid objects' scales and expand spaces between them.

```text showLineNumbers
steal <number> from #<ID>
steal <number> from delta <deltaID>
```

-   Number: Amount of asteroid objects on the one side of a wall.
-   ID: AsteroidID.
-   deltaID = AsteroidID - WallID.

Note: You can't steal more objects, than there is on the asteroid.  
Note: You don't need any wall. You can attach asteroid objects to every
object, but the result will be weird.

## Usage examples

```text showLineNumbers
summon #0 piston
rotate 60
move 15 0
scale 2 2 2

summon #1 wall
parent set #0
reset localpos
parent remove

summon #2 asteroid 4 0 0,0,0,0,0,0,0,0
catch #1 steal 4 from #2

summon #3 asteroid 9 12 x
catch child $0 scale child 3 3 3
catch children $1 $17 layer children -500
```
