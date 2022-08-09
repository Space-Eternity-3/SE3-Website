---
slug: ./
title: "Seon Language"
sidebar_position: 2
---

- [Object commands](./)
- [Transform commands](./)
- [Script commands](./)
- [Loop commands](./)
- [Default structures](./)

---

Seon - Space Eternity Objects Notation. It's a programming language designed to create strucutres in SE3 easily.

## Contents

- [Contents](#contents)
- [Seon stream](#seon-stream)
- [Comments](#comments)
- [Interpreter variables](#interpreter-variables)

## Seon stream

Seon interpreter reads arguments and loads them into a stream. Arguments can be separated by strings, which consit only of these chars: `' ', '\t', '[', ']', '\n', "\r"`.
The interpreter reads every single argument individually. If it gets error, it continues its interpretation from current or next argument, so every correct command in a stream will be executed even if interpreter has found some errors.

## Comments

Comment system is not implemented into the seon language, but if it's a part of a datapack, you can simply put your comment into `<>`. Datapack interpreter will automatically
remove it before it becomes a seon code. Because of error ignoring policy you can put your comments as a raw code too, but try avoiding key-words in it.

## Interpreter variables

