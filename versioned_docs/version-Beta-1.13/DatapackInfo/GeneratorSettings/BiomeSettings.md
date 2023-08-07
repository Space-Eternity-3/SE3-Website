---
title: "Biome settings"
---

Biome settings are used to customize biomes, default generation and interactions between biomes. They consist of [tags](#tags).
Datapack will be always imported even if some tags are incorrect, so put them precisely.

## Contents

-   [Contents](#contents)
-   [Biome settings variable look](#biome-settings-variable-look)
-   [Tag types](#tag-types)
-   [Tags](#tags)
-   [ring.X.change](#ringxchange)
-   [Usage example](#usage-example)

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

| ID  | Tag                           | Type       | Parameter       | Default | Description                                                                                                                                                                                                                                                          | Note                                                 |
| --- | ----------------------------- | ---------- | --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1   | min=X                         | parametric | int <0;80>      | 65      | Determines minimum biome radius.                                                                                                                                                                                                                                     | -                                                    |
| 2   | max=X                         | parametric | int <0;80>      | 80      | Determines maximum biome radius.                                                                                                                                                                                                                                     | -                                                    |
| 3   | radius=X                      | parametric | int <0;80>      | -       | Determines biome radius precisely.                                                                                                                                                                                                                                   | Overwrites `min` and `max`.                          |
| 4   | density=X                     | parametric | int % <0%;100%> | 60%     | Sets the chance for biome to appear.                                                                                                                                                                                                                                 | -                                                    |
| 5   | priority=X                    | parametric | int <1;31>      | 16      | Sets generation priority, when two biomes coincide each other. Part of a biome with a lower priority will be overwritten by another.                                                                                                                                 | -                                                    |
| 6   | grid                          | switch     | -               | -       | Disables asteroid offset. All asteroids will generate in diagonal grid points.                                                                                                                                                                                       | -                                                    |
| 7   | full                          | switch     | -               | -       | Creates a 300x300 full biome square.                                                                                                                                                                                                                                 | Don't use it in a good datapack.                     |
| 8   | [ring.X.change](#ringxchange) | complex    | int <0;80>      | -       | Determines at which distances from biome center or border asteroids will appear. More info [here](#ringxchange).                                                                                                                                                     | -                                                    |
| 9   | swap                          | switch     | -               | -       | Swaps empty space and asteroid space. Designed to collaborate with `ring.X.change`. Always executes after that.                                                                                                                                                      | -                                                    |
| 10  | structural                    | switch     | -               | -       | Disables coinciding with other `structural` biomes and automatically sets tag `priority` to 32. Biomes with this tag take up two times more space in generation array because of technical reasons.                                                                  | It's recommended to put it only on structures.       |
| 11  | arena                         | switch     | -               | -       | Creates arena in the middle of a biome. Tag `structural` is required to work. It is recommended to create empty space wheel with radius at least 50 in the middle of a biome using tag [ring.X.change](#ringxchange) and to set minimum biome radius to at least 50. | Asteroids inside arena can only be removed manually. |

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
