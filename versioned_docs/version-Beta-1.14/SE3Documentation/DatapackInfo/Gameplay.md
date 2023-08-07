---
title: "Gameplay"
sidebar_position: 4
---

Gameplay is a place, where you can set some in-game variables.

## Contents

-   [Contents](#contents)
-   [Construction rules](#construction-rules)
-   [Gameplay variables](#gameplay-variables)

## Construction rules

Variable part is a rule name.
Value part sets amount.

```text showLineNumbers
health_level_add: 0;
spike_damage: 10;
at_protection_health_regenerate_multiplier: 1,5;
```

## Gameplay variables

Note: Gameplay variables are not sorted by ID.

| ID  | Name                                       | Default | Type  | Description                                                                            | Note                |
| --- | ------------------------------------------ | ------- | ----- | -------------------------------------------------------------------------------------- | ------------------- |
| 26  | health_level_add                           | 0       | float | Increases (or decreases) default health level by this value. You can still upgrade it. | -                   |
| 2   | drill_level_add                            | 0       | float | Increases (or decreases) default drill level by this value. You can still upgrade it.  | -                   |
| 4   | health_regenerate_cooldown                 | 5       | float | Waiting time for health regeneration after receiving damage in seconds.                | -                   |
| 5   | health_regenerate_multiplier               | 2       | float | Speed of health regeneration.                                                          | -                   |
| 0   | turbo_regenerate_multiplier                | 1       | float | Speed of turbo regeneration.                                                           | -                   |
| 1   | turbo_use_multiplier                       | 2       | float | Speed of turbo usage.                                                                 | -                   |
| 6   | crash_minimum_energy                       | 5       | float | Minimum crash damage speed.                                                            | -                   |
| 7   | crash_damage_multiplier                    | 0,7     | float | Size of crash damage.                                                                  | -                   |
| 8   | spike_damage                               | 10      | float | Red spike damage.                                                                      | -                   |
| 28  | unstable_matter_damage                     | 10      | float | Unstable matter and unstable bullets damage.                                           | -                   |
| 3   | copper_bullet_damage                       | 3       | float | Copper bullets damage. Can be increased through upgrades.                              | Not constant        |
| 27  | red_bullet_damage                          | 4       | float | Red bullets damage. Can be increased through upgrades.                                 | Not constant        |
| 30  | bullet_owner_push                          | 1       | float | Push force when shooting bullets.                                                      | -                   |
| 31  | healing_potion_hp                          | 15      | float | Size of heal after using a healing potion.                                             | -                   |
| 14  | vacuum_drag_multiplier                     | 1       | float | Size of vaccum drag.                                                                   | Real life effect :) |
| 15  | all_speed_multiplier                       | 1       | float | Overall speed multiplier.                                                              | -                   |
| 9   | player_normal_speed                        | 11      | float | Player default speed.                                                                  | -                   |
| 10  | player_brake_speed                         | -7      | float | Player speed when using brake.                                                         | -                   |
| 11  | player_turbo_speed                         | 18      | float | Player speed when using turbo. Can be increased through upgrades.                      | Not constant        |
| 12  | drill_normal_speed                         | 8       | float | Player speed when on drill extended.                                                   | -                   |
| 13  | drill_brake_speed                          | -5      | float | Player speed when using brake and on drill extended.                                   | -                   |
| 16  | at_protection_health_level_add             | 2,272   | float | Amount, which is added to health_level_add when using protection artefact.             | -                   |
| 17  | at_protection_health_regenerate_multiplier | 1,5     | float | Protection artefact multiplies health_regenerate_multiplier by this value.             | -                   |
| 18  | at_impulse_power_regenerate_multiplier     | 1       | float | Speed of power regeneration when using impulse artefact.                               | -                   |
| 19  | at_impulse_time                            | 0,4     | float | Impulse time when using impulse artefact.                                              | -                   |
| 20  | at_impulse_speed                           | 70      | float | Impulse speed when using impulse artefact.                                             | -                   |
| 29  | at_impulse_damage                          | 15      | float | Impulse damage when using impulse artefact.                                            | -                   |
| 21  | at_illusion_power_regenerate_multiplier    | 1       | float | Speed of ether regeneration when using illusion artefact.                              | -                   |
| 22  | at_illusion_power_use_multiplier           | 2       | float | Speed of ether usage when using illusion artefact.                                    | -                   |
| 23  | at_unstable_normal_avarage_time            | 1,5     | float | Average time between unstable explosions when using unstable artefact.                 | -                   |
| 24  | at_unstable_special_avarage_time           | 3       | float | Average time between unstable shoots when using unstable artefact.                     | -                   |
| 25  | at_unstable_force                          | 15      | float | Explosion force when using unstable artefact.                                          | -                   |
