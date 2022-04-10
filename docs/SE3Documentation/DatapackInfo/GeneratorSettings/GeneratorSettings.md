---
slug: ./
title: "Generator settings"
sidebar_position: 5
---

- [Biome Settings](./BiomeSettings)

---

Generator settings is a place, where you can customize asteroid generation.

## Contents

- [Contents](#contents)
- [Biome separation](#biome-separation)
- [Construction rules](#construction-rules)

## Biome separation

Se3 generator consists of default generator and up to 31 biomes or structures. These are separated using jse3 hierarchy.
Default generation has always ID = 0. Biomes and structures might have IDs from 1 to 31. You can add biome name in comments,
but it's not a rule.

```text
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

## Construction rules

There is a lot of variables in generator settings, so there is an array with all information.

| Variable part | Value part                                                            | Value example            | In default | Description                                                                                                     | Note                                       |
| ------------- | --------------------------------------------------------------------- | ------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| chance        | Percentage                                                            | 8%                       | no         | Sets biome appear chance.                                                                                       | -                                          |
| all_sizes     | Asteroid names with probability in round brackets separated with `+`. | stone(80%) + copper(20%) | yes        | Sets [asteroid type](../../GameData/Asteroids) generate chances in a given biome for all sizes.                          | Variable part can be 0 as well.            |
| int <4;10>    | Asteroid names with probability in round brackets separated with `+`. | stone(80%) + copper(20%) | yes        | Sets [asteroid type](../../GameData/Asteroids) generate chances in a given biome for size selected by the variable part. | Overwrites `all_sizes` if used after that. |
| settings      | Biome settings. More info [here](./BiomeSettings).                    | [radius=50]              | yes        | Customizes advanced generator settings.                                                                         | -                                          |

```text
<Geyzer biome> 2
{
	chance: 8%;
	settings: [];
	
	all_sizes: stone_geyzer(100%);
	<Size>5: stone_geyzer(70%) + magnetic_geyzer(30%);
	<Size>6: stone_geyzer(70%) + magnetic_geyzer(30%);
	<Size>7: stone_geyzer(70%) + magnetic_geyzer(30%);
}
```
