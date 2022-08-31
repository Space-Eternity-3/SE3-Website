---
slug: ./
title: "Datapack Info"
sidebar_position: 1
---

- [Craftings](./Craftings)
- [Drill Loot](./DrillLoot)
- [Modified Drops](./ModifiedDrops)
- [Gameplay](./Gameplay)
- [Generator Settings](./GeneratorSettings/)
- [Objects Generate](./ObjectsGenerate)
- [Game Translate](./GameTranslate)
- [Custom Structures](./CustomStructures)

----------------------------------------

Datapacks are used to change in-game rules, when playing SE3 starts to get boring or you want to become a creator.

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)

## Construction rules

Every datapack consists of variable-value combos in jse3 hierarchy.
```text showLineNumbers
variable: value;
grandparent
{
    variable: value;
    variable2: 'value with a white char';
    parent
    {
        variable: value;
    }
}
```

Jse3 compiler does some actions to simplify code before compilation.
It removes all spaces, tabs and new lines, so these chars have only
cosmetical meaning by default. You can change it by using char `'`,
then all these chars will be replaced with space.

Note: Datapack parser works on `,` based floats.  
Note: All probability floats have 0,1% precision, because of a 1000-based probability system.

Functional chars:
```text showLineNumbers
< > - comments
{ } - variable tree operators
[ ] - decoration where it looks nice :)
 :  - variable/value separator
 ;  - value end char
 '  - on/off remove white chars
```

Dennied chars in variable names and values:
```text showLineNumbers
{ } < : ; ~ '
```
