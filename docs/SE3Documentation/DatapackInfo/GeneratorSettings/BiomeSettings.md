---
title: "Biome settings"
---

:::info
Biome settings consist of [biome tags](#tags) and are used to customize biomes and structures.
:::

## Contents

- [Contents](#contents)
- [Biome settings variable look](#biome-settings-variable-look)
- [Tag types](#tag-types)
- [Tags](#tags)
- [Usage example](#usage-example)

## Biome settings variable look

```text showLineNumbers
settings: [
    tag1, tag2,
    tag3, tag4,
];
```

:::note
Square brackets `[]` are not needed here. They just look nice, so you should use them ;)
:::

:::warning
Datapack will be always imported even if some tags are incorrect, so put them precisely.
:::

## Tag types

| Type       | Example             | Description                                                                             |
| ---------- | ------------------- | --------------------------------------------------------------------------------------- |
| switch     | grid                | Determines a single boolean value. It might be present or not.                          |
| parametric | density=5%          | Determines a sigle integer value. When it is not present, value will be set to default. |
| color      | bgcolor-255-255-255 | Determines some sort of a background color.                                             |

## Tags

| Tag                | Type       | Parameter                    | Default             | Description                                                                                                                                                                                                           |
| ------------------ | ---------- | ---------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| min=X              | parametric | int <0;80>                   | 65                  | Determines minimum biome radius.                                                                                                                                                                                      |
| max=X              | parametric | int <0;80>                   | 80                  | Determines maximum biome radius.                                                                                                                                                                                      |
| radius=X           | parametric | int <0;80>                   | 65-80               | Determines biome radius precisely.                                                                                                                                                                                    |
| gradient=X         | parametric | int <0;80>                   | 80                  | Determines radius at which background color gradient occurs. Will be reduced to biome range if greater.                                                                                                               |
| density=X          | parametric | int % <0%;100%>              | 60%                 | Sets the chance for asteroids to appear.                                                                                                                                                                              |
| priority=X         | parametric | int <1;31>                   | 16                  | Sets generation priority, when two biomes coincide each other. Part of biome with a lower priority will be overwritten by another one.                                                                                |
| grid               | switch     | -                            | -                   | Disables asteroid offset. All asteroids will generate in diagonal grid points.                                                                                                                                        |
| even               | switch     | -                            | -                   | Forces biome to generate its center only on even asteroid squares (without asteroids).                                                                                                                                |
| odd                | switch     | -                            | -                   | Forces biome to generate its center only on odd asteroid squares (with asteroids).                                                                                                                                    |
| spawn              | switch     | -                            | -                   | Generates biome always on spawn. You can improve the effect by using tag `centred`.                                                                                                                                   |
| centred            | switch     | -                            | -                   | Disables biome offset. Designed to use together with `spawn`.                                                                                                                                                         |
| structural         | switch     | -                            | -                   | Disables coinciding with other `structural` biomes and automatically sets tag `priority` to 32. Biomes with this tag take up two times more space in generation array. It's recommended to put it only on structures. |
| struct=X           | parametric | int <1;31>                   | 0                   | Creates a [custom structure](../CustomStructures) in the middle of a biome. Requires `structural` tag to work.                                                                                                        |
| bgcolor-R-G-B      | color      | 3x int <0;255>               | 167-222-255         | Sets the background color of a biome.                                                                                                                                                                                 |
| boss.N.color-R-G-B | color      | 1x int <0;6>, 3x int <0;255> | default boss colors | Sets the background color for boss with ID = N. Works globally, so it's not a typical tag.                                                                                                                            |

## Usage example

You can see, how arena was configured below:

```text showLineNumbers
settings: [
    bgcolor-212-218-224,
    structural, struct=4,
    radius = 80, even,
    density = 100%,
];
```
