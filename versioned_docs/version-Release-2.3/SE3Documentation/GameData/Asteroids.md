---
title: "Asteroids"
---

| ID  | Name           | Preview 1                            | Preview 2                           | Preview 3                         |
| --- | -------------- | ------------------------------------ | ----------------------------------- | --------------------------------- |
| 0   | Stone          | ![](/img/asteroids/A0_stone1.png)    | ![](/img/asteroids/A0_stone2.png)   | ![](/img/asteroids/A0_stone3.png) |
| 1   | Dark           | ![](/img/asteroids/A1_dark1.png)     | ![](/img/asteroids/A1_dark2.png)    | ![](/img/asteroids/A1_dark3.png)  |
| 2   | Other          | ![](/img/asteroids/A2_other1.png)    |                                     |                                   |
| 3   | Copper         | ![](/img/asteroids/A3_copper1b.png)  | ![](/img/asteroids/A3_copper2b.png) |                                   |
| 4   | Gold           | ![](/img/asteroids/A4_gold1.png)     |                                     |                                   |
| 5   | Grass          | ![](/img/asteroids/A5_grass1.png)    |                                     |                                   |
| 6   | Amethyst       | ![](/img/asteroids/A6_amethyst1.png) |                                     |                                   |
| 7   | Coal           | ![](/img/asteroids/A7_coal1.png)     |                                     |                                   |
| 8   | Magnetic       | ![](/img/asteroids/A8_magnetic1.png) |                                     |                                   |
| 9   | Red            | ![](/img/asteroids/A9_red1.png)      |                                     |                                   |
| 10  | Diamond        | ![](/img/asteroids/A10_diamond1.png) |                                     |                                   |
| 11  | Metalic        | ![](/img/asteroids/A11_metalic1.png) |                                     |                                   |
| 12  | Bedrock        | ![](/img/asteroids/A12_bedrock1.png) |                                     |                                   |
| 13  | Bone           | ![](/img/asteroids/A13_bone1.png)    |                                     |                                   |
| 14  | Stone (clone)  | ![](/img/asteroids/A0_stone1.png)    | ![](/img/asteroids/A0_stone2.png)   | ![](/img/asteroids/A0_stone3.png) |
| 15  | Copper (clone) | ![](/img/asteroids/A3_copper1b.png)  | ![](/img/asteroids/A3_copper2b.png) |                                   |

## Asteroid variants

Asteroid variants can be used to make more [object_generate](../DatapackInfo/ObjectsGenerate) settings using
only one asteroid texture. For example, when you want to create stone asteroids with tombs for cementeries. You can
access asteroid variants by names like `stoneA`, `copperB` etc. Numerical IDs of asteroid variants repeat in a cycle,
for example asteroid `bedrockB` will have ID `2*16 + 12 = 44`. Every asteroid type can have up to 4 variants: `asteroid`, `asteroidA`, `asteroidB` and `asteroidC`.

:::note
Every asteroid variant has the same [drill_loot](../DatapackInfo/DrillLoot) as the base asteroid.
:::
