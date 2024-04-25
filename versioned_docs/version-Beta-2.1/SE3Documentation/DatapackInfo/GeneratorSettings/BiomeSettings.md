---
title: "Biome settings"
---

Biome settings are used to customize biomes, default generation and interactions between biomes. They consist of [tags](#tags).
Datapack will be always imported even if some tags are incorrect, so put them precisely.

## Contents

- [Contents](#contents)
- [Biome settings variable look](#biome-settings-variable-look)
- [Tag types](#tag-types)
- [Tags](#tags)
- [Structure tags](#structure-tags)
- [ring.X.change](#ringxchange)
- [Usage example](#usage-example)

## Biome settings variable look

```text showLineNumbers
settings: [
	tag1,
	tag2,
	tag3,
	tag4,
];
```

## Tag types

| Type       | Example               | Description                                                                         |
| ---------- | --------------------- | ----------------------------------------------------------------------------------- |
| switch     | grid                  | Determines a single bool value. It might be present or not.                         |
| parametric | density=5%            | Determines a sigle int value. When it is not present, value will be set to default. |
| complex    | ring.inner.change->20 | Determines a complex array of integers. Can be used multiple times.                 |

## Tags

| ID  | Tag                           | Type       | Parameter       | Default | Description                                                                                                                                                                                         | Note                                           |
| --- | ----------------------------- | ---------- | --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | min=X                         | parametric | int <0;80>      | 65      | Determines minimum biome radius.                                                                                                                                                                    | -                                              |
| 2   | max=X                         | parametric | int <0;80>      | 80      | Determines maximum biome radius.                                                                                                                                                                    | -                                              |
| 3   | radius=X                      | parametric | int <0;80>      | -       | Determines biome radius precisely.                                                                                                                                                                  | Overwrites `min` and `max`.                    |
| 4   | density=X                     | parametric | int % <0%;100%> | 60%     | Sets the chance for asteroids to appear.                                                                                                                                                            | -                                              |
| 5   | priority=X                    | parametric | int <1;31>      | 16      | Sets generation priority, when two biomes coincide each other. Part of a biome with a lower priority will be overwritten by another.                                                                | -                                              |
| 6   | grid                          | switch     | -               | -       | Disables asteroid offset. All asteroids will generate in diagonal grid points.                                                                                                                      | -                                              |
| 7   | full                          | switch     | -               | -       | Creates a 300x300 full biome square.                                                                                                                                                                | Don't use it in a good datapack.               |
| 8   | spawn                         | switch     | -               | -       | Generates biome always on spawn. You can improve the effect by using tag `centred`.                                                                                                                 | -                                              |
| 9   | centred                       | switch     | -               | -       | Disables biome offset. Designed to use together with `spawn`.                                                                                                                                       | -                                              |
| 10  | [ring.X.change](#ringxchange) | complex    | int <0;80>      | -       | Determines at which distances from biome center or border asteroids will appear. More info [here](#ringxchange).                                                                                    | -                                              |
| 11  | swap                          | switch     | -               | -       | Swaps empty space and asteroid space. Designed to collaborate with `ring.X.change`. Always executes after that.                                                                                     | -                                              |
| 12  | structural                    | switch     | -               | -       | Disables coinciding with other `structural` biomes and automatically sets tag `priority` to 32. Biomes with this tag take up two times more space in generation array because of technical reasons. | It's recommended to put it only on structures. |

## Structure tags

Structure tags summon custom or default structures, they require `structural` tag to work. It is recommended to create an empty space wheel in the middle of a biome using tag [ring.X.change](#ringxchange) when
using one of these tags. Asteroids inside structure don't remove automatically.

| ID  | Tag                | Type       | Parameter  | Description                                                                 |
| --- | ------------------ | ---------- | ---------- | --------------------------------------------------------------------------- |
| 13  | arena              | switch     | -          | Creates arena in the middle of a biome.                                     |
| 14  | catastrophic.arena | switch     | -          | Creates a catastrophic variant of arena in the middle of a biome.           |
| 15  | cementery          | switch     | -          | Creates cementery asteroid in the middle of a biome.                        |
| 16  | dark.cementery     | switch     | -          | Creates dark cementery asteroid in the middle of a biome.                   |
| 17  | star               | switch     | -          | Creates a star in the middle of a biome.                                    |
| 18  | struct=X           | parametric | int <1;31> | Creates a [custom structure](../CustomStructures) in the middle of a biome. |

## ring.X.change

ring.X.change is a complex tag, which needs a bit more explanation.
It determines at which distances from biome center or border empty zone and asteroid zone will swap.
If you don't use any tag ring.X.change, the whole zone will be asteroid zone.
This tag is of two types:

| Type                 | Parameter  | Parameter function                       | Calculation direction |
| -------------------- | ---------- | ---------------------------------------- | --------------------- |
| ring.inner.change->X | int <0;80> | Determines the distance to biome center. | From center to border |
| ring.outer.change->X | int <0;80> | Determines the distance to biome border. | From border to center |

X is a parameter. You can use tag ring.X.change multiple times to set more values.
Every usage determines distance, at which generation zone changes including parameter.
X=0 means, that generation zone will be switched to empty zone by default.
If you use inner and outer type in the same biome, interpreter will choose empty zone if at least one
of these tag types wants to set it.

Note: Remember, that biome ranges might be different for similar biomes.

## Usage example

```text showLineNumbers
settings: [
	structural,
	density = 100%,
	radius = 65,
	ring.inner.change -> 0,
	ring.inner.change -> 20,
	ring.inner.change -> 45,
];
```

![](/img/biome_preview1.png)
