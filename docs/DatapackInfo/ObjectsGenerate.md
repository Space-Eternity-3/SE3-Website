---
title: "Objects generate"
sidebar_position: 6
---

Objects generate is a place, where you can set an object generation
depending on asteroid type. Every jse3 line is a different asteroid.

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

Every line conatins variable and value part. These are separated using `:`
Variable part is an asteroid name `stone_geyzer`, which sets, where you modify an object generation.
Value part contains objects `stone` with generate probability in round brackets `(35%)` separated with `+`

```text
stone: stone(35%);
stone_geyzer: stone(30%) + stone_geyzer(20%);
grass: bush(35%) + big_bush(7,5%) + stone(7,5%) + alien(15%) + pumpkin(0,3%);
```

You can also put raw numbers instead of names, but it is recommended to use [Game translate](./GameTranslate/) system:

```text
0: 8(35%);
1: 8(30%) + 38(20%);
5: 12(35%) + 14(7,5%) + 8(7,5%) + 13(15%) + 4(0,3%);
```
