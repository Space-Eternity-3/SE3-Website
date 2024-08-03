---
title: "Boss animations"
sidebar_position: 3
---

:::info
Here you can learn how to animate objects during boss
battle transitions.
:::

## Contents

- [Contents](#contents)
- [States](#states)
- [Animating](#animating)
- [Example](#example)

:::note
All animations require having a boss linked with a bedrock storage in a structure.
:::

## States

Every boss has multiple possible states. Every animation, which we will be discussing happens during transitions between them.
Here is a list of all states:

| Name    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| default | The temporary state, when server data about structure hasn't arrived yet. |
| A1      | Boss is in phase I and is inactive.                                       |
| A2      | Boss is in phase II and is inactive.                                      |
| A3      | Boss is in phase III and is inactive.                                     |
| B1      | Boss is in phase I and there is a battle.                                 |
| B2      | Boss is in phase II and there is a battle.                                |
| B3      | Boss is in phase III and there is a battle.                               |
| R       | Boss is defeated.                                                         |

## Animating

The only object, which can be animated is animator. Other objects
need to be assigned to the animator thorugh command `setanimator`.
It has the following structure:

```text
setanimator [Animator #ID]
```

:::note
The #ID pointer must point on the object, which is not animator.
:::

If all objects, which you want to animate are paired with the animator,
you can now assign the actual animation to the animator through command `animate`.
It has the following structure:

```text
animate hiding when [selected-states]                    < variant 1 >
animate extending when [selected-states] [x] [y]         < variant 2 >
```

:::note
Now the #ID pointer must point on the animator.
:::

+ `variant 1` is for hiding. It hides the object when one of selected states is active.
+ `variant 2` is for extending. It moves the object when one of selected states is active.
+ `[selected-states]` is a list of all selected states separated by `,` character, for example: `default,B1,B2,B3,R`.
+ `[x]` and `[y]` is the vector of extension.

:::warning
Remember to use the `default` state in such way to not allow players to do actions, which they wouldn't be able to do if they had just received packets from the server.
For example in the DEFAULT datapack during `default` state arena is closed and all central asteroids are hidden.
:::

## Example

We want to create a primitive battle menu and the extending piston.

```text showLineNumbers
<space for presentation>
    catch # 200 summon hole 40

<creating a boss linked with a bedrock storage + one piston>
    catch # 0 summon boss 1
    catch # 1 summon asteroid 6 12 52,,,,,,,,,,, move 0 -2
    catch # 2 summon piston 1 1 12 move 15 0

<creating and connecting animators>
    catch # 201-202 summon animator
    catch # 1 setanimator 201
    catch # 2 setanimator 202

<creating hiding and extending animation>
    catch # 201 animate hiding when B1,B2,B3,R,default      <will hide on battles, reward and in pre-data state>
    catch # 202 animate extending when B1,B2,B3 0 -10       <will be extended only on battles>

```

|![](/img/seon/animation1.png)  |
| --- |

Import this code into your datapack and check how it works. Remember about giving yourself some amethyst.
