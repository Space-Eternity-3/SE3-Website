---
title: "Modified drops"
sidebar_position: 3
---

:::info
In `modified_drops` segment you can customize items, which will
be collected after breaking a specific fob.
:::

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

Drops can be customized like it is shown below:

```text showLineNumbers
modified_drops:
{
    medium_amethyst: small_amethyst(2);
    large_amethyst: small_amethyst(3);
    big_bush: bush(3);
    magnetic_alien_activated: magnetic_alien;
}
```

:::tip
If you don't assign any value to a fob, it will just drop itself.
:::
