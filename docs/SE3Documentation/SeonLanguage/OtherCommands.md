---
title: "Other commands"
sidebar_position: 4
---

:::info
Here you can learn about other commands, which do not fit into any category.
:::

## Contents

- [Contents](#contents)
- [Hide](#hide)
- [Setbiome](#setbiome)

## Hide

Command `hide` hides the asteroid and only its fobs remain.
This command doesn't have any parameters.

```text showLineNumbers
catch # 200 summon hole 20

catch # 1
summon asteroid 9 5
hide
```

|![](/img/seon/hide.png)  |
| --- |

## Setbiome

Command `setbiome` replaces the already set type of an asteroid with the biome generation for the specific asteroid size.
It has the following structure:

```text
setbiome [biome-id]
```

For example if you type command `setbiome 6`, the asteroid will forget about its type and generate as a cementery asteroid.
Here is the code, which generates a line of such asteroids:

```text showLineNumbers
catch # 200 summon hole 50
	
catch # 1-8
summon asteroid 7 0
setbiome 6
move -35 0 mod 10 0
```

|![](/img/seon/setbiome.png)  |
| --- |

:::tip
Biome IDs can be found in your datapack in the [generator_settings](../DatapackInfo/GeneratorSettings/) segment.
:::
