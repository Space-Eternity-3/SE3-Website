---
title: "Drill loot"
sidebar_position: 2
---

Drill loot is a place, where you can set a drill loottable
depending on asteroid type. Every jse3 line is a different asteroid.

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

Every line conatins variable and value part. These are separated using `:`
Variable part is an asteroid name `amethyst`, which sets, which loottable will be modified.
Value part contains objects `small_amethyst` with drop probability in round brackets `(20%)` separated with `+`

Note: In a default datapack one asteroid means one object, but it's not a rule.  
Note: Drillers can only drill the first object from loottable.

```text
stone: stone(100%);
gold: gold(30%);
amethyst: small_amethyst(20%);
```

You can also put raw numbers instead of names, but it is recommended to use [Game translate](./GameTranslate/) system:

```text
0: 8(100%);
4: 10(30%);
6: 5(20%);
```