---
title: "Drill loot"
sidebar_position: 2
---

:::info
In `drill_loot` segment you can customize drill loottables for specific asteroids.
:::

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

Items, which can be drilled from asteroids can be
customized like it is shown below:

```text showLineNumbers
drill_loot
{
    stone: stone(100%);
    gold: gold(30%);
    copper: copper(92%) + turbo_element(8%);
}
```

:::note
Only one item at a time can be drilled.
:::

:::note
All [asteroid variants](../GameData/Asteroids#asteroid-variants) with the same texture will always have the same drill loot.
:::
