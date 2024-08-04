---
title: "Objects generate"
sidebar_position: 6
---

:::info
In `objects_generate` segment you can customize fobs, which will generate on asteroids depending on
asteroid type.
:::

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

You can set probability of any object generating on a specific asteroid
as shown below:

```text showLineNumbers
stone: stone(35%);
stoneA: stone(30%) + stone_geyzer(20%);
grass: bush(35%) + big_bush(7,5%) + stone(7,5%) + alien(15%);
```

:::note
Object `treasure_base` generates in a special way. If number `81` or `treasure_base` is included in the specific
generation settings, at least one of these objects will generate on the asteroid (even if the chance is set to 0%).
All asteroids containing `treasure_base` object will automatically turn into factory. To assign loot to the treasure base,
see [treasure loottables](./Gameplay/#treasure-loottables), especially [treasure string](./Gameplay/#treasure-string).
:::
