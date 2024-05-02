---
title: "Craftings"
sidebar_position: 1
---

:::info
In `craftings` segment you can customize available craftings and group them by categories.
:::

## Contents

- [Contents](#contents)
- [Groups](#groups)
- [Construction rules](#construction-rules)

## Groups

There are pages, categories and lines in the crafting system.
Every page consists of 6 categories. Every category contains up to 5 lines.

![](/img/crafting1.png)

Categories can be separated using jse3 hierarchy.

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

When categories bigger than 6 are used in a datapack, page separaton will be done automatically.
For example when you use category 14, it will be 2nd category of the 3rd page.

:::note
You can set up to 512 categories.
:::

## Construction rules

If you use variable `title_image`, you can set, which item will
be a title image of a given category. Craftings can be customized
like it is shown below:

```text showLineNumbers
craftings
{
	<Category>5
	{
		title_image: coal;
		1: coal(5) -> packed_coal;
		2: packed_coal -> coal(5);
		3: stone(3) + coal -> metal_piece;
	}
}
```
