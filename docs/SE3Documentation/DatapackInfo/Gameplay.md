---
title: "Gameplay"
sidebar_position: 4
---

:::info
In `gameplay` segment you can customize a variety of gameplay variables.
:::

## Contents

- [Contents](#contents)
- [Gameplay variables](#gameplay-variables)
  - [Player settings](#player-settings)
  - [Player movement](#player-movement)
  - [Crash damage](#crash-damage)
  - [Player bullet and static collider damages](#player-bullet-and-static-collider-damages)
  - [Other boss settings](#other-boss-settings)
  - [Potions](#potions)
  - [Grow times](#grow-times)
  - [Factory](#factory)
  - [Upgrades](#upgrades)
  - [Artefacts](#artefacts)
  - [Bullet speeds](#bullet-speeds)
  - [Bullet range multipliers](#bullet-range-multipliers)
  - [Bullet cooldowns](#bullet-cooldowns)
  - [Cyclic damages](#cyclic-damages)
  - [Boss damages](#boss-damages)
  - [Boss battle settings](#boss-battle-settings)
  - [Treasure loottables](#treasure-loottables)
- [Treasure string](#treasure-string)

## Gameplay variables

You can customize gameplay variables by modifying their values in a datapack.
Here is a list of them all and their short descriptions:

### Player settings

| Variable                     | Default value | Data type | Description                                                               |
| ---------------------------- | ------------- | --------- | ------------------------------------------------------------------------- |
| health_level_add             | 0             | float     | Value added to health level, which modifies your default health.          |
| drill_level_add              | 0             | float     | Value added to drill level, which modifies your default drill efficiency. |
| health_regenerate_cooldown   | 2,5           | float     | A time after receiving damage when health regeneration starts.            |
| health_regenerate_multiplier | 4             | float     | Health regeneration speed.                                                |
| turbo_regenerate_multiplier  | 1,5           | float     | Turbo regeneration speed.                                                 |
| turbo_use_multiplier         | 1,5           | float     | Turbo use speed.                                                          |

### Player movement

| Variable                         | Default value | Data type | Description                                                                       |
| -------------------------------- | ------------- | --------- | --------------------------------------------------------------------------------- |
| all_speed_multiplier             | 1             | float     | Multiplier, by which every `*_speed` variable in this segment will be multiplied. |
| vacuum_drag_multiplier           | 1             | float     | Size of vacuum drag.                                                              |
| player_normal_speed              | 13            | float     | Normal player speed.                                                              |
| player_brake_speed               | -8,5          | float     | Player brake speed.                                                               |
| player_turbo_speed               | 18            | float     | Default player turbo speed.                                                       |
| drill_normal_speed               | 9             | float     | Player speed when drill extended.                                                 |
| drill_brake_speed                | -6            | float     | Player brake speed when drill extended.                                           |
| bullet_owner_push                | 0,6           | float     | Force by which player gets pushed after shooting a bullet.                        |
| wind_owner_push                  | 1,8           | float     | Force by which player gets pushed after shooting a wind bullet.                   |
| wind_victim_push                 | 20            | float     | Force by which player gets pushed after being shot by a wind bullet.              |
| stone_geyzer_force_multiplier    | 1             | float     | Normal geyzer wind force multiplier.                                              |
| magnetic_geyzer_force_multiplier | 4             | float     | Magnetic geyzer wind force multiplier.                                            |
| lava_geyzer_force_multiplier     | 0,06          | float     | Lava geyzer wind force multiplier.                                                |

### Crash damage

| Variable                | Default value | Data type | Description                                                           |
| ----------------------- | ------------- | --------- | --------------------------------------------------------------------- |
| crash_minimum_energy    | 6             | float     | Minimum energy loss required for damage when crashing into something. |
| crash_damage_multiplier | 0,6           | float     | Damage multiplier when crashing into something.                       |

### Player bullet and static collider damages

| Variable               | Default value | Data type | Description                                                                                  |
| ---------------------- | ------------- | --------- | -------------------------------------------------------------------------------------------- |
| copper_bullet_damage   | 3             | float     | Default copper bullet damage when shot by player.                                            |
| red_bullet_damage      | 4             | float     | Default red bullet damage when shot by player.                                               |
| wind_bullet_damage     | 3             | float     | Default wind bullet damage when shot by player.                                              |
| fire_bullet_damage     | 3             | float     | Default fire bullet damage when shot by player. Static damage when in fire collider.         |
| unstable_matter_damage | 10            | float     | Default unstable matter damage when shot by player. Static damage when in unstable collider. |
| spike_damage           | 5             | float     | Static damage when in spike collider.                                                        |
| star_collider_damage   | 5             | float     | Static damage when in star collider.                                                         |
| lava_geyzer_damage     | 5             | float     | Static damage when in lava geyzer collider.                                                  |

### Other boss settings

| Variable         | Default value | Data type | Description                                                        |
| ---------------- | ------------- | --------- | ------------------------------------------------------------------ |
| boss_fire_cycles | 4             | integer   | Number of remaining damage cycles when boss is set on fire.        |
| boss_fire_damage | 4             | float     | Fire damage every second when boss has fire effect.                |
| wind_boss_push   | 25            | float     | Force by which boss gets pushed after being shot by a wind bullet. |

### Potions

| Variable               | Default value | Data type | Description                                            |
| ---------------------- | ------------- | --------- | ------------------------------------------------------ |
| healing_potion_hp      | 20            | float     | Heal size when using healing potion.                   |
| blank_potion_hp        | 15            | float     | Heal size when using blank potion.                     |
| killing_potion_hp      | 15            | float     | Damage size when using killing potion.                 |
| shield_potion_duration | 2,5           | float     | Shield duration (in seconds) when using shield potion. |

### Grow times

| Variable                 | Default value | Data type | Description                                                                   |
| ------------------------ | ------------- | --------- | ----------------------------------------------------------------------------- |
| amethyst_grow_time_min   | 60            | integer   | Minimum time (in seconds) after which amethyst grows.                         |
| amethyst_grow_time_max   | 180           | integer   | Maximum time (in seconds) after which amethyst grows.                         |
| magnetic_alien_grow_time | 3             | integer   | Time (in seconds) after which flat magnetic alien turns into its normal form. |

### Factory
| Variable                     | Default value | Data type | Description                                                                                                                         |
| ---------------------------- | ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| factory_default_diode_chance | 0,03165       | float     | The default chance for treasure base to update its state in one diode cycle. Can be increased by activating diamond bases.          |
| factory_diamond_modifier     | 1,35          | float     | The modifier, by which every activated diamond base multiplies `factory_default_diode_chance`.                                      |
| active_diamond_base_chance   | 0,2           | float     | The chance, which diamond base has to generate already activated. Note, that always at least one diamond base will remain inactive. |

### Upgrades

| Variable   | Default value | Data type | Description                                                                                 |
| ---------- | ------------- | --------- | ------------------------------------------------------------------------------------------- |
| upg_1_item | 10            | integer   | Payment for the 1st upgrade is done using item with this [ID](../GameData/ItemsAndObjects). |
| upg_1_cost | 5             | integer   | Payment for the 1st upgrade is done using this amount of items.                             |
| upg_2_item | 10            | integer   | Payment for the 2nd upgrade is done using item with this [ID](../GameData/ItemsAndObjects). |
| upg_2_cost | 10            | integer   | Payment for the 2nd upgrade is done using this amount of items.                             |
| upg_3_item | 10            | integer   | Payment for the 3rd upgrade is done using item with this [ID](../GameData/ItemsAndObjects). |
| upg_3_cost | 15            | integer   | Payment for the 3rd upgrade is done using this amount of items.                             |
| upg_4_item | 10            | integer   | Payment for the 4th upgrade is done using item with this [ID](../GameData/ItemsAndObjects). |
| upg_4_cost | 20            | integer   | Payment for the 4th upgrade is done using this amount of items.                             |
| upg_5_item | 10            | integer   | Payment for the 5th upgrade is done using item with this [ID](../GameData/ItemsAndObjects). |
| upg_5_cost | 25            | integer   | Payment for the 5th upgrade is done using this amount of items.                             |

### Artefacts

| Variable                                   | Default value | Data type | Description                                                                                   |
| ------------------------------------------ | ------------- | --------- | --------------------------------------------------------------------------------------------- |
| at_protection_health_level_add             | 2,272         | float     | Value added to health level when wearing protection artefact.                                 |
| at_protection_health_regenerate_multiplier | 1,5           | float     | Value by which `health_regenerate_multiplier` is multiplied when wearing protection artefact. |
| at_impulse_power_regenerate_multiplier     | 0,75          | float     | Power regeneration speed when wearing impulse artefact.                                       |
| at_impulse_time                            | 0,4           | float     | Impulse time when wearing impulse artefact.                                                   |
| at_impulse_speed                           | 70            | float     | Impulse speed when wearing impulse artefact.                                                  |
| at_impulse_damage                          | 8             | float     | Impulse damage when wearing impulse artefact.                                                 |
| at_illusion_power_regenerate_multiplier    | 1             | float     | Power regeneration speed when wearing illusion artefact.                                      |
| at_illusion_power_use_multiplier           | 2             | float     | Power use speed when wearing illusion artefact.                                               |
| at_illusion_speed_multiplier               | 1,2           | float     | The invisibility speed boost when wearing illusion artefact.                                  |
| at_unstable_normal_avarage_time            | 1,5           | float     | The average time after which unstable artefact will generate unstable pulse.                  |
| at_unstable_special_avarage_time           | 1,5           | float     | The average time after which unstable artefact will generate unstable matter.                 |
| at_unstable_force                          | 10            | float     | Unstable pulse force when wearing unstable artefact.                                          |
| at_unstable_power_regenerate_multiplier    | 2             | float     | Power regeneration speed when wearing unstable artefact.                                      |
| at_unstable_power_normal_eat               | 1             | float     | Power decrease after generating unstable pulse when wearing unstable artefact.                |
| at_unstable_power_special_eat              | 2             | float     | Power decrease after generating unstable matter when wearing unstable artefact.               |
| at_unstable_power_killpot_give             | 10            | float     | Power increase after using killing potion when wearing unstable artefact.                     |
| at_unstable_max_unstabling_deviation       | 15            | float     | Max angle by which unstabling state bullet can be offset from mouse direction.                |

### Bullet speeds

| Variable              | Default value | Data type | Description                                     |
| --------------------- | ------------- | --------- | ----------------------------------------------- |
| copper_bullet_speed   | 0,45          | float     | Copper bullet speed when shot by player.        |
| red_bullet_speed      | 0,45          | float     | Red bullet speed when shot by player.           |
| unstable_bullet_speed | 0,4           | float     | Unstable bullet speed when shot by player.      |
| fire_bullet_speed     | 0,4           | float     | Fire bullet speed when shot by player.          |
| wind_bullet_speed     | 0,6           | float     | Wind bullet speed when shot by player.          |
| boss_bullet_speed     | 0,35          | float     | Any bullet speed when shot by boss.             |
| boss_seeker_speed     | 0,25          | float     | Any auto-aiming bullet speed when shot by boss. |

### Bullet range multipliers

| Variable                 | Default value | Data type | Description                                                   |
| ------------------------ | ------------- | --------- | ------------------------------------------------------------- |
| copper_bullet_defrange   | 1             | float     | Copper bullet default range multiplier when shot by player.   |
| red_bullet_defrange      | 1             | float     | Red bullet default range multiplier when shot by player.      |
| wind_bullet_defrange     | 1,4           | float     | Wind bullet default range multiplier when shot by player.     |
| fire_bullet_defrange     | 1             | float     | Fire bullet default range multiplier when shot by player.     |
| unstable_bullet_defrange | 1             | float     | Unstable bullet default range multiplier when shot by player. |

### Bullet cooldowns

| Variable                 | Default value | Data type | Description                                      |
| ------------------------ | ------------- | --------- | ------------------------------------------------ |
| copper_bullet_cooldown   | 7             | integer   | Copper bullet default shooting cooldown.         |
| red_bullet_cooldown      | 7             | integer   | Red bullet default shooting cooldown.            |
| wind_bullet_cooldown     | 10            | integer   | Wind bullet default shooting cooldown.           |
| fire_bullet_cooldown     | 10            | integer   | Fire bullet default shooting cooldown.           |
| unstable_bullet_cooldown | 14            | integer   | Unstable bullet default shooting cooldown.       |
| impulse_cooldown         | 10            | integer   | Impulse cooldown before making the next impulse. |

### Cyclic damages

| Variable                     | Default value | Data type | Description                                                                        |
| ---------------------------- | ------------- | --------- | ---------------------------------------------------------------------------------- |
| cyclic_damage_multiplier     | 1             | float     | Multiplier, by which every `*_damage` variable in this segment will be multiplied. |
| cyclic_fire_damage           | 2             | float     | Fire damage every second when player has fire effect.                              |
| cyclic_poison_damage         | 1             | float     | Fire damage every second when player has poison effect.                            |
| cyclic_remote_damage         | 1             | float     | Remote damage every half second when Degenerator uses remote damage.               |
| cyclic_fire_time             | 2             | integer   | Number of remaining damage cycles when fire bullet sets you on fire.               |
| cyclic_starandus_geyzer_time | 2             | integer   | Number of remaining damage cycles when Starandus geyzer sets you on fire.          |
| cyclic_star_time             | 2             | integer   | Number of remaining damage cycles when star sets you on fire.                      |
| cyclic_spike_time            | 6             | integer   | Number of remaining damage cycles when spike bullet gives you poison.              |
| cyclic_spikeball_time        | 4             | integer   | Number of remaining damage cycles when spikeball bullet gives you poison.          |
| cyclic_stickybulb_time       | 4             | integer   | Sticky effect time reduced by 1.                                                   |

### Boss damages

| Variable                      | Default value | Data type | Description                                                                        |
| ----------------------------- | ------------- | --------- | ---------------------------------------------------------------------------------- |
| boss_damage_multiplier        | 1             | float     | Multiplier, by which every `*_damage` variable in this segment will be multiplied. |
| boss_bullet_electron_damage   | 35            | float     | Electron bullet damage when shot by boss.                                          |
| boss_bullet_fire_damage       | 4             | float     | Fire bullet damage when shot by boss.                                              |
| boss_bullet_spike_damage      | 6             | float     | Spike bullet damage when shot by boss.                                             |
| boss_bullet_brainwave_damage  | 6             | float     | Brainwave bullet damage when shot by boss.                                         |
| boss_bullet_rocket_damage     | 12            | float     | Rocket bullet damage when shot by boss.                                            |
| boss_bullet_spikeball_damage  | 7             | float     | Spikeball bullet damage when shot by boss.                                         |
| boss_bullet_copper_damage     | 4             | float     | Copper bullet damage when shot by boss.                                            |
| boss_bullet_red_damage        | 5             | float     | Red bullet damage when shot by boss.                                               |
| boss_bullet_unstable_damage   | 6             | float     | Unstable bullet damage when shot by boss.                                          |
| boss_bullet_graviton_damage   | 3             | float     | Graviton bullet damage when shot by boss.                                          |
| boss_bullet_neutronium_damage | 15            | float     | Neutronium bullet damage when shot by boss.                                        |
| boss_starandus_geyzer_damage  | 4             | float     | Starandus geyzer damage.                                                           |
| boss_adecodron_sphere_damage  | 10            | float     | Adecodron body spikes damage.                                                      |
| boss_octogone_sphere_damage   | 8             | float     | Octogone body virtual spikes damage, when in octoquake state.                      |

### Boss battle settings

| Variable              | Default value | Data type | Description                                     |
| --------------------- | ------------- | --------- | ----------------------------------------------- |
| boss_battle_time      | 180           | integer   | Boss battle time, after which boss always wins. |
| boss_hp_protector_1   | 600           | float     | Protector health in phase 1.                    |
| boss_hp_protector_2   | 800           | float     | Protector health in phase 2.                    |
| boss_hp_protector_3   | 1000          | float     | Protector health in phase 3.                    |
| boss_hp_adecodron_1   | 600           | float     | Adecodron health in phase 1.                    |
| boss_hp_adecodron_2   | 800           | float     | Adecodron health in phase 2.                    |
| boss_hp_adecodron_3   | 1000          | float     | Adecodron health in phase 3.                    |
| boss_hp_octogone_1    | 600           | float     | Octogone health in phase 1.                     |
| boss_hp_octogone_2    | 800           | float     | Octogone health in phase 2.                     |
| boss_hp_octogone_3    | 1000          | float     | Octogone health in phase 3.                     |
| boss_hp_starandus_1   | 600           | float     | Starandus health in phase 1.                    |
| boss_hp_starandus_2   | 800           | float     | Starandus health in phase 2.                    |
| boss_hp_starandus_3   | 1000          | float     | Starandus health in phase 3.                    |
| boss_hp_degenerator_1 | 600           | float     | Degenerator health in phase 1.                  |
| boss_hp_degenerator_2 | 800           | float     | Degenerator health in phase 2.                  |
| boss_hp_degenerator_3 | 1000          | float     | Degenerator health in phase 3.                  |

### Treasure loottables

| Variable            | Default value                                                                                                                                                                  | Data type                           | Description                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- |
| treasure_loot       | 8-3-6-0-1249-54-2-4-1250-2499-55-1-2-2500-4299-57-1-2-4300-6099-10-4-8-6100-7599-5-4-8-7600-9099-48-1-2-9100-9849-33-1-3-9850-9999                                             | [treasure string](#treasure-string) | Determines normal treasure loottable. |
| dark_treasure_loot  | 66-3-6-0-1249-54-2-4-1250-2499-59-1-2-2500-4099-61-1-2-4100-5699-10-4-8-5700-7399-5-4-8-7400-9099-71-1-2-9100-9699-33-1-3-9700-9999                                            | [treasure string](#treasure-string) | Determines dark treasure loottable.   |
| metal_treasure_loot | 80-2-4-0-1249-63-1-1-1250-2499-24-30-60-2500-4699-39-20-40-4700-6499-5-5-10-6500-8099-48-3-6-8100-9179-85-1-1-9180-9199-79-1-2-9200-9799-33-1-1-9800-9929-33-2-2-9930-9999 + 3 | [treasure string](#treasure-string) | Determines metal treasure loottable.  |
| soft_treasure_loot  | 8-1-3-0-9999                                                                                                                                                                   | [treasure string](#treasure-string) | Determines soft treasure loottable.   |
| hard_treasure_loot  | 11-1-3-0-9999                                                                                                                                                                  | [treasure string](#treasure-string) | Determines hard treasure loottable.   |

## Treasure string

Treasure string is a format in which treasure data is stored. It consists of integers separated by '-' and virtually grouped by 5. Every group determines one item possible to obtain from a treasure.
For example:

```
8-3-6-0-2999-
10-2-5-3000-9899-
71-1-1-9900-9999
```

The first number is the item ID. You can find the list of all IDs [here](../GameData/ItemsAndObjects).
The second and third numbers determine amount of item that can be obtained. It will be a random number between these two.
The fourth and fifth numbers determine probability of selecting the item. Interpreter chooses one random number between 0 and 9999.
If this number is between fourth and fifth integer, then this item will be chosen.
In this example loottable looks like this:

| Item       | Amount | Chance |
| ---------- | ------ | ------ |
| stone      | 3-6    | 30%    |
| gold       | 2-5    | 69%    |
| max potion | 1      | 1%     |

:::note
If no items are chosen or there is an error interpreting treasure string, player will get 1 stone from a treasure.
:::

Treasure string can also feature character `+` with the [asteroid ID](../GameData/Asteroids) list separated by `-` (variant system is not included, only base IDs 0-15),
for example:

```
8-3-6-0-2999-
10-2-5-3000-9899-
71-1-1-9900-9999 + 0-3-10
```

This means, that every treasure base on stone, copper or diamond asteroid will have this treasure loot assigned. Normal treasures
will all work as usual, still having their normal loottable.
