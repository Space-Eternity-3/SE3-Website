---
slug: ./
title: "Seon Language"
sidebar_position: 2
---

- [Object commands](./ObjectCommands)
- [Transform commands](./TransformCommands)
- [Script commands](./ScriptCommands)
- [Technical commands](./TechnicalCommands)
- [Default structures](./DefaultStructures)

---

Seon - Space Eternity Objects Notation. It's a scripting language designed to create strucutres in SE3 easily.

## Contents

- [Contents](#contents)
- [Seon stream](#seon-stream)
- [Comments](#comments)
- [Interpreter variables](#interpreter-variables)

## Seon stream

Seon interpreter reads arguments and loads them into a stream. Arguments can be separated by strings, which consit only of these chars: `' ', '\t', '[', ']', '\n', "\r"`.
The interpreter reads every single argument individually. If it gets error, it continues its interpretation from current or next argument, so every correct command in a stream will be executed even if interpreter has found some errors.

Note: Seon interpreter works on `,` and `.` based floats.

## Comments

Comment system is not implemented into the seon language, but if it's a part of a datapack, you can simply put your comment into `<>`. Datapack interpreter will automatically
remove it before it becomes a seon code. Because of error ignoring you can put your comments as a raw code too, but try avoiding key-words in it.

## Interpreter variables

When reading seon code, interpreter stores some variables in memory. They can be changed using commands and have very important meaning when
trying to understand that language.

| Variable                | Description                                                                                                                                                             | Default value | Command                                                                         | Allowed values |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------- | -------------- |
| current                 | Stores ID of a specified object. Every command, which don't need object ID as its argument, but has to do some actions on it takes ID from here.                        | -1            | [catch](./ObjectCommands#catch) #X / [summon](./ObjectCommands#summon) #X (...) | int <0;1023>   |
| findex                  | Stores ID of an asteroid object. Every command, which access one object on one asteroid (has `child` in its name) takes asteroid object ID from here.                   | -1            | [catch child](./ObjectCommands#catch-child) $X                                  | int <0;19>     |
| findex_min & findex_max | Stores IDs of multiple asteroid objects. Every command, which access multiple objects on one asteroid (has `children` in its name) takes asteroid object IDs from here. | 0 & 19        | [catch children](./ObjectCommands#catch-children) $X $Y                         | int <0;19>     |
| setrandom               | Integer number used to randomize structures. You can set it to a random number <0;X) with command `setrandom %X`.                                                       | -1            | setrandom %X                                                                    | int <0;99999>  |
| ifrandom                | Integer number used to randomize structures. Commands execute only when ifrandom = setrandom or when ifrandom = -1 (break).                                             | -1            | ifrandom X/break                                                                | int32          |

Note: Changing one variable never affects others directly.
