---
slug: ./
title: "Generator settings"
sidebar_position: 5
---

-   [Biome Settings](./BiomeSettings)

---

:::info
In `generator_settings` segment you can customize biomes and structures, which will generate in
the universe.
:::

## Contents

- [Contents](#contents)
- [Biome separation](#biome-separation)
- [Biome configuration](#biome-configuration)
- [Biome example](#biome-example)

## Biome separation

SE3 generator consists of default generation and up to 31 biomes. These are separated using jse3 hierarchy.
Default generation has always ID = 0. Biomes might have IDs from 1 to 31. You can add biome name in comments,
but it's not necessary.

```text showLineNumbers
<Default generation> 0
{
    <contents0>
}
<My favorite biome> 1
{
    <contents1>
}
<Mysterious structure> 2
{
    <contents2>
}
```

:::tip
Structures are basically biomes with `structural` and `struct=X` tag. Every structure is a biome, but not every biome is a structure.
:::

## Biome configuration

There is a lot of variables in generator settings, so here is a table with all information:

| Variable   | Data type                                                          | Value example            | In default | Description                                                                                                   | Note                                            |
| ---------- | ------------------------------------------------------------------ | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| chance     | Percentage                                                         | 0,4%                     | no         | Sets biome appear chance.                                                                                     | -                                               |
| all_sizes  | Asteroid names with probability in round brackets separated by `+` | stone(80%) + copper(20%) | yes        | Sets [asteroid type](../../GameData/Asteroids) generation chances for all asteroid sizes.                     | You can use `0` instead of `all_sizes` as well. |
| int <4;10> | Asteroid names with probability in round brackets separated by `+` | stone(80%) + copper(20%) | yes        | Sets [asteroid type](../../GameData/Asteroids) generation chances for asteroid size selected by the variable. | Can overwrite `all_sizes`.                      |
| settings   | [Biome settings](./BiomeSettings)                                  | [radius=50]              | yes        | Customizes advanced generator settings.                                                                       | -                                               |

## Biome example

```text showLineNumbers

<Geyzer biome> 2
{
	chance: 8%;
	settings: [
		bgcolor-255-252-220,
	];

	all_sizes: stoneA(100%);
	<Size>5: stoneA(70%) + magneticA(30%);
	<Size>6: stoneA(70%) + magneticA(30%);
	<Size>7: stoneA(70%) + magneticA(30%);
}
```
