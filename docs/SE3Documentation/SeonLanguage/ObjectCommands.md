---
title: "Object commands"
sidebar_position: 1
---

Object commands are used to change object indicators and to create new objects.

## Contents

- [Contents](#contents)
- [Summon](#summon)
- [Catch](#catch)
- [Catch child](#catch-child)
- [Catch children](#catch-children)
- [Objects](#objects)
- [ID types](#id-types)
- [Generation code](#generation-code)
- [Usage examples](#usage-examples)

## Summon

Command `summon` summons a specified object in the middle of a biome with rotation 0 and changes variable [current](./#interpreter-variables)
to this object's ID.

```text showLineNumbers
summon #<ID> <object> <arg1*> <arg2*> <arg3*>
```

- Object: Object, which will be summoned.
- Arg1: Optional argument 1.
- Arg2: Optional argument 2.
- Arg3: Optional argument 3.

See [Objects](#objects) for details.

## Catch

Command `catch` changes variable [current](./#interpreter-variables) to a specified object ID. It starts indicating object with that ID.

```text showLineNumbers
catch #<ID>
```

- ID: Value, which will be set.

## Catch child

Command `catch child` changes variable [findex](./#interpreter-variables) to a specified asteroid object ID. It starts indicating asteroid object with that ID.

```text showLineNumbers
catch child $<IDm>
```

- IDm: Value, which will be set.

## Catch children

Command `catch children` changes variables [findex_min & findex_max](./#interpreter-variables) to specified asteroid object IDs. It starts indicating asteroid objects with that IDs.

```text showLineNumbers
catch children $<IDmi> $<IDma>
```

- IDmi: Value, which will be set to findex_min.
- IDma: Value, which will be set to findex_max.

## Objects

Every summonable object in the seon language:

| Object key-word | Type           | Arg1            | Arg2            | Arg3                                | Description                                                                                                                                               |
| --------------- | -------------- | --------------- | --------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| empty           | Normal         | -               | -               | -                                   | Empty object, nothing special to offer.                                                                                                                   |
| asteroid        | Data storing   | size (int 4-10) | type (int 0-63) | [Generation code](#generation-code) | The most common object in the SE3 universe. Contains from 8 up to 20 object spaces on it.                                                                 |
| sphere          | Normal         | size (float)    | type (int 0-15) | -                                   | A reduced variant of an asteroid. It's the same, but doesn't contain any object spaces on it.                                                             |
| wall            | Normal         | type (int 0-15) | -               | -                                   | The longer asteroid 3x3x10 cousin. Doesn't contain any object space by default, but you can assign them using command [steal](./TransformCommands#steal). |
| piston          | Normal         | -               | -               | -                                   | It's a modified bedrock wall designed to prevent players and bosses to cross the arena border during a battle.                                            |
| respblock       | Normal         | range (float)   | -               | -                                   | Empty object with an additional script, which prevents players to set their respawn points in a specified range.                                          |
| boss            | State changing | type (int 0-6)  | -               | -                                   | Terror of our spaceships. Only one boss per strucutre allowed. Defeat it 3 times and you'll get an artefact. Good luck!                                   |

## ID types

There are three types of #IDs in seon language:

| IDs         | What can be used for?                                                 | Recommended objects             |
| ----------- | --------------------------------------------------------------------- | ------------------------------- |
| #0          | A special #ID for state changing objects. Can be used for everything. | Bosses                          |
| #1 - #49    | Normal objects and objects, which store data.                         | Asteroids                       |
| #50 - #1023 | Only normal objects.                                                  | Walls, Pistons, Respblocks etc. |

## Generation code

Generation code is a format, which describes which objects will generate on a specified asteroid. It consists of 20 (or less) numbers or empty strings
separated by `,`. Every number is an [object ID](../GameData/ItemsAndObjects) and says, which object will be generated in a specified place.
First object generate on top of an asteroid and every next generates in a clockwise direction.
If you leave empty space, object will be random based on its [objects generate](../DatapackInfo/ObjectsGenerate) settings.
If you don't want any guaranteed objects, you can replace generation code with letter `x` or `X` to replace everything with `,,,,,,,,,,,,,,,,,,,`.

```text showLineNumbers
21,13,8,0,,,,,,0,8,13
```

It will generate asteroid with storage on top, two green aliens on left and right and two stones next to them. The bottom will be randomized.

## Usage examples

```text showLineNumbers
summon #0 boss 1
summon #1 asteroid 4 6 x
summon #2 asteroid 4 6 21,13,8,0,,,,,,0,8,13
summon #3 wall 5
summon #4 piston
summon #5 empty
summon #6 respblock 12.45

catch #1 move 2 4
catch child $0 move child 0 10
catch children $0 $3 reset children rotation
```
