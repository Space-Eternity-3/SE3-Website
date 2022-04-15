---
title: "Gameplay"
sidebar_position: 4
---

Gameplay is a place, where you can set some in-game variables.

## Contents

- [Contents](#contents)
- [Construction rules](#construction-rules)
- [Gameplay variables](#gameplay-variables)

## Construction rules

Variable part is a rule name.
Value part sets amount.

```text
health_level_add: 0;
spike_damage: 10;
at_protection_health_regenerate_multiplier: 1,5;
```

## Gameplay variables

| ID  | Name                                       | Default | Type  | Description                                                                            | Note                     |
| --- | ------------------------------------------ | ------- | ----- | -------------------------------------------------------------------------------------- | ------------------------ |
| 1   | health_level_add                           | 0       | float | Increases (or decreases) default health level by this value. You can still upgrade it. | -                        |
| 2   | drill_level_add                            | 0       | float | Increases (or decreases) default drill level by this value. You can still upgrade it.  | -                        |
| 3   | bullet_level_add                           | 0       | float | Increases (or decreases) default bullet level by this value. You can still upgrade it. | Disabled                 |
| 4   | health_regenerate_cooldown                 | 5       | float | Waiting time for health regeneration after receiving damage in seconds.                | -                        |
| 5   | health_regenerate_multiplier               | 2       | float | Speed of health regeneration.                                                          | -                        |
| 6   | turbo_regenerate_multiplier                | 1       | float | Speed of turbo regeneration.                                                           | -                        |
| 7   | turbo_use_multiplier                       | 2       | float | Speed of turbo ussage.                                                                 | -                        |
| 8   | crash_minimum_energy                       | 5       | float | Minimum crash damage speed.                                                            | -                        |
| 9   | crash_damage_multiplier                    | 1       | float | Size of crash damage.                                                                  | -                        |
| 10  | spike_damage                               | 10      | int   | Spike and unstable matter damage.                                                      | -                        |
| 11  | vacuum_drag_multiplier                     | 1       | float | Size of vacuum drag.                                                                   | Real life effect :)      |
| 12  | all_speed_multiplier                       | 1       | float | Overall speed multiplier.                                                              | -                        |
| 13  | player_normal_speed                        | 11      | float | Player default speed.                                                                  | -                        |
| 14  | player_brake_speed                         | -7      | float | Player speed when using brake.                                                         | -                        |
| 15  | player_turbo_speed                         | 18      | float | Player speed when using turbo. Can be increased through upgrades.                      | Only if turbo level is 0 |
| 16  | drill_normal_speed                         | 8       | float | Player spped when on drill extended.                                                   | -                        |
| 17  | drill_brake_speed                          | -5      | float | Player speed when using brake and on drill extended.                                   | -                        |
| 18  | at_protection_health_level_add             | 2,272   | float | Amount, which is added to health_level_add when using protection artefact.             | -                        |
| 19  | at_protection_health_regenerate_multiplier | 1,5     | float | Protection artefact multiplies health_regenerate_multiplier by this value.             | -                        |
| 20  | at_impulse_power_regenerate_multiplier     | 1       | float | Speed of power regeneration when using impulse artefact.                               | -                        |
| 21  | at_impulse_time                            | 0,4     | float | Impulse time when using impulse artefact.                                              | -                        |
| 22  | at_impulse_speed                           | 70      | float | Impulse speed when using impulse artefact.                                             | -                        |
| 23  | at_illusion_power_regenerate_multiplier    | 1       | float | Speed of ether regeneration when using illusion artefact.                              | -                        |
| 24  | at_illusion_power_use_multiplier           | 2       | float | Speed of ether ussage when using illusion artefact.                                    | -                        |
| 25  | at_unstable_normal_avarage_time            | 1,5     | float | Average time between unstable explosions when using unstable artefact.                 | -                        |
| 26  | at_unstable_special_avarage_time           | 3       | float | Average time between unstable shoots when using unstable artefact.                     | -                        |
| 27  | at_unstable_force                          | 15      | float | Explosion force when using unstable artefact.                                          | -                        |
