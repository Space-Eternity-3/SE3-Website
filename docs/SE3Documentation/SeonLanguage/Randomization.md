---
title: "Randomization"
sidebar_position: 5
---

:::info
Here you can learn how to create structure variants.
:::

## Contents

- [Contents](#contents)
- [Setrand and ifrand](#setrand-and-ifrand)

## Setrand and ifrand

Commands `setrand` and `ifrand` are used to create structure variants.
Using them you can divide your code into segments, which will only
execute if certain conditions are met.  

Command `setrand` has the following structure:

```text
setrand [num]
```

It sets the `random_variable` to a random integer between `0` and `num-1`.

:::note
Number `[num]` cannot be larger than 1000.
:::

Command `ifrand` creates paths in the code, which the interpreter can choose
depending on the current `random_variable` value. You can see how bosses
are chosen in the DEFAULT datapack using this system:

```text showLineNumbers
setrand 5
ifrand 0 catch # 0 summon boss 1 catch # 29 summon asteroid 6 12 42,49,50,0,0,0,0,0,0,0,50,49
ifrand 1 catch # 0 summon boss 2 catch # 29 summon asteroid 6 12 43,49,50,0,0,0,0,0,0,0,50,49
ifrand 2 catch # 0 summon boss 3 catch # 29 summon asteroid 6 12 44,49,50,0,0,0,0,0,0,0,50,49
ifrand 3 catch # 0 summon boss 4 catch # 29 summon asteroid 6 12 45,49,50,0,0,0,0,0,0,0,50,49
ifrand 4 catch # 0 summon boss 6 catch # 29 summon asteroid 6 12 47,49,50,0,0,0,0,0,0,0,50,49
ifrand break
```

As you can see, there are multiple possible paths and only one will be chosen during universe generation.

:::tip
After using command `ifrand break` everythig will come back to normal and the rest of code will execute normally.
:::
