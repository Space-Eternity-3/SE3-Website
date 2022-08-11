---
title: "Technical commands"
sidebar_position: 4
---

Technical commands are used to make some actions not connected with any object.

## Contents

- [Contents](#contents)
- [Drill](#drill)
- [List](#list)
- [Asteroid](#asteroid)
- [Structure states](#structure-states)
- [Ussage examples](#ussage-examples)

## Drill

Command `drill` sets or removes script responsible for drilling.
Asteroids and walls have it attached by default. You can overwrite the script.

```text showLineNumbers
drill set <type>
drill remove
```

- Type: Drill loottable ID based on [drill loot](../DatapackInfo/DrillLoot).

## Structure states

A structure can be in different states, when boss or other structural thing shakes things up.
There can exist only one such thing in one structure.

| State   | Description                                                    | Source |
| ------- | -------------------------------------------------------------- | ------ |
| default | A default state, which exists when no other was confirmed.     | Start  |
| A1      | Appears, when you are in peace before wave 1.                  | Boss   |
| A2      | Appears, when you are in peace before wave 2.                  | Boss   |
| A3      | Appears, when you are in peace before wave 3.                  | Boss   |
| R       | Appears, when you are in peace and you have defeated the boss. | Boss   |
| B1      | Appears, when you are fighting in wave 1.                      | Boss   |
| B2      | Appears, when you are fighting in wave 2.                      | Boss   |
| B3      | Appears, when you are fighting in wave 3.                      | Boss   |
| a1b1    | Appears, when you are switching to wave 1.                     | Boss   |
| a2b2    | Appears, when you are switching to wave 2.                     | Boss   |
| a3b3    | Appears, when you are switching to wave 3.                     | Boss   |
| b1a1    | Appears, when you are losing in wave 1.                        | Boss   |
| b2a2    | Appears, when you are losing in wave 2.                        | Boss   |
| b3a3    | Appears, when you are losing in wave 3.                        | Boss   |
| b1a2    | Appears, when you are winning in wave 1.                       | Boss   |
| b2a3    | Appears, when you are winning in wave 2.                       | Boss   |
| b3r     | Appears, when you are defeating the boss.                      | Boss   |

## Ussage examples

```text showLineNumbers

```
