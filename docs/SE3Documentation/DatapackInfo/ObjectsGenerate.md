---
title: "Objects generate"
sidebar_position: 6
---

Objects generate is a place, where you can customize object generation chance
depending on asteroid type. Every jse3 line is a different asteroid.

## Contents

-   [Contents](#contents)
-   [Construction rules](#construction-rules)

## Construction rules

Variable part sets asteroid, where you modify object generation.
Value part contains objects and their generation chance in round brackets.
These are separated using `+`.

```text showLineNumbers
stone: stone(35%);
stoneA: stone(30%) + stone_geyzer(20%);
grass: bush(35%) + big_bush(7,5%) + stone(7,5%) + alien(15%) + pumpkin(0,3%);
```
