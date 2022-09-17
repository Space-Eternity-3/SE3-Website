---
title: "Modified drops"
sidebar_position: 3
---

Modified drops is a place, where you can set objects and their amounts,
which will be collected after picking up an object.

## Contents

-   [Contents](#contents)
-   [Construction rules](#construction-rules)

## Construction rules

Variable part is an object name, which is destroyed. Value part contains
object name and object count in round brackets. If you don't use brackets,
the count will be set to 1.

```text
medium_amethyst: small_amethyst(2);
large_amethyst: small_amethyst(3);
big_bush: bush(3);
```
