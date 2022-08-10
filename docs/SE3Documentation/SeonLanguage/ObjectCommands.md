---
title: "Object commands"
sidebar_position: 1
---

Object commands are used to change object indicators and to create new objects.

## Contents

- [Contents](#contents)
- [Summon](#summon)
- [Catch](#catch)
- [ID types](#id-types)
- [Objects](#objects)
- [Generation code](#generation-code)
- [Ussage examples](#ussage-examples)

## Summon

Command `summon` summons a specified object in the middle of a biome with rotation 0 and sets variable [current](../SeonLanguage/#interpreter-variables)
to this object's ID.

```text showLineNumbers
summon #<ID> <object> <arg1*> <arg2*> <arg3*>
```
- Object: Object, which will be summoned.  
- Arg1: Optional argument 1.  
- Arg2: Optional argument 2.  
- Arg3: Optional argument 3.  

## Catch

Command `catch` sets variable [current](../SeonLanguage/#interpreter-variables) to a specified object ID. It starts indicating object with that ID.

```text showLineNumbers
catch #<ID>
```

- ID: Value, which will be set.  

## Catch child

Command `catch child` sets variable [findex](../SeonLanguage/#interpreter-variables) to a specified asteroid object ID. It starts indicating asteroid object with that ID.

```text showLineNumbers
catch child $<IDm>
```

- IDm: Value, which will be set.  

## Catch children

Command `catch children` sets variables [findex_min & findex_max](../SeonLanguage/#interpreter-variables) to specified asteroid object IDs. It starts indicating asteroid objects with that IDs.

```text showLineNumbers
catch children $<IDmi> $<IDma>
```

- IDmi: Value, which will be set to findex_min.  
- IDma: Value, which will be set to findex_max.  


## ID types

There are two types of IDs in seon language:

| IDs         | What can be used for?           | Recommended objects             |
| ----------- | ------------------------------- | ------------------------------- |
| #0 - #49    | Everything                      | Asteroids, Bosses               |
| #50 - #1023 | Objects, which don't store data | Walls, Pistons, Respblocks etc. |

## Objects

Every summonable object in the seon language:

| Object key-word | Does it store data? | Arg1            | Arg2       | Arg3                                | Description                                                                                                     |
| --------------- | ------------------- | --------------- | ---------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| empty           | No                  | -               | -          | -                                   | Empty object, nothing special to offer.                                                                         |
| asteroid        | Yes                 | size (int 4-10) | type (int) | [Generation code](#generation-code) | The most common object in the SE3 universe. Contains from 8 up to 20 object spaces on it.                       |
| wall            | No                  | type (int 0-15) | -          | -                                   | The longer asteroid 3x3x10 cousin. Doesn't contain any object space by default.                                 |
| piston          | No                  | -               | -          | -                                   | It's a modified bedrock wall designed to prevent players and bosses to cross the arena border during a battle.  |
| respblock       | No                  | range (float)   | -          | -                                   | Empty object with an additional script, which prevents players to set their respawn point in a specified range. |

## Generation code

Generation code is a format, which describes which objects will generate on a specified asteroid. It consists of 20 (or less) numbers or empty strings
separated by `;`. Every number is an [object ID](../GameData/ItemsAndObjects) and says, which object will be generated in an individual place.
First objects generate on top of an asteroid and every next generates in a clockwise direction.
If you leave empty space, object will be random based on its [objects generate](../DatapackInfo/ObjectsGenerate) settings.
If you don't want any guaranteed objects, you can replace generation code with letter `x` or `X` to replace everything with `;;;;;;;;;;;;;;;;;;;`.

```text showLineNumbers
21;13;8;0;;;;;;0;8;13
```

It will generate asteroid with storage on top, two green aliens on left and right and two stones next to them. The bottom will be generated
based on [objects generate](../DatapackInfo/ObjectsGenerate) settings.

## Ussage examples

```text showLineNumbers
summon #0 asteroid 4 6 x
summon #1 asteroid 4 6 21;13;8;0;;;;;;0;8;13
summon #2 wall 5
summon #3 piston
summon #4 empty
summon #5 respblock 12.45

catch #0 move 2 4
catch child $0 move child 0 10
catch children $0 $3 reset children rotation
```