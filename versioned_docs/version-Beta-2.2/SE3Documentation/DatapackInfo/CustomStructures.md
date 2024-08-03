---
title: "Custom structures"
sidebar_position: 8
---

:::info
In `custom_structures` segment you can design and modify existing structures such as stars, arenas and cementeries
using [seon language](../SeonLanguage/).
:::

## Contents

- [Contents](#contents)
- [Structures](#structures)

## Structures

:::note
If you are not familiar with the [biome settings](./GeneratorSettings/BiomeSettings), please read about it, as this article is some sort of continuation.
:::

In `custom_structures` segment structure codes are separated using jse3 hierarchy.
Every structure has its own ID. They might have IDs from 1 to 31. You can add structure name in comments,
but it's not necessary.

```text showLineNumbers
1<My structure>: '[

    <structure code>

]';
2<Your structure>: '[

    <structure code>

]';
3<My friend's structure>: '[

    <structure code>

]';
```

Every structure must be written in the Seon Language. This is a powerful
tool, which allows you to build structures. Read more in the [Seon Documentation](../SeonLanguage/).
