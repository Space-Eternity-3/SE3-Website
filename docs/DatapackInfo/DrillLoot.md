---
title: "Drill loot"
sidebar_position: 2
---

Drill loot is a place, where you can customize a drill loottable
depending on asteroid type. Every jse3 line is a different asteroid.

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

Variable part sets, which loottable will be modified.
Value part contains objects with drop probability in round brackets. These are separated using `+`.

```text showLineNumbers
stone: stone(100%);
gold: gold(30%);
amethyst: small_amethyst(20%);
```

Note: In default datapack one asteroid means one object, but it's not a rule.  
Note: Drillers can only drill the first object from loottable.