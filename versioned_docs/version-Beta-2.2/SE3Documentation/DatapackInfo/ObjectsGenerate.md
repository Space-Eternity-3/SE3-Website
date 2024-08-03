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
