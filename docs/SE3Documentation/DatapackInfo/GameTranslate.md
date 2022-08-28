---
title: "Game translate"
sidebar_position: 7
---

Game translate is a place, where names like `stone` are
converted into numerical IDs for example `8`.

## Contents

- [Contents](#contents)
- [Type separation](#type-separation)
- [Asteroids](#asteroids)
- [Items and objects](#items-and-objects)

## Type separation

There are two types of IDs. These are separated using jse3 hierarchy:

```text showLineNumbers
Asteroids
{
	<contents1>
}
Items_and_objects
{
	<contents2>
}
```

## Asteroids

Variable part is [asteroid ID](../GameData/Asteroids) and value part is asteroid name.

```text showLineNumbers
Asteroids
{
	1: stone;
	5: grass;
	13: artefact_randomizer;
	<etc>
}
```

IDs from <16;63> are asteroid variants. You can access them by using names like asteroidA, asteroidB or asteroidC or using raw
numbers. Every asteroid variant has its own [ObjectsGenerate](./ObjectsGenerate), but the [DrillLoot](./DrillLoot) and texture are the same.

## Items and objects

Variable part is [object ID](../GameData/ItemsAndObjects) and value part is object name.


```text showLineNumbers
Items_and_objects
{
	1: stone_with_diamonds;
	2: driller;
	3: mega_geyzer;
	8: stone;
	<etc>
}
```