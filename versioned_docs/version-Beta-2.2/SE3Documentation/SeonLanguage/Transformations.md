---
title: "Transformations"
sidebar_position: 2
---

:::info
Here you can learn how to statically modify position and rotation of
objects and fobs.
:::

## Contents

- [Contents](#contents)
- [Move](#move)
- [Rotate](#rotate)
- [Reset](#reset)
- [Fob transformations](#fob-transformations)
- [Usage example](#usage-example)
- [Steal](#steal)
- [Spreading](#spreading)

:::note
None of the following commands can affect the boss.
:::

## Move

Command `move` allows you to modify object's position.
Command variants can be following:

```text
move [x] [y]                      < variant 1 >
move [x] [y] mod [dx] [dy]        < variant 2 >
```

+ `variant 1` allows you to move the object relatively to its current position and rotation.
+ `variant 2` works like `variant 1`, but allows you to customize the linear growth of parameters when moving multiple objects.

:::tip
The whole coordinate grid rotates with the object, so
you can first rotate the object to move it in a certain direction and then
reset its rotation.
:::

## Rotate

Command `rotate` allows you to rotate the object relatively to its current rotation.
The structure is following:

```text
rotate [degrees]
```

The object will rotate in a counterclockwise direction, unless you put the `-` sign before the number.

## Reset

Command `reset` allows you to reset position or rotation of an object.
The structure is following:

```text
reset position/rotation
```

:::note
When you use it on fobs, reset will change the value to the parent's value.
:::

## Fob transformations

Commands `move`, `rotate` and `reset` have additional variants, which use $ID and affect fobs. It is possible
to use them by putting character `$` at the end of such command name, for example `move$`, `rotate$`, `reset$`.
They have exactly the same structure as their bases with exception, that they affect not objects, but fobs.

## Usage example

```text showLineNumbers
catch # 200 summon hole 30
catch # 1 summon asteroid 10 3

move 10 0
rotate 30
catch $ 0-19
reset$ position
reset$ rotation
move$ -9,5 6 mod 1 0
```

| ![](/img/seon/transformation1.png) |
| ------------------------ |

## Steal

Command `steal` assigns all fobs from a specific asteroid to a wall
and hides that asteroid. The command structure is following:

```text
steal fromhash/fromdelta [num]
```

+ `fromhash` allows you to choose the precise #ID of the asteroid. Then `[num]` is the `Asteroid #ID`.
+ `fromdelta` allows you to choose the #ID relatively to the wall. Then `[num]` is `Asteroid #ID - Wall #ID`. It is much more useful when multiple walls are selected.

:::note
The #ID pointer must point on the wall.
:::

Usage example:
```text showLineNumbers
catch # 200 summon hole 30

catch # 1
summon asteroid 4 3

catch # 2
summon wall 1,3 1 3
steal fromdelta -1
```

| ![](/img/seon/steal.png) |
| ------------------------ |

## Spreading

Spread system is not available yet, but
`move ... offset` command is ready to use just now.
It has the following structure:

```text
move [x] [y] offset
```

It allows you to randomize position of the object inside a rectangle of
size `2*x` x `2*y`, with the center in its current position and relatively to its current rotation.

:::note
This command can not affect fobs. It doesn't exists in the `$` variant.
:::

:::caution
This command is currently experimental and may change in future versions.
:::

