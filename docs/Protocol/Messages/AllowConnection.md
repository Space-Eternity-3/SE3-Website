---
title: "/AllowConnection"
---

Sent from a client, when it wants to connect.

## Arguments

| Name    | Type             | Description                                  |
| ------- | ---------------- | -------------------------------------------- |
| Nick    | String           | Nick of the player                           |
| Version | String           | Version of the game                          |
| ConID   | Number (integer) | Random number used to avoid message conflits |

## Example

```text
/AllowConnection Nadwey Beta_1_12 0
```
