---
title: "Biome settings"
---

Biome settings are used to customize biomes  
and default generation

Datapack will be always imported, even if some tags are incorrect,  
so put them precisely.

## Contents

- [Contents](#contents)
- [Biome settings variable look:](#biome-settings-variable-look)
- [Tags](#tags)
  - [min={A}, max={B}](#mina-maxb)
  - [radius={C}](#radiusc)
  - [density={D}](#densityd)
  - [ring.inner.change->{E}](#ringinnerchange-e)
  - [ring.outer.change->{F}](#ringouterchange-f)
  - [ring.X.change->{E/F}](#ringxchange-ef)
  - [swap](#swap)
  - [priority={G}](#priorityg)
  - [grid](#grid)
  - [full](#full)
  - [precise](#precise)
  - [structural](#structural)
  - [arena](#arena)

## Biome settings variable look:

```text
settings: [
	tag1,
	tag2,
	tag3,
	tag4,
];
```

## Tags

Tags might have a parameter,  
for example density=5% and it is  
called {} in this documentation.

Note: Do not use {} around parameters.  
Bad: `ring={30}`, Good: `ring=30`, Best: `ring = 30`

### min={A}, max={B}

Use them to set a minimum and maximum biome radius.  
Picked number will be random between these 2 parameters.  
Parameters are integers `<0;80>`  

Default: `[min=65, max=80]`

### radius={C}

Use it to set biome radius precisely.  
Parameter is an integer `<0;80>`

Default: `[min=65, max=80]`

### density={D}

Use it to set how often asteroids will appear.  
Parameter is a percent integer `<0%;100%>`, 0% means no asteroids.

Default: `[density=60%]`

### ring.inner.change->{E}

Use it to set biome layers, where asteroids appear counting from center.  
Multiple tags of this type allowed.  
Parameter is an integer `<0;80>`  
More info in [ring.X.change->{E/F}](#ringxchange-ef) point.

Default: `[THE WHOLE ZONE IS ASTEROID ZONE]`

### ring.outer.change->{F}

Use it to set biome layers, where asteroids appear counting from border.  
Multiple tags of this type allowed.  
Parameter is an integer `<0;80>`  
Disabled when tag "full" is activated.  
More info in [ring.X.change->{E/F}](#ringxchange-ef) point.

Default: `[THE WHOLE ZONE IS ASTEROID ZONE]`

### ring.X.change->{E/F}

Ring system is a bit complicated, so here you have a little text tutorial:

Every tag `ring.X.change->{E/F}` sets a point using parameter,  
where `[asteroid zone]` and `[empty zone]` swap.

`[asteroid zone]` is the starting option. To change it use tag: `ring.X.change->0`

Parameter is a distance between center/border and the given point.
For example, when we use:

```text
settings: [
	ring.inner.change = 15, ring.inner.change = 35,
	ring.inner.change = 45, ring.inner.change = 65,
];
```

The effect will be two rings of empty space.  
First between 15 and 34. Second between 45 and 64.  
Given parameter is always the first number working for  
a new option. If you do not close something using a second tag,  
empty zone will be set on all next distances.  

But what happens when we use `ring.inner` and `ring.outer`  
on the same biome? Empty space has always higher priority.  
It will be choosen if at least one of these modules has it  
in a given distance.  

Why are there two modules for one thing? Because a problem  
would have appeared if a biome radius was unconstant.

I wanted to set a possibility to manage rings from  
all two sides, but it is still recommended to use  
a constant radius together with tag `ring.X.change->{E/F}`  
if you are not the master in those settings. If you do not  
do that, simlar biomes might have different ring structures.

### swap

Use it to swap empty space and asteroid space.  
Created to collaborate with `ring.X.change->{E/F}`  
and will be executed always after that.  

Default: **NOT USED**

### priority={G}

Use it to show which biome will  
generate at the end and overwrite  
others, when they touch each other.  
No biomes will be removed.  
Parameter is an integer `<1;31>`  

Default: `[priority=16]`

### grid

Use it to disable asteroid offset.  
All asteroids will generate in  
diagonal grid points.  

Default: **NOT USED**

### full

Use it to make a 300x300 biome square.  
Sometimes it might be overwriten by other biomes,  
but you can always set a high priority to prevent it.  
Recommended not to use it, when you  
want to make a good datapack :)  

Default: **NOT USED**

### precise

Use it to set center of biome precisely at asteroid  
grid point to prevent bugs with structures.  
It is recommended to put it only on structures.  
Tag structural automatically enables it.

### structural

Use it to disable touching other biomes with this tag.  
It automatically sets priority to 32 (bigger than max)  
Biomes with this tag have double generation points.  
That means, they engage 2 times more space in a biome  
generation array because of technical reasons.  
It is recommended to add this tag to structures.  

Default: **NOT USED**

### arena

Use it to generate arena in the middle of a biome.  
Tag "structural" is required to work. It is also recommended  
to use tag "ring.X.change->{E/F}" in order to create some  
space in the middle and set a minimum biome  
radius to at least 50

Default: **NOT USED**
<!--
### m) black.hole

Use it to generate a black hole in the middle of a biome.  
Those have their own gravity and accretion disc.

Be careful. Even light and the best SE3 pilots can't escape them!  
Tag "structural" is required to work. It is also recommended  
to use tag `ring.X.change->{E/F}` in order to create some  
space in the middle and set a minimum biome  
radius to at least XXX

Default: **NOT USED**

### n) star

Is it too dark in space? Use it to generate a bright star in the  
middle of a biome. Those have their own weak gravity and are extremally hot.  
Take sunglasses with you :) Tag "structural" is required to work.  

It is also recommended to use tag `ring.X.change->{E/F}` in order to create some  
space in the middle and set a minimum biome radius to at least XXX

Default: **NOT USED**
-->