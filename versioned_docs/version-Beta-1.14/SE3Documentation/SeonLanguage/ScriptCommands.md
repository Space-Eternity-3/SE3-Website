---
title: "Script commands"
sidebar_position: 3
---

Script commands are used to change objects' properties, which are somehow connected with the script.

## Contents

-   [Contents](#contents)
-   [Drill](#drill)
-   [Asteroid](#asteroid)
-   [State based movement](#state-based-movement)
    -   [Extension](#extension)
    -   [Hidesmooth](#hidesmooth)
    -   [List](#list)
    -   [Structure states](#structure-states)
-   [Usage examples](#usage-examples)

## Drill

Command `drill` sets or removes a script responsible for drilling.
Asteroids, walls and spheres have it attached by default. You can overwrite the script.

```text showLineNumbers
drill set <type>
drill remove
```

-   Type: Drill loottable ID (int) based on [drill loot](../DatapackInfo/DrillLoot) and [asteroid ID](../GameData/Asteroids).

## Asteroid

Command `asteroid` changes different asteroid properties. You can hide it, show it
or prevent players from changing objects on it.

```text showLineNumbers
asteroid hide
asteroid show
asteroid blocker enable
asteroid blocker disable
```

Note: Hiding an asteroid disables its Renderer and Collider components, but don't affect objects on it.  
Note: Asteroid blocker doesn't prevent objects from growing.

## State based movement

The state based movement feature consists of three commands. It allows you to move your objects
during gameplay depending on the selected [structure state](#structure-states).

### Extension

Command `extension` allows you to customize extending movement of the
selected object. Extending is an animation, which changes X and Y position in a specified time.

```text showLineNumbers
extension <X> <Y> <time>
```

-   X: Horizontal position change.
-   Y: Vertical position change.
-   Time: Animation duration in Unity frames (0.02s). Select 1 for instant jump.

### Hidesmooth

Command `hidesmooth` allows you to customize hiding movement of the
selected object. Hiding is an animation, which changes scale of an object
and moves it into a deep darkness of the space in a specified time.

```text showLineNumbers
hidesmooth <Z> <time>
```

-   Z: Object hiding distance from layer 0.
-   Time: Animation duration in Unity frames (0.02s). Select 1 for instant jump.

Note: Never assign hide component to a second level parent of an asteroid.  
Note: It's recommended to not set absolute Z values to over 100.

### List

Command `list` allows you to choose animation states of extending or hiding movements depending on the
selected [structure state](#structure-states). Every structure state implies undone state by default.

Available animation states:

-   undone
-   doing
-   done
-   undoing

```text showLineNumbers
list <movement> <animation> <states>
```

-   Movement: Movement type: [extended, hidden].
-   Animation: Animation state, when one of the selected structure states is active: [undone, doing, done, undoing].
-   States: Array of [structure states](#structure-states) separated by `,` in which the current animation state will be active.

Note: Selecting state undone is useless, but you can do it to save a clean code or to overwrite other states.

### Structure states

Every structure has a state string. It determines, what's happening with that structure.
That string might be changed during gameplay, but only if a structure homes
a state-changing object (for example boss).

| general ID | additional ID | State   | Description                                     | State changing object |
| ---------- | ------------- | ------- | ----------------------------------------------- | --------------------- |
| -          | -             | default | No state was confirmed or structure is loading. | -                     |
| 0          | 0             | A1      | Peace before wave 1.                            | Boss                  |
| 1          | 0             | A2      | Peace before wave 2.                            | Boss                  |
| 2          | 0             | A3      | Peace before wave 3.                            | Boss                  |
| 3          | 0             | R       | Boss defeated, rewards available.               | Boss                  |
| 0          | 2             | B1      | Fighting in wave 1.                             | Boss                  |
| 1          | 2             | B2      | Fighting in wave 2.                             | Boss                  |
| 2          | 2             | B3      | Fighting in wave 3.                             | Boss                  |
| 0          | 1             | a1b1    | Switching to wave 1.                            | Boss                  |
| 1          | 1             | a2b2    | Switching to wave 2.                            | Boss                  |
| 2          | 1             | a3b3    | Switching to wave 3.                            | Boss                  |
| 0          | 3             | b1a1    | Losing in wave 1.                               | Boss                  |
| 1          | 3             | b2a2    | Losing in wave 2.                               | Boss                  |
| 2          | 3             | b3a3    | Losing in wave 3.                               | Boss                  |
| 1          | 4             | b1a2    | Winning in wave 1.                              | Boss                  |
| 2          | 4             | b2a3    | Winning in wave 2.                              | Boss                  |
| 3          | 4             | b3r     | Winning in wave 3.                              | Boss                  |

## Usage examples

```text showLineNumbers
summon #0 boss 2
summon #1 sphere 10 1 move 0 15
drill set 6

summon #2 asteroid 9 0 8;9;8;9;8;9;8;9;8;9;8;9;8;9;8;9;8;9 move 0 -15
asteroid blocker enable
asteroid hide

catch #1
extension 0 5 40
hidesmooth 80 40
list extended done default,B1,B2,B3
list hidden doing a1b1,a2b2,a3b3
```
