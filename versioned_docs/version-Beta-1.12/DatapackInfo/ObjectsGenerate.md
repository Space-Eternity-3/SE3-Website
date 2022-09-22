---
title: "Objects generate"
sidebar_position: 6
---

Objects generate is a place, where you can set an object generation
depending on asteroid type. Every jse3 line is a different asteroid.

## Contents

-   [Contents](#contents)
-   [Construction rules](#construction-rules)

## Construction rules

Variable part sets asteroid, where you modify object generation.
Value part contains objects and their generation rate in round brackets.
These are separated using `+`.

```text
stone: stone(35%);
stone_geyzer: stone(30%) + stone_geyzer(20%);
grass: bush(35%) + big_bush(7,5%) + stone(7,5%) + alien(15%) + pumpkin(0,3%);
```
