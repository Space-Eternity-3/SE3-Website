---
title: "Custom structures"
sidebar_position: 8
---

Custom structures is a place, where you can create your
own structures using [seon](#seon-language). They can be loaded into your biome by
tag struct=X in [biome settings](./GeneratorSettings/BiomeSettings) segment, where X is a strucutre ID.

## Contents

- [Contents](#contents)
- [Structure separation](#structure-separation)
- [Seon language](#seon-language)

## Structure separation

Structures are separated using jse3 hierarchy. Every structure has its own ID. They might have IDs from 1 to 31. You can add structure name in comments,
but it's not necessary.

```text showLineNumbers
1<My structure>: '[

    <space for seon>

]';
2<Your structure>: '[

    <space for seon>

]';
3<My friend's structure>: '[

    <space for seon>

]';
```

## Seon language

Seon - Space Eternity Objects Notation. It's a programming language designed to create strucutres in SE3 easily. More info [here](../SeonLanguage/).