const itemData = {
  NO_ITEM: {
    name: "[NO ITEM]",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Wooden_Sword: {
    name: "Wooden Sword",
    ap: 0.0,
    ad: 7.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Light_Slayer: {
    name: "Light Slayer",
    ap: 0.0,
    ad: 12.0,
    as: 0.1,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Shadow_Slayer: {
    name: "Shadow Slayer",
    ap: 0.0,
    ad: 0.0,
    as: 0.18,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "3.5% [MAGICAL] PER BASIC, 250% HP REGEN (PURE) [MAGICAL] over 2.5 secs"
  },
  Corrupted_Light_Slayer: {
    name: "Corrupted Light Slayer",
    ap: 0.0,
    ad: 10.0,
    as: 0.15,
    armor: 0.0,
    ls: 12.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "16% LS, 10 ad ALLIES"
  },
  Spiked_Mace: {
    name: "Spiked Mace",
    ap: 0.0,
    ad: 12.0,
    as: 0.18,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "INSTANT KILL BELOW 14%"
  },
  Katana: {
    name: "Katana",
    ap: 0.0,
    ad: 16.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Demon_Sabre: {
    name: "Demon Sabre",
    ap: 0.0,
    ad: 20.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "-1.3 ARMOR, 4 STACKS"
  },
  Corrupted_Katana: {
    name: "Corrupted Katana",
    ap: 0.0,
    ad: 21.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 20.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "INCREASE CRAMAGE 25%"
  },
  Divine_Katana: {
    name: "Divine Katana",
    ap: 0.0,
    ad: 20.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 15.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "SILENCE 80 PX RADIUS"
  },
  Sword_of_Iron_Warriors: {
    name: "Sword of Iron Warriors",
    ap: 0.0,
    ad: 10.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 75.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Sword_of_the_Frozen_Emperor: {
    name: "Sword of the Frozen Emperor",
    ap: 0.0,
    ad: 15.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "INSTANT FROST CURSE, 5 SEC CD, REDUCTION 40%"
  },
  Divine_Sword: {
    name: "Divine Sword",
    ap: 0.0,
    ad: 12.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 2.0,
    ms: 0.0,
    hp: 110.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "MR +10, IMMUNITY TO CC, CLEANSE"
  },
  Wooden_Bow: {
    name: "Wooden Bow",
    ap: 0.0,
    ad: 0.0,
    as: 0.12,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Reckless_Longbow: {
    name: "Reckless Longbow",
    ap: 0.0,
    ad: 0.0,
    as: 0.3,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Berserkers_Bow: {
    name: "Berserkers Bow",
    ap: 0.0,
    ad: 0.0,
    as: 0.35,
    armor: 0.0,
    ls: 18.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 80.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "INCREASE AS 8%, 3S, 5 STACKS"
  },
  Nimble_Longbow: {
    name: "Nimble Longbow",
    ap: 0.0,
    ad: 0.0,
    as: 0.45,
    armor: 0.0,
    ls: 0.0,
    crate: 15.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "AOE RadIUS, PROJECTILE RANGE +10 PX, PROJECTILE SPEED +35%"
  },
  Hunters_Longbow: {
    name: "Hunters Longbow",
    ap: 0.0,
    ad: 0.0,
    as: 0.42,
    armor: 0.0,
    ls: 0.0,
    crate: 15.0,
    ah: 0.0,
    ms: 3.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "HUNTER'S FOCUS, +20 MS, SLOW IMMUNITY, 3S"
  },
  Poison_Bow: {
    name: "Poison Bow",
    ap: 0.0,
    ad: 4.0,
    as: 0.15,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "POISON, -0.5 MS, 4.5 MAGIC DPS, 2 SECS, 6 STACKS"
  },
  Magical_Bow: {
    name: "Magical Bow",
    ap: 12.0,
    ad: 9.0,
    as: 0.2,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 3.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "[MAGICAL] HIT, +10 MS, 1.5 SECS, 1 STACK POISON. [BASIC] SAME AS POISON BOW."
  },
  Corrupted_Longbow: {
    name: "Corrupted Longbow",
    ap: 0.0,
    ad: 10.0,
    as: 0.25,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "[BASIC] HIT, POISON, 6 STACKS, 6 MAGIC DPS, 3 SECS. [ACTIVE] +65% AS, +12 MS, SILENCE, 4.0 SECONDS"
  },
  Kirins_Bow: {
    name: "Kirins Bow",
    ap: 0.0,
    ad: 4.0,
    as: 0.35,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "[BASIC] HIT, SAME AS POISON BOW, EXCEPT: 3 HITS = 6 STACKS POISON, -30% MR, 10 MAGIC DAMAGE EXPLOSION."
  },
  Buckler: {
    name: "Buckler",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 2.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Enduring_Shield: {
    name: "Enduring Shield",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 2.0,
    passive: ""
  },
  Garuns_Defender: {
    name: "Garuns Defender",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 5.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 2.0,
    passive: "AFTER 1S, 50 NORMAL DAMAGE, 0.8 SEC STUN"
  },
  Vampiric_Shield: {
    name: "Vampiric Shield",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 4.0,
    passive: "PLAYER DAMAGE DROPS HP BELOW 50, CLEANSE NEGATIVE, +55 HPR, 5 SECS, SLOW IMMUNITY"
  },
  Buckler_of_Iron_Warriors: {
    name: "Buckler of Iron Warriors",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 75.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Plate_Shield: {
    name: "Plate Shield",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 5.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "SHOCKWAVE, 90 NORMAL DAMAGE, -30% AS -30 MS, 3 SECS"
  },
  Spike_Shield: {
    name: "Spike Shield",
    ap: 0.0,
    ad: 10.0,
    as: 0.0,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "2.5 SECS, REFLECT 125% DAMAGE, SAME TYPE AS RECEIVED"
  },
  Enchanted_Shield: {
    name: "Enchanted Shield",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 50.0,
    mr: 3.0,
    hpr: 0.0,
    passive: ""
  },
  Kirins_Defender: {
    name: "Kirins Defender",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 75.0,
    mr: 4.0,
    hpr: 0.0,
    passive: "BLOCK CC, +10 MR, 3 SECS"
  },
  Shield_of_Defiance: {
    name: "Shield of Defiance",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 75.0,
    mr: 4.0,
    hpr: 0.0,
    passive: "MR, HPR +3, ALLIES"
  },
  Divine_Shield: {
    name: "Divine Shield",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 75.0,
    mr: 3.0,
    hpr: 0.0,
    passive: "CLEANSE, +25 HPR, 5 SECS"
  },
  Novice_Staff: {
    name: "Novice Staff",
    ap: 9.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Wizard_Staff: {
    name: "Wizard Staff",
    ap: 18.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Kirins_Staff: {
    name: "Kirins Staff",
    ap: 25.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "MR -45%, 4 SECS"
  },
  Vampiric_Rod: {
    name: "Vampiric Rod",
    ap: 19.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 2.0,
    passive: "DEALS EXTRA (24 + [30% AP]), HEALS DOUBLE"
  },
  Corrupted_Staff: {
    name: "Corrupted Staff",
    ap: 25.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "TOTAL AP +30%"
  },
  Staff_of_Iron_Warriors: {
    name: "Staff of Iron Warriors",
    ap: 10.0,
    ad: 10.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "NEXT BASIC: EXTRA (15 + [40% AP])"
  },
  Magic_Harpoon: {
    name: "Magic Harpoon",
    ap: 18.0,
    ad: 15.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "NEXT BASIC: EXTRA (30 [+60% AP])"
  },
  Orchid_of_Malevolence: {
    name: "Orchid of Malevolence",
    ap: 15.0,
    ad: 15.0,
    as: 0.15,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "T2 HARPOON EFFECT + 3.0 SEC SILENCE, EXTRA 40% DAMAGE DEALT DURING SILENCE AS MAGIC DAMAGE"
  },
  Rod_of_Nature: {
    name: "Rod of Nature",
    ap: 12.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 50.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Staff_of_the_Frozen_Empress: {
    name: "Staff of the Frozen Empress",
    ap: 16.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 80.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "ABILITY HIT: STACK OF FROST. 2 STACKS = -15 MS, -55% HPR, 3 SECS"
  },
  Burning_Rod: {
    name: "Burning Rod",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 70.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "3.6% DOT, 2 SECS"
  },
  Divine_Staff: {
    name: "Divine Staff",
    ap: 14.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 2.0,
    ms: 0.0,
    hp: 70.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "175 HEALTH RESTORED ALLIES, 14 MS, 3 SECS"
  },
  Wooden_Ring: {
    name: "Wooden Ring",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 2.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Ring_of_Power: {
    name: "Ring of Power",
    ap: 9.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 2.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Chronos_Ring: {
    name: "Chronos Ring",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 4.0,
    ms: 0.0,
    hp: 50.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "ABILITY CD RESET ON KILL/ASSIST. ABILITY CAST = CD -0.7 S."
  },
  Plague_Ring: {
    name: "Plague Ring",
    ap: 20.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 0.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "EXTEND NEGATIVE EFFECTS APPLIED BY ABILITIES' DURATION 30%"
  },
  Ring_of_the_Frozen_Empress: {
    name: "Ring of the Frozen Empress",
    ap: 15.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 50.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "70 MAGIC DAMAGE, APPLIES FRIGID CURSE IF NOT ALREadY AFFECTED, IF ALREadY EFFECTED, FREEZES FOR 1.2 SECS"
  },
  Ring_of_Time: {
    name: "Ring of Time",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 4.0,
    ms: 0.0,
    hp: 50.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Corrupted_Ring: {
    name: "Corrupted Ring",
    ap: 18.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 4.0,
    ms: 0.0,
    hp: 50.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "AOE RADIUS, PROJECTILE RANGE +10 PX, PROJECTILE SPEED +35%"
  },
  Tenacity_Ring: {
    name: "Tenacity Ring",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 4.0,
    ms: 3.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "REDUCE ALL NEGATIVE EFFECTS DURATION BY 30%"
  },
  Demonic_Ring: {
    name: "Demonic Ring",
    ap: 0.0,
    ad: 0.0,
    as: 0.20,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 5.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "[PHYSICAL] DECREASES ARMOR BY 40%. ALSO, GAIN STACKS OF DEMONIC POWER. PLAYER KILL = 5 STACKS, ASSIST = 2 STACKS, LAST HIT = 1 STACK, EACH STACK INCREASES ad BY 1. MAX STACKS: 20"
  },
  Divine_Ring: {
    name: "Divine Ring",
    ap: 16.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 70.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "DASHES FORWARD. PASSIVE: INCREASES ALL HEALING BY 30%"
  },
  Charming_Pendant: {
    name: "Charming Pendant",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 2.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Garuns_Charm: {
    name: "Garuns Charm",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 2.0,
    passive: "WARD, EVERY 4 SECS, +1 STACK OF GARUN PROTECTION. EACH STACK: +2 ARMOR. PASSIVE: +2.5 ARMOR TO ALL ALLIES"
  },
  Wizard_Charm: {
    name: "Wizard Charm",
    ap: 15.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "ON ABILITY HIT, APPLY WIZARD'S CURSE, PREVENT ALL HEALING AND HPR, REMOVE ALL POSITIVE EFFECTS. WARD."
  },
  Corrupted_Locket: {
    name: "Corrupted Locket",
    ap: 0.0,
    ad: 10.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "EVERY 6 SECONDS, +1 STACK OF CORRUPTED BLESSING. EACH STACK: GUARANTEED CRIT NEXT PHYSICAL, STACKS UP TO 2 TIMES. WARD"
  },
  Shirt: {
    name: "Shirt",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 70.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Apprentice_Armor: {
    name: "Apprentice Armor",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 100.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Void_Armor: {
    name: "Void Armor",
    ap: 0.0,
    ad: 0.0,
    as: 0.26,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 150.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "8 SECS INVIS. WHILE INVIS, +10 MS. IF ABILITY OR ITEM IS USED WHILE INVIS, INVIS WEARS OFF, +20 ad FOR SHORT DURATION."
  },
  Armor_of_the_Frozen_Emperor: {
    name: "Armor of the Frozen Emperor",
    ap: 0.0,
    ad: 0.0,
    as: 0.26,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 150.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "AURA, -30% ALL HPR, LIFESTEAL, HEALS AND ATTACK SPEED"
  },
  Armor_of_Iron_Warriors: {
    name: "Armor of Iron Warriors",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 150.0,
    mr: 0.0,
    hpr: 0.0,
    passive: ""
  },
  Plate_Armor: {
    name: "Plate Armor",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 0.0,
    ms: 0.0,
    hp: 230.0,
    mr: 0.0,
    hpr: 3.0,
    passive: "AMPLIFY ALL HEALING AND REGEN BY 35%"
  },
  Titans_Armor: {
    name: "Titans Armor",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 3.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 200.0,
    mr: 0.0,
    hpr: 0.0,
    passive: "IMMUNITY TO DAMAGE FOR 2 SECONDS. NO MOVEMENT OR ABILITY OR ITEM USAGE. +80 HPR REGEN DURING IMMUNITY. CLEANSES NEGATIVE EFFECTS."
  },
  Chest_of_Malevolence: {
    name: "Chest of Malevolence",
    ap: 0.0,
    ad: 0.0,
    as: 0.0,
    armor: 0.0,
    ls: 0.0,
    crate: 0.0,
    ah: 3.0,
    ms: 0.0,
    hp: 200.0,
    mr: 3.0,
    hpr: 0.0,
    passive: "ON GETTING HIT BY MAGIC ABILITY: APPLY STACK OF MALEVOLENT CURSE TO CASTER. EACH STACK: -2.5 MS, -4% AP. MAX STACKS: 5"
  }
};

export default itemData;
