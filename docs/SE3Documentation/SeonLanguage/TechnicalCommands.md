---
title: "Technical commands"
sidebar_position: 4
---

Technical commands are used to make some actions not connected with any object.

## Contents

- [Contents](#contents)
- [Loop system](#loop-system)
- [Random system](#random-system)
  - [Setrandom](#setrandom)
  - [Ifrandom](#ifrandom)
- [Ussage examples](#ussage-examples)

## Loop

Seon language contains a primitive type of loop. You can access it by
an exotic command `from`. It executes the next command multiple times, every time for
a different [current](./#interpreter-variables) variable.

```text showLineNumbers
from #<start> to #<end> [command]
```

- Start: Starting current value.
- End: Ending current value
- Command: A command, which will be executed multiple times.

Note: You can't use brackets. One loop is for one command.


# Random system

Random system allows you to create different structure variants.
It consists of two commands.

### Setrandom

Command `setrandom` sets the [setrandom](./#interpreter-variables) variable
to a random value from <0;lim).

```text showLineNumbers
setrandom %<lim>
```

- Lim: A minimum value, which can't be chosen.

Note: It is not recommended to set Lim to value over 1000.

### Ifrandom

Command `ifrandom` sets the [ifrandom](./#interpreter-variables) variable.
Commands which are not `setrandom` or `ifrandom` will execute only when ifrandom=setrandom or ifrandom=-1.
To set ifrandom to -1 use `break` istead of number.

```text showLineNumbers
ifrandom <value>
ifrandom break
```

- Value: Value, which will be set to ifrandom.

## Ussage examples

```text showLineNumbers
summon asteroid #1 6 12 x rotate 0
summon asteroid #2 6 12 x rotate 45
summon asteroid #3 6 12 x rotate 90
summon asteroid #4 6 12 x rotate 135
summon asteroid #5 6 12 x rotate 180
summon asteroid #6 6 12 x rotate 225
summon asteroid #7 6 12 x rotate 270
summon asteroid #8 6 12 x rotate 315
from #1 to #8 move 30 0
from #1 to #8 reset rotation

setrandom %4
ifrandom 0 summon #50 wall 3
ifrandom 1 summon #50 wall 4
ifrandom 2 summon #50 wall 6
ifrandom 3 summon #50 wall 10
ifrandom break
move 0 -20
```
