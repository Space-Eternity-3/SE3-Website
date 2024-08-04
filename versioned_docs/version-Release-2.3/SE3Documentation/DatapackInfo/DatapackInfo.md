---
slug: ./
title: "Datapacks"
sidebar_position: 2
---

-   [Craftings](./Craftings)
-   [Drill Loot](./DrillLoot)
-   [Modified Drops](./ModifiedDrops)
-   [Gameplay](./Gameplay)
-   [Generator Settings](./GeneratorSettings/)
-   [Objects Generate](./ObjectsGenerate)
-   [Game Translate](./GameTranslate)
-   [Custom Structures](./CustomStructures)

---

:::info
Datapacks are used to change game rules in a specific universe. See how to import them [here](../../../../datapacks).
:::

## Contents

- [Contents](#contents)
- [Introduction](#introduction)

## Introduction

Every datapack consists of variable-value combos in jse3 hierarchy.

```text showLineNumbers
variable: value;
grandparent
{
    variable: value;
    variable2: 'value with a white character';
    parent
    {
        variable: value;
    }
}
```

Jse3 compiler does some actions to simplify code before compilation.
It removes all spaces, tabs and new lines, so these characters have only
cosmetical meaning by default. However if you writte something `'like this'`, it
will have spaces included and other white characters replaced with space.

:::tip
When writing decimals in datapack values you can use both `,` and `.`
:::

:::note
All probability floats have 0,1% precision, because of a 1000-based probability system. That means,
you shouldn't use numbers like `0,05%` in your datapack when it comes to probability or rarity.
:::

Functional characters:

```text showLineNumbers
< > - comments
{ } - variable tree operators
[ ] - decoration where it looks nice :)
 :  - variable/value separator
 ;  - value end character
 '  - on/off remove white characters
```

Dennied characters in variable names and values:

```text showLineNumbers
{ } < : ; ~ '
```
