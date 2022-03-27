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

There are two types of ID. These are separated using jse3 hierarchy:

```text
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

Data lines are basic jse3 variables and values. Variable part is asteroid ID and value part is asteroid name.

Example:

```text
Asteroids
{
	1: stone;
	2: stone_geyzer;
	5: grass;
	13: artefact_randomizer;
	<etc>
}
```

## Items and objects

Data lines are basic jse3 variables and values. Variable part is an object ID and value part is an object name.

Example:

```text
Items_and_objects
{
	1: stone_with_diamonds;
	2: driller;
	3: mega_geyzer;
	8: stone;
	<etc>
}
```