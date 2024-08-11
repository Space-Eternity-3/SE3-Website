---
slug: ./
title: "Seon Language"
sidebar_position: 3
---

-   [Objects](./Objects)
-   [Transformations](./Transformations)
-   [Boss animations](./BossAnimations)
-   [Other commands](./OtherCommands)
-   [Randomization](./Randomization)

---

:::info
Seon - Space Eternity Objects Notation. It's a scripting language designed to create strucutres in SE3.
Can be used through [datapacks](../DatapackInfo/).
:::

## Contents

- [Contents](#contents)
- [Introduction](#introduction)

## Introduction

Seon consists of commands, which are described later in this documentation. It is possible to use
two commands in the same line and even split one command between two or more lines. To make a comment
`<triangular brackets>` can be used.

```text showLineNumbers
<this is good>
catch # 1 summon asteroid 6 8 x
catch # 2 summon wall 1 1 5
catch # 1-2 move 10 0 mod 10 0

<this is unconventional, but still correct>
catch # 3
piston 1 1
5
```

:::tip
When writing decimals in Seon you can use both `,` and `.`
:::

:::warning
Seon doesn't have any error-catching system implemented. Instead, wrong commands will just execute incorrectly.
:::
