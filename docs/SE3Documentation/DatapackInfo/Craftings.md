---
title: "Craftings"
sidebar_position: 1
---

Craftings is a place, where you can set craftings and group them by pages and categories.

## Contents

- [Contents](#contents)
- [Groups](#groups)
- [Construction rules](#construction-rules)

## Groups

There are pages, categories and lines in the crafting system.
Every page consists of 6 categories. Every category contains up to 5 lines.

![](/img/crafting1.png)

You can separate categories using jse3 hierarchy.

```text showLineNumbers
<Category>1
{
    <contents1>
}
<Category>2
{
    <contents2>
}
<etc>
```

Page separation is done automatically, when categories bigger than 6 are used in a datapack.
For example when you use category 14, it will be 2rd category of the 3nd page.

Note: You can set up to 512 categories.

## Construction rules

If you use variable `title_image`, you can set, which object will
be a title image of a given category.

Variable part is a line number in a given category.
Value part is a special crafting code. It consists of 1 or 2 ingredients
and 1 product. These are separated using `+` and `->`.
Every product and every ingredient is an object name with its amount in round
brackets. If you don't use brackets, the count will be set to 1.

```text showLineNumbers
<Category>5
{
	title_image: coal;
	1: coal(5) -> packed_coal;
	2: packed_coal -> coal(5);
	3: stone(3) + coal -> metal_piece;
}
```

Note: You don't have to use all 5 lines in a given category.
