const featData = {
    "nodes": [
        {
            "id": "Acrobatic Spellcaster",
            "group": "Combat",
            "prereqs": "Combat Casting, Skill Focus (Acrobatics)"
        },
        {
            "id": "Adder Strike",
            "group": "Combat",
            "prereqs": "Poison use class feature, Improved Unarmed Strike, Craft (alchemy) 1 rank"
        },
        {
            "id": "Pinpoint Poisoner",
            "group": "Combat",
            "prereqs": "Adder Strike, Two-Weapon Fighting or flurry of blows class feature, Craft (alchemy) 6 ranks"
        },
        {
            "id": "Advanced Armor Training",
            "group": "Combat",
            "prereqs": "Armor training class feature, fighter 3."
        },
        {
            "id": "Advanced Defensive Combat Training",
            "group": "Combat",
            "prereqs": "Defensive Combat Training"
        },
        {
            "id": "Advanced Weapon Training",
            "group": "Combat",
            "prereqs": "Fighter level 5th, weapon training class feature"
        },
        {
            "id": "Agile Maiden",
            "group": "Combat",
            "prereqs": "Str 13; Dex 13; Endurance or armor training class feature; proficiency with heavy armor."
        },
        {
            "id": "Agile Maneuvers",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Alchemical Strike",
            "group": "Combat",
            "prereqs": "Throw Anything, BAB +6"
        },
        {
            "id": "All-Consuming Swing",
            "group": "Combat",
            "prereqs": "Str 13, Power Attack, Cleave, Vital Strike, BAB +8"
        },
        {
            "id": "Amateur Gunslinger",
            "group": "Combat",
            "prereqs": "No levels in a class with grit class feature"
        },
        {
            "id": "Amateur Swashbuckler",
            "group": "Combat",
            "prereqs": "No levels in a class that has panache"
        },
        {
            "id": "Ambush Awareness",
            "group": "Combat",
            "prereqs": "Alertness"
        },
        {
            "id": "Ambush Sense",
            "group": "Combat",
            "prereqs": "Int 13, trap sense class feature"
        },
        {
            "id": "Ambush Squad",
            "group": ["Combat", "Teamwork"],
            "prereqs": "BAB +1, kobold"
        },
        {
            "id": "Ammo Drop",
            "group": "Combat",
            "prereqs": "Sleight of Hand 1 rank, proficient with sling"
        },
        {
            "id": "Anatomical Savant",
            "group": "Combat",
            "prereqs": "Weapon Focus, base attack bonus +12"
        },
        {
            "id": "Ancestral Enmity",
            "group": "Combat",
            "prereqs": "Giant subtype"
        },
        {
            "id": "Ancestral Weapon Mastery",
            "group": "Combat",
            "prereqs": "BAB +1, weapon familiarity racial trait"
        },
        {
            "id": "Animal Ferocity",
            "group": "Combat",
            "prereqs": "Base attack bonus +3, ferocity racial ability"
        },
        {
            "id": "Ankle Biter",
            "group": "Combat",
            "prereqs": "Goblin, Escape Artist 1 rank"
        },
        {
            "id": "Anticipate Dodge",
            "group": "Combat",
            "prereqs": "Dodge, Mobility, BAB +7, brawler 4, or monk 4"
        },
        {
            "id": "Aquatic Combatant",
            "group": "Combat",
            "prereqs": "Swim 1 rank"
        },
        {
            "id": "Arc Slinger",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, proficient with sling or halfling sling staff"
        },
        {
            "id": "Arcane Armor Mastery",
            "group": "Combat",
            "prereqs": "Arcane Armor Training, Armor Proficiency, Medium, CL 7"
        },
        {
            "id": "Arcane Armor Training",
            "group": "Combat",
            "prereqs": "Armor Proficiency, Light, CL 3"
        },
        {
            "id": "Arcane Strike",
            "group": "Combat",
            "prereqs": "Ability to cast arcane spells"
        },
        {
            "id": "Archon Style",
            "group": ["Combat", "Style"],
            "prereqs": "Combat Expertise, Combat Reflexes, BAB +2 or monk 2"
        },
        {
            "id": "Archon Diversion",
            "group": "Combat",
            "prereqs": "Archon Style, Combat Expertise, Combat Reflexes, BAB +4 or monk 4"
        },
        {
            "id": "Archon Justice",
            "group": "Combat",
            "prereqs": "Archon Diversion, Archon Style, Combat Expertise, Combat Reflexes, BAB +8 or monk 7"
        },
        {
            "id": "Arcing Weapon",
            "group": "Combat",
            "prereqs": "Diverse training class feature"
        },
        {
            "id": "Armor Adept",
            "group": "Combat",
            "prereqs": "–"
        },
        {
            "id": "Armor Focus",
            "group": "Combat",
            "prereqs": "BAB +1, proficiency with selected armor."
        },
        {
            "id": "Improved Armor Focus",
            "group": "Combat",
            "prereqs": "Armor Focus, BAB +6, proficiency with selected armor."
        },
        {
            "id": "Armor Proficiency, Light",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Armor Proficiency, Medium",
            "group": "Combat",
            "prereqs": "Armor Proficiency, Light"
        },
        {
            "id": "Armor Proficiency, Heavy",
            "group": "Combat",
            "prereqs": "Armor Proficiency, Medium"
        },
        {
            "id": "Armor Trick",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Armored Athlete",
            "group": "Combat",
            "prereqs": "Light armor proficiency, medium armor proficiency, 3 ranks in any Dex– or Str-based skill"
        },
        {
            "id": "Artful Dodge",
            "group": "Combat",
            "prereqs": "Int 13"
        },
        {
            "id": "Artillery Team",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Proficiency with light crossbow, heavy crossbow, or musket; size Small or Medium"
        },
        {
            "id": "Artistry",
            "group": "Combat",
            "prereqs": "Exotic Weapon Proficiency (dueling sword), Weapon Finesse, base attack bonus +2"
        },
        {
            "id": "Ascetic Style",
            "group": "Combat",
            "prereqs": "Weapon Focus with the chosen melee weapon; base attack bonus +1 or monk level 1st"
        },
        {
            "id": "Ascetic Form",
            "group": "Combat",
            "prereqs": "Ascetic Style; Weapon Focus with the chosen melee weapon; base attack bonus +5 or monk level 5th"
        },
        {
            "id": "Ascetic Strike",
            "group": "Combat",
            "prereqs": "Ascetic Form; Ascetic Style; Weapon Focus with the chosen weapon; base attack bonus +7 or monk level 7th"
        },
        {
            "id": "Awe-Inspiring Smash",
            "group": "Combat",
            "prereqs": "Str 15, Power Attack, base attack bonus +3"
        },
        {
            "id": "Awesome Blow",
            "group": "Combat",
            "prereqs": "Str 25, Power Attack, Improved Bull Rush, size Large or larger"
        },
        {
            "id": "Improved Awesome Blow",
            "group": "Combat",
            "prereqs": "Str 13, Awesome Blow or awesome blow class feature, Power Attack"
        },
        {
            "id": "Awesome Charge",
            "group": "Combat",
            "prereqs": "Str 25, Awesome Blow, Improved Bull Rush, Power Attack"
        },
        {
            "id": "Awesome Throw",
            "group": "Combat",
            "prereqs": "Str 25, Throw Anything or rock throwing, Improved Bull Rush, size Large or larger"
        },
        {
            "id": "Banner of Doom",
            "group": ["Combat","Racial"],
            "prereqs": "BAB +8, banner class feature, tiefling"
        },
        {
            "id": "Barrage of Styles",
            "group": ["Combat", "Teamwork","Racial"],
            "prereqs": "BAB +1, human"
        },
        {
            "id": "Barroom Brawler",
            "group": "Combat",
            "prereqs": "BAB +4"
        },
        {
            "id": "Bashing Finish",
            "group": "Combat",
            "prereqs": "Shield Master, Two-Weapon Fighting, BAB +11"
        },
        {
            "id": "Battle Cry",
            "group": "Combat",
            "prereqs": "Cha 13, BAB +5 or Perform (act, oratory, or sing) 5 ranks"
        },
        {
            "id": "Bear’s Balance",
            "group": "Combat",
            "prereqs": "Iron Will, rage class feature"
        },
        {
            "id": "Beast Hunter",
            "group": "Combat",
            "prereqs": "Base attack bonus +1, Knowledge (nature) or Survival 1 rank"
        },
        {
            "id": "Improved Beast Hunter",
            "group": "Combat",
            "prereqs": "Beast Hunter; BAB +3; Knowledge (nature) or Survival 3 ranks"
        },
        {
            "id": "Greater Beast Hunter",
            "group": "Combat",
            "prereqs": "Beast Hunter; Improved Beast Hunter; BAB +6; Knowledge (nature) or Survival 6 ranks"
        },
        {
            "id": "Befuddling Strike",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Betrayal Sense",
            "group": "Combat",
            "prereqs": "Wis 13, rogue 3, trap sense class feature"
        },
        {
            "id": "Betraying Blow",
            "group": "Combat",
            "prereqs": "Solo Maneuvers, BAB +8"
        },
        {
            "id": "Binding Throw",
            "group": "Combat",
            "prereqs": "Improved Grapple, Improved Trip, Ki Throw"
        },
        {
            "id": "Blade Binder",
            "group": "Combat",
            "prereqs": "BAB +4, proficient with khopesh or temple sword"
        },
        {
            "id": "Blades Above and Below",
            "group": ["Combat", "Teamwork"],
            "prereqs": "BAB +6"
        },
        {
            "id": "Blazing Aura",
            "group": "Combat",
            "prereqs": "Inner Flame, Scorching Weapons, character level 13, Ifrit"
        },
        {
            "id": "Bleeding Attack",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike"
        },
        {
            "id": "Blind-Fight",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Blind-Fight, Improved",
            "group": "Combat",
            "prereqs": "Perception 10 ranks, Blind-Fight"
        },
        {
            "id": "Blind-Fight, Greater",
            "group": "Combat",
            "prereqs": "Perception 15 ranks, Blind-Fight, Improved"
        },
        {
            "id": "Blinded Blade Style",
            "group": "Combat",
            "prereqs": "Blind-Fight, Perception 5 ranks"
        },
        {
            "id": "Blinded Competence",
            "group": "Combat",
            "prereqs": "Blinded Blade Style, Blind-Fight, Improved Blind-Fight, Perception 10 ranks"
        },
        {
            "id": "Blinded Master",
            "group": "Combat",
            "prereqs": "Blind-Fight, Blinded Blade Precision (Blinded Competence?), Blinded Blade Style, Greater Blind-Fight, Improved Blind-Fight, Perception 15 ranks"
        },
        {
            "id": "Blinding Flash",
            "group": "Combat",
            "prereqs": "Dex 13, Combat Expertise, special (see text)"
        },
        {
            "id": "Blinding Light",
            "group": ["Combat","Racial"],
            "prereqs": "Inner Light, aasimar, daylight spell-like ability."
        },
        {
            "id": "Blinding Sneak Attack",
            "group": ["Combat","Racial"],
            "prereqs": "BAB +5, darkness spell-like ability, sneak attack class feature, tiefling"
        },
        {
            "id": "Blistering Feint",
            "group": "Combat",
            "prereqs": "Combat Expertise, Improved Feint, Ifrit"
        },
        {
            "id": "Blood Beak",
            "group": "Combat",
            "prereqs": "BAB +5, natural weapon racial trait, tengu"
        },
        {
            "id": "Blooded Arcane Strike",
            "group": "Combat",
            "prereqs": "Arcane Strike, bloodrage class feature"
        },
        {
            "id": "Blood Feast",
            "group": "Combat",
            "prereqs": "Bite attack"
        },
        {
            "id": "Blood Spurt",
            "group": "Combat",
            "prereqs": "Base attack bonus +2, susceptibility to bleed"
        },
        {
            "id": "Bloody Assault",
            "group": "Combat",
            "prereqs": "Power Attack, BAB +6"
        },
        {
            "id": "Bloody Vengeance",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Bludgeoner",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Blundering Defense",
            "group": "Combat",
            "prereqs": "Cautious Fighter, halfling"
        },
        {
            "id": "Bodyguard",
            "group": "Combat",
            "prereqs": "Combat Reflexes"
        },
        {
            "id": "Body Shield",
            "group": "Combat",
            "prereqs": "Improved Grapple, BAB +6"
        },
        {
            "id": "Branch Pounce",
            "group": "Combat",
            "prereqs": "Climb 3 ranks, Stealth 3 ranks"
        },
        {
            "id": "Bounding Hammer",
            "group": "Combat",
            "prereqs": "Proficiency with hammer, BAB +6"
        },
        {
            "id": "Break Guard",
            "group": "Combat",
            "prereqs": "Improved Disarm, Two-Weapon Fighting"
        },
        {
            "id": "Brutal Coup de Grace",
            "group": "Combat",
            "prereqs": "Dazzling Display, Weapon Focus, base attack bonus +5, proficiency with the selected weapon"
        },
        {
            "id": "Brutal Grappler",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Half-orc or orc"
        },
        {
            "id": "Brute Style",
            "group": "Combat",
            "prereqs": "Str 15, Int 13, Combat Reflexes, Improved Overrun, Improved Trip, Improved Unarmed Strike, Vicious Stomp, base attack bonus +6"
        },
        {
            "id": "Brute Stomp",
            "group": "Combat",
            "prereqs": "Str 19, Brute Style, base attack bonus +8"
        },
        {
            "id": "Brute Assault",
            "group": "Combat",
            "prereqs": "Str 23, Brute Stomp, Brute Style, base attack bonus +10"
        },
        {
            "id": "Bulette Charge Style",
            "group": "Combat",
            "prereqs": "Str 13, Improved Overrun, Power Attack, proficiency with heavy armor."
        },
        {
            "id": "Bulette Rampage",
            "group": "Combat",
            "prereqs": "Str 15, Bulette Charge Style, Bulette Leap, Improved Overrun, Power Attack, proficiency with heavy armor."
        },
        {
            "id": "Bulette Leap",
            "group": "Combat",
            "prereqs": "Str 15, Bulette Charge Style, Improved Overrun, Power Attack, proficiency with heavy armor."
        },
        {
            "id": "Bull Rush, Improved",
            "group": "Combat",
            "prereqs": "Power Attack"
        },
        {
            "id": "Bull Rush, Greater",
            "group": "Combat",
            "prereqs": "Improved Bull Rush, BAB +6"
        },
        {
            "id": "Bull Rush Strike",
            "group": "Combat",
            "prereqs": "Improved Bull Rush, BAB +9"
        },
        {
            "id": "Bullseye Shot",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, Precise Shot, BAB +5"
        },
        {
            "id": "Bullying Blow",
            "group": "Combat",
            "prereqs": "Intimidate 1 rank, orc"
        },
        {
            "id": "Burn it Down!",
            "group": ["Combat", "Teamwork","Racial"],
            "prereqs": "BAB +1, goblin"
        },
        {
            "id": "But a Scratch",
            "group": "Combat",
            "prereqs": "Cha 13, Bluff 4 ranks"
        },
        {
            "id": "Call Out",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Canny Tumble",
            "group": "Combat",
            "prereqs": "Dodge, Mobility, Acrobatics 5 ranks"
        },
        {
            "id": "Caster’s Champion",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Cat and Mouse",
            "group": "Combat",
            "prereqs": "Bluff 5 ranks, Sense Motive 5 ranks, opportune parry and riposte deed"
        },
        {
            "id": "Catch Off-Guard",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Cautious Fighter",
            "group": "Combat",
            "prereqs": "Halfling"
        },
        {
            "id": "Chairbreaker",
            "group": "Combat",
            "prereqs": "Catch Off-Guard, BAB +1"
        },
        {
            "id": "Channel Smite",
            "group": "Combat",
            "prereqs": "Channel energy class feature"
        },
        {
            "id": "Channeling Force",
            "group": "Combat",
            "prereqs": "Ability to cast one force spell, channel energy class feature"
        },
        {
            "id": "Charge of the Righteous",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Charge Through",
            "group": "Combat",
            "prereqs": "Improved Overrun, BAB +1"
        },
        {
            "id": "Charging Hurler",
            "group": "Combat",
            "prereqs": "Point-Blank Shot"
        },
        {
            "id": "Improved Charging Hurler",
            "group": "Combat",
            "prereqs": "Charging Hurler"
        },
        {
            "id": "Choir of Blades",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Chokehold",
            "group": "Combat",
            "prereqs": "Improved Grapple, BAB +6 or monk 5"
        },
        {
            "id": "Circling Mongoose",
            "group": "Combat",
            "prereqs": "Dex 13, Dodge, Mobility, Spring Attack, BAB +6"
        },
        {
            "id": "Circuitous Shot",
            "group": "Combat",
            "prereqs": "Dex 19, Blind-Fight, Improved Precise Shot, Precise Shot, Point-Blank Shot, BAB +11"
        },
        {
            "id": "Clambering Escape",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Reposition, After evading, reposition a foe into a blast evasion class feature"
        },
        {
            "id": "Claw Pounce",
            "group": "Combat",
            "prereqs": "Str 13, Dex 15, Nimble Striker, BAB +10, catfolk, cat’s claws racial trait or Aspect of the Beast (claws of the beast manifestation)"
        },
        {
            "id": "Cleave",
            "group": "Combat",
            "prereqs": "Power Attack"
        },
        {
            "id": "Cleave, Great",
            "group": "Combat",
            "prereqs": "Cleave, BAB +4"
        },
        {
            "id": "Cleaving Finish",
            "group": "Combat",
            "prereqs": "Cleave"
        },
        {
            "id": "Improved Cleaving Finish",
            "group": "Combat",
            "prereqs": "Cleaving Finish, Great Cleave, BAB +6"
        },
        {
            "id": "Cleave Through",
            "group": ["Combat","Racial"],
            "prereqs": "Str 13, Cleave, Power Attack, BAB +11, dwarf"
        },
        {
            "id": "Clinging Climber",
            "group": "Combat",
            "prereqs": "Str 13, Climb 3 ranks"
        },
        {
            "id": "Cloak and Dagger Style",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Dirty Trick, Vital Strike, Weapon Focus with the chosen weapon, BAB +6."
        },
        {
            "id": "Cloak and Dagger Subterfuge",
            "group": "Combat",
            "prereqs": "Int 13, Cloak and Dagger Style, Combat Expertise, Improved Dirty Trick, Weapon Focus with the chosen weapon, BAB +11"
        },
        {
            "id": "Cloak and Dagger Tactics",
            "group": "Combat",
            "prereqs": "Int 13, Cloak and Dagger Style, Cloak and Dagger Subterfuge, Combat Expertise, Improved Dirty Trick, Vital Strike, Weapon Focus with the chosen weapon, BAB +16"
        },
        {
            "id": "Close-Quarters Thrower",
            "group": "Combat",
            "prereqs": "Dodge, Weapon Focus with selected thrown weapon"
        },
        {
            "id": "Cloven Helm",
            "group": ["Combat","Racial"],
            "prereqs": "Dented Helm, Hard-Headed, BAB +11, dwarf"
        },
        {
            "id": "Clustered Shots",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, Precise Shot, BAB +6"
        },
        {
            "id": "Cockatrice Strike",
            "group": "Combat",
            "prereqs": "Medusa’s Wrath, BAB +14"
        },
        {
            "id": "Combat Expertise",
            "group": "Combat",
            "prereqs": "Int 13"
        },
        {
            "id": "Combat Medic",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Heal 5 ranks"
        },
        {
            "id": "Combat Patrol",
            "group": "Combat",
            "prereqs": "Combat Reflexes, Mobility, BAB +5"
        },
        {
            "id": "Combat Reflexes",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Combat Style Master",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, two or more style feats, BAB +6 or monk 5"
        },
        {
            "id": "Compounded Pain",
            "group": "Combat",
            "prereqs": "Mesmerist 13, painful stare class feature."
        },
        {
            "id": "Concentrated Fire",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Point-Blank Shot, elf, weapon familiarity racial trait"
        },
        {
            "id": "Concentrated Splash",
            "group": "Combat",
            "prereqs": "Precise Shot or Throw Anything"
        },
        {
            "id": "Consume Essence",
            "group": "Combat",
            "prereqs": "Base attack bonus +6; swallow whole universal monster ability; evil alignment; magical beast, outsider, or undead type"
        },
        {
            "id": "Coordinated Defense",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Coordinated Distraction",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Coordinated Maneuvers",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Coordinated Shot",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Point-Blank Shot"
        },
        {
            "id": "Cornugon Shield",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Cornugon Smash",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Cornugon Stun",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Cornugon Trip",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Counterpunch",
            "group": "Combat",
            "prereqs": "Dex 18, Combat Reflexes, Improved Unarmed Strike, Weapon Focus (unarmed strike), BAB +16 or brawler 12"
        },
        {
            "id": "Counter Reflexes",
            "group": "Combat",
            "prereqs": "Anticipate Dodge"
        },
        {
            "id": "Covering Defense",
            "group": "Combat",
            "prereqs": "Shield Focus, BAB +6"
        },
        {
            "id": "Covering Fire",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Point-Blank Shot"
        },
        {
            "id": "Crane Style",
            "group": "Combat",
            "prereqs": "Dodge, Improved Unarmed Strike, BAB +2 or monk 1"
        },
        {
            "id": "Crane Wing",
            "group": "Combat",
            "prereqs": "Crane Style, Dodge, Improved Unarmed Strike, BAB +5 or monk 5"
        },
        {
            "id": "Crane Riposte",
            "group": "Combat",
            "prereqs": "Crane Wing, BAB +8 or monk 7"
        },
        {
            "id": "Critical Focus",
            "group": "Combat",
            "prereqs": "BAB +9"
        },
        {
            "id": "Critical, Banishing",
            "group": "Combat",
            "prereqs": "Critical Focus, ability to cast dismissal or banishment, CL 9"
        },
        {
            "id": "Critical, Banishing",
            "group": "Combat",
            "prereqs": "Arcane Strike or Disruptive; Spellcraft 8 ranks; arcane pool class feature."
        },
        {
            "id": "Critical, Bleeding",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +11"
        },
        {
            "id": "Critical, Blinding",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +15"
        },
        {
            "id": "Critical, Censoring",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +15."
        },
        {
            "id": "Critical, Crippling",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +13"
        },
        {
            "id": "Critical, Deafening",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +13"
        },
        {
            "id": "Critical, Exhausting",
            "group": "Combat",
            "prereqs": "Tiring Critical, BAB +15"
        },
        {
            "id": "Critical, Sickening",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +11"
        },
        {
            "id": "Critical, Staggering",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +13"
        },
        {
            "id": "Critical, Stunning",
            "group": "Combat",
            "prereqs": "Staggering Critical, BAB +17"
        },
        {
            "id": "Critical, Tiring",
            "group": "Combat",
            "prereqs": "Critical Focus, BAB +13"
        },
        {
            "id": "Critical, Improved",
            "group": "Combat",
            "prereqs": "Proficient with weapon, bab +8"
        },
        {
            "id": "Critical Mastery",
            "group": "Combat",
            "prereqs": "Any two critical feats, fighter 14"
        },
        {
            "id": "Critical Versatility",
            "group": "Combat",
            "prereqs": "Fighter 11, human."
        },
        {
            "id": "Crossbow Mastery",
            "group": "Combat",
            "prereqs": "Dex 15, Rapid Reload, Rapid Shot"
        },
        {
            "id": "Crowd of Bullies",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Half-orc"
        },
        {
            "id": "Crowd Control",
            "group": ["Combat", "Teamwork"],
            "prereqs": "BAB +3"
        },
        {
            "id": "Crusader’s Fist",
            "group": "Combat",
            "prereqs": "Lay on hands or touch of corruption class feature, Improved Unarmed Strike, BAB +6"
        },
        {
            "id": "Crushing Blow",
            "group": "Combat",
            "prereqs": "Stunning Fist"
        },
        {
            "id": "Cudgeler Style",
            "group": "Combat",
            "prereqs": "Bludgeoner"
        },
        {
            "id": "Cudgeler Sweep",
            "group": "Combat",
            "prereqs": "Bludgeoner, Cudgeler Style, BAB +5 or monk 5"
        },
        {
            "id": "Cudgeler Takedown",
            "group": "Combat",
            "prereqs": "Bludgeoner, Cudgeler Style, Cudgeler Sweep, BAB +9 or monk 9"
        },
        {
            "id": "Cunning Intuition",
            "group": "Combat",
            "prereqs": "Ready for Anything, BAB +13 or rogue 13, Sense Motive 13 ranks"
        },
        {
            "id": "Dance of Chains",
            "group": "Combat",
            "prereqs": "Dex 15, Chain Mastery, Exotic Weapon Proficiency (spiked chain), Weapon Finesse, Perform (dance) 1 rank"
        },
        {
            "id": "Darting Viper",
            "group": "Combat",
            "prereqs": "BAB +4, proficiency with the dwarven dorn-dergar"
        },
        {
            "id": "Dastardly Finish",
            "group": "Combat",
            "prereqs": "Sneak attack +5d6"
        },
        {
            "id": "Dazing Assault",
            "group": "Combat",
            "prereqs": "Power Attack, BAB +11"
        },
        {
            "id": "Dazing Fist",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved Unarmed Strike, BAB +4"
        },
        {
            "id": "Dazzling Display",
            "group": "Combat",
            "prereqs": "Weapon Focus"
        },
        {
            "id": "Deadly Aim",
            "group": "Combat",
            "prereqs": "Dex 13, BAB +1"
        },
        {
            "id": "Deadhand Style",
            "group": "Combat",
            "prereqs": "Wis 15, Improved Unarmed Strike, Knowledge (religion)"
        },
        {
            "id": "Deadhand Initiate",
            "group": "Combat",
            "prereqs": "Wis 19, Deadhand Style, Knowledge (religion) 6 ranks"
        },
        {
            "id": "Deadhand Master",
            "group": "Combat",
            "prereqs": "Wis 23, Deadhand Initiate, Deadhand Style, Knowledge"
        },
        {
            "id": "Deadly Finish",
            "group": "Combat",
            "prereqs": "BAB +11"
        },
        {
            "id": "Deadly Grappler",
            "group": "Combat",
            "prereqs": "Dex 13, Improved Grapple, Improved Unarmed Strike"
        },
        {
            "id": "Deadly Stroke",
            "group": "Combat",
            "prereqs": "Greater Weapon Focus, Shatter Defenses, BAB +11"
        },
        {
            "id": "Death from Above",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Death or Glory",
            "group": "Combat",
            "prereqs": "Power Attack, BAB +6"
        },
        {
            "id": "Death Roll",
            "group": "Combat",
            "prereqs": "Bite attack, reptilian subtype"
        },
        {
            "id": "Deathless Initiate",
            "group": "Combat",
            "prereqs": "Str 13, Con 13, orc or half-orc, Diehard, BAB +6"
        },
        {
            "id": "Deathless Master",
            "group": "Combat",
            "prereqs": "Con 15, Deathless Initiate, Ironhide, BAB +9"
        },
        {
            "id": "Deathless Zealot",
            "group": "Combat",
            "prereqs": "Con 17, Deathless Master, BAB +12"
        },
        {
            "id": "Defensive Combat Training",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Defensive Weapon Training",
            "group": "Combat",
            "prereqs": "Int 13, BAB +5"
        },
        {
            "id": "Deflect Arrows",
            "group": "Combat",
            "prereqs": "Dex 13, Improved Unarmed Strike"
        },
        {
            "id": "Demon Hunter",
            "group": "Combat",
            "prereqs": "Knowledge (planes) 6 ranks"
        },
        {
            "id": "Demonic Nemesis",
            "group": "Combat",
            "prereqs": "Demon Hunter, Knowledge (planes) 6 ranks"
        },
        {
            "id": "Demoralizing Lash",
            "group": ["Combat","Racial"],
            "prereqs": "BAB +1, Intimidate 1 rank, Hobgoblin"
        },
        {
            "id": "Dented Helm",
            "group": ["Combat","Racial"],
            "prereqs": "Hard-Headed, BAB +6, dwarf"
        },
        {
            "id": "Dervish Dance",
            "group": "Combat",
            "prereqs": "Dex 13, Weapon Finesse, Perform (dance) 2 ranks, proficient with scimitar"
        },
        {
            "id": "Desperate Swing",
            "group": ["Combat","Racial"],
            "prereqs": "Cautious Fighter, BAB +1, halfling"
        },
        {
            "id": "Desperate Battler",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Destroyer’s Blessing",
            "group": ["Combat","Racial"],
            "prereqs": "Half-orc or orc, rage class feature, worshiper of a god of destruction"
        },
        {
            "id": "Destructive Persuasion",
            "group": "Combat",
            "prereqs": "Str 13, Power Attack, Intimidate 1 rank"
        },
        {
            "id": "Devastating Strike",
            "group": "Combat",
            "prereqs": "Vital Strike, BAB +9"
        },
        {
            "id": "Improved Devastating Strike",
            "group": "Combat",
            "prereqs": "Devastating Strike, BAB +13"
        },
        {
            "id": "Disconcerting Stare",
            "group": "Combat",
            "prereqs": "Mesmerist level 5th, painful stare class feature"
        },
        {
            "id": "Dimensional Awareness",
            "group": "Combat",
            "prereqs": "Arcane Strike or Disruptive; Banishing Critical; Combat Reflexes; Spellcraft 8 ranks; arcane pool class feature"
        },
        {
            "id": "Dimensional Disruption",
            "group": "Combat",
            "prereqs": "Arcane Strike or Disruptive; Banishing Critical; Combat Reflexes; Dimensional Awareness; Spellcraft 8 ranks; arcane pool class feature"
        },
        {
            "id": "Dirty Trick, Improved",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Dirty Trick, Greater",
            "group": "Combat",
            "prereqs": "Improved Dirty Trick, BAB +6"
        },
        {
            "id": "Dirty Trick Master",
            "group": "Combat",
            "prereqs": "Greater Dirty Trick, Improved Dirty Trick, BAB +11"
        },
        {
            "id": "Disarm, Improved",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Disarm, Greater",
            "group": "Combat",
            "prereqs": "Improved Disarm, BAB +6"
        },
        {
            "id": "Disarm, Directed",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Greater Disarm, Improved Disarm, BAB +11"
        },
        {
            "id": "Disarming Strike",
            "group": "Combat",
            "prereqs": "Improved Disarm, BAB +9"
        },
        {
            "id": "Disengaging Feint",
            "group": "Combat",
            "prereqs": "Improved Feint"
        },
        {
            "id": "Disengaging Flourish",
            "group": "Combat",
            "prereqs": "Disengaging Feint"
        },
        {
            "id": "Disengaging Shot",
            "group": "Combat",
            "prereqs": "Disengaging Feint, Dodge, Mobility"
        },
        {
            "id": "Disheartening Display",
            "group": "Combat",
            "prereqs": "Dazzling Display, Weapon Focus, BAB +6, proficiency with selected weapon"
        },
        {
            "id": "Disorienting Blow",
            "group": "Combat",
            "prereqs": "Stunning Fist, BAB +11"
        },
        {
            "id": "Dispelling Critical",
            "group": "Combat",
            "prereqs": "Arcane Strike, BAB +11, ability to cast dispel magic"
        },
        {
            "id": "Disrupting Shot",
            "group": "Combat",
            "prereqs": "Dex 13, Point-Blank Shot, fighter 6"
        },
        {
            "id": "Disruptive",
            "group": "Combat",
            "prereqs": "Fighter 6"
        },
        {
            "id": "Disrupting Fist",
            "group": "Combat",
            "prereqs": "Channel Smite, Improved Unarmed Strike, base attack bonus +9, channel positive energy 4d6"
        },
        {
            "id": "Distance Thrower",
            "group": "Combat",
            "prereqs": "Str 13"
        },
        {
            "id": "Distracting Charge",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Diva Style",
            "group": "Combat",
            "prereqs": "Cha 13; BAB +1 or bard 1"
        },
        {
            "id": "Diva Strike",
            "group": "Combat",
            "prereqs": "Cha 15, Combat Expertise, Diva Style, Improved Feint, BAB +7 or bard 7"
        },
        {
            "id": "Diva Advance",
            "group": "Combat",
            "prereqs": "Cha 17, Combat Expertise, Diva Strike, Diva Style, Improved Feint, BAB +11 or bard 11"
        },
        {
            "id": "Divert Harm",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, BAB +6, evasion"
        },
        {
            "id": "Divine Fighting Technique",
            "group": "Combat",
            "prereqs": "Worship a single patron deity that has an established divine fighting technique plus special"
        },
        {
            "id": "Divine Assault",
            "group": "Combat",
            "prereqs": "Bluff 1 rank, Knowledge (religion) 1 rank, Pure Legion Recruit trait"
        },
        {
            "id": "Dodge",
            "group": "Combat",
            "prereqs": "Dex 13"
        },
        {
            "id": "Domain Strike",
            "group": "Combat",
            "prereqs": "Domain class feature, Improved Unarmed Strike"
        },
        {
            "id": "Dorn-Dergar Master",
            "group": "Combat",
            "prereqs": "Two-Weapon Fighting, BAB +4, proficiency with the dwarven dorn-dergar"
        },
        {
            "id": "Double Slice",
            "group": "Combat",
            "prereqs": "Two-Weapon Fighting"
        },
        {
            "id": "Drag Down",
            "group": "Combat",
            "prereqs": "Improved Trip"
        },
        {
            "id": "Drag, Improved",
            "group": "Combat",
            "prereqs": "Power Attack"
        },
        {
            "id": "Drag, Greater",
            "group": "Combat",
            "prereqs": "Improved Drag, BAB +6"
        },
        {
            "id": "Dragon Style",
            "group": "Combat",
            "prereqs": "Str 15, Improved Unarmed Strike, Acrobatics 3 ranks."
        },
        {
            "id": "Draining Strike",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Dreadful Carnage",
            "group": "Combat",
            "prereqs": "Str 15, Furious Focus, BAB +11"
        },
        {
            "id": "Drunken Brawler",
            "group": "Combat",
            "prereqs": "Endurance"
        },
        {
            "id": "Dueling Cape Deed",
            "group": "Combat",
            "prereqs": "Amateur Swashbuckler or panache class feature, Dodge, Sleight of Hand 1 rank"
        },
        {
            "id": "Dueling Mastery",
            "group": "Combat",
            "prereqs": "Weapon Proficiency (dueling sword), Quick Draw, Weapon Finesse, Weapon Focus (dueling sword)"
        },
        {
            "id": "Efreeti Style",
            "group": "Combat",
            "prereqs": "Con 13, Wis 15, Elemental Fist, Improved Unarmed Strike, BAB +9 or monk 5"
        },
        {
            "id": "Efreeti Stance",
            "group": "Combat",
            "prereqs": "Con 15, Wis 15, Efreeti Style, Elemental Fist, Improved Unarmed Strike, BAB +11 or monk 9."
        },
        {
            "id": "Efreeti Touch",
            "group": "Combat",
            "prereqs": "Con 15, Wis 17, Efreeti Style, Efreeti Stance, Elemental Fist, Improved Unarmed Strike, BAB +13 or monk 11"
        },
        {
            "id": "Eldritch Claws",
            "group": "Combat",
            "prereqs": "Str 15, natural weapons, BAB +6"
        },
        {
            "id": "Elemental Fist",
            "group": "Combat",
            "prereqs": "Con 13, Wis 13, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Elemental Strike",
            "group": "Combat",
            "prereqs": "Ifrit, oread, sylph, or undine"
        },
        {
            "id": "Elephant Stomp",
            "group": "Combat",
            "prereqs": "Str 13, Power Attack, Improved Overrun, BAB +1"
        },
        {
            "id": "Elven Accuracy",
            "group": "Combat",
            "prereqs": "Elf"
        },
        {
            "id": "Elusive Redirection",
            "group": "Combat",
            "prereqs": "Elusive target class feature, Combat Expertise, Improved Unarmed Strike, flowing monk 12"
        },
        {
            "id": "Elven Battle Training",
            "group": "Combat",
            "prereqs": "BAB +1, elf"
        },
        {
            "id": "Empty Quiver Style",
            "group": "Combat",
            "prereqs": "Weapon Focus with the chosen weapon"
        },
        {
            "id": "Empty Quiver Flexibility",
            "group": "Combat",
            "prereqs": "Empty Quiver Style, Rapid Shot, Stabbing Shot, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Empty Quiver Flurry",
            "group": "Combat",
            "prereqs": "Empty Quiver Flexibility, Empty Quiver Style, Rapid Shot, Stabbing Shot, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Enforcer",
            "group": "Combat",
            "prereqs": "Intimidate 1 rank"
        },
        {
            "id": "Engulf Revulsion",
            "group": "Combat",
            "prereqs": "Engulf or smother universal monster ability"
        },
        {
            "id": "Engulf Horror",
            "group": "Combat",
            "prereqs": "Engulf Revulsion"
        },
        {
            "id": "Enrage Opponent",
            "group": "Combat",
            "prereqs": "Cha 13, Amateur Swashbuckler or panache class feature, Persuasive"
        },
        {
            "id": "Entreating Critical",
            "group": "Combat",
            "prereqs": "Call Truce, Critical Focus, BAB +11"
        },
        {
            "id": "Equipment Trick",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Exceptional Pull",
            "group": "Combat",
            "prereqs": "Dex 13, Deadly Aim, BAB +3"
        },
        {
            "id": "Exotic Weapon Proficiency",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Explosive Weapon",
            "group": "Combat",
            "prereqs": "Arcing Weapon, diverse training class feature"
        },
        {
            "id": "Exsanguinate",
            "group": "Combat",
            "prereqs": "Blood drain universal monster ability, grab universal monster ability"
        },
        {
            "id": "Extreme Prejudice",
            "group": "Combat",
            "prereqs": "Seething Hatred, sneak attack +3d6, studied target class feature"
        },
        {
            "id": "Faerie’s Strike",
            "group": "Combat",
            "prereqs": "Nature Magic or the ability to cast druid or ranger spells, Vital Strike, Knowledge (nature) 5 ranks"
        },
        {
            "id": "False Opening",
            "group": "Combat",
            "prereqs": "Dodge, Close Quarters Thrower or Point-Blank Master, Weapon Focus with selected ranged weapon"
        },
        {
            "id": "Far Shot",
            "group": "Combat",
            "prereqs": "Point Blank Shot"
        },
        {
            "id": "Feinting Flurry",
            "group": "Combat",
            "prereqs": "Dex 15, flurry of blows class feature, Combat Expertise"
        },
        {
            "id": "Feint, Greater",
            "group": "Combat",
            "prereqs": "Improved Feint, BAB +6"
        },
        {
            "id": "Feinting Flurry, Improved",
            "group": "Combat",
            "prereqs": "Dex 17, flurry of blows class feature, Combat Expertise, Feinting Flurry, BAB +6"
        },
        {
            "id": "Feint, Improved",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Felling Escape",
            "group": "Combat",
            "prereqs": "Improved Trip"
        },
        {
            "id": "Felling Smash",
            "group": "Combat",
            "prereqs": "Improved Trip, Power Attack, BAB +6"
        },
        {
            "id": "Fencing Grace",
            "group": "Combat",
            "prereqs": "Dex 13, Weapon Finesse, Weapon Focus (rapier)"
        },
        {
            "id": "Feral Combat Training",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, Weapon Focus (natural weapon)"
        },
        {
            "id": "Ferocious Tenacity",
            "group": "Combat",
            "prereqs": "Half-orc or orc, ferocity racial trait, rage class feature"
        },
        {
            "id": "Filthy Weapons",
            "group": "Combat",
            "prereqs": "Knowledge (dungeoneering) 1 rank, Knowledge (nature) 1 rank"
        },
        {
            "id": "Final Embrace",
            "group": "Combat",
            "prereqs": "Str 13, Int 3, BAB +3, naga, serpentfolk, or constrict special attack"
        },
        {
            "id": "Final Embrace Horror",
            "group": "Combat",
            "prereqs": "Str 15, Final Embrace, BAB +6"
        },
        {
            "id": "Final Embrace Master",
            "group": "Combat",
            "prereqs": "Str 17, Final Embrace Horror, BAB +9"
        },
        {
            "id": "Firebrand",
            "group": "Combat",
            "prereqs": ""
        },
        {
            "id": "Fire Hand",
            "group": ["Combat","Racial"],
            "prereqs": "Goblin"
        },
        {
            "id": "Flagbearer",
            "group": "Combat",
            "prereqs": "Cha 15"
        },
        {
            "id": "Flanking Foil",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Flinging Charge",
            "group": "Combat",
            "prereqs": "Quick Draw, BAB +6"
        },
        {
            "id": "Focused Discipline",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Focused Shot",
            "group": "Combat",
            "prereqs": "Int 13, Precise Shot"
        },
        {
            "id": "Following Step",
            "group": "Combat",
            "prereqs": "Dex 13, Step Up"
        },
        {
            "id": "Fortified Armor Training",
            "group": "Combat",
            "prereqs": "Proficient with armor or shield"
        },
        {
            "id": "Fox Style",
            "group": "Combat",
            "prereqs": "Int 13"
        },
        {
            "id": "Fox Insight",
            "group": "Combat",
            "prereqs": "Fox Style"
        },
        {
            "id": "Fox Trickery",
            "group": "Combat",
            "prereqs": "Combat Expertise, Fox Insight, Fox Style, Improved Dirty Trick"
        },
        {
            "id": "Friendly Fire Maneuvers",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Point-Blank Shot, Precise Shot"
        },
        {
            "id": "Friendly Rivalry",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Human"
        },
        {
            "id": "Frightening Ambush",
            "group": "Combat",
            "prereqs": "Intimidate 1 rank."
        },
        {
            "id": "Furious Focus",
            "group": "Combat",
            "prereqs": "Str 13, Power Attack, BAB +1"
        },
        {
            "id": "Fury’s Fall",
            "group": "Combat",
            "prereqs": "Improved Trip"
        },
        {
            "id": "Fury of the Tainted",
            "group": ["Combat","Racial"],
            "prereqs": "Cha 13, rage class feature, tiefling"
        },
        {
            "id": "Fury of the Tainted, Improved",
            "group": ["Combat","Racial"],
            "prereqs": "Cha 13, Fury of the Tainted, BAB +8, rage class feature, tiefling"
        },
        {
            "id": "Fury’s Snare",
            "group": "Combat",
            "prereqs": "Fury’s Fall, Improved Trip"
        },
        {
            "id": "Gang Up",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Gate Breaker",
            "group": "Combat",
            "prereqs": "Str 13, Improved Sunder, Power Attack, BAB +1."
        },
        {
            "id": "Ghostslayer",
            "group": "Combat",
            "prereqs": "BAB +1, Knowledge (religion) 1 rank"
        },
        {
            "id": "Giant Killer",
            "group": ["Combat","Racial"],
            "prereqs": "Str 13, Cleave, Goblin Cleaver, Orc Hewer, Power Attack, Strike Back, BAB +11, dwarf"
        },
        {
            "id": "Giantslaying Team",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Dex 13, Dodge, Mobility, BAB +4, defensive training racial trait"
        },
        {
            "id": "Gloom Strike",
            "group": "Combat",
            "prereqs": "Blind-Fight, fetchling"
        },
        {
            "id": "Gnome Weapon Focus",
            "group": "Combat",
            "prereqs": "BAB +1, gnome, proficient with all martial weapons"
        },
        {
            "id": "Goblin Cleaver",
            "group": ["Combat","Racial"],
            "prereqs": "Str 13, Cleave, Power Attack, dwarf"
        },
        {
            "id": "Goblin Gunslinger",
            "group": ["Combat","Racial"],
            "prereqs": "Goblin"
        },
        {
            "id": "Gore Fiend",
            "group": "Combat",
            "prereqs": "Half-orc or orc, rage class feature"
        },
        {
            "id": "Gory Finish",
            "group": "Combat",
            "prereqs": "Dazzling Display, Weapon Focus"
        },
        {
            "id": "Grabbing Style",
            "group": "Combat",
            "prereqs": "Improved Grapple, BAB +6, brawler’s flurry, or flurry of blows"
        },
        {
            "id": "Grabbing Drag",
            "group": "Combat",
            "prereqs": "Grabbing Style, BAB +8, brawler 4, or monk 4"
        },
        {
            "id": "Grabbing Master",
            "group": "Combat",
            "prereqs": "Grabbing Drag, BAB +12, brawler 8, or monk 8"
        },
        {
            "id": "Graceful Steal",
            "group": "Combat",
            "prereqs": "Dex 13, Agile Maneuvers, Improved Steal, Sleight of Hand 3 ranks"
        },
        {
            "id": "Grapple, Improved",
            "group": "Combat",
            "prereqs": "Dex 13, Improved Unarmed Strike"
        },
        {
            "id": "Grapple, Greater",
            "group": "Combat",
            "prereqs": "Improved Grapple, BAB +6"
        },
        {
            "id": "Grasping Strike",
            "group": "Combat",
            "prereqs": "Nature Magic or the ability to cast druid or ranger spells, Vital Strike"
        },
        {
            "id": "Great Hatred",
            "group": "Combat",
            "prereqs": "Gnome, hatred racial trait"
        },
        {
            "id": "Greater Hunter’s Bond",
            "group": "Combat",
            "prereqs": "Improved Hunter’s Bond, hunter’s bond (companions) class feature, ranger level 12th"
        },
        {
            "id": "Greater Spring Attack",
            "group": "Combat",
            "prereqs": "Dex 17, Acrobatic Steps, Dodge, Improved Spring Attack, Mobility, Nimble Moves, Spring Attack, BAB +16"
        },
        {
            "id": "Grudge Fighter",
            "group": "Combat",
            "prereqs": "Orc"
        },
        {
            "id": "Gruesome Slaughter",
            "group": "Combat",
            "prereqs": "Intimidating Prowess, Killing Flourish, Intimidate 11 ranks, slayer 11"
        },
        {
            "id": "Halfling Slinger",
            "group": "Combat",
            "prereqs": "Halfling"
        },
        {
            "id": "Hamatula Grasp",
            "group": "Combat",
            "prereqs": "Hamatula Strike, Improved Grapple, Str 13, BAB +9"
        },
        {
            "id": "Hamatula Strike",
            "group": "Combat",
            "prereqs": "Improved Grapple, Str 13, BAB +7"
        },
        {
            "id": "Hamatulatsu",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, Weapon Focus (unarmed strike)"
        },
        {
            "id": "Hammer the Gap",
            "group": "Combat",
            "prereqs": "BAB +6"
        },
        {
            "id": "Hard-headed",
            "group": ["Combat","Racial"],
            "prereqs": "BAB +1, dwarf"
        },
        {
            "id": "Harrying Partners",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Any teamwork feat, BAB +6"
        },
        {
            "id": "Haunted Gnome",
            "group": "Combat",
            "prereqs": "Cha 13, gnome magic racial trait, Knowledge (arcana) 1 rank"
        },
        {
            "id": "Haunted Gnome Assault",
            "group": ["Combat","Racial"],
            "prereqs": "Haunted Gnome, Knowledge (arcana) 3 ranks"
        },
        {
            "id": "Haunted Gnome Shroud",
            "group": "Combat",
            "prereqs": "Haunted Gnome Assault, Knowledge (arcana) 6 ranks"
        },
        {
            "id": "Hellcat Pounce",
            "group": "Combat",
            "prereqs": "Hellcat Stealth, Skill Focus (Stealth), sneak attack +2d6"
        },
        {
            "id": "Heroic Leader",
            "group": "Combat",
            "prereqs": "Cha 13; any combat feat; ability to gain an animal companion, cohort, eidolon, familiar, or mount"
        },
        {
            "id": "Hex Strike",
            "group": "Combat",
            "prereqs": "Hex class feature, Improved Unarmed Strike"
        },
        {
            "id": "Hold the Blade",
            "group": "Combat",
            "prereqs": "Improved Disarm, BAB +10"
        },
        {
            "id": "Horrific Gorging",
            "group": "Combat",
            "prereqs": "Bite attack, swallow whole universal monster ability, size Large or larger"
        },
        {
            "id": "Horse Master",
            "group": "Combat",
            "prereqs": "Expert trainer class feature, Ride 6 ranks"
        },
        {
            "id": "Impact Critical Shot",
            "group": "Combat",
            "prereqs": "Dex 13, Point-Blank Shot, BAB +9"
        },
        {
            "id": "Impaling Critical",
            "group": "Combat",
            "prereqs": "Critical Focus, Weapon Specialization with piercing weapon, BAB +11"
        },
        {
            "id": "Improved Impaling Critical",
            "group": "Combat",
            "prereqs": "Impaling Critical, BAB +13"
        },
        {
            "id": "Improved Awesome Blow",
            "group": "Combat",
            "prereqs": "Str 13, Awesome Blow or awesome blow class feature, Power Attack"
        },
        {
            "id": "Improved Critical",
            "group": "Combat",
            "prereqs": "Proficient with weapon, bab +8"
        },
        {
            "id": "Improved Hunter’s Bond",
            "group": "Combat",
            "prereqs": "Hunter’s bond (companions) class feature, ranger level 6th"
        },
        {
            "id": "Improved Initiative",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Improved Low Blow",
            "group": "Combat",
            "prereqs": "BAB +4, halfling, low-blow racial trait"
        },
        {
            "id": "Improved Parry",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise"
        },
        {
            "id": "Improved Surprise Follow-Through",
            "group": "Combat",
            "prereqs": "Str 13, Cleave, Great Cleave, Power Attack, Surprise Follow Through, BAB +8"
        },
        {
            "id": "Improved Spring Attack",
            "group": "Combat",
            "prereqs": "Dex 15, Dodge, Mobility, Nimble Moves, Spring Attack, BAB +9"
        },
        {
            "id": "Improved Swap Places",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Swap Places"
        },
        {
            "id": "Improved Two-Weapon Feint",
            "group": "Combat",
            "prereqs": "Combat Expertise, Improved Two-Weapon Fighting"
        },
        {
            "id": "Improvised Weapon Mastery",
            "group": "Combat",
            "prereqs": "Catch Off-Guard or Throw Anything, BAB +8"
        },
        {
            "id": "Improved Bravery",
            "group": "Combat",
            "prereqs": "Cha 13, bravery class feature"
        },
        {
            "id": "Incite Paranoia",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Deceitful, Greater Feint, Improved Feint, BAB +6"
        },
        {
            "id": "Indomitable Mount",
            "group": "Combat",
            "prereqs": "Mounted Combat, Handle Animal 5 ranks, Ride 5 ranks"
        },
        {
            "id": "In Harm’s Way",
            "group": "Combat",
            "prereqs": "Bodyguard"
        },
        {
            "id": "Inner Flame",
            "group": "Combat",
            "prereqs": "Scorching Weapons, character level 7, Ifrit"
        },
        {
            "id": "Inspiring Bravery",
            "group": "Combat",
            "prereqs": "Cha 13, bravery class feature"
        },
        {
            "id": "Intercept Charge",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Intimidate Animals",
            "group": "Combat",
            "prereqs": "Greater Wild Empathy, Intimidate 5 ranks, Knowledge (nature) 5 ranks, wild empathy class feature"
        },
        {
            "id": "Intimidating Prowess",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Jabbing Style",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, BAB +6, brawler‘s flurry class feature or flurry of blows class feature"
        },
        {
            "id": "Jabbing Dancer",
            "group": "Combat",
            "prereqs": "Dodge, Jabbing Style, Mobility, BAB +9, monk 5, or brawler 5"
        },
        {
            "id": "Jabbing Master",
            "group": "Combat",
            "prereqs": "Power Attack, Jabbing Dancer, BAB +12, monk 8, or brawler 8"
        },
        {
            "id": "Jaguar Pounce",
            "group": "Combat",
            "prereqs": "Base attack bonus +4"
        },
        {
            "id": "Jawbreaker",
            "group": "Combat",
            "prereqs": "Heal 6 ranks, Improved Unarmed Strike, Stunning Fist"
        },
        {
            "id": "Bonebreaker",
            "group": "Combat",
            "prereqs": "Improved Grapple, Jawbreaker, Heal 9 ranks"
        },
        {
            "id": "Neckbreaker",
            "group": "Combat",
            "prereqs": "Bonebreaker, Greater Grapple, Improved Grapple, Improved Unarmed Strike, Jawbreaker, Stunning Fist, Heal 12 ranks"
        },
        {
            "id": "Juggle Load",
            "group": "Combat",
            "prereqs": "Ammo Drop, Sleight of Hand 1 rank, proficient with sling"
        },
        {
            "id": "Juke",
            "group": "Combat",
            "prereqs": "Dex 13, Dodge, Mobility, Sidestep"
        },
        {
            "id": "Just out of Reach",
            "group": "Combat",
            "prereqs": "Dex 13, Dodge, Mobility"
        },
        {
            "id": "Kick Up",
            "group": "Combat",
            "prereqs": "Dex 12, Acrobatic, Acrobatics 1 rank, slayer 1 or swashbuckler 1"
        },
        {
            "id": "Ki Diversity",
            "group": "Combat",
            "prereqs": "Ki pool class feature, Wis 13"
        },
        {
            "id": "Killing Flourish",
            "group": "Combat",
            "prereqs": "Intimidating Prowess, Intimidate 4 ranks, slayer 4"
        },
        {
            "id": "Ki Throw",
            "group": "Combat",
            "prereqs": "Improved Trip, Improved Unarmed Strike"
        },
        {
            "id": "Enhanced Ki Throw",
            "group": "Combat",
            "prereqs": "Ki pool class feature, Ki Throw"
        },
        {
            "id": "Improved Ki Throw",
            "group": "Combat",
            "prereqs": "Improved Bull Rush, Ki Throw"
        },
        {
            "id": "Kobold Ambusher",
            "group": "Combat",
            "prereqs": "Stealth 4 ranks, kobold"
        },
        {
            "id": "Kobold Sniper",
            "group": "Combat",
            "prereqs": "Stealth 1 rank, kobold"
        },
        {
            "id": "Kraken Style",
            "group": "Combat",
            "prereqs": "Wis 13, Improved Grapple, Improved Unarmed Strike, BAB +3 or monk 3"
        },
        {
            "id": "Kraken Throttle",
            "group": "Combat",
            "prereqs": "Wis 13, Improved Grapple, Improved Unarmed Strike, Kraken Style, BAB +5 or monk 5"
        },
        {
            "id": "Kraken Wrack",
            "group": "Combat",
            "prereqs": "Wis 13, Improved Grapple, Improved Unarmed Strike, Kraken Style, BAB +7 or monk 7"
        },
        {
            "id": "Kyton Style",
            "group": "Combat",
            "prereqs": "Wis 13, Exotic Weapon Proficiency (spiked chain), Knowledge (planes) 3 ranks, ki pool class feature"
        },
        {
            "id": "Kyton Shield",
            "group": "Combat",
            "prereqs": "Wis 15, Kyton Style, base attack bonus +5, Knowledge (planes) 3 ranks"
        },
        {
            "id": "Kyton Cut",
            "group": "Combat",
            "prereqs": "Wis 17, Kyton Shield, Kyton Style, base attack bonus +8 or monk level 6th"
        },
        {
            "id": "Landing Roll",
            "group": "Combat",
            "prereqs": "Mobility"
        },
        {
            "id": "Large Target",
            "group": "Combat",
            "prereqs": "Proficient with sling"
        },
        {
            "id": "Latching Horror",
            "group": "Combat",
            "prereqs": "Attach universal monster ability"
        },
        {
            "id": "Lead from the Back",
            "group": ["Combat","Racial"],
            "prereqs": "Goblin, Intimidate 1 rank"
        },
        {
            "id": "Leapfrog",
            "group": "Combat",
            "prereqs": "Acrobatics 3 ranks"
        },
        {
            "id": "Leaping Evasion",
            "group": "Combat",
            "prereqs": "Lightning Reflexes, evasion class feature"
        },
        {
            "id": "Let Them Come",
            "group": ["Combat","Racial","Faction"],
            "prereqs": "Dwarf, Ninth Battalion TPA 25"
        },
        {
            "id": "Lightning Draw",
            "group": "Combat",
            "prereqs": "Quick Draw, swashbuckler initiative deed, swashbuckler 7"
        },
        {
            "id": "Lightning Stance",
            "group": "Combat",
            "prereqs": "Dex 17, Wind Stance, BAB +11"
        },
        {
            "id": "Lob Shot",
            "group": "Combat",
            "prereqs": "Far Shot, Point-Blank Shot"
        },
        {
            "id": "Lookout",
            "group": ["Combat", "Teamwork"],
            "prereqs": "—"
        },
        {
            "id": "Low Profile",
            "group": "Combat",
            "prereqs": "Dex 13, Small size or smaller"
        },
        {
            "id": "Lucky Strike",
            "group": "Combat",
            "prereqs": "BAB +5, adaptive luck racial trait, halfling"
        },
        {
            "id": "Lunge",
            "group": "Combat",
            "prereqs": "BAB +6"
        },
        {
            "id": "Mad Magic",
            "group": "Combat",
            "prereqs": "Bloodrage class feature or perfect clarity rage power"
        },
        {
            "id": "Maddening Style",
            "group": "Combat",
            "prereqs": "Wis 15, Cha 11, Improved Unarmed Strike, Stunning Fist, Knowledge (arcana) 4 ranks, ki pool class feature, nongood alignment"
        },
        {
            "id": "Maddening Strike",
            "group": "Combat",
            "prereqs": "Wis 17, Cha 13, Maddening Style, Knowledge (arcana)"
        },
        {
            "id": "Maddening Obliteration",
            "group": "Combat",
            "prereqs": "Wis 19, Cha 15, Maddening Strike, Maddening Style, Knowledge arcana (10 ranks)"
        },
        {
            "id": "Manifold Stare",
            "group": "Combat",
            "prereqs": "Mesmerist level 3rd, painful stare class feature"
        },
        {
            "id": "Mantis Style",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, Stunning Fist, Heal 3 ranks."
        },
        {
            "id": "Manyshot",
            "group": "Combat",
            "prereqs": "Dex 17, Rapid Shot, BAB +6"
        },
        {
            "id": "Martial Dominance",
            "group": "Combat",
            "prereqs": "BAB +5, Intimidate 1 rank"
        },
        {
            "id": "Martial Focus",
            "group": "Combat",
            "prereqs": "BAB +5"
        },
        {
            "id": "Martial Mastery",
            "group": "Combat",
            "prereqs": "Martial Versatility, fighter 16, human"
        },
        {
            "id": "Martial Versatility",
            "group": "Combat",
            "prereqs": "Fighter 4, human"
        },
        {
            "id": "Martial Weapon Proficiency",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Massed Charge",
            "group": "Combat",
            "prereqs": "Mounted Combat, Handle Animal 1 rank, Ride 6 ranks"
        },
        {
            "id": "Master Combat Performer",
            "group": "Combat",
            "prereqs": "Performing Combatant or 3 performance feats, BAB +6"
        },
        {
            "id": "Measure Foe",
            "group": "Combat",
            "prereqs": "Street Smarts, BAB +1."
        },
        {
            "id": "Measured Response",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Medusa’s Wrath",
            "group": "Combat",
            "prereqs": "Gorgon’s Fist, BAB +11"
        },
        {
            "id": "Merciless Beating",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Gang Up"
        },
        {
            "id": "Merciless Butchery",
            "group": "Combat",
            "prereqs": "Dastardly Finish, sneak attack +5d6, studied target class feature"
        },
        {
            "id": "Mirror Move",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, BAB +4"
        },
        {
            "id": "Misdirection Tactics",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Deceitful, Bluff 4 ranks"
        },
        {
            "id": "Misdirection Attack",
            "group": "Combat",
            "prereqs": "Misdirection Redirection, Misdirection Tactics"
        },
        {
            "id": "Missile Shield",
            "group": "Combat",
            "prereqs": "Dex 13, Shield Focus"
        },
        {
            "id": "Mobility",
            "group": "Combat",
            "prereqs": "Dodge"
        },
        {
            "id": "Mobile Bulwark Style",
            "group": "Combat",
            "prereqs": "Str 13, Shield Focus, Tower Shield Proficiency, BAB +1."
        },
        {
            "id": "Mobile Fortress",
            "group": "Combat",
            "prereqs": "Str 15, Mobile Bulwark Style, Shield Focus, Tower Shield Proficiency, BAB +4."
        },
        {
            "id": "Mobile Stronghold",
            "group": "Combat",
            "prereqs": "Str 17, Mobile Bulwark Style, Mobile Fortress, Shield Focus, Tower Shield Proficiency, BAB +7."
        },
        {
            "id": "Monastic Legacy",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, still mind class feature"
        },
        {
            "id": "Monkey Lunge",
            "group": "Combat",
            "prereqs": "Lunge, Acrobatics 1 rank"
        },
        {
            "id": "Moonlight Stalker",
            "group": "Combat",
            "prereqs": "Int 13, Blind-Fight, Combat Expertise, Bluff 3 ranks, darkvision or low-light vision racial trait"
        },
        {
            "id": "Moonlight Stalker Feint",
            "group": "Combat",
            "prereqs": "Int 13, Blind-Fight, Combat Expertise, Moonlight Stalker, Bluff 6 ranks, darkvision or low-light vision racial trait"
        },
        {
            "id": "Moonlight Stalker Master",
            "group": "Combat",
            "prereqs": "Int 13, Blind-Fight, Combat Expertise, Improved Feint, Moonlight Stalker, Moonlight Stalker Feint, Bluff 9 ranks, darkvision or low-light vision racial trait"
        },
        {
            "id": "Mounted Archery",
            "group": "Combat",
            "prereqs": "Mounted Combat"
        },
        {
            "id": "Mounted Combat",
            "group": "Combat",
            "prereqs": "Ride 1 rank"
        },
        {
            "id": "Mounted Onslaught",
            "group": "Combat",
            "prereqs": "Mounted Combat, Trample, Ride 5 ranks"
        },
        {
            "id": "Mounted Skirmisher",
            "group": "Combat",
            "prereqs": "Ride rank 14, Mounted Combat, Trick Riding"
        },
        {
            "id": "Mounted Shield",
            "group": "Combat",
            "prereqs": "Mounted Combat, Shield Focus"
        },
        {
            "id": "Mud in Your Eye",
            "group": "Combat",
            "prereqs": "Throw Anything"
        },
        {
            "id": "Multiattack",
            "group": "Combat",
            "prereqs": "Three or more natural attacks."
        },
        {
            "id": "Multiweapon Fighting",
            "group": "Combat",
            "prereqs": "Dex 13, three or more hands."
        },
        {
            "id": "My Blade Is Yours",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Int 13, Combat Expertise, Sense Motive 3 ranks"
        },
        {
            "id": "Natural Jouster",
            "group": "Combat",
            "prereqs": "Centaur (or other tauric creature)"
        },
        {
            "id": "Nature’s Weapons",
            "group": "Combat",
            "prereqs": "Catch Off-Guard; BAB +2; Knowledge (nature) or Survival 2 ranks"
        },
        {
            "id": "Net Adept",
            "group": "Combat",
            "prereqs": "Exotic Weapon Proficiency (net), BAB +1"
        },
        {
            "id": "Net and Trident",
            "group": "Combat",
            "prereqs": "Dex 15, Net Adept, Two-Weapon Fighting"
        },
        {
            "id": "Net Maneuvering",
            "group": "Combat",
            "prereqs": "Net Adept, BAB +3"
        },
        {
            "id": "Net Trickery",
            "group": "Combat",
            "prereqs": "Net Adept, Net Maneuvering, BAB +6"
        },
        {
            "id": "Nightmare Fist",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, Intimidate 1 rank, ability to create magical darkness"
        },
        {
            "id": "Nightmare Weaver",
            "group": "Combat",
            "prereqs": "Nightmare Fist, Intimidate 2 ranks"
        },
        {
            "id": "Nightmare Striker",
            "group": "Combat",
            "prereqs": "Nightmare Weaver, Stunning Fist, Heal 5 ranks, ability to cast faerie fire"
        },
        {
            "id": "Nimble Striker",
            "group": "Combat",
            "prereqs": "Dex 13, BAB +1, catfolk, sprinter racial trait"
        },
        {
            "id": "Notorious Vigilante",
            "group": "Combat",
            "prereqs": "Dazzling Display, Weapon Focus, any nongood alignment, great renown social talent, proficiency with chosen weapon"
        },
        {
            "id": "Open Up",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Int 13, Combat Expertise"
        },
        {
            "id": "Opening Volley",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Orc Fury Style",
            "group": "Combat",
            "prereqs": "Bullying Blow, Intimidating Prowess, Intimidate 3 ranks, weapon familiarity racial trait"
        },
        {
            "id": "Orc Hewer",
            "group": ["Combat","Racial"],
            "prereqs": "Str 13, Cleave, Goblin Cleaver, Power Attack, dwarf"
        },
        {
            "id": "Orc Weapon Expertise",
            "group": "Combat",
            "prereqs": "BAB +1, orc"
        },
        {
            "id": "Ostentatious Rager",
            "group": "Combat",
            "prereqs": "Intimidate 5 ranks, rage class feature"
        },
        {
            "id": "Osyluth Guile",
            "group": "Combat",
            "prereqs": "Bluff 8 ranks, Dodge"
        },
        {
            "id": "Outflank",
            "group": ["Combat", "Teamworks"],
            "prereqs": "BAB +4"
        },
        {
            "id": "Outslug Style",
            "group": "Combat",
            "prereqs": "Int 13; Combat Expertise or brawler’s cunning class feature; Weapon Focus with the chosen weapon."
        },
        {
            "id": "Outslug Weave",
            "group": "Combat",
            "prereqs": "Int 13; Combat Expertise or brawler’s cunning class feature; Lunge; Outslug Style; Weapon Focus with the chosen weapon."
        },
        {
            "id": "Outslug Sprint",
            "group": "Combat",
            "prereqs": "Int 13; Combat Expertise or Brawler’s Cunning class feature; Lunge; Outslug Style; Outslug Weave; Weapon Focus with the chosen weapon."
        },
        {
            "id": "Overwatch Style",
            "group": "Combat",
            "prereqs": "Precise Shot, Rapid Shot, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Overwatch Tactician",
            "group": "Combat",
            "prereqs": "Overwatch Style, Precise Shot, Rapid Shot, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Overwatch Vortex",
            "group": "Combat",
            "prereqs": "Overwatch Style, Overwatch Tactician, Precise Shot, Rapid Shot, Weapon Focus with the chosen weapon, base attack bonus +11."
        },
        {
            "id": "Overrun, Improved",
            "group": "Combat",
            "prereqs": "Power Attack"
        },
        {
            "id": "Overrun, Greater",
            "group": "Combat",
            "prereqs": "Improved Overrun, BAB +6"
        },
        {
            "id": "Owl Style",
            "group": "Combat",
            "prereqs": "Dex 13, Skill Focus (Stealth), Stealth 1 rank"
        },
        {
            "id": "Owl Swoop",
            "group": "Combat",
            "prereqs": "Dex 15, Owl Style, Acrobatics 1 rank"
        },
        {
            "id": "Owl Dive",
            "group": "Combat",
            "prereqs": "Dex 17, Owl Style, Owl Swoop, BAB +7 or monk 5, Fly 1 rank"
        },
        {
            "id": "Pack Intimidation",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Half-orc, intimidating racial trait"
        },
        {
            "id": "Paired Opportunists",
            "group": ["Combat", "Teamworks"],
            "prereqs": "—"
        },
        {
            "id": "Paralyzing Strike",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved unarmed strike, BAB +14"
        },
        {
            "id": "Parting Shot",
            "group": "Combat",
            "prereqs": "Shot on the Run, BAB +6"
        },
        {
            "id": "Passing Trick",
            "group": "Combat",
            "prereqs": "Improved Feint, Mobility, size Small or smaller"
        },
        {
            "id": "Penetrating Strike",
            "group": "Combat",
            "prereqs": "Weapon Focus, fighter 12"
        },
        {
            "id": "Penetrating Strike, Greater",
            "group": "Combat",
            "prereqs": "Penetrating Strike, fighter 16"
        },
        {
            "id": "Perfect Strike",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Performance Weapon Mastery",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Performing Combatant",
            "group": "Combat",
            "prereqs": "Dazzling Display, any one Performance feat"
        },
        {
            "id": "Phalanx Formation",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Piercing Grapple",
            "group": "Combat",
            "prereqs": "Dex 13, Improved Grapple, Improved Unarmed Strike, Quick Draw, Intimidate 7 ranks"
        },
        {
            "id": "Pinpoint Targeting",
            "group": "Combat",
            "prereqs": "Improved Precise Shot, BAB +16"
        },
        {
            "id": "Pin Down",
            "group": "Combat",
            "prereqs": "Combat Reflexes, fighter 11"
        },
        {
            "id": "Pinning Knockout",
            "group": "Combat",
            "prereqs": "Dex 13, Greater Grapple, BAB +9 or monk 9"
        },
        {
            "id": "Pinning Rend",
            "group": "Combat",
            "prereqs": "Dex 13, Greater Grapple, Improved Grapple, Improved Unarmed Strike, BAB +9 or monk 9"
        },
        {
            "id": "Piranha Strike",
            "group": "Combat",
            "prereqs": "Weapon Finesse, BAB +1"
        },
        {
            "id": "Point-Blank Master",
            "group": "Combat",
            "prereqs": "Weapon Specialization with selected ranged weapon."
        },
        {
            "id": "Point-Blank Shot",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Power Attack",
            "group": "Combat",
            "prereqs": "Str 13, BAB +1"
        },
        {
            "id": "Precise Shot",
            "group": "Combat",
            "prereqs": "Point Blank Shot"
        },
        {
            "id": "Precise Shot, Improved",
            "group": "Combat",
            "prereqs": "Dex 19, Precise Shot, BAB +11"
        },
        {
            "id": "Precise Strike",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Dex 13, BAB +1"
        },
        {
            "id": "Primal Strike",
            "group": "Combat",
            "prereqs": "Wis 17, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Press to the Wall",
            "group": "Combat",
            "prereqs": "Step Up, BAB +3"
        },
        {
            "id": "Prone Shooter",
            "group": "Combat",
            "prereqs": "Weapon Focus (crossbow or firearm), BAB +1"
        },
        {
            "id": "Prone Slinger",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Pummeling Style",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, BAB +6, brawler‘s flurry, or flurry of blows"
        },
        {
            "id": "Pummeling Bully",
            "group": "Combat",
            "prereqs": "Improved Reposition, Improved Trip, Pummeling Style, BAB +9, brawler 5, or monk 5"
        },
        {
            "id": "Pummeling Charge",
            "group": "Combat",
            "prereqs": "Pummeling Style, BAB +12, brawler 8, or monk 8"
        },
        {
            "id": "Punch Through",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Bab +6"
        },
        {
            "id": "Punishing Kick",
            "group": "Combat",
            "prereqs": "Con 13, Wis 13, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Pursuit of Glory",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Human"
        },
        {
            "id": "Pushing Assault",
            "group": "Combat",
            "prereqs": "Str 15, Power Attack, BAB +1"
        },
        {
            "id": "Quah Bond",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Totem Spirit, human"
        },
        {
            "id": "Quarterstaff Master",
            "group": "Combat",
            "prereqs": "Weapon Focus (quarterstaff), BAB +5"
        },
        {
            "id": "Quick Bull Rush",
            "group": "Combat",
            "prereqs": "Improved Bull Rush, BAB +6"
        },
        {
            "id": "Quick Dirty Trick",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Dirty Trick, BAB +6"
        },
        {
            "id": "Quick Drag",
            "group": "Combat",
            "prereqs": "Improved Drag, BAB +6"
        },
        {
            "id": "Quick Draw",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Quick Reposition",
            "group": "Combat",
            "prereqs": "Improved Reposition, BAB +6"
        },
        {
            "id": "Quick Steal",
            "group": "Combat",
            "prereqs": "Improved Steal, BAB +6"
        },
        {
            "id": "Quick Stow",
            "group": "Combat",
            "prereqs": "Quick Draw, BAB +1."
        },
        {
            "id": "Quick Study",
            "group": "Combat",
            "prereqs": "Int 13, bravery +3, fighter 10"
        },
        {
            "id": "Quiet Death",
            "group": "Combat",
            "prereqs": "Dex 19, Stealth 10 ranks, rogue 10"
        },
        {
            "id": "Quivering Palm Adept",
            "group": "Combat",
            "prereqs": "Quivering palm class feature"
        },
        {
            "id": "Quivering Palm Versatility",
            "group": "Combat",
            "prereqs": "Quivering palm class feature, BAB +13"
        },
        {
            "id": "Ranged Disarm",
            "group": "Combat",
            "prereqs": "Dex 13, Deadly Aim, BAB +1"
        },
        {
            "id": "Ranged Feint",
            "group": "Combat",
            "prereqs": "BAB +2, Bluff 3 ranks"
        },
        {
            "id": "Ranged Trip",
            "group": "Combat",
            "prereqs": "Dex 13, Deadly Aim, BAB +1"
        },
        {
            "id": "Rapid Grappler",
            "group": "Combat",
            "prereqs": "Dex 13, Greater Grapple, Improved Grapple, Improved Unarmed Strike, BAB +9 or monk 9"
        },
        {
            "id": "Rapid Reload",
            "group": "Combat",
            "prereqs": "Weapon Proficiency (crossbow) or Exotic Weapon Proficiency (firearms)"
        },
        {
            "id": "Rapid Shot",
            "group": "Combat",
            "prereqs": "Dex 13, Point Blank Shot"
        },
        {
            "id": "Rat Catcher",
            "group": "Combat",
            "prereqs": "Knowledge (dungeoneering) 1 rank, BAB +1"
        },
        {
            "id": "Ray Shield",
            "group": "Combat",
            "prereqs": "Dex 15, Missile Shield, Spellbreaker"
        },
        {
            "id": "Ready for Anything",
            "group": "Combat",
            "prereqs": "Alertness, Improved Initiative, Lightning Reflexes, Quick Draw, BAB +6 or uncanny dodge class feature"
        },
        {
            "id": "Rebounding Leap",
            "group": "Combat",
            "prereqs": "Acrobatics 5 ranks, Ride 11 ranks, leaping lance class feature"
        },
        {
            "id": "Rebuffing Reduction",
            "group": "Combat",
            "prereqs": "Damage reduction, Improved Bull Rush"
        },
        {
            "id": "Reckless Aim",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, Precise Shot"
        },
        {
            "id": "Redirect Attack",
            "group": "Combat",
            "prereqs": "Dex 15, Int 15, Dodge"
        },
        {
            "id": "Relentless Shot",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, BAB +6"
        },
        {
            "id": "Relic Breaker",
            "group": "Combat",
            "prereqs": "Str 13, Gate Breaker, Improved Sunder, Power Attack, BAB +1."
        },
        {
            "id": "Rending Claws",
            "group": "Combat",
            "prereqs": "Str 13, two claw attacks, BAB +6"
        },
        {
            "id": "Rending Fury",
            "group": "Combat",
            "prereqs": "Rend special attack, BAB +6"
        },
        {
            "id": "Improved Rending Fury",
            "group": "Combat",
            "prereqs": "Rending Fury, BAB +9"
        },
        {
            "id": "Greater Rending Fury",
            "group": "Combat",
            "prereqs": "Improved Rending Fury, BAB +12"
        },
        {
            "id": "Reposition, Improved",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Reposition, Greater",
            "group": "Combat",
            "prereqs": "Improved Reposition, BAB +6"
        },
        {
            "id": "Repositioning Strike",
            "group": "Combat",
            "prereqs": "Improved Reposition, BAB +9."
        },
        {
            "id": "Reposition, Tactical",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Reposition"
        },
        {
            "id": "Returning Throw",
            "group": ["Combat", "Teamworks","Racial"],
            "prereqs": "Point-Blank Shot, Precise Shot, Sleight of Hand 3 ranks, goblinoid subtype"
        },
        {
            "id": "Revelation Strike",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, revelation class feature"
        },
        {
            "id": "Reverse-Feint",
            "group": "Combat",
            "prereqs": "Toughness, BAB +1, orc"
        },
        {
            "id": "Rhino Charge",
            "group": "Combat",
            "prereqs": "Power Attack, Improved Bull Rush, BAB +5"
        },
        {
            "id": "Ride-By Attack",
            "group": "Combat",
            "prereqs": "Mounted Combat"
        },
        {
            "id": "Riptide Attack",
            "group": "Combat",
            "prereqs": "Improved Drag, Improved Trip."
        },
        {
            "id": "Risky Striker",
            "group": "Combat",
            "prereqs": "BAB +1, halfling"
        },
        {
            "id": "River Raider",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Riving Strike",
            "group": "Combat",
            "prereqs": "Arcane Strike"
        },
        {
            "id": "Roll with It",
            "group": ["Combat","Racial"],
            "prereqs": "Goblin, Acrobatics 1 rank"
        },
        {
            "id": "Rubble Skirmisher",
            "group": "Combat",
            "prereqs": "Dex 13, Nimble Moves, BAB +2"
        },
        {
            "id": "Runic Charge",
            "group": "Combat",
            "prereqs": "CL 5"
        },
        {
            "id": "Ruthless Opportunist",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Human"
        },
        {
            "id": "Sabotaging Sunder",
            "group": "Combat",
            "prereqs": "Str 13, Improved Sunder, Power Attack, Disable Device 7 ranks"
        },
        {
            "id": "Saddle Shrieker",
            "group": ["Combat","Racial"],
            "prereqs": "Goblin, Ride 1 rank."
        },
        {
            "id": "Sap Adept",
            "group": "Combat",
            "prereqs": "Sneak attack +1d6"
        },
        {
            "id": "Sap Master",
            "group": "Combat",
            "prereqs": "Sap Adept, sneak attack +3d6"
        },
        {
            "id": "Saving Shield",
            "group": "Combat",
            "prereqs": "Shield Proficiency"
        },
        {
            "id": "School Strike",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike, wizard school class feature"
        },
        {
            "id": "Scorching Weapons",
            "group": "Combat",
            "prereqs": "Ifrit"
        },
        {
            "id": "Scorpion Style",
            "group": "Combat",
            "prereqs": "Improved Unarmed Strike"
        },
        {
            "id": "Gorgon’s Fist",
            "group": "Combat",
            "prereqs": "Scorpion Style, BAB +6"
        },
        {
            "id": "Sea Hunter",
            "group": "Combat",
            "prereqs": "Combat Expertise, merfolk"
        },
        {
            "id": "Second Chance",
            "group": "Combat",
            "prereqs": "Combat Expertise, BAB +6"
        },
        {
            "id": "Second Chance, Improved",
            "group": "Combat",
            "prereqs": "Second Chance, BAB +11"
        },
        {
            "id": "Second Wind",
            "group": "Combat",
            "prereqs": "Endurance"
        },
        {
            "id": "Seething Hatred",
            "group": "Combat",
            "prereqs": "Studied target class feature"
        },
        {
            "id": "Seize Advantage",
            "group": "Combat",
            "prereqs": "Opportune parry and riposte deed"
        },
        {
            "id": "Serpent Lash",
            "group": "Combat",
            "prereqs": "Weapon Finesse, proficient in whip"
        },
        {
            "id": "Shadow Strike",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Shadows of Fear",
            "group": "Combat",
            "prereqs": "Hidden strike +2d8 or sneak attack +2d6"
        },
        {
            "id": "Sharpclaw",
            "group": "Combat",
            "prereqs": "Ratfolk"
        },
        {
            "id": "Shatter Defenses",
            "group": "Combat",
            "prereqs": "Dazzling Display, BAB +6"
        },
        {
            "id": "Shatterspell",
            "group": ["Combat","Racial"],
            "prereqs": "Disruptive, Spellbreaker, dwarf, fighter 10"
        },
        {
            "id": "Shield Bash, Improved",
            "group": "Combat",
            "prereqs": "Shield Proficiency"
        },
        {
            "id": "Shield Focus",
            "group": "Combat",
            "prereqs": "Shield Proficiency, BAB +1"
        },
        {
            "id": "Improved Shield Focus",
            "group": "Combat",
            "prereqs": "Shield Focus, BAB +6."
        },
        {
            "id": "Shield Focus, Greater",
            "group": "Combat",
            "prereqs": "Shield Focus, fighter 8"
        },
        {
            "id": "Shield Master",
            "group": "Combat",
            "prereqs": "Shield Slam, BAB +11"
        },
        {
            "id": "Shield Proficiency",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Shield of Swings",
            "group": "Combat",
            "prereqs": "Str 13, Power Attack, BAB +1"
        },
        {
            "id": "Shield Specialization",
            "group": "Combat",
            "prereqs": "Shield Focus, fighter 4"
        },
        {
            "id": "Shield Specialization, Greater",
            "group": "Combat",
            "prereqs": "Shield Focus, Greater, Shield Specialization, fighter 12"
        },
        {
            "id": "Shield Slam",
            "group": "Combat",
            "prereqs": "Improved Shield Bash, Two-Weapon Fighting, BAB +6"
        },
        {
            "id": "Shield Wall",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Shield Proficiency"
        },
        {
            "id": "Shield Gauntlet Style",
            "group": "Combat",
            "prereqs": "Weapon Focus (gauntlet or spiked gauntlet), proficiency with bucklers and light shields."
        },
        {
            "id": "Shielded Gauntlet Attack",
            "group": "Combat",
            "prereqs": "Shield Gauntlet Style, Weapon Focus (gauntlet or spiked gauntlet), proficiency with bucklers and light shields."
        },
        {
            "id": "Shielded Gauntlet Master",
            "group": "Combat",
            "prereqs": "Shielded Gauntlet Attack, Shield Gauntlet Style, Weapon Focus (gauntlet or spiked gauntlet), proficiency with bucklers and light shields."
        },
        {
            "id": "Cushioning Shield (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +6 or fighter level 4th."
        },
        {
            "id": "Defended Movement (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +6 or fighter level 4th."
        },
        {
            "id": "Feint Defender (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +6 or fighter level 4th, Sense Motive 1 rank."
        },
        {
            "id": "Greater Ray Shield (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Dex 17, Missile Shield, Ray Shield, Spellbreaker."
        },
        {
            "id": "Guarded Charge (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +6 or fighter level 4th."
        },
        {
            "id": "Shield Brace (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus; base attack bonus +3 or fighter level 1st; proficiency with light shields, heavy shields, or tower shields."
        },
        {
            "id": "Shielded Mage (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +3 or fighter level 1st."
        },
        {
            "id": "Shielded Stand (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +3 or fighter level 1st."
        },
        {
            "id": "Shield Material Expertise (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +6 or fighter level 4th."
        },
        {
            "id": "Shield Material Mastery (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, Shield Material Expertise, base attack bonus +11 or fighter level 8th."
        },
        {
            "id": "Shikigami Style",
            "group": "Combat",
            "prereqs": "Catch Off-Guard or Throw Anything"
        },
        {
            "id": "Shikigami Mimicry",
            "group": "Combat",
            "prereqs": "Catch Off-Guard or Throw Anything, Shikigami Style"
        },
        {
            "id": "Shikigami Manipulation",
            "group": "Combat",
            "prereqs": "Catch Off-Guard or Throw Anything, Shikigami Mimicry, Shikigami Style, Use Magic Device 5 ranks"
        },
        {
            "id": "Sprightly Armor (Combat, Armor Mastery)",
            "group": "Combat",
            "prereqs": "Dex 13, base attack bonus +11 or fighter level 8th, armor training class feature, proficiency with light armor."
        },
        {
            "id": "Stumbling Bash (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Improved Shield Bash, Shield Focus, base attack bonus +6 or fighter level 4th."
        },
        {
            "id": "Toppling Bash (Shield Mastery)",
            "group": "Combat",
            "prereqs": "Improved Shield Bash, Shield Focus, Stumbling Bash, base attack bonus +11 or fighter level 8th."
        },
        {
            "id": "Tower Shield Specialist (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, Tower Shield Proficiency, base attack bonus +11 or fighter level 8th."
        },
        {
            "id": "Unhindering Shield (Combat, Shield Mastery)",
            "group": "Combat",
            "prereqs": "Shield Focus, base attack bonus +6 or fighter level 4th, proficiency with bucklers."
        },
        {
            "id": "Shot on the Run",
            "group": "Combat",
            "prereqs": "Dex 13, Mobility, Point Blank Shot, BAB +4"
        },
        {
            "id": "Shrapnel Strike",
            "group": "Combat",
            "prereqs": "Str 15, Improved Sunder, Power Attack"
        },
        {
            "id": "Shrewd Tactician",
            "group": "Combat",
            "prereqs": "Alertness, Combat Reflexes"
        },
        {
            "id": "Shrug On",
            "group": "Combat",
            "prereqs": "BAB +1, medium armor proficiency"
        },
        {
            "id": "Sidestep",
            "group": "Combat",
            "prereqs": "Dex 13, Dodge, Mobility"
        },
        {
            "id": "Improved Sidestep",
            "group": "Combat",
            "prereqs": "Dex 15, Sidestep"
        },
        {
            "id": "Siege Commander",
            "group": "Combat",
            "prereqs": "Craft (siege weapon) 5 ranks, Knowledge (engineering) 5 ranks or Profession (Siege Engineer) 1 rank"
        },
        {
            "id": "Siege Engineer",
            "group": "Combat",
            "prereqs": "Knowledge (engineering) 5 ranks or Profession (siege engineer) 5 ranks, proficiency with 1 siege weapon"
        },
        {
            "id": "Master Siege Engineer",
            "group": "Combat",
            "prereqs": "Siege Engineer, Knowledge (engineering) 10 ranks"
        },
        {
            "id": "Siege Gunner",
            "group": "Combat",
            "prereqs": "Siege Engineer"
        },
        {
            "id": "Signature Strike Style",
            "group": "Combat",
            "prereqs": "Precise Shot; Weapon Focus; BAB +7; Intimidate 7 ranks; Improved Called Shot, targeted strike swashbuckler deed, or targeting gunslinger deed"
        },
        {
            "id": "Signature Strike Taunt",
            "group": "Combat",
            "prereqs": "Precise Shot, Signature Strike Style, Weapon Focus, BAB +9, Intimidate 9 ranks"
        },
        {
            "id": "Signature Strike Triumph",
            "group": "Combat",
            "prereqs": "Precise Shot, Signature Strike Style, Signature Strike Taunt, Weapon Focus, BAB +11, Intimidate 11 ranks"
        },
        {
            "id": "Silent Kill",
            "group": "Combat",
            "prereqs": "Stealth 12 ranks, assassinate advanced slayer talent or ninja master trick"
        },
        {
            "id": "Simple Weapon Proficiency",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Slashing Grace",
            "group": "Combat",
            "prereqs": "Dex 13, Weapon Finesse, Weapon Focus with selected weapon"
        },
        {
            "id": "Slayer’s Feint",
            "group": "Combat",
            "prereqs": "Dex 15, Acrobatic or slayer 1, Combat Expertise, Acrobatics 1 rank"
        },
        {
            "id": "Sleeper Hold",
            "group": "Combat",
            "prereqs": "Greater Grapple, BAB +8"
        },
        {
            "id": "Sliding Axe Throw",
            "group": "Combat",
            "prereqs": "Dex 13, BAB +1"
        },
        {
            "id": "Sliding Dash",
            "group": "Combat",
            "prereqs": "Dex 15, Acrobatics 10 ranks or acrobatic charge class feature, Bluff 3 ranks"
        },
        {
            "id": "Sling Flail",
            "group": "Combat",
            "prereqs": "Weapon Focus (sling), BAB +1"
        },
        {
            "id": "Smashing Style",
            "group": "Combat",
            "prereqs": "Str 13, Improved Sunder, Power Attack, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Smashing Crush",
            "group": "Combat",
            "prereqs": "Str 13, Improved Sunder, Smashing Style, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Smashing Dent",
            "group": "Combat",
            "prereqs": "Str 13, Improved Sunder, Smashing Crush, Smashing Style, Weapon Focus with the chosen weapon, base attack bonus +6."
        },
        {
            "id": "Smiting Reversal",
            "group": "Combat",
            "prereqs": "Power Attack, Toughness"
        },
        {
            "id": "Snap Shot",
            "group": "Combat",
            "prereqs": "Rapid Shot, Weapon Focus, BAB +6"
        },
        {
            "id": "Improved Snap Shot",
            "group": "Combat",
            "prereqs": "Dex 15, Snap Shot, BAB +9"
        },
        {
            "id": "Greater Snap Shot",
            "group": "Combat",
            "prereqs": "Dex 17, Improved Snap Shot, BAB +12"
        },
        {
            "id": "Snatch Arrows",
            "group": "Combat",
            "prereqs": "Dex 15, Deflect Arrows"
        },
        {
            "id": "Social Bravery",
            "group": "Combat",
            "prereqs": "Cha 13, bravery class feature"
        },
        {
            "id": "Solo Maneuvers",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Sorcerous Strike",
            "group": "Combat",
            "prereqs": "Sorcerer bloodline class feature, Improved Unarmed Strike"
        },
        {
            "id": "Soulblade",
            "group": "Combat",
            "prereqs": "Knowledge (religion) 1 rank, Perception 1 rank"
        },
        {
            "id": "Soulwrecking Strike",
            "group": "Combat",
            "prereqs": "Vital Strike, bab +6"
        },
        {
            "id": "Spear Dancing Style",
            "group": "Combat",
            "prereqs": "Dex 13, Two-Weapon Fighting, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Spear Dancing Spiral",
            "group": "Combat",
            "prereqs": "Dex 15, Spear Dancing Style, Two-Weapon Fighting, Weapon Finesse, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Spear Dancing Reach",
            "group": "Combat",
            "prereqs": "Dex 17, Spear Dancing Spiral, Spear Dancing Style, Two-Weapon Fighting, Weapon Finesse, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Spellbreaker",
            "group": "Combat",
            "prereqs": "Disruptive, fighter 10"
        },
        {
            "id": "Spiked Destroyer",
            "group": "Combat",
            "prereqs": "Proficient in spiked armor"
        },
        {
            "id": "Spinning Throw",
            "group": "Combat",
            "prereqs": "Improved Bull Rush, Improved Trip, Improved Unarmed Strike, Ki Throw"
        },
        {
            "id": "Spirited Charge",
            "group": "Combat",
            "prereqs": "Ride-By Attack"
        },
        {
            "id": "Spit Venom",
            "group": "Combat",
            "prereqs": "Nagaji"
        },
        {
            "id": "Spring Attack",
            "group": "Combat",
            "prereqs": "Mobility, BAB+4"
        },
        {
            "id": "Spring-Heeled Style",
            "group": "Combat",
            "prereqs": "Dex 13, Dodge, Mobility, Shot on the Run or Spring Attack, BAB +4, proficiency with light armor."
        },
        {
            "id": "Spring-Heeled Reaping",
            "group": "Combat",
            "prereqs": "Dex 17, Dodge, Mobility, Shot on the Run or Spring Attack, Spring-Heeled Sprint, Spring-Heeled Style, BAB +11, proficiency with light armor."
        },
        {
            "id": "Spring-Heeled Sprint",
            "group": "Combat",
            "prereqs": "Dex 15, Dodge, Mobility, Shot on the Run or Spring Attack, Spring-Heeled Style, BAB +7, proficiency with light armor."
        },
        {
            "id": "Stabbing Shot",
            "group": "Combat",
            "prereqs": "Rapid Shot, elf"
        },
        {
            "id": "Stage Combatant",
            "group": "Combat",
            "prereqs": "Weapon Focus, BAB +5"
        },
        {
            "id": "Staggering Fist",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved Unarmed Strike, BAB +2"
        },
        {
            "id": "Stance of the Xorn",
            "group": "Combat",
            "prereqs": "Wis 15, BAB +3"
        },
        {
            "id": "Stand Still",
            "group": "Combat",
            "prereqs": "Combat Reflexes"
        },
        {
            "id": "Starry Grace",
            "group": "Combat",
            "prereqs": "Dex 13, Weapon Finesse, Weapon Focus (starknife)"
        },
        {
            "id": "Startling Getaway",
            "group": "Combat",
            "prereqs": "Startling appearance class feature"
        },
        {
            "id": "Startoss Style",
            "group": "Combat",
            "prereqs": "Dex 13, Point-Blank Shot, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Startoss Comet",
            "group": "Combat",
            "prereqs": "Dex 13, Point-Blank Shot, Startoss Style, Weapon Focus with the chosen weapon."
        },
        {
            "id": "Startoss Shower",
            "group": "Combat",
            "prereqs": "Dex 13, Point-Blank Shot, Startoss Comet, Startoss Style, Weapon Focus with the chosen weapon, base attack bonus +4."
        },
        {
            "id": "Steadfast Slayer",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Steady Engagement",
            "group": "Combat",
            "prereqs": "Combat Reflexes, Stand Still"
        },
        {
            "id": "Steal, Improved",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Steal, Greater",
            "group": "Combat",
            "prereqs": "Steal, Improved, BAB +6"
        },
        {
            "id": "Step Up",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Step Up and Strike",
            "group": "Combat",
            "prereqs": "Following Step, BAB +6"
        },
        {
            "id": "Stick Together",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Stock-Striker Style",
            "group": "Combat",
            "prereqs": "Pistol-whip gunslinger deed"
        },
        {
            "id": "Stock-Striker Sweep",
            "group": "Combat",
            "prereqs": "Stock-Striker Style, BAB +7, pistol-whip gunslinger deed"
        },
        {
            "id": "Stock-Striker Takedown",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, Stock-Striker Style, Stock-Striker Sweep, BAB +9, pistol-whip gunslinger deed"
        },
        {
            "id": "Strangler",
            "group": "Combat",
            "prereqs": "Improved Grapple, sneak attack +1d6"
        },
        {
            "id": "Street Style",
            "group": "Combat",
            "prereqs": "Str 15, Improved Bull Rush, Improved Unarmed Strike, Power Attack, BAB +4 or monk 3"
        },
        {
            "id": "Street Sweep",
            "group": "Combat",
            "prereqs": "Street Style, BAB +6 or monk 5"
        },
        {
            "id": "Street Carnage",
            "group": "Combat",
            "prereqs": "Street Style, Street Sweep, BAB +8 or monk 7"
        },
        {
            "id": "Strike Back",
            "group": "Combat",
            "prereqs": "BAB +11"
        },
        {
            "id": "Structural Strike",
            "group": "Combat",
            "prereqs": "Knowledge (engineering) 5 ranks, precise strike class feature or precise strike deed"
        },
        {
            "id": "Stunning Assault",
            "group": "Combat",
            "prereqs": "Power Attack, BAB +16"
        },
        {
            "id": "Stunning Fist",
            "group": "Combat",
            "prereqs": "Dex 13, Wis 13, Improved Unarmed Strike, BAB +8"
        },
        {
            "id": "Stunning Fist Adept",
            "group": "Combat",
            "prereqs": "Stunning Fist, BAB +3"
        },
        {
            "id": "Stunning Pin",
            "group": "Combat",
            "prereqs": "Improved Grapple, Stunning Fist"
        },
        {
            "id": "Stunning Irruption",
            "group": "Combat",
            "prereqs": "Str 15, Power Attack, BAB +5"
        },
        {
            "id": "Sunder, Improved",
            "group": "Combat",
            "prereqs": "Power Attack"
        },
        {
            "id": "Sunder, Greater",
            "group": "Combat",
            "prereqs": "Improved Sunder, BAB +6"
        },
        {
            "id": "Sunder Blessing",
            "group": "Combat",
            "prereqs": "Disruptive, fighter 8"
        },
        {
            "id": "Sundering Strike",
            "group": "Combat",
            "prereqs": "Sunder, Improved, BAB +9"
        },
        {
            "id": "Suppressive Fire",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Far Shot, Point-Blank Shot, Precise Shot, keen senses racial trait"
        },
        {
            "id": "Surprise Follow-Through",
            "group": "Combat",
            "prereqs": "Str 13, Cleave, Power Attack, BAB +1"
        },
        {
            "id": "Surprise Strike",
            "group": "Combat",
            "prereqs": "Cautious Fighter, Desperate Swing, BAB +6, halfling"
        },
        {
            "id": "Swap Places",
            "group": ["Combat", "Teamworks"],
            "prereqs": "—"
        },
        {
            "id": "Sweeping Dodge",
            "group": "Combat",
            "prereqs": "Dex 13, Dodge"
        },
        {
            "id": "Swift Iron Style",
            "group": "Combat",
            "prereqs": "Str 13, Dex 13, proficiency with medium armor."
        },
        {
            "id": "Swift Refuge",
            "group": "Combat",
            "prereqs": "Str 13, Dex 13, Swift Iron Style, proficiency with medium armor."
        },
        {
            "id": "Swift Sprint",
            "group": "Combat",
            "prereqs": "Str 13, Dex 13, Swift Iron Style, Swift Refuge, proficiency with medium armor."
        },
        {
            "id": "Sword And Pistol",
            "group": "Combat",
            "prereqs": "Snap Shot, Two-Weapon Fighting, BAB +6"
        },
        {
            "id": "Swordplay Style",
            "group": "Combat",
            "prereqs": "Combat Expertise, Weapon Focus with the chosen weapon, base attack bonus +3."
        },
        {
            "id": "Swordplay Upset",
            "group": "Combat",
            "prereqs": "Combat Expertise, Improved Feint, Swordplay Style, Weapon Focus with the chosen weapon, base attack bonus +5."
        },
        {
            "id": "Swordplay Deflection",
            "group": "Combat",
            "prereqs": "Combat Expertise, Improved Feint, Swordplay Style, Swordplay Upset, Weapon Focus with the chosen weapon, base attack bonus +7."
        },
        {
            "id": "Sympathetic Rage",
            "group": "Combat",
            "prereqs": "Half-orc or orc, non-lawful"
        },
        {
            "id": "Tactical Reposition",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Reposition"
        },
        {
            "id": "Tail Terror",
            "group": "Combat",
            "prereqs": "BAB +1, kobold"
        },
        {
            "id": "Duelist",
            "group": "Combat",
            "prereqs": "Dex 13, Exotic Weapon Proficiency (falcata), Weapon Focus (falcata), proficient with a buckler"
        },
        {
            "id": "Tangle Feet",
            "group": ["Combat","Racial"],
            "prereqs": "Dodge, Mobility, Underfoot, Goblin, Small size or smaller"
        },
        {
            "id": "Tantrum",
            "group": "Combat",
            "prereqs": "Bluff 1 rank, rage class feature, gnome"
        },
        {
            "id": "Taskmaster",
            "group": ["Combat","Racial"],
            "prereqs": "Demoralizing Lash, Intimidate 5 ranks, hobgoblin"
        },
        {
            "id": "Team Up",
            "group": "Combat",
            "prereqs": "Gang-Up, BAB +6"
        },
        {
            "id": "Technology Adept",
            "group": "Combat",
            "prereqs": "Dex 13, Exotic Weapon Proficiency (firearms), Point-Blank Shot"
        },
        {
            "id": "Teleport Tactician",
            "group": "Combat",
            "prereqs": "Combat Reflexes, Disruptive, Spellbreaker"
        },
        {
            "id": "Terrorizing Display",
            "group": ["Combat","Racial"],
            "prereqs": "Dazzling Display, Demoralizing Lash, Taskmaster, Weapon Focus, Intimidate 10 ranks, Hobgoblin, proficiency with selected weapon"
        },
        {
            "id": "Thrill of the Hunt",
            "group": "Combat",
            "prereqs": "Survival 1 rank; BAB +4 or track class feature"
        },
        {
            "id": "Throat Slicer",
            "group": "Combat",
            "prereqs": "BAB +1"
        },
        {
            "id": "Throw Anything",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Throw Back Arrows",
            "group": "Combat",
            "prereqs": "Dex 17, Deflect Arrows, Improved Unarmed Strike, Snatch Arrows"
        },
        {
            "id": "Thunder and Fang",
            "group": "Combat",
            "prereqs": "Str 15, Two-Weapon Fighting, Weapon Focus (earth breaker), Weapon Focus (klar)"
        },
        {
            "id": "Touch of Serenity",
            "group": "Combat",
            "prereqs": "Wis 18, Unarmed Strike, Improved, BAB +8"
        },
        {
            "id": "Tower Shield Proficiency",
            "group": "Combat",
            "prereqs": "Shield Proficiency"
        },
        {
            "id": "Traditional Weapons",
            "group": "Combat",
            "prereqs": "Int 13"
        },
        {
            "id": "Trample",
            "group": "Combat",
            "prereqs": "Mounted Combat"
        },
        {
            "id": "Tree Hanger",
            "group": "Combat",
            "prereqs": "Acrobatics 1 rank, vanara"
        },
        {
            "id": "Trick Riding",
            "group": "Combat",
            "prereqs": "Ride 9 ranks, Mounted Combat"
        },
        {
            "id": "Trick Shooter",
            "group": "Combat",
            "prereqs": "Dex 13, Deadly Aim, BAB +1"
        },
        {
            "id": "Trip, Improved",
            "group": "Combat",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Trip, Greater",
            "group": "Combat",
            "prereqs": "Combat Expertise, Improved Trip, BAB +6, Int 13"
        },
        {
            "id": "Tripping Staff",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Trip, Weapon Focus (quarterstaff ), BAB +6"
        },
        {
            "id": "Tripping Strike",
            "group": "Combat",
            "prereqs": "Trip, Improved, BAB +9"
        },
        {
            "id": "Tripping Twirl",
            "group": "Combat",
            "prereqs": "Int 13, Combat Expertise, Improved Trip, Tripping Staff, Weapon Focus (quarterstaff ), Weapon Specialization (quarterstaff ), BAB +12"
        },
        {
            "id": "Twin Thunders",
            "group": ["Combat","Racial"],
            "prereqs": "Flurry of blows class feature or Two-Weapon Fighting, Weapon Focus with wielded bludgeoning weapons, defensive training race trait, dwarf or gnome"
        },
        {
            "id": "Twin Thunders Flurry",
            "group": "Combat",
            "prereqs": "Twin Thunders, BAB +6"
        },
        {
            "id": "Twin Thunders Master",
            "group": "Combat",
            "prereqs": "Twin Thunders Flurry, BAB +9"
        },
        {
            "id": "Twinned Feint",
            "group": "Combat",
            "prereqs": "Cha 13"
        },
        {
            "id": "Two-Handed Thrower",
            "group": "Combat",
            "prereqs": "Str 15"
        },
        {
            "id": "Two-Weapon Defense",
            "group": "Combat",
            "prereqs": "Two-Weapon Fighting"
        },
        {
            "id": "Two-Weapon Feint",
            "group": "Combat",
            "prereqs": "Combat Expertise, Two-Weapon Fighting"
        },
        {
            "id": "Two-Weapon Fighting",
            "group": "Combat",
            "prereqs": "Dex 15"
        },
        {
            "id": "Two-Weapon Fighting, Improved",
            "group": "Combat",
            "prereqs": "Dex 17, Two-Weapon Fighting, BAB +6"
        },
        {
            "id": "Two-Weapon Fighting, Greater",
            "group": "Combat",
            "prereqs": "Dex 19, Improved Two-Weapon Fighting, BAB +11"
        },
        {
            "id": "Two-Weapon Grace",
            "group": "Combat",
            "prereqs": "Dex 15; Fencing Grace, Slashing Grace, or Starry Grace; Two-Weapon Fighting; Weapon Finesse"
        },
        {
            "id": "Two-Weapon Rend",
            "group": "Combat",
            "prereqs": "Double Slice, Improved Two-Weapon Fighting, BAB +11"
        },
        {
            "id": "Unarmed Strike, Improved",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Uncanny Defense",
            "group": "Combat",
            "prereqs": "Cautious Fighter, BAB +3, halfling"
        },
        {
            "id": "Under and Over",
            "group": "Combat",
            "prereqs": "Agile Maneuvers, Small size or smaller"
        },
        {
            "id": "Undersized Mount",
            "group": "Combat",
            "prereqs": "Ride 1 rank"
        },
        {
            "id": "Unseat",
            "group": "Combat",
            "prereqs": "Improved Bull Rush, Mounted Combat"
        },
        {
            "id": "Unyielding Ferocity",
            "group": "Combat",
            "prereqs": "Con 19, ferocity"
        },
        {
            "id": "Upsetting Shield Style",
            "group": "Combat",
            "prereqs": "Dex 13, proficiency with bucklers."
        },
        {
            "id": "Upsetting Strike",
            "group": "Combat",
            "prereqs": "Dex 15, Combat Reflexes, Improved Shield Bash, Upsetting Shield Style, proficiency with bucklers."
        },
        {
            "id": "Upsetting Vengeance",
            "group": "Combat",
            "prereqs": "Dex 13, Combat Reflexes, Improved Shield Bash, Upsetting Shield Style, Upsetting Strike, proficiency with bucklers."
        },
        {
            "id": "Vanguard Style",
            "group": "Combat",
            "prereqs": "Bodyguard, Combat Reflexes, proficiency with light or heavy shields."
        },
        {
            "id": "Vanguard Hustle",
            "group": "Combat",
            "prereqs": "Dex 13, Bodyguard, Combat Patrol, Combat Reflexes, Mobility, Saving Shield, Vanguard Style, Vanguard Ward, proficiency with light or heavy shields."
        },
        {
            "id": "Vanguard Ward",
            "group": "Combat",
            "prereqs": "Bodyguard, Combat Reflexes, Vanguard Style, proficiency with light or heavy shields."
        },
        {
            "id": "Vast Hatred",
            "group": "Combat",
            "prereqs": "Gnome, hatred racial trait"
        },
        {
            "id": "Vicious Stomp",
            "group": "Combat",
            "prereqs": "Combat Reflexes, Improved Unarmed Strike"
        },
        {
            "id": "Vigilant Charger",
            "group": "Combat",
            "prereqs": "Str 13, Dex 13, Combat Reflexes"
        },
        {
            "id": "Violent Display",
            "group": "Combat",
            "prereqs": "Dazzling Display, Weapon Focus, BAB +6"
        },
        {
            "id": "Vital Strike",
            "group": "Combat",
            "prereqs": "BAB +6"
        },
        {
            "id": "Vital Strike, Improved",
            "group": "Combat",
            "prereqs": "Vital Strike, BAB +11"
        },
        {
            "id": "Vital Strike, Greater",
            "group": "Combat",
            "prereqs": "Improved Vital Strike, BAB +16"
        },
        {
            "id": "Volley Fire",
            "group": "Combat",
            "prereqs": "Point-Blank Shot"
        },
        {
            "id": "Vulpine Pounce",
            "group": "Combat",
            "prereqs": "Swift Kitsune Shapechanger, BAB +10, kitsune"
        },
        {
            "id": "Warning Shot",
            "group": "Combat",
            "prereqs": "Point-Blank Shot, Precise Shot, Weapon Focus, proficiency with the selected weapon"
        },
        {
            "id": "Wave Strike",
            "group": "Combat",
            "prereqs": "Weapon expertise class feature or Quick Draw, Bluff 1 rank"
        },
        {
            "id": "Weapon Finesse",
            "group": "Combat",
            "prereqs": "—"
        },
        {
            "id": "Weapon Focus",
            "group": "Combat",
            "prereqs": "Proficiency with weapon, BAB +1"
        },
        {
            "id": "Weapon Focus, Greater",
            "group": "Combat",
            "prereqs": "Weapon Focus, fighter 8"
        },
        {
            "id": "Weapon of the Chosen",
            "group": "Combat",
            "prereqs": "Weapon Focus with deity’s favored weapon, worship and receive spells from a deity"
        },
        {
            "id": "Improved Weapon of the Chosen",
            "group": "Combat",
            "prereqs": "Weapon of the Chosen"
        },
        {
            "id": "Greater Weapon of the Chosen",
            "group": "Combat",
            "prereqs": "Improved Weapon of the Chosen"
        },
        {
            "id": "Weapon Specialization",
            "group": "Combat",
            "prereqs": "Weapon Focus, fighter 4"
        },
        {
            "id": "Weapon Specialization, Greater",
            "group": "Combat",
            "prereqs": "Weapon Specialization, fighter 12"
        },
        {
            "id": "Weapon Versatility",
            "group": "Combat",
            "prereqs": "Weapon Focus, base attack bonus +1"
        },
        {
            "id": "Weathered Warrior",
            "group": "Combat",
            "prereqs": "Endurance"
        },
        {
            "id": "Wheeling Charge",
            "group": "Combat",
            "prereqs": "Mounted Combat, Ride-By Attack, Ride 5 ranks"
        },
        {
            "id": "Whip Mastery",
            "group": "Combat",
            "prereqs": "Weapon Focus (whip), BAB +2"
        },
        {
            "id": "Improved Whip Mastery",
            "group": "Combat",
            "prereqs": "Whip Mastery, BAB +5"
        },
        {
            "id": "Greater Whip Mastery",
            "group": "Combat",
            "prereqs": "Improved Whip Mastery, BAB +8"
        },
        {
            "id": "Whip Slinger",
            "group": "Combat",
            "prereqs": "Proficient with sling"
        },
        {
            "id": "Whirlwind Attack",
            "group": "Combat",
            "prereqs": "Dex 13, Combat Expertise, Spring Attack, BAB +4"
        },
        {
            "id": "Wilding Strike",
            "group": "Combat",
            "prereqs": "Str 13, Improved Unarmed Strike, Wilding"
        },
        {
            "id": "Improved Wilding Strike",
            "group": "Combat",
            "prereqs": "Str 16, Improved Unarmed Strike, Wilding, Wilding Strike, BAB +11"
        },
        {
            "id": "Greater Wilding Strike",
            "group": "Combat",
            "prereqs": "Str 18, Improved Unarmed Strike, Improved Wilding Strike, Wilding, Wilding Strike, BAB +16"
        },
        {
            "id": "Wind Stance",
            "group": "Combat",
            "prereqs": "Dex 15, Dodge, BAB +6"
        },
        {
            "id": "Winter’s Strike",
            "group": "Combat",
            "prereqs": "Nature Magic or the ability to cast druid or ranger spells, Vital Strike, Knowledge (nature) 5 ranks"
        },
        {
            "id": "Witchbreaker",
            "group": "Combat",
            "prereqs": "Iron Will"
        },
        {
            "id": "Witty Feint",
            "group": "Combat",
            "prereqs": "Bluff 1 rank, weapon training class feature, gnome"
        },
        {
            "id": "Woodland Wraith",
            "group": "Combat",
            "prereqs": "Dex 15, Dodge, BAB +6"
        },
        {
            "id": "Wounded Paw Gambit",
            "group": ["Combat", "Teamworks"],
            "prereqs": "Broken Wing Gambit, Bluff 5 ranks"
        },

        //General
        {
            "id": "Aberrant Tumor",
            "group": "General",
            "prereqs": "Aberrant bloodline"
        },
        {
            "id": "Absorb Spirit",
            "group": "General",
            "prereqs": "Con 13, died or possessed by an undead"
        },
        {
            "id": "Abundant Revelations",
            "group": "General",
            "prereqs": "Mystery class feature"
        },
        {
            "id": "Accursed Hex",
            "group": "General",
            "prereqs": "Hex class feature"
        },
        {
            "id": "Accomplished Sneak Attacker",
            "group": "General",
            "prereqs": "Sneak attack class feature."
        },
        {
            "id": "Acrobatic",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Acute Shot",
            "group": "General",
            "prereqs": "Far Shot, Precise Shot"
        },
        {
            "id": "Adept Champion",
            "group": "General",
            "prereqs": "Smite evil class feature, BAB +5"
        },
        {
            "id": "Additional Traits",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Adept Channel",
            "group": "General",
            "prereqs": "Ability to cast divine spells, summon familiar class ability, CL 4, Cha 13"
        },
        {
            "id": "Advanced Ranger Trap",
            "group": "General",
            "prereqs": "Trap class feature, ranger 5"
        },
        {
            "id": "Agent of Fear",
            "group": "General",
            "prereqs": "Persuasive, frightening appearance class feature"
        },
        {
            "id": "Agent of Purity",
            "group": "General",
            "prereqs": "A friend or ally must have been significantly corrupted by a specific natural or supernatural blight, or you must have a regional background trait tied to a specific blight."
        },
        {
            "id": "Agonizing Obedience",
            "group": "General",
            "prereqs": "Heal 3 ranks"
        },
        {
            "id": "Alertness",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Alien Mindpaths",
            "group": "General",
            "prereqs": "Android, kasatha, lashunta, or triaxian"
        },
        {
            "id": "Align Equipment",
            "group": "General",
            "prereqs": "Alignment Channel, Bless Equipment, CL 3, channel energy"
        },
        {
            "id": "Alignment Channel",
            "group": "General",
            "prereqs": "Channel energy class feature"
        },
        {
            "id": "Aligned Crafting",
            "group": "General",
            "prereqs": "Craft Magic Arms and Armor or Craft Wondrous Item."
        },
        {
            "id": "Alter Binary Mindscape",
            "group": "General",
            "prereqs": "Int 13, ability to cast instigate psychic duel"
        },
        {
            "id": "Altitude Affinity",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Amateur Investigator",
            "group": "General",
            "prereqs": "Int 13, 1 rank in at least one Knowledge skill, no levels in a class that has inspiration"
        },
        {
            "id": "Amplified Radiance",
            "group": ["General","Racial"],
            "prereqs": "Aasimar, daylight racial spell-like ability"
        },
        {
            "id": "Ancestral Scorn",
            "group": ["General","Racial"],
            "prereqs": "Intimidate 5 ranks, tiefling"
        },
        {
            "id": "Animal Affinity",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Animal Ally",
            "group": "General",
            "prereqs": "Nature Soul, character level 4th, must not have an animal companion or mount that advances as an animal companion"
        },
        {
            "id": "Animal Call",
            "group": "General",
            "prereqs": "Bluff 1 rank, Knowledge (nature) 1 rank"
        },
        {
            "id": "Animal Disguise",
            "group": "General",
            "prereqs": "Disguise 6 ranks, Knowledge (nature) 6 ranks"
        },
        {
            "id": "Animal Soul",
            "group": "General",
            "prereqs": "Animal companion or mount class feature"
        },
        {
            "id": "Antagonize",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Arcane Blast",
            "group": "General",
            "prereqs": "Arcane spellcaster, CL 10"
        },
        {
            "id": "Arcane Insight",
            "group": "General",
            "prereqs": "Arcane Shield."
        },
        {
            "id": "Arcane Jinxer",
            "group": "General",
            "prereqs": "Arcane spellcaster, Halfling Jinx trait"
        },
        {
            "id": "Arcane School Spirit",
            "group": "General",
            "prereqs": "Bluff 1 rank, arcane school class feature, gnome"
        },
        {
            "id": "Arcane Shield",
            "group": "General",
            "prereqs": "Arcane spellcaster, CL 10"
        },
        {
            "id": "Arcane Talent",
            "group": "General",
            "prereqs": "Cha 10; elf, half-elf, or gnome"
        },
        {
            "id": "Arcane Vendetta",
            "group": "General",
            "prereqs": "Spellcraft 1 rank"
        },
        {
            "id": "Arctic Adaptation",
            "group": "General",
            "prereqs": "Favored terrain (cold) class feature"
        },
        {
            "id": "Area Jinx",
            "group": "General",
            "prereqs": "Widen Spell, Halfling Jinx trait"
        },
        {
            "id": "Arithmancy",
            "group": "General",
            "prereqs": "Int 13, Spell Focus (divination), Spellcraft 3 ranks"
        },
        {
            "id": "Aspect of the Beast",
            "group": "General",
            "prereqs": "Wild shape class feature"
        },
        {
            "id": "Associate",
            "group": "General",
            "prereqs": "Maintain a positive relationship with an organization for at least 6 months or achieve a major accomplishment on behalf of an organization."
        },
        {
            "id": "Athletic",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Augment Summoning",
            "group": "General",
            "prereqs": "Spell Focus (conjuration)"
        },
        {
            "id": "Aura Flare",
            "group": "General",
            "prereqs": "Cha 13; aura, aura of good, or aura of evil class feature; channel energy 4d6; strong or overwhelming good or evil aura"
        },
        {
            "id": "Aversion Tolerance",
            "group": "General",
            "prereqs": "Vampire"
        },
        {
            "id": "Babble-Peddler",
            "group": "General",
            "prereqs": "Appraise 5 ranks, Bluff 5 ranks, gnome"
        },
        {
            "id": "Banish Possessor",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Basic Harmony",
            "group": "General",
            "prereqs": "Bardic performance or raging song"
        },
        {
            "id": "Battering Repair",
            "group": "General",
            "prereqs": "Craft (alchemy) 3 ranks; grit class feature or Amateur Gunslinger; pistol-whip gunslinger deed; quick clear gunslinger deed."
        },
        {
            "id": "Battle Singer",
            "group": ["General","Racial"],
            "prereqs": "Goblin, bardic performance class feature"
        },
        {
            "id": "Believer's Boon",
            "group": "General",
            "prereqs": "Wis 13, alignment must be within one step of your deity's"
        },
        {
            "id": "Believer's Hands",
            "group": "General",
            "prereqs": "Believer's Boon, must be lawful good"
        },
        {
            "id": "Bestow Hope",
            "group": "General",
            "prereqs": "Channel positive energy class feature, Improved Channel"
        },
        {
            "id": "Betrayer",
            "group": "General",
            "prereqs": "Persuasive, Quick Draw, BAB +3"
        },
        {
            "id": "Bewildering Koan",
            "group": "General",
            "prereqs": "Bluff 1 rank, ki pool class feature, gnome"
        },
        {
            "id": "Big Game Hunter",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Black Marketeer",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Blasting Charge",
            "group": "General",
            "prereqs": "BAB +7, ability to cast 2nd-level bloodrager spells, bloodrage class feature"
        },
        {
            "id": "Blazing Channel",
            "group": "General",
            "prereqs": "Turn Undead, channel positive energy class feature"
        },
        {
            "id": "Bless Equipment",
            "group": "General",
            "prereqs": "CL 3, channel energy"
        },
        {
            "id": "Improved Bless Equipment",
            "group": "General",
            "prereqs": "Bless Equipment, CL 9, channel energy"
        },
        {
            "id": "Greater Bless Equipment",
            "group": "General",
            "prereqs": "Bless Equipment, Improved Bless Equipment, CL 12, channel energy"
        },
        {
            "id": "Blessed Striker",
            "group": "General",
            "prereqs": "BAB +11, ability to cast divine spells, alignment must be within one step of your deity's"
        },
        {
            "id": "Blight Guide",
            "group": "General",
            "prereqs": "Blight Survivalist, Skill Focus (Survival)"
        },
        {
            "id": "Blight Survivalist",
            "group": "General",
            "prereqs": "Skill Focus (Survival)"
        },
        {
            "id": "Blinding Light",
            "group": ["General","Racial"],
            "prereqs": "Inner Light, aasimar, daylight spell-like ability"
        },
        {
            "id": "Bloatmage Initiate",
            "group": "General",
            "prereqs": "Spell Focus (any school)"
        },
        {
            "id": "Blood Disciple",
            "group": "General",
            "prereqs": "Associate (a temple)."
        },
        {
            "id": "Blood of Heroes",
            "group": "General",
            "prereqs": "Heroic Fortune"
        },
        {
            "id": "Blood Ties",
            "group": "General",
            "prereqs": "Bluff 1 rank, bloodline class feature, gnome"
        },
        {
            "id": "Blood Vengeance",
            "group": "General",
            "prereqs": "Half-orc or orc, non-lawful"
        },
        {
            "id": "Bloodletting",
            "group": "General",
            "prereqs": "Worship an evil god"
        },
        {
            "id": "Blustering Bluff",
            "group": "General",
            "prereqs": "Cha 13, Bluff 1 rank, Intimidate 1 rank"
        },
        {
            "id": "Bolster Jinx",
            "group": "General",
            "prereqs": "Great Fortitude, Iron Will, or Lightning Reflexes; Halfling Jinx trait"
        },
        {
            "id": "Bolstered Resilience",
            "group": "General",
            "prereqs": "Damage reduction"
        },
        {
            "id": "Bonded Mind",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Bookish Rogue",
            "group": "General",
            "prereqs": "Minor magic rogue talent"
        },
        {
            "id": "Boon Companion",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Branded for Retribution",
            "group": "General",
            "prereqs": "Bane class feature"
        },
        {
            "id": "Bravery in Action",
            "group": "General",
            "prereqs": "Bravery class feature, worshiper of a god of luck or drink."
        },
        {
            "id": "Breadth of Experience",
            "group": ["General","Racial"],
            "prereqs": "Dwarf, elf, or gnome; 100+ years old"
        },
        {
            "id": "Brilliant Planner",
            "group": "General",
            "prereqs": "Int 13, character level 5th"
        },
        {
            "id": "Brilliant Spell Preparation",
            "group": "General",
            "prereqs": "Int 13, ability to prepare 3rd-level spells"
        },
        {
            "id": "Bristling Bull Rush",
            "group": "General",
            "prereqs": "Str 13, Improved Bull Rush, Power Attack, BAB +3"
        },
        {
            "id": "Bristling Drag",
            "group": "General",
            "prereqs": "Str 13, Improved Drag, Power Attack, BAB +1"
        },
        {
            "id": "Bully Breed",
            "group": "General",
            "prereqs": "Handle Animal 4 ranks, Intimidate 4 ranks, animal companion or mount class feature"
        },
        {
            "id": "Burning Amplification",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Burn! Burn! Burn!",
            "group": ["General", "Racial"],
            "prereqs": "Goblin, Disable Device 1 rank."
        },
        {
            "id": "Butterfly's Sting",
            "group": "General",
            "prereqs": "Combat Expertise"
        },
        {
            "id": "Calculating Mind",
            "group": "General",
            "prereqs": "Sacred Geometry, Knowledge (engineering) 5 ranks"
        },
        {
            "id": "Call Truce",
            "group": "General",
            "prereqs": "Cha 15, Persuasive, Diplomacy 5 ranks"
        },
        {
            "id": "Camouflaged Trap",
            "group": "General",
            "prereqs": "Craft (traps) 4 ranks, Survival 4 ranks"
        },
        {
            "id": "Careful Flyer",
            "group": "General",
            "prereqs": "Acrobatic, Fly 5 ranks"
        },
        {
            "id": "Careful Reader",
            "group": "General",
            "prereqs": "Linguistics 3 ranks, Spellcraft 3 ranks"
        },
        {
            "id": "Careful Sneak",
            "group": "General",
            "prereqs": "Dex 13, Stealth 3 ranks"
        },
        {
            "id": "Careful Speaker",
            "group": "General",
            "prereqs": "Wisdom 13"
        },
        {
            "id": "Cartogramancer",
            "group": "General",
            "prereqs": "Knowledge (geography) 10 ranks, ability to cast greater teleport"
        },
        {
            "id": "Cartwheel Dodge",
            "group": "General",
            "prereqs": "Improved evasion class feature, Acrobatics 12 ranks"
        },
        {
            "id": "Cat's Fall",
            "group": "General",
            "prereqs": "Dex 13, Acrobatics 1 rank"
        },
        {
            "id": "Caustic Slur",
            "group": "General",
            "prereqs": "Bluff 1 rank, favored enemy class feature, gnome"
        },
        {
            "id": "Cecaelia Focus Tattoo",
            "group": "General",
            "prereqs": "Cecaelia"
        },
        {
            "id": "Celestial Obedience",
            "group": "General",
            "prereqs": "Knowledge (planes) 3 ranks, must worship an empyreal lord"
        },
        {
            "id": "Chakra Initiate",
            "group": "General",
            "prereqs": "Ability to awaken root chakra"
        },
        {
            "id": "Chakra Adept",
            "group": "General",
            "prereqs": "Chakra Initiate, ability to awaken heart chakra"
        },
        {
            "id": "Chakra Master",
            "group": "General",
            "prereqs": "Chakra Adept, ability to awaken crown chakra"
        },
        {
            "id": "Chakra Mandala",
            "group": "General",
            "prereqs": "Ki pool"
        },
        {
            "id": "Channel Deific Essence",
            "group": "General",
            "prereqs": "Alignment Channel, channel energy 5d6, domain class feature, same alignment as patron deity associated with your deity"
        },
        {
            "id": "Channel, Improved",
            "group": "General",
            "prereqs": "Channel energy class feature"
        },
        {
            "id": "Channeled Blessing",
            "group": "General",
            "prereqs": "Blessings class feature, channel energy class feature"
        },
        {
            "id": "Channeled Revival",
            "group": "General",
            "prereqs": "Channel positive energy 6d6"
        },
        {
            "id": "Channeled Shield Wall",
            "group": "General",
            "prereqs": "Channel energy 3d6, proficiency with a shield"
        },
        {
            "id": "Channeling Scourge",
            "group": "General",
            "prereqs": "Channel energy class feature, inquisitor level 1st"
        },
        {
            "id": "Channel Ray",
            "group": "General",
            "prereqs": "Channel energy class feature"
        },
        {
            "id": "Channel Spirit",
            "group": "General",
            "prereqs": "Spirit Ridden or spirit class feature"
        },
        {
            "id": "Channeling Variance",
            "group": "General",
            "prereqs": "Domain class feature, channel energy class feature, must worship and receive spells from a deity"
        },
        {
            "id": "Charming Performance",
            "group": "General",
            "prereqs": "Cha 13, Perform (any) 1 rank, bardic performance or raging song"
        },
        {
            "id": "Charnel Soldiers",
            "group": "General",
            "prereqs": "Any teamwork feat, ability to control or create undead"
        },
        {
            "id": "Childlike",
            "group": "General",
            "prereqs": "Cha 13, halfling"
        },
        {
            "id": "Child of Two Fates",
            "group": "General",
            "prereqs": "Knowledge (local) 5 ranks, half-elf"
        },
        {
            "id": "Chilling Amplification",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "City Sprinter",
            "group": "General",
            "prereqs": "Street Smarts"
        },
        {
            "id": "Clarity of Pain",
            "group": "General",
            "prereqs": "Con 13, Improved Iron Will, Iron Will"
        },
        {
            "id": "Cleansing Burst",
            "group": "General",
            "prereqs": "Able to cast remove disease or the ability to cure disease with a mercy, channel positive energy class feature"
        },
        {
            "id": "Combat Advice",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Combat Casting",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Combat Distraction",
            "group": ["General","Racial"],
            "prereqs": "Goblin, Acrobatics 1 rank, Escape Artist 1 rank"
        },
        {
            "id": "Command Animals",
            "group": "General",
            "prereqs": "Animal domain, channel energy class feature"
        },
        {
            "id": "Command Plants",
            "group": "General",
            "prereqs": "Channel energy class feature, Plant domain"
        },
        {
            "id": "Command Undead",
            "group": "General",
            "prereqs": "Channel negative energy class feature"
        },
        {
            "id": "Companion Figurine",
            "group": "General",
            "prereqs": "Handle Animal 1 rank, own a figurine of wondrous power."
        },
        {
            "id": "Compelling Harmonies",
            "group": "General",
            "prereqs": "Basic Harmony, Perform (keyboard, percussion, sing, string, or wind) 10 ranks, bardic performance or raging song"
        },
        {
            "id": "Compounded Pain",
            "group": "General",
            "prereqs": "Mesmerist level 13th, painful stare class feature"
        },
        {
            "id": "Conceal Scent",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Conceal Spell",
            "group": "General",
            "prereqs": "Deceitful, Bluff 1 rank, Disguise 1 rank, Sleight of Hand 1 rank"
        },
        {
            "id": "Improved Conceal Spell",
            "group": "General",
            "prereqs": "Conceal Spell, Bluff 5 ranks, Disguise 5 ranks, Sleight of Hand 10 ranks, ability to cast 3rd level spells or use a 3rd-level spell-like ability"
        },
        {
            "id": "Confabulist",
            "group": "General",
            "prereqs": "Bluff 9 ranks, Sense Motive 9 ranks"
        },
        {
            "id": "Confounding Tumble Deed",
            "group": "General",
            "prereqs": "Amateur Swashbuckler or panache class feature; Canny Tumble, Acrobatics 7 ranks"
        },
        {
            "id": "Conscript",
            "group": "General",
            "prereqs": "Serf in service to a lord"
        },
        {
            "id": "Contingent Channeling",
            "group": "General",
            "prereqs": "True healer class feature, Selective Channeling"
        },
        {
            "id": "Conviction",
            "group": "General",
            "prereqs": "Cha 13"
        },
        {
            "id": "Cooperative Counterspelling",
            "group": "General",
            "prereqs": "Spellcraft 5 ranks, racial spell-like ability of 1st level or higher"
        },
        {
            "id": "Cooperative Crafting",
            "group": "General",
            "prereqs": "1 rank in any Craft skill, any item creation feat"
        },
        {
            "id": "Cooperative Disabling",
            "group": ["General", "Teamwork"],
            "prereqs": "Disable Device 1 rank, trapfinding class feature"
        },
        {
            "id": "Coordinated Blast",
            "group": "General",
            "prereqs": "Spellcraft 5 ranks, any racial spell-like ability"
        },
        {
            "id": "Corsair",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Cosmopolitan",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Counterpoint to Inspiration",
            "group": "General",
            "prereqs": "Basic Harmony, Compelling Harmonies, Perform (keyboard, percussion, sing, string, or wind) 10 ranks, bardic performance or raging song"
        },
        {
            "id": "Counterspell, Improved",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Coven Caster",
            "group": "General",
            "prereqs": "Changeling"
        },
        {
            "id": "Cover Tracks",
            "group": "General",
            "prereqs": "Survival 3 ranks"
        },
        {
            "id": "Craft Cybernetics",
            "group": "General",
            "prereqs": "Technologist, Heal 9 ranks, Knowledge (engineering) 9 ranks"
        },
        {
            "id": "Craft Pharmaceutical",
            "group": "General",
            "prereqs": "Technologist, Heal 9 ranks, Knowledge (nature) 9 ranks"
        },
        {
            "id": "Craft Technological Arms and Armor",
            "group": "General",
            "prereqs": "Technologist, Craft (mechanical) 7 ranks, Knowledge (engineering) 7 ranks"
        },
        {
            "id": "Craft Technological Item",
            "group": "General",
            "prereqs": "Technologist, Craft (mechanical) 5, Knowledge (engineering) 5 ranks"
        },
        {
            "id": "Cranial Adjustment",
            "group": "General",
            "prereqs": "Deft Hands or Trepanation"
        },
        {
            "id": "Cranial Implantation",
            "group": "General",
            "prereqs": "Self-Sufficient or Trepanation, Heal 7 ranks"
        },
        {
            "id": "Create Enhanced Firearm",
            "group": "General",
            "prereqs": "Craft Magic Arms and Armor; Craft (weapons) 1 rank or Gunsmithing."
        },
        {
            "id": "Create Reliquary Arms and Shields",
            "group": "General",
            "prereqs": "Craft Magic Arms and Armor, ability to cast consecrate or desecrate"
        },
        {
            "id": "Create Sanguine Elixir",
            "group": "General",
            "prereqs": "Cha 15, Brew Potion, Craft (alchemy) 12 ranks, sorcerer 3"
        },
        {
            "id": "Criminal Reputation",
            "group": "General",
            "prereqs": "Diplomacy 5 ranks, Intimidate 5 ranks"
        },
        {
            "id": "Crusader's Flurry",
            "group": "General",
            "prereqs": "Channel energy and flurry of blows class feature, Weapon Focus with deity's favored weapon"
        },
        {
            "id": "Cutting Humiliation",
            "group": "General",
            "prereqs": "Persuasive, Intimidate 5 ranks"
        },
        {
            "id": "Cypher Magic",
            "group": "General",
            "prereqs": "Int 15, Scribe Scroll."
        },
        {
            "id": "Cypher Script",
            "group": "General",
            "prereqs": "Knowledge (arcana) 1 rank, Linguistics 1 rank, Spellcraft 1 rank, spellbook class feature"
        },
        {
            "id": "Dark Adept",
            "group": "General",
            "prereqs": "Drow, character level 3"
        },
        {
            "id": "Darkness Trick",
            "group": "General",
            "prereqs": "Use Magic Device 5 ranks, ability to cast darkness"
        },
        {
            "id": "Deadly Dealer",
            "group": "General",
            "prereqs": "Arcane Strike, Sleight of Hand 5 ranks"
        },
        {
            "id": "Deadly Trap",
            "group": "General",
            "prereqs": "Craft (traps) 8 ranks, Survival 8 ranks"
        },
        {
            "id": "Deadly Troupe",
            "group": "General",
            "prereqs": "Perform (act) or Perform (dance) 3 ranks, human"
        },
        {
            "id": "Death's Host",
            "group": "General",
            "prereqs": "Spell Focus (necromancy)"
        },
        {
            "id": "Deceitful",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Deceptive Exchange",
            "group": "General",
            "prereqs": "Improved Feint"
        },
        {
            "id": "Deep Diver",
            "group": "General",
            "prereqs": "Endurance"
        },
        {
            "id": "Deep Drinker",
            "group": "General",
            "prereqs": "Con 13, monk 11, drunken ki class feature"
        },
        {
            "id": "Deepsight",
            "group": "General",
            "prereqs": "Darkvision 60 feet"
        },
        {
            "id": "Defending Eidolon",
            "group": "General",
            "prereqs": "Shield ally class feature"
        },
        {
            "id": "Deft Catcher",
            "group": "General",
            "prereqs": "Skill Focus (Sleight of Hand)"
        },
        {
            "id": "Deft Hands",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Deific Obedience",
            "group": "General",
            "prereqs": "Knowledge (religion) 3 ranks, must worship a deity."
        },
        {
            "id": "Delay Blast",
            "group": "General",
            "prereqs": "Base attack bonus +3, kinetic blast class feature"
        },
        {
            "id": "Demonic Obedience",
            "group": "General",
            "prereqs": "Knowledge (planes) 3 ranks, must worship a demon lord"
        },
        {
            "id": "Deny Death",
            "group": "General",
            "prereqs": "Ki pool, Endurance"
        },
        {
            "id": "Desert Dweller",
            "group": "General",
            "prereqs": "Favored terrain (desert) class feature"
        },
        {
            "id": "Destroy Identity",
            "group": "General",
            "prereqs": "Critical Focus, BAB +11"
        },
        {
            "id": "Destructive Dispel",
            "group": "General",
            "prereqs": "Ability to cast dispel magic or greater dispel magic, CL 11"
        },
        {
            "id": "Detect Expertise",
            "group": "General",
            "prereqs": "Int 13; ability to cast detect chaos, detect evil, detect good, detect law, or detect magic"
        },
        {
            "id": "Diehard",
            "group": "General",
            "prereqs": "Endurance"
        },
        {
            "id": "Die for Your Master",
            "group": "General",
            "prereqs": "Tumor familiar alchemist discovery"
        },
        {
            "id": "Dilettante",
            "group": "General",
            "prereqs": "2 ranks each in 5 different Knowledge skills"
        },
        {
            "id": "Dimensional Agility",
            "group": "General",
            "prereqs": "Abundant step class feature or ability to cast dimension door"
        },
        {
            "id": "Dimensional Assault",
            "group": "General",
            "prereqs": "Dimensional Agility"
        },
        {
            "id": "Dimensional Dervish",
            "group": "General",
            "prereqs": "Dimensional Assault, BAB +6"
        },
        {
            "id": "Dimensional Maneuvers",
            "group": "General",
            "prereqs": "Dimensional Dervish, BAB +9"
        },
        {
            "id": "Dimensional Savant",
            "group": "General",
            "prereqs": "Dimensional Dervish, BAB +9"
        },
        {
            "id": "Diplomatic Ruse",
            "group": "General",
            "prereqs": "Diplomacy 3 ranks, human"
        },
        {
            "id": "Disable Dweomer",
            "group": "General",
            "prereqs": "Disable Device 5 ranks, Use Magic Device 5 ranks, trapfinding"
        },
        {
            "id": "Disarming Threat Deed",
            "group": "General",
            "prereqs": "Amateur Swashbuckler or panache class feature; Diplomacy 2 ranks, Intimidate 2 ranks"
        },
        {
            "id": "Disciplinary Devotee",
            "group": "General",
            "prereqs": "Psychic discipline class feature"
        },
        {
            "id": "Disconcerting Knowledge",
            "group": "General",
            "prereqs": "Bardic knowledge class ability or Knowledge domain, Knowledge (any two) 3 ranks each"
        },
        {
            "id": "Discordant Voice",
            "group": "General",
            "prereqs": "Bardic performance class feature, Perform (oratory or sing) 10 ranks"
        },
        {
            "id": "Dislocate",
            "group": "General",
            "prereqs": "Con 13"
        },
        {
            "id": "Disorienting Maneuver",
            "group": "General",
            "prereqs": "Dodge, Acrobatics 5 ranks"
        },
        {
            "id": "Dispel Synergy",
            "group": "General",
            "prereqs": "Spellcraft 5 ranks"
        },
        {
            "id": "Dispelling Fist",
            "group": "General",
            "prereqs": "Improved Unarmed Strike, ability to cast dispel magic, BAB +11, CL 7"
        },
        {
            "id": "Disposable Weapon",
            "group": "General",
            "prereqs": "BAB +1, proficient with weapon, weapon made of primitive material"
        },
        {
            "id": "Disruptive Recall",
            "group": "General",
            "prereqs": "Spell recall class feature, Spellcraft 5 ranks"
        },
        {
            "id": "Distant Delivery",
            "group": "General",
            "prereqs": "Deliver touch spells class feature, phantom class feature"
        },
        {
            "id": "Distant Jinx",
            "group": "General",
            "prereqs": "Halfling Jinx trait"
        },
        {
            "id": "Distant Spell Link",
            "group": "General",
            "prereqs": "Enlarge Spell or Reach Spell; animal companion, eidolon, familiar, or other allied creature with the share spells ability"
        },
        {
            "id": "Diverse Obedience",
            "group": "General",
            "prereqs": "Deific Obedience, Knowledge (religion) 5 ranks, alignment must match that of your worshiped deity."
        },
        {
            "id": "Divination Guide",
            "group": "General",
            "prereqs": "Ability to cast augury or divination, CL 3"
        },
        {
            "id": "Divine Communion",
            "group": "General",
            "prereqs": "Wisdom 13, alignment must match that of your worshiped deity."
        },
        {
            "id": "Divine Deception",
            "group": "General",
            "prereqs": "Knowledge (religion) 5 ranks, Use Magic Device 5 ranks"
        },
        {
            "id": "Divine Defiance",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Divine Interference",
            "group": "General",
            "prereqs": "Divine spellcaster, CL 10"
        },
        {
            "id": "Divine Protection",
            "group": "General",
            "prereqs": "Cha 13, Knowledge (religion) 5 ranks"
        },
        {
            "id": "Diviner's Delving",
            "group": "General",
            "prereqs": "Spell Focus (divination)"
        },
        {
            "id": "Dog Killer-Horse Hunter",
            "group": ["General","Racial"],
            "prereqs": "Goblin, Handle Animal 1 rank"
        },
        {
            "id": "Double Bane",
            "group": "General",
            "prereqs": "Bane class feature, Two-Weapon Fighting"
        },
        {
            "id": "Draconic Defender",
            "group": "General",
            "prereqs": "Con 17, Toughness"
        },
        {
            "id": "Draconic Discipline",
            "group": "General",
            "prereqs": "Wis 17, base Will +10, any lawful alignment, dragon type"
        },
        {
            "id": "Dragonbane Aura",
            "group": "General",
            "prereqs": "Aura of courage class feature, CL 8"
        },
        {
            "id": "Drunkard's Recovery",
            "group": "General",
            "prereqs": "Con 13"
        },
        {
            "id": "Dual Enhancement",
            "group": "General",
            "prereqs": "Two-Weapon Fighting; divine bond (weapon) or sacred weapon class feature"
        },
        {
            "id": "Eagle-Eyed",
            "group": "General",
            "prereqs": "Perception 3 ranks"
        },
        {
            "id": "Eagle Eyes",
            "group": "General",
            "prereqs": "Wis 13, keen senses racial trait"
        },
        {
            "id": "Earth Magic",
            "group": "General",
            "prereqs": "Ability to cast 1st-level spells, favored terrain class feature"
        },
        {
            "id": "Echoes of the First World",
            "group": "General",
            "prereqs": "Knowledge (nature) 2 ranks, gnome subtype"
        },
        {
            "id": "Eclectic",
            "group": "General",
            "prereqs": "Human"
        },
        {
            "id": "Eclipse Strike",
            "group": ["General","Racial"],
            "prereqs": "Tiefling, darkness racial spell-like ability"
        },
        {
            "id": "Efficient Focus Shift",
            "group": "General",
            "prereqs": "Occultist level 7th"
        },
        {
            "id": "Effortless Trickery",
            "group": "General",
            "prereqs": "Gnome"
        },
        {
            "id": "Eidolon Mount",
            "group": "General",
            "prereqs": "Eidolon (quadruped or serpentine base form)"
        },
        {
            "id": "Eldritch Assault",
            "group": "General",
            "prereqs": "Blind-Fight, Improved Initiative"
        },
        {
            "id": "Eldritch Eye",
            "group": "General",
            "prereqs": "Knowledge (arcana) 4 ranks, ability to cast arcane spells"
        },
        {
            "id": "Eldritch Heritage",
            "group": "General",
            "prereqs": "Cha 13, Skill Focus in bloodline skill, character level 3"
        },
        {
            "id": "Eldritch Heritage, Improved",
            "group": "General",
            "prereqs": "Cha 15, Eldritch Heritage, character level 11"
        },
        {
            "id": "Eldritch Heritage, Greater",
            "group": "General",
            "prereqs": "Cha 17, Eldritch Heritage, Improved Eldritch Heritage, character level 17"
        },
        {
            "id": "Elemental Channel",
            "group": "General",
            "prereqs": "Channel energy class feature"
        },
        {
            "id": "Elemental Conversion",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Elemental Focus",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Elemental Focus, Greater",
            "group": "General",
            "prereqs": "Elemental Focus"
        },
        {
            "id": "Elongated Cranium",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Emotional Conduit",
            "group": "General",
            "prereqs": "Shared consciousness class feature"
        },
        {
            "id": "Empath",
            "group": "General",
            "prereqs": "Psychic Sensitivity or ability to cast psychic spells, Perception 1 rank or Sense Motive 1 rank"
        },
        {
            "id": "Endurance",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Endure Pain",
            "group": "General",
            "prereqs": "Survived being tortured 10 or more times"
        },
        {
            "id": "Energized Wild Shape",
            "group": "General",
            "prereqs": "Wis 19, BAB +6, wild shape class feature"
        },
        {
            "id": "Energy Channel",
            "group": "General",
            "prereqs": "Channel energy class feature; Air, Earth, Fire, or Water domain or blessing"
        },
        {
            "id": "Enhanced Gnome Magic",
            "group": "General",
            "prereqs": "Cha 13, Knowledge (nature) 3 ranks, gnome, gnome magic racial trait"
        },
        {
            "id": "Eternal Enmity",
            "group": "General",
            "prereqs": "Knowledge (varies) 3 ranks, hatred racial trait"
        },
        {
            "id": "Evolved Companion",
            "group": "General",
            "prereqs": "Cha 13, animal companion class feature"
        },
        {
            "id": "Evolved Familiar",
            "group": "General",
            "prereqs": "Int 13, Cha 13, familiar class feature"
        },
        {
            "id": "Evolved Summoned Monster",
            "group": "General",
            "prereqs": "Augment Summoning, Spell Focus (conjuration), ability to cast summon monster I"
        },
        {
            "id": "Exorcising Mutilation",
            "group": "General",
            "prereqs": "Con 15, Clarity of Pain"
        },
        {
            "id": "Exorcist",
            "group": "General",
            "prereqs": "Iron Will, can't have a patron deity"
        },
        {
            "id": "Exotic Heritage",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Expert Cartographer",
            "group": "General",
            "prereqs": "Craft (maps) 3 ranks"
        },
        {
            "id": "Expert Explorer",
            "group": "General",
            "prereqs": "Knowledge (nature) or Survival 5 ranks"
        },
        {
            "id": "Expert Salvager",
            "group": "General",
            "prereqs": "Craft (any) 2 ranks, Spellcraft 2 ranks"
        },
        {
            "id": "Extended Animal Focus",
            "group": "General",
            "prereqs": "Animal focus class feature"
        },
        {
            "id": "Extended Aspects",
            "group": "General",
            "prereqs": "Shifter aspect class feature"
        },
        {
            "id": "Expanded Arcana",
            "group": "General",
            "prereqs": "Caster level 1st, see feat"
        },
        {
            "id": "Expanded Metakinesis",
            "group": "General",
            "prereqs": "Kinetic blast class feature, metakinesis class feature."
        },
        {
            "id": "Expanded Phrenic Pool",
            "group": "General",
            "prereqs": "Phrenic pool class feature"
        },
        {
            "id": "Expanded Preparation",
            "group": "General",
            "prereqs": "Arcanist 1"
        },
        {
            "id": "Expanded Summon Monster",
            "group": "General",
            "prereqs": "Ability to cast a summon monster spell."
        },
        {
            "id": "Expansive Trap Ability",
            "group": "General",
            "prereqs": "Ability to use ranger traps or land mines"
        },
        {
            "id": "Expeditious Sleuth",
            "group": "General",
            "prereqs": "Perception 3 ranks, inspiration or lore master class feature"
        },
        {
            "id": "Experienced Vagabond",
            "group": "General",
            "prereqs": "Bluff 1 rank, Knowledge (local) 1 rank, member of an underclass"
        },
        {
            "id": "Exploit Lore",
            "group": "General",
            "prereqs": "Monster lore class feature, BAB +11"
        },
        {
            "id": "Exquisite Sneak",
            "group": "General",
            "prereqs": "Dex 15, Careful Sneak, Stealth 6 ranks"
        },
        {
            "id": "Extend Resonant Power",
            "group": "General",
            "prereqs": "Caster level 7th, mental focus class feature"
        },
        {
            "id": "Extended Animal Focus",
            "group": "General",
            "prereqs": "Animal focus class feature"
        },
        {
            "id": "Extended Bane",
            "group": "General",
            "prereqs": "Bane class feature"
        },
        {
            "id": "Extended Scrying",
            "group": "General",
            "prereqs": "Ability to cast a spell of the scrying subschool"
        },
        {
            "id": "Extended Stare",
            "group": "General",
            "prereqs": "Hypnotic stare class feature"
        },
        {
            "id": "Extra Amplification",
            "group": "General",
            "prereqs": "Phrenic amplification class feature"
        },
        {
            "id": "Extra Arcana",
            "group": "General",
            "prereqs": "Magus arcana class feature"
        },
        {
            "id": "Extra Arcane Pool",
            "group": "General",
            "prereqs": "Arcane pool class feature"
        },
        {
            "id": "Extra Arcanist Exploit",
            "group": "General",
            "prereqs": "Arcanist exploit class feature"
        },
        {
            "id": "Extra Bane",
            "group": "General",
            "prereqs": "Bane class feature"
        },
        {
            "id": "Extra Bombs",
            "group": "General",
            "prereqs": "Bomb class feature"
        },
        {
            "id": "Extra Cantrips or Orisons",
            "group": "General",
            "prereqs": "Ability to cast cantrips or orisons"
        },
        {
            "id": "Extra Channel",
            "group": "General",
            "prereqs": "Channel energy class feature"
        },
        {
            "id": "Extra Contingency",
            "group": "General",
            "prereqs": "Character level 19th"
        },
        {
            "id": "Extra Discovery",
            "group": "General",
            "prereqs": "Discovery class feature"
        },
        {
            "id": "Extra Evolution",
            "group": "General",
            "prereqs": "Eidolon class feature"
        },
        {
            "id": "Extra Focus Power",
            "group": "General",
            "prereqs": "Focus power class feature"
        },
        {
            "id": "Extra Gnome Magic",
            "group": "General",
            "prereqs": "Cha 13, Gnome"
        },
        {
            "id": "Extra Hex",
            "group": "General",
            "prereqs": "Hex class feature"
        },
        {
            "id": "Extra Inspiration",
            "group": "General",
            "prereqs": "Amateur Investigator or inspiration class feature"
        },
        {
            "id": "Extra Investigator Talent",
            "group": "General",
            "prereqs": "Investigator talent class feature"
        },
        {
            "id": "Extra Ki",
            "group": "General",
            "prereqs": "Ki pool class feature"
        },
        {
            "id": "Extra Lay On Hands",
            "group": "General",
            "prereqs": "Lay on hands class feature"
        },
        {
            "id": "Extra Martial Flexibility",
            "group": "General",
            "prereqs": "Martial flexibility class feature"
        },
        {
            "id": "Extra Mental Focus",
            "group": "General",
            "prereqs": "Mental focus class feature"
        },
        {
            "id": "Extra Mercy",
            "group": "General",
            "prereqs": "Mercy class feature"
        },
        {
            "id": "Extra Mesmerist Tricks",
            "group": "General",
            "prereqs": "Mesmerist trick class feature"
        },
        {
            "id": "Extra Panache",
            "group": "General",
            "prereqs": "Amateur Swashbuckler or panache class feature"
        },
        {
            "id": "Extra Performance",
            "group": "General",
            "prereqs": "Bardic performance class feature"
        },
        {
            "id": "Extra Rage",
            "group": "General",
            "prereqs": "Rage class feature"
        },
        {
            "id": "Extra Rage Power",
            "group": "General",
            "prereqs": "Rage power class feature"
        },
        {
            "id": "Extra Ranger Trap",
            "group": "General",
            "prereqs": "Trap class feature"
        },
        {
            "id": "Extra Reservoir",
            "group": "General",
            "prereqs": "Arcane reservoir class feature"
        },
        {
            "id": "Extra Revelation",
            "group": "General",
            "prereqs": "Revelation class feature"
        },
        {
            "id": "Extra Rogue Talent",
            "group": "General",
            "prereqs": "Rogue talent class feature"
        },
        {
            "id": "Extra Slayer Talent",
            "group": "General",
            "prereqs": "Slayer talent class feature"
        },
        {
            "id": "Extra Summons",
            "group": "General",
            "prereqs": "Ability to cast summon monster as a spell-like ability, summoner 1"
        },
        {
            "id": "Extra Touch Treatment",
            "group": "General",
            "prereqs": "Touch treatment class feature"
        },
        {
            "id": "Extra Variance",
            "group": "General",
            "prereqs": "Channeling Variance or variant channeling ability, channel energy class feature."
        },
        {
            "id": "Extra Wild Talent",
            "group": "General",
            "prereqs": "Kineticist level 6th"
        },
        {
            "id": "Extraplanar Conjunction",
            "group": "General",
            "prereqs": "Any racial spell-like ability, outsider"
        },
        {
            "id": "Eyes of Judgment",
            "group": "General",
            "prereqs": "Detect alignment ability class feature, CL 6"
        },
        {
            "id": "Eyes of the Twilight",
            "group": "General",
            "prereqs": "Sharp Senses, Perception 7 ranks, keen senses racial trait, low-light vision"
        },
        {
            "id": "Eye for Ingredients",
            "group": "General",
            "prereqs": "Eschew Materials, Appraise 6 ranks, Spellcraft 6 ranks"
        },
        {
            "id": "Falconry Master",
            "group": "General",
            "prereqs": "Cha 13, Animal Affinity, animal companion class feature"
        },
        {
            "id": "False Trail",
            "group": "General",
            "prereqs": "Survival 3 ranks"
        },
        {
            "id": "Familiar Bond",
            "group": "General",
            "prereqs": "Iron Will"
        },
        {
            "id": "Improved Familiar Bond",
            "group": "General",
            "prereqs": "Familiar Bond, Iron Will"
        },
        {
            "id": "Familiar, Improved",
            "group": "General",
            "prereqs": "Ability to acquire a familiar"
        },
        {
            "id": "Far-Roaming Familiar",
            "group": "General",
            "prereqs": "Int 13, have a familiar"
        },
        {
            "id": "Famine Tolerance",
            "group": "General",
            "prereqs": "Moroi or nosferatu vampire"
        },
        {
            "id": "Fascination Jinx",
            "group": "General",
            "prereqs": "Bardic performance class feature, Halfling Jinx trait"
        },
        {
            "id": "Fast Crawl",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Fast Drinker",
            "group": "General",
            "prereqs": "Con 18, drunken ki class feature"
        },
        {
            "id": "Fast Empathy",
            "group": "General",
            "prereqs": "Handle Animal 5 ranks, wild empathy class feature"
        },
        {
            "id": "Fast Healer",
            "group": "General",
            "prereqs": "Con 13, Diehard, Endurance"
        },
        {
            "id": "Favored Defense",
            "group": "General",
            "prereqs": "Favored enemy class feature"
        },
        {
            "id": "Favored Enemy Spellcasting",
            "group": "General",
            "prereqs": "Ability to cast spells"
        },
        {
            "id": "Favored Judgment",
            "group": "General",
            "prereqs": "Wis 13, judgment class feature"
        },
        {
            "id": "Fear Eater",
            "group": "General",
            "prereqs": "Cha 13, Iron Will, no immunity to fear effects"
        },
        {
            "id": "Fearless Aura",
            "group": "General",
            "prereqs": "Aura of courage class feature, CL 8"
        },
        {
            "id": "Fearsome Finish",
            "group": "General",
            "prereqs": "Intimidating Prowess"
        },
        {
            "id": "Feign Curse",
            "group": "General",
            "prereqs": "Deceitful, Bluff 5 ranks, Spellcraft 1 rank"
        },
        {
            "id": "Ferocious Horde",
            "group": "General",
            "prereqs": "Orc, ferocity racial trait"
        },
        {
            "id": "Fey Foundling",
            "group": "General",
            "prereqs": "Can only select at 1st level"
        },
        {
            "id": "Fey-Guarded",
            "group": "General",
            "prereqs": "Knowledge (nature) or Knowledge (planes) 3 ranks"
        },
        {
            "id": "Fey Insight",
            "group": "General",
            "prereqs": "Wis 13; Knowledge (nature) or Knowledge (planes 2 ranks)"
        },
        {
            "id": "Fey Performance",
            "group": "General",
            "prereqs": "Bardic performance class ability"
        },
        {
            "id": "Fey Spell Lore",
            "group": "General",
            "prereqs": "Cha 13, Spellcraft 1 rank, ability to cast druid spells"
        },
        {
            "id": "Fey Spell Versatility",
            "group": "General",
            "prereqs": "Cha 13, Spellcraft 1 rank, ability to cast ranger spells"
        },
        {
            "id": "Field Repair",
            "group": "General",
            "prereqs": "Craft 4 ranks"
        },
        {
            "id": "Fiendish Darkness",
            "group": ["General","Racial"],
            "prereqs": "Darkness spell-like ability, tiefling"
        },
        {
            "id": "Fiendish Darkness, Improved",
            "group": ["General","Racial"],
            "prereqs": "Fiendish Darkness, darkness spell-like ability, CL 3, tiefling"
        },
        {
            "id": "Fiendish Facade",
            "group": ["General","Racial"],
            "prereqs": "Tiefling, must be taken at 1st level"
        },
        {
            "id": "Fiendish Heritage",
            "group": ["General","Racial"],
            "prereqs": "Tiefling, must be taken at 1st level"
        },
        {
            "id": "Fiendish Resilience",
            "group": ["General","Racial"],
            "prereqs": "Dex 13, evasion class feature, tiefling"
        },
        {
            "id": "Fiendish Sorcery, Improved",
            "group": ["General","Racial"],
            "prereqs": "Fiendish Darkness, darkness spell-like ability, CL 3, tiefling"
        },
        {
            "id": "Fight On",
            "group": ["General","Racial"],
            "prereqs": "Con 13; dwarf, Half-orc, or orc"
        },
        {
            "id": "Fire God's Blessing",
            "group": ["General","Racial"],
            "prereqs": "Half-orc or orc, worshiper of a fire god"
        },
        {
            "id": "Fire Music",
            "group": "General",
            "prereqs": "Spellcraft 5 ranks, ability to cast bard spells, ability to cast at least one arcane fire spell from another class"
        },
        {
            "id": "Fleet",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Flensing Strike",
            "group": "General",
            "prereqs": "Sneak attack +3d6, bleeding sneak attack rogue trick or bleed universal monster ability."
        },
        {
            "id": "Flexible Hex",
            "group": "General",
            "prereqs": "Wandering hex class feature"
        },
        {
            "id": "Flexible Shadow Jump",
            "group": "General",
            "prereqs": "Shadow jump shadowdancer class feature"
        },
        {
            "id": "Flexible Wizardry",
            "group": "General",
            "prereqs": "Spell Mastery, wizard 1"
        },
        {
            "id": "Improved Flexible Wizardry",
            "group": "General",
            "prereqs": "Flexible Wizardry, wizard 8"
        },
        {
            "id": "Flow of Elements",
            "group": "General",
            "prereqs": "Ability to cast spells; ifrit, oread, sylph, or undine"
        },
        {
            "id": "Focused Disbelief",
            "group": "General",
            "prereqs": "Divine Defiance"
        },
        {
            "id": "Focused Eidolon",
            "group": "General",
            "prereqs": "Shield ally class feature"
        },
        {
            "id": "Focused Inspiration",
            "group": "General",
            "prereqs": "Inspiration class feature, keen recollection class feature"
        },
        {
            "id": "Focused Phantom",
            "group": "General",
            "prereqs": "Spiritual interference class feature"
        },
        {
            "id": "Fool Magic",
            "group": "General",
            "prereqs": "Deceitful, Disguise 1 rank, Use Magic Device 1 rank"
        },
        {
            "id": "Force Dash",
            "group": "General",
            "prereqs": "BAB +3, ability to cast 2nd-level arcane spells, ability to cast at least one arcane force spell"
        },
        {
            "id": "Foebane Magic",
            "group": "General",
            "prereqs": "Ability to cast 1st-level spells, favored enemy"
        },
        {
            "id": "Formula Recollection",
            "group": "General",
            "prereqs": "Spellcraft 5 ranks, keen recollection class feature"
        },
        {
            "id": "Fortune Teller",
            "group": "General",
            "prereqs": "Ability to cast divination spells"
        },
        {
            "id": "Fox Shape",
            "group": "General",
            "prereqs": "Cha 13, BAB +3, kitsune"
        },
        {
            "id": "Free Spirit",
            "group": "General",
            "prereqs": "Cha 13, chaotic alignment"
        },
        {
            "id": "Friendly Switch",
            "group": "General",
            "prereqs": "BAB +1"
        },
        {
            "id": "Frightful Shape",
            "group": "General",
            "prereqs": "Wis 19, BAB +9, wild shape"
        },
        {
            "id": "Furious Finish",
            "group": "General",
            "prereqs": "Rage class feature, Vital Strike, BAB +6"
        },
        {
            "id": "Galley Slave",
            "group": "General",
            "prereqs": "Profession (sailor) 1 rank, current or former galley slave"
        },
        {
            "id": "Gaze Reflection",
            "group": "General",
            "prereqs": "Spellcraft 10 ranks, bold stare and mesmerist tricks class features"
        },
        {
            "id": "Gliding Steps",
            "group": "General",
            "prereqs": "Dodge, Mobility, Nimble Moves, ki pool"
        },
        {
            "id": "Glorious Heat",
            "group": "General",
            "prereqs": "Ability to cast divine spells, CL 5"
        },
        {
            "id": "Gnome Trickster",
            "group": "General",
            "prereqs": "Cha 13, gnome, gnome magic racial trait"
        },
        {
            "id": "Godless Healing",
            "group": "General",
            "prereqs": "Cannot have a patron deity"
        },
        {
            "id": "Go Unnoticed",
            "group": "General",
            "prereqs": "Dex 13, Small size or smaller"
        },
        {
            "id": "Grant Initiative",
            "group": "General",
            "prereqs": "Cunning initiative class feature"
        },
        {
            "id": "Grappled Caster",
            "group": "General",
            "prereqs": "Combat Casting"
        },
        {
            "id": "Grasping Tail",
            "group": "General",
            "prereqs": "Must have a tail"
        },
        {
            "id": "Lashing Tail",
            "group": "General",
            "prereqs": "Grasping Tail, must have a tail"
        },
        {
            "id": "Mischievous Tail",
            "group": "General",
            "prereqs": "Dex 15, Grasping Tail, must have a tail"
        },
        {
            "id": "Gravitational Vital Strike",
            "group": "General",
            "prereqs": "Vital Strike; Heavy Gravity Acclimation* or Light"
        },
        {
            "id": "Gravity Acclimation*",
            "group": "General",
            "prereqs": "Heavy Gravity Acclimation Str 17 or Endurance"
        },
        {
            "id": "Great Fortitude",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Great Fortitude, Improved",
            "group": "General",
            "prereqs": "Great Fortitude"
        },
        {
            "id": "Greater Channel Smite",
            "group": "General",
            "prereqs": "Channel Smite, BAB +8"
        },
        {
            "id": "Greater Mercy",
            "group": "General",
            "prereqs": "Cha 13, lay on hands class feature, mercy class feature"
        },
        {
            "id": "Greater Wild Empathy",
            "group": "General",
            "prereqs": "Knowledge (nature) 5 ranks, wild empathy class feature"
        },
        {
            "id": "Green Faith Acolyte",
            "group": "General",
            "prereqs": "Follower of the Green Faith"
        },
        {
            "id": "Groundling",
            "group": "General",
            "prereqs": "Cha 13, gnome, gnome magic racial trait"
        },
        {
            "id": "Group Deliver Touch Spells",
            "group": "General",
            "prereqs": "Group Shared Spells, have a familiar with the share spells and deliver touch spells abilities"
        },
        {
            "id": "Group Shared Spells",
            "group": "General",
            "prereqs": "Have a familiar with the share spells ability"
        },
        {
            "id": "Guided Hand",
            "group": "General",
            "prereqs": "Channel Smite, proficiency with deity's chosen weapon"
        },
        {
            "id": "Guild Partner",
            "group": "General",
            "prereqs": "Associate (a guild)."
        },
        {
            "id": "Gunslinger",
            "group": "General",
            "prereqs": "BAB +4, Weapon Focus (any firearm), proficiency with any firearm"
        },
        {
            "id": "Gunsmithing",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Hand's Autonomy",
            "group": "General",
            "prereqs": "Possessed Hand"
        },
        {
            "id": "Hand's Detachment",
            "group": "General",
            "prereqs": "Hand’s Autonomy, Possessed Hand"
        },
        {
            "id": "Hand's Knowledge",
            "group": "General",
            "prereqs": "Possessed Hand"
        },
        {
            "id": "Hand's Sight",
            "group": "General",
            "prereqs": "Possessed Hand"
        },
        {
            "id": "Harmonic Sage",
            "group": "General",
            "prereqs": "Bardic performance class feature, Knowledge (engineering) 5 ranks"
        },
        {
            "id": "Harmonic Spell",
            "group": "General",
            "prereqs": "Bardic performance ability"
        },
        {
            "id": "Harrowed",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Harrowed Summoning",
            "group": "General",
            "prereqs": "Harrowed"
        },
        {
            "id": "Haruspicy",
            "group": "General",
            "prereqs": "Knowledge (religion) 3 ranks"
        },
        {
            "id": "Hell Knight Aegis",
            "group": "General",
            "prereqs": "Heavy Armor Proficiency, BAB +5, allegiance to a Hell Knight order"
        },
        {
            "id": "Hell Knight Obedience",
            "group": "General",
            "prereqs": "Knowledge (planes) 3 ranks, allegiance to a Hell Knight order"
        },
        {
            "id": "Hell Knight Obsession",
            "group": "General",
            "prereqs": "Hell Knight Obedience, Knowledge (planes) 3 ranks, allegiance to a Hell Knight order"
        },
        {
            "id": "Hellcat Stealth",
            "group": "General",
            "prereqs": "Skill Focus (Stealth), Stealth 6 ranks"
        },
        {
            "id": "Helpless Prisoner",
            "group": "General",
            "prereqs": "Bluff 5 ranks, Escape Artist 1 rank, gnome"
        },
        {
            "id": "Hermean Blood",
            "group": "General",
            "prereqs": "Can only select at 1st level"
        },
        {
            "id": "Hero's Fortune",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Heroic Defiance",
            "group": "General",
            "prereqs": "Diehard, Endurance, base Fortitude save +8"
        },
        {
            "id": "Heroic Recovery",
            "group": "General",
            "prereqs": "Diehard, Endurance, base Fortitude save +4"
        },
        {
            "id": "Hidden Presence",
            "group": "General",
            "prereqs": "Int or Cha 17, ability to cast possession or"
        },
        {
            "id": "Hide Worker",
            "group": "General",
            "prereqs": "Craft (armor) 3 ranks, Knowledge (nature)"
        },
        {
            "id": "Manipulative Presence",
            "group": "General",
            "prereqs": "Int or Cha 19, Hidden Presence"
        },
        {
            "id": "Intrusive Presence",
            "group": "General",
            "prereqs": "Int or Cha 21, Hidden Presence, Manipulative Presence"
        },
        {
            "id": "Hide-Out",
            "group": "General",
            "prereqs": "Associate (an assassins guild)."
        },
        {
            "id": "High Magic Focus",
            "group": "General",
            "prereqs": "Any metamagic feat, Spellcraft 7 ranks, ability to cast 2nd-level spells, human"
        },
        {
            "id": "Hindrance Dismissal",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Hymn Singer",
            "group": "General",
            "prereqs": "Bardic performance, good alignment, worshiper of a good deity"
        },
        {
            "id": "Ice Climber",
            "group": "General",
            "prereqs": "Arctic Adaptation or Mountaineer; Climb 2 ranks"
        },
        {
            "id": "Imperial Knight",
            "group": "General",
            "prereqs": "BAB +6, heavy armor proficiency, proficient in a martial weapon"
        },
        {
            "id": "Imperial Squire",
            "group": "General",
            "prereqs": "BAB +1, proficient in a martial weapon"
        },
        {
            "id": "Implant Bomb",
            "group": "General",
            "prereqs": "Heal 5 ranks, delayed bomb alchemist discovery"
        },
        {
            "id": "Implement Focus",
            "group": "General",
            "prereqs": "Occultist level 3rd"
        },
        {
            "id": "Improved Dirge of Doom",
            "group": "General",
            "prereqs": "Ability to perform dirge of doom"
        },
        {
            "id": "Greater Dirge of Doom",
            "group": "General",
            "prereqs": "Improved Dirge of Doom, ability to perform dirge of doom"
        },
        {
            "id": "Improved Duck and Cover",
            "group": "General",
            "prereqs": "Duck and Cover"
        },
        {
            "id": "Improved Plane Shift",
            "group": "General",
            "prereqs": "Wizard level 9th"
        },
        {
            "id": "Improvisational Healer",
            "group": "General",
            "prereqs": "Heal 1 rank"
        },
        {
            "id": "Improved Spell Sharing",
            "group": "General",
            "prereqs": "Ability to acquire an animal companion, eidolon, familiar, or special mount"
        },
        {
            "id": "Incorporeal Intuition",
            "group": "General",
            "prereqs": "Psychic Sensitivity or the ability to cast psychic spells, Spirit Sense"
        },
        {
            "id": "Infectious Weapons",
            "group": "General",
            "prereqs": "Ability to cause disease with a natural weapon via an extraordinary or supernatural ability"
        },
        {
            "id": "Inner Light",
            "group": ["General","Racial"],
            "prereqs": "Aasimar, daylight spell-like ability"
        },
        {
            "id": "Insightful Advice",
            "group": "General",
            "prereqs": "Perform (oratory) 3 ranks"
        },
        {
            "id": "Insightful Delivery",
            "group": "General",
            "prereqs": "Poison use class feature, studied strike +4d6"
        },
        {
            "id": "Insightful Gaze",
            "group": "General",
            "prereqs": "Stern gaze class feature, Sense Motive 5 ranks"
        },
        {
            "id": "Inspired Alchemy",
            "group": "General",
            "prereqs": "Ability to create 2nd-level extracts, alchemy class feature, inspiration class feature"
        },
        {
            "id": "Inspired by Fear",
            "group": "General",
            "prereqs": "Ability to perform dirge of doom"
        },
        {
            "id": "Inspired Strike",
            "group": "General",
            "prereqs": "Studied combat class feature"
        },
        {
            "id": "Inspiring Mentor",
            "group": "General",
            "prereqs": "Cha 13, inspire competence bardic performance"
        },
        {
            "id": "Inspiring Talent",
            "group": "General",
            "prereqs": "Half-elf, adaptability or ancestral arms racial trait"
        },
        {
            "id": "Instant Judgment",
            "group": "General",
            "prereqs": "Second judgment class feature"
        },
        {
            "id": "Intimidating Bane",
            "group": "General",
            "prereqs": "Bane class feature, Dazzling Display, character level 8"
        },
        {
            "id": "Intimidating Gaze",
            "group": "General",
            "prereqs": "Stern gaze class feature, Intimidate 5 ranks"
        },
        {
            "id": "Intimidating Glance",
            "group": "General",
            "prereqs": "Hypnotic stare class feature"
        },
        {
            "id": "Intimidating Performance",
            "group": "General",
            "prereqs": "Ability to start performances or raging song as move action, bardic performance or raging song class feature"
        },
        {
            "id": "Intoxicating Flattery",
            "group": "General",
            "prereqs": "Deceitful, Bluff 5 ranks"
        },
        {
            "id": "Invoke Primal Instinct",
            "group": "General",
            "prereqs": "Bluff 1 rank, wild shape class feature, gnome"
        },
        {
            "id": "Ironclad Logic",
            "group": "General",
            "prereqs": "Int 19, Diplomacy 3 ranks"
        },
        {
            "id": "Ironguts",
            "group": ["General","Racial"],
            "prereqs": "Con 13; dwarf, half-orc, or orc"
        },
        {
            "id": "Ironhide",
            "group": ["General","Racial"],
            "prereqs": "Con 13; dwarf, half-orc, or orc"
        },
        {
            "id": "Iron Will",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Iron Will, Improved",
            "group": "General",
            "prereqs": "Iron Will"
        },
        {
            "id": "Jinx Alchemy",
            "group": "General",
            "prereqs": "Swift alchemy class feature, Halfling Jinx trait"
        },
        {
            "id": "Judgment Surge",
            "group": "General",
            "prereqs": "Judgment class feature"
        },
        {
            "id": "Juju Way",
            "group": "General",
            "prereqs": "Knowledge (religion) 3 ranks, human"
        },
        {
            "id": "Jungle Survivalist",
            "group": "General",
            "prereqs": "Favored terrain (jungle) class feature"
        },
        {
            "id": "Keen Scent",
            "group": "General",
            "prereqs": "Wis 13, half-orc or orc"
        },
        {
            "id": "Smell Fear",
            "group": "General",
            "prereqs": "Keen Scent, half-orc or orc"
        },
        {
            "id": "Keif Euphoria",
            "group": "General",
            "prereqs": "Keif Addict or Keif Magic"
        },
        {
            "id": "Keif Healing",
            "group": "General",
            "prereqs": "Keif Addict or Keif Magic"
        },
        {
            "id": "Keif Magic",
            "group": "General",
            "prereqs": "Able to cast 2nd-level spells, keif user, and Spell Focus (enchantment) or Spell Focus (necromancy)"
        },
        {
            "id": "Keif Rejuvenation",
            "group": "General",
            "prereqs": "Keif Addict"
        },
        {
            "id": "Ki Stand",
            "group": "General",
            "prereqs": "Ki pool"
        },
        {
            "id": "Kinetic Counter",
            "group": "General",
            "prereqs": "Cold simple blast, fire simple blast, or water simple blast"
        },
        {
            "id": "Kinetic Leap",
            "group": "General",
            "prereqs": "Acrobatics 3 ranks, kinetic blast class feature"
        },
        {
            "id": "Kinslayer",
            "group": "General",
            "prereqs": "Knowledge (varies) 3 ranks, evil alignment"
        },
        {
            "id": "Knockout Artist",
            "group": "General",
            "prereqs": "Sneak attack class feature, Improved Unarmed Strike"
        },
        {
            "id": "Lay of the Land",
            "group": "General",
            "prereqs": "Animal focus class feature, wild empathy class feature"
        },
        {
            "id": "Leadership",
            "group": "General",
            "prereqs": "Character level 7"
        },
        {
            "id": "Practiced Leadership",
            "group": "General",
            "prereqs": "Leadership, membership in the same organization as cohort"
        },
        {
            "id": "Leaf Singer",
            "group": "General",
            "prereqs": "Cha 13, bardic performance, elf or half-elf"
        },
        {
            "id": "Learn Ranger Trap",
            "group": "General",
            "prereqs": "Survival 5 ranks"
        },
        {
            "id": "Legendary Influence",
            "group": "General",
            "prereqs": "Lesser spirit power class feature"
        },
        {
            "id": "Improved Legendary Influence",
            "group": "General",
            "prereqs": "Legendary Influence, propitiation class feature"
        },
        {
            "id": "Letter Fury",
            "group": ["General","Racial"],
            "prereqs": "Goblin, rage class feature"
        },
        {
            "id": "Lie Low",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Life-Dominant Soul",
            "group": "General",
            "prereqs": "Dhampir"
        },
        {
            "id": "Life Lure",
            "group": "General",
            "prereqs": "Channel positive energy class feature"
        },
        {
            "id": "Lifeless Gaze",
            "group": "General",
            "prereqs": "Iron Will, Bluff 5 ranks"
        },
        {
            "id": "Light Gravity Acclimation",
            "group": "General",
            "prereqs": "Dex 13, Acrobatics 3 ranks"
        },
        {
            "id": "Lightning Reflexes",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Lightning Reflexes, Improved",
            "group": "General",
            "prereqs": "Lightning Reflexes"
        },
        {
            "id": "Light Step",
            "group": "General",
            "prereqs": "Acrobatic Steps, Nimble Moves, elf"
        },
        {
            "id": "Lingering Performance",
            "group": "General",
            "prereqs": "Bardic performance class ability"
        },
        {
            "id": "Live Off the Land",
            "group": "General",
            "prereqs": "Favored terrain class feature"
        },
        {
            "id": "Living Fortress",
            "group": ["General","Racial"],
            "prereqs": "Dwarf, hardy racial trait"
        },
        {
            "id": "Loyal to the Death",
            "group": "General",
            "prereqs": "Human"
        },
        {
            "id": "Lucid Dreamer",
            "group": "General",
            "prereqs": "Cha 13, Knowledge (planes) 3 ranks"
        },
        {
            "id": "Luck of Heroes",
            "group": "General",
            "prereqs": "Heroic Fortune"
        },
        {
            "id": "Lucky Halfling",
            "group": "General",
            "prereqs": "Halfling"
        },
        {
            "id": "Lunging Spell Touch",
            "group": "General",
            "prereqs": "Spellcraft 6 ranks"
        },
        {
            "id": "Mage's Tattoo",
            "group": "General",
            "prereqs": "Spell Focus (any except divination)"
        },
        {
            "id": "Magical Aptitude",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Malicious Eye",
            "group": "General",
            "prereqs": "Evil eye witch hex, Halfling Jinx trait"
        },
        {
            "id": "Manifested Blood",
            "group": "General",
            "prereqs": "Cha 13, draconic or elemental bloodline"
        },
        {
            "id": "Manipulative Agility",
            "group": "General",
            "prereqs": "Bluff 1 rank, Sleight of Hand 1 rank"
        },
        {
            "id": "Master Alchemist",
            "group": "General",
            "prereqs": "Craft (alchemy) 5 ranks"
        },
        {
            "id": "Master Craftsman",
            "group": "General",
            "prereqs": "Craft (any) 5 ranks or Profession skill"
        },
        {
            "id": "Master of the Ledger",
            "group": "General",
            "prereqs": "Appraise 6 ranks, Profession (any one) 6 ranks"
        },
        {
            "id": "Master of Wonders",
            "group": "General",
            "prereqs": "Iron Will, gnome"
        },
        {
            "id": "Maximized Spellstrike",
            "group": "General",
            "prereqs": "Maximized magic magus arcana, weapon expertise class feature or Quick Draw"
        },
        {
            "id": "Measure Foe",
            "group": "General",
            "prereqs": "Street Smarts, base attack bonus +1"
        },
        {
            "id": "Menacing Bane",
            "group": "General",
            "prereqs": "Bane class feature"
        },
        {
            "id": "Merciful Bane",
            "group": "General",
            "prereqs": "Bane class feature"
        },
        {
            "id": "Merciless Rush",
            "group": "General",
            "prereqs": "Improved Bull Rush"
        },
        {
            "id": "Mercenary Company Tattoos",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Mesmerizing Feint",
            "group": "General",
            "prereqs": "Hypnotic stare class feature"
        },
        {
            "id": "Greater Mesmerizing Feint",
            "group": "General",
            "prereqs": "Mesmerizing Feint, Bluff 10 ranks, psychic inception"
        },
        {
            "id": "Minotaur's Charge",
            "group": "General",
            "prereqs": "Strength 13, Improved Bull Rush, powerful charge"
        },
        {
            "id": "Mirror Kin",
            "group": "General",
            "prereqs": "Bluff 8 ranks, gnome, gnome magic racial trait"
        },
        {
            "id": "Misdirection Redirection",
            "group": "General",
            "prereqs": "Misdirection Tactics, Bluff 10 ranks"
        },
        {
            "id": "Monster Lore, Improved",
            "group": "General",
            "prereqs": "Monster lore class feature"
        },
        {
            "id": "Monstrous Companion",
            "group": "General",
            "prereqs": "Handle Animal 7 ranks; class feature that functions as the druid animal companion ability (including animal companion, divine bond [mount], hunter’s bond [animal companion], nature’s bond [animal companion], and the mount class feature) with an effective druid level of 7"
        },
        {
            "id": "Monstrous Mask",
            "group": ["General","Racial"],
            "prereqs": "Tiefling, must be taken at 1st level"
        },
        {
            "id": "Moonlight Summons",
            "group": "General",
            "prereqs": "Spell Focus (conjuration), ability to cast summon nature’s ally"
        },
        {
            "id": "Moontouched",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Mountaineer",
            "group": "General",
            "prereqs": "Favored terrain (mountains) class feature"
        },
        {
            "id": "Mounted Blade",
            "group": "General",
            "prereqs": "Ride 3 ranks, Mounted Combat, Ride-by Attack, BAB +1"
        },
        {
            "id": "Mutated Shape",
            "group": "General",
            "prereqs": "Wis 19, BAB +6, wild shape"
        },
        {
            "id": "Mutilating Ritualist",
            "group": "General",
            "prereqs": "Knowledge (arcana) 4 ranks, Knowledge (religion)"
        },
        {
            "id": "Sacrificial Ritualist",
            "group": "General",
            "prereqs": "Mutilating Ritualist"
        },
        {
            "id": "Mystic Stride",
            "group": "General",
            "prereqs": "Dex 15, Nimble Moves, woodland stride class feature"
        },
        {
            "id": "Natural Poison Harvester",
            "group": "General",
            "prereqs": "Craft (alchemy) 6 ranks, Survival 6 ranks"
        },
        {
            "id": "Improved Natural Poison Harvester",
            "group": "General",
            "prereqs": "Natural Poison Harvester, Craft (alchemy)"
        },
        {
            "id": "Natural Poison Antitoxin",
            "group": "General",
            "prereqs": "Natural Poison Harvester, Craft (alchemy) 8 ranks, Survival 8 ranks"
        },
        {
            "id": "Natural Spell",
            "group": "General",
            "prereqs": "Wis 13, wild shape class feature"
        },
        {
            "id": "Nature Soul",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Nature's Freedom",
            "group": "General",
            "prereqs": "Animal or Plant domain; channel energy"
        },
        {
            "id": "Nature Magic",
            "group": "General",
            "prereqs": "Knowledge (nature) 1 rank"
        },
        {
            "id": "Necromantic Affinity",
            "group": "General",
            "prereqs": "Con 15"
        },
        {
            "id": "Nerve-Racking Negotiator",
            "group": "General",
            "prereqs": "Persuasive"
        },
        {
            "id": "Night Sky Hex",
            "group": "General",
            "prereqs": "Hex class feature, patron (moon, stars, or winter) class feature"
        },
        {
            "id": "Nimble Moves",
            "group": "General",
            "prereqs": "Dex 13"
        },
        {
            "id": "Acrobatic Steps",
            "group": "General",
            "prereqs": "Dex 15, Nimble Moves"
        },
        {
            "id": "Nimble Natural Summons",
            "group": "General",
            "prereqs": "Augment Summoning, Spell Focus (conjuration), CL 6"
        },
        {
            "id": "Noble Scion",
            "group": "General",
            "prereqs": "Cha 13, can only select at 1st level"
        },
        {
            "id": "Omnipresent Mentor",
            "group": "General",
            "prereqs": "Cha 17, Inspiring Mentor"
        },
        {
            "id": "One Eye Open",
            "group": "General",
            "prereqs": "Wis 13, Alertness"
        },
        {
            "id": "One Mind",
            "group": "General",
            "prereqs": "Alertness, Sense Motive 3 ranks, human"
        },
        {
            "id": "One with the Land",
            "group": "General",
            "prereqs": "Favored terrain class feature"
        },
        {
            "id": "Open Conduit",
            "group": "General",
            "prereqs": "Knowledge (planes) 5 ranks or outsider with native subtype"
        },
        {
            "id": "Oracular Intuition",
            "group": "General",
            "prereqs": "Mystery class feature"
        },
        {
            "id": "Orator",
            "group": "General",
            "prereqs": "Skill Focus (Linguistics)"
        },
        {
            "id": "Ordered Mind",
            "group": "General",
            "prereqs": "Caster level 7th, lawful alignment, worship an evil god"
        },
        {
            "id": "Overwhelming Phantom",
            "group": "General",
            "prereqs": "Phantom class feature, spiritualist 15"
        },
        {
            "id": "Pack Flanking",
            "group": "General",
            "prereqs": "Int 13, Combat Expertise, ability to acquire an animal companion"
        },
        {
            "id": "Painful Anchor",
            "group": "General",
            "prereqs": "Anchoring aura class feature"
        },
        {
            "id": "Parry Spell",
            "group": "General",
            "prereqs": "Spellcraft 15 ranks, Improved Counterspell"
        },
        {
            "id": "Parting Blast",
            "group": "General",
            "prereqs": "Kinetic blast class feature"
        },
        {
            "id": "Pass for Human",
            "group": "General",
            "prereqs": "Half-elf, half-orc, or halfling"
        },
        {
            "id": "Penetrating Possesion",
            "group": "General",
            "prereqs": "Magic jar as a known spell or spell-like ability, Cha 21"
        },
        {
            "id": "Persuasive",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Persuasive Bribery",
            "group": "General",
            "prereqs": "Persuasive"
        },
        {
            "id": "Pestilent",
            "group": "General",
            "prereqs": "Ability to cause disease via a spell, spell-like ability, or supernatural means"
        },
        {
            "id": "Phantom Ally",
            "group": "General",
            "prereqs": "Phantom class feature"
        },
        {
            "id": "Phantom Fighter",
            "group": "General",
            "prereqs": "Phantom class feature, phantom with magic"
        },
        {
            "id": "Phantom Fortification",
            "group": "General",
            "prereqs": "Phantom class feature, phantom with incorporeal"
        },
        {
            "id": "Plains Nomad",
            "group": "General",
            "prereqs": "Favored terrain (plains) class feature"
        },
        {
            "id": "Planar Heritage",
            "group": "General",
            "prereqs": "Human"
        },
        {
            "id": "Planar Hunter",
            "group": "General",
            "prereqs": "Knowledge (planes) 5 ranks, favored terrain (any plane) class feature"
        },
        {
            "id": "Planar Preservationist",
            "group": "General",
            "prereqs": "Preservationist alchemist archetype"
        },
        {
            "id": "Planar Survivor",
            "group": "General",
            "prereqs": "Knowledge (planes) 3 ranks, Survival 3 ranks"
        },
        {
            "id": "Planar Wanderer",
            "group": "General",
            "prereqs": "Cartogramancer, Knowledge (planes) 10 ranks, ability to cast plane shift"
        },
        {
            "id": "Planar Wild Shape",
            "group": "General",
            "prereqs": "Wild shape class feature, Knowledge (planes) 5 ranks"
        },
        {
            "id": "Planewalker's Insight",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Play to the Crowd",
            "group": "General",
            "prereqs": "Ironclad Logic, Diplomacy 5 ranks, Sense Motive 5 ranks"
        },
        {
            "id": "Pommel Strike Deed",
            "group": "General",
            "prereqs": "Amateur Swashbuckler or panache class feature; BAB +3"
        },
        {
            "id": "Possessed Hand",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Potent Holy Symbol",
            "group": "General",
            "prereqs": "Good alignment, worship a good deity"
        },
        {
            "id": "Powerful Shape",
            "group": "General",
            "prereqs": "Wild shape class feature, druid 8"
        },
        {
            "id": "Practiced Ritualist",
            "group": "General",
            "prereqs": "Knowledge (arcana, history, planes, and religion) 1 rank"
        },
        {
            "id": "Practiced Tactician",
            "group": "General",
            "prereqs": "Tactician class feature"
        },
        {
            "id": "Preferred Spell",
            "group": "General",
            "prereqs": "Spellcraft 5 ranks, Heighten Spell"
        },
        {
            "id": "Primal Kineticist",
            "group": "General",
            "prereqs": "Kineticist level 1st."
        },
        {
            "id": "Prodigy",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Profane Studies",
            "group": "General",
            "prereqs": "Int 13, Knowledge (planes) 4 ranks, ability"
        },
        {
            "id": "Prophetic Visionary",
            "group": "General",
            "prereqs": "Mystery class feature"
        },
        {
            "id": "Protector's Strike",
            "group": "General",
            "prereqs": "Smite evil class feature, BAB +5"
        },
        {
            "id": "Proxy Summoning",
            "group": "General",
            "prereqs": "Ability to cast conjuration (summoning) spells or a conjuration (summoning) spell-like ability, CL 5"
        },
        {
            "id": "Psychic Combatant",
            "group": "General",
            "prereqs": "Int 13, Psychic Sensitivity or ability to cast psychic spells, character level 3rd"
        },
        {
            "id": "Psychic Defender",
            "group": "General",
            "prereqs": "Int 13, Psychic Sensitivity or ability to cast psychic spells or use psychic spell-like abilities, character level 3rd"
        },
        {
            "id": "Psychic Healing",
            "group": "General",
            "prereqs": "Cha 11, Psychic Sensitivity or ability to cast psychic spells, Heal 3 ranks"
        },
        {
            "id": "Psychic Maestro",
            "group": "General",
            "prereqs": "Psychic Sensitivity or ability to cast psychic spells"
        },
        {
            "id": "Psychic Sensitivity",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Psychic Adept",
            "group": "General",
            "prereqs": "Int 11, Psychic Sensitivity"
        },
        {
            "id": "Psychic Disciple",
            "group": "General",
            "prereqs": "Int 13, Psychic Adept, Psychic Sensitivity"
        },
        {
            "id": "Psychic Virtuoso",
            "group": "General",
            "prereqs": "Psychic Sensitivity or ability to cast psychic spells"
        },
        {
            "id": "Pure Faith",
            "group": "General",
            "prereqs": "Divine health class feature"
        },
        {
            "id": "Purging Emesis",
            "group": "General",
            "prereqs": "Great Fortitude"
        },
        {
            "id": "Putrid Summons",
            "group": "General",
            "prereqs": "Spell Focus (conjuration), ability to cast a summon monster or summon nature’s ally spell"
        },
        {
            "id": "Quah Bond",
            "group": "General",
            "prereqs": "Totem Spirit, human"
        },
        {
            "id": "Quick Channel",
            "group": "General",
            "prereqs": "Knowledge (religion) 5 ranks, channel energy class feature"
        },
        {
            "id": "Quick Favor",
            "group": "General",
            "prereqs": "Persuasive"
        },
        {
            "id": "Quick Wild Shape",
            "group": "General",
            "prereqs": "Wild shape class feature, CL 8"
        },
        {
            "id": "Quicken Blessing",
            "group": "General",
            "prereqs": "Access to blessing’s major power, blessings class feature"
        },
        {
            "id": "Racial Heritage",
            "group": "General",
            "prereqs": "Human"
        },
        {
            "id": "Radiant Charge",
            "group": "General",
            "prereqs": "Lay on hands class feature"
        },
        {
            "id": "Rage Casting",
            "group": "General",
            "prereqs": "Blood casting class feature"
        },
        {
            "id": "Raging Absorption",
            "group": "General",
            "prereqs": "Ability to cast 4th-level bloodrager spells, bloodrage class feature"
        },
        {
            "id": "Raging Blood",
            "group": "General",
            "prereqs": "Eldritch Heritage or sorcerer bloodline class feature"
        },
        {
            "id": "Raging Brutality",
            "group": "General",
            "prereqs": "Rage class feature, Power Attack, BAB +12"
        },
        {
            "id": "Raging Concentration",
            "group": "General",
            "prereqs": "Blood casting class feature"
        },
        {
            "id": "Raging Deathblow",
            "group": "General",
            "prereqs": "Greater rage class feature"
        },
        {
            "id": "Raging Hurler",
            "group": "General",
            "prereqs": "Rage class feature, Throw Anything"
        },
        {
            "id": "Raging Throw",
            "group": "General",
            "prereqs": "Con 13, rage class feature, Improved Bull Rush, BAB +6"
        },
        {
            "id": "Raging Vitality",
            "group": "General",
            "prereqs": "Con 15, rage class feature"
        },
        {
            "id": "Rallying Blow",
            "group": "General",
            "prereqs": "Aura of courage"
        },
        {
            "id": "Ranged Disable",
            "group": "General",
            "prereqs": "Far Shot, Point-Blank Shot, Weapon Focus, Disable Device 9 ranks"
        },
        {
            "id": "Ranged Study",
            "group": "General",
            "prereqs": "Weapon Focus with chosen weapon, studied combat class feature"
        },
        {
            "id": "Rapid Focus Shift",
            "group": "General",
            "prereqs": "Caster level 5th, mental focus class feature"
        },
        {
            "id": "Razortusk",
            "group": "General",
            "prereqs": "Half-orc"
        },
        {
            "id": "Reactive Arcane Shield",
            "group": "General",
            "prereqs": "Arcane Shield, arcane spellcaster, CL 12"
        },
        {
            "id": "Reactive Healing",
            "group": "General",
            "prereqs": "Quick Channel or Quicken Spell; channel energy or lay on hands class feature"
        },
        {
            "id": "Read Spell Traces",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Ready for Battle",
            "group": "General",
            "prereqs": "Mesmerist trick class feature"
        },
        {
            "id": "Ready for Pain",
            "group": "General",
            "prereqs": "Mesmerist trick class feature"
        },
        {
            "id": "Reckless Rage",
            "group": "General",
            "prereqs": "Power Attack; rage or raging song class feature"
        },
        {
            "id": "Recovered Rage",
            "group": "General",
            "prereqs": "Rage or raging song class feature"
        },
        {
            "id": "Recruits",
            "group": "General",
            "prereqs": "Cha 13, character level 5th"
        },
        {
            "id": "Reinforce Crafting",
            "group": "General",
            "prereqs": "Craft Magic Arms and Armor, ability to cast make whole or mending"
        },
        {
            "id": "Reject Poison",
            "group": "General",
            "prereqs": "Dex 13, poison use class feature"
        },
        {
            "id": "Relentless Cheer",
            "group": "General",
            "prereqs": "Halfling, fearless and halfling luck racial traits"
        },
        {
            "id": "Remote Bomb",
            "group": "General",
            "prereqs": "Delayed bomb discovery"
        },
        {
            "id": "Researcher",
            "group": "General",
            "prereqs": "Associate (an archive or library)."
        },
        {
            "id": "Resilient Armor",
            "group": "General",
            "prereqs": "Divine bond (armor or shield) or sacred armor class feature"
        },
        {
            "id": "Resilient Eidolon",
            "group": "General",
            "prereqs": "Eidolon class feature"
        },
        {
            "id": "Respectful Prey",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Revered Guidance",
            "group": ["General","Racial"],
            "prereqs": "Aasimar, must be taken at 1st level"
        },
        {
            "id": "Reward of Grace",
            "group": "General",
            "prereqs": "Lay on hands class feature"
        },
        {
            "id": "Reward of Life",
            "group": "General",
            "prereqs": "Lay on hands class feature"
        },
        {
            "id": "Reward of the Faithful",
            "group": "General",
            "prereqs": "Knowledge (religion) 1 rank, alignment must match that of your worshiped deity."
        },
        {
            "id": "Rhabdomancy",
            "group": "General",
            "prereqs": "Knowledge (nature) 3 ranks, Survival 3 ranks"
        },
        {
            "id": "Rhetorical Flourish",
            "group": "General",
            "prereqs": "Cha 13, Persuasive"
        },
        {
            "id": "Ricochet Splash Weapon",
            "group": "General",
            "prereqs": "Dex 13, Throw Anything"
        },
        {
            "id": "Righteous Healing",
            "group": "General",
            "prereqs": "Judgment class feature"
        },
        {
            "id": "Ritual Hex",
            "group": "General",
            "prereqs": "Knowledge (arcana) 4 ranks, Knowledge (history) 4 ranks, hex class feature"
        },
        {
            "id": "Robot's Bane",
            "group": "General",
            "prereqs": "Knowledge (engineering) 5 ranks"
        },
        {
            "id": "Rouse Emotions",
            "group": "General",
            "prereqs": "Cha 13, Charming Performance, Perform (any) 5 ranks, bardic performance or raging song"
        },
        {
            "id": "Rugged Northerner",
            "group": "General",
            "prereqs": "Con 13, Survival 1 rank"
        },
        {
            "id": "Run",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Sabotage Magic Item",
            "group": "General",
            "prereqs": "Magical Aptitude, Disable Device 5 ranks, Use Magic Device 5 ranks"
        },
        {
            "id": "Sabotage Specialist",
            "group": "General",
            "prereqs": "Deft Hands, Disable Device 5 ranks"
        },
        {
            "id": "Sabotaging Sunder, Improved",
            "group": "General",
            "prereqs": "Sabotaging Sunder, Disable Device 9 ranks"
        },
        {
            "id": "Sacred Geometry",
            "group": "General",
            "prereqs": "Int 13, Knowledge (engineering) 2 ranks"
        },
        {
            "id": "Sacred Summons",
            "group": "General",
            "prereqs": "Aura class feature, ability to cast summon monster"
        },
        {
            "id": "Sacrificial Adept",
            "group": "General",
            "prereqs": "Knowledge (arcana) 4 ranks, Knowledge (planes) 4 ranks, Knowledge (religion) 4 ranks, Spellcraft 4 ranks, ability to cast 3rd-level spells, evil alignment"
        },
        {
            "id": "Scale and Skin",
            "group": "General",
            "prereqs": "Con 13"
        },
        {
            "id": "Scavenger's Luck",
            "group": "General",
            "prereqs": "Knowledge (engineering) 1 rank"
        },
        {
            "id": "Scholar",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Schooled Reserve",
            "group": "General",
            "prereqs": "Bravery class feature"
        },
        {
            "id": "Scrutinize Spell",
            "group": "General",
            "prereqs": "Spellcraft 1 rank"
        },
        {
            "id": "Sea Legs",
            "group": "General",
            "prereqs": "Profession (sailor) 5 ranks"
        },
        {
            "id": "Secret Language",
            "group": "General",
            "prereqs": "Bluff 1 rank, Linguistics 1 rank, Sense Motive 1 rank"
        },
        {
            "id": "Secret Signs",
            "group": "General",
            "prereqs": "Int 13"
        },
        {
            "id": "Selective Channeling",
            "group": "General",
            "prereqs": "Cha 13, channel energy class feature"
        },
        {
            "id": "Self-Sufficient",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Sense Assumptions",
            "group": "General",
            "prereqs": "Sense Motive 3 ranks"
        },
        {
            "id": "Sense Loyalties",
            "group": "General",
            "prereqs": "Knowledge (nobility) 1 rank, Knowledge (religion) 1 rank"
        },
        {
            "id": "Sense Relationships",
            "group": "General",
            "prereqs": "Street Smarts"
        },
        {
            "id": "Sense Link",
            "group": "General",
            "prereqs": "Bond senses class feature"
        },
        {
            "id": "Shadow Druid",
            "group": "General",
            "prereqs": "Neutral evil, patron deity is an evil god"
        },
        {
            "id": "Shadow Gambit",
            "group": "General",
            "prereqs": "Spell Focus (illusion), CL 5."
        },
        {
            "id": "Shadow Dodge",
            "group": "General",
            "prereqs": "Dex 13, worship an evil god"
        },
        {
            "id": "Shake it Off",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Shaping Focus",
            "group": "General",
            "prereqs": "Knowledge (nature) 5 ranks, wild shape class feature"
        },
        {
            "id": "Shapeshifter Foil",
            "group": "General",
            "prereqs": "Knowledge (arcana) 5 ranks or Knowledge (nature) 5 ranks, ability to use polymorph effects"
        },
        {
            "id": "Shapeshifting Hunter",
            "group": "General",
            "prereqs": "Favored enemy class feature, wild shape class feature"
        },
        {
            "id": "Share Healing",
            "group": "General",
            "prereqs": "Ability to acquire an animal companion, eidolon, familiar, or special mount"
        },
        {
            "id": "Share Spells, Improved",
            "group": "General",
            "prereqs": "Spellcraft 10 ranks, ability to acquire an animal companion, eidolon, familiar, or special mount"
        },
        {
            "id": "Shared Insight",
            "group": "General",
            "prereqs": "Wis 13, half-elf"
        },
        {
            "id": "Shared Judgment",
            "group": "General",
            "prereqs": "Second judgment class feature"
        },
        {
            "id": "Shared Soul",
            "group": "General",
            "prereqs": "Shared consciousness class feature"
        },
        {
            "id": "Sharp Senses",
            "group": "General",
            "prereqs": "Keen senses racial trait"
        },
        {
            "id": "Shatter Control",
            "group": "General",
            "prereqs": "Channel positive energy 4d6"
        },
        {
            "id": "Shatter Mental Mask",
            "group": "General",
            "prereqs": "Psychic Sensitivity or ability to cast psychic spells or use psychic spell-like abilities, character level 2nd"
        },
        {
            "id": "Shatter Resolve",
            "group": "General",
            "prereqs": "Channel negative energy class feature, worship an evil god"
        },
        {
            "id": "Shifter's Edge",
            "group": "General",
            "prereqs": "Dex 13, Weapon Finesse, shifter claws"
        },
        {
            "id": "Shifter's Rush",
            "group": "General",
            "prereqs": "Wild shape class feature, shifter level 4th"
        },
        {
            "id": "Shocking Amplification",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Shrouded in Mystery",
            "group": "General",
            "prereqs": "Bluff 1 rank; Disguise 1 rank; kitsune, nagaji, samsaran, tengu, or wayang"
        },
        {
            "id": "Signifer Armor Training",
            "group": "General",
            "prereqs": "Arcane Armor Mastery, Arcane Armor Training, Heavy Armor Proficiency, CL 7, allegiance to a Hell Knight order"
        },
        {
            "id": "Sin Seer",
            "group": "General",
            "prereqs": "Detect undead class feature"
        },
        {
            "id": "Sizzling Shot",
            "group": "General",
            "prereqs": "Grit class feature or Amateur Gunslinger, base attack bonus +4."
        },
        {
            "id": "Skald's Vigor",
            "group": "General",
            "prereqs": "Raging song class feature"
        },
        {
            "id": "Greater Skald's Vigor",
            "group": "General",
            "prereqs": "Skald’s Vigor, Perform (song) 10 ranks"
        },
        {
            "id": "Skeleton Summoner",
            "group": "General",
            "prereqs": "Spell Focus (necromancy), ability to cast summon monster"
        },
        {
            "id": "Skill Focus",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Skilled Driver",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Expert Driver",
            "group": "General",
            "prereqs": "Skilled Driver"
        },
        {
            "id": "Skilled Rager",
            "group": "General",
            "prereqs": "Rage class feature"
        },
        {
            "id": "Slayer's Knack",
            "group": "General",
            "prereqs": "Favored enemy class feature, BAB +6"
        },
        {
            "id": "Slow Faller",
            "group": "General",
            "prereqs": "Acrobatics 5 ranks or slow fall class feature"
        },
        {
            "id": "Sluggish Jinx",
            "group": "General",
            "prereqs": "Halfling Jinx trait"
        },
        {
            "id": "Sly Draw",
            "group": "General",
            "prereqs": "Quick Draw"
        },
        {
            "id": "Small But Deadly",
            "group": "General",
            "prereqs": "Weapon Focus or natural weapon, Small size or smaller"
        },
        {
            "id": "Sneaking Precision",
            "group": "General",
            "prereqs": "Sneak attack class feature, Critical Focus, any critical feat, BAB +9"
        },
        {
            "id": "Sneaky Vagabond",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Sociable",
            "group": "General",
            "prereqs": "Cha 13, half-elf"
        },
        {
            "id": "Sorcerous Bloodstrike",
            "group": "General",
            "prereqs": "Cha 13, sorcerer bloodline class feature"
        },
        {
            "id": "Spear Dancer",
            "group": "General",
            "prereqs": "Weapon Focus (any two-handed reach weapon), Perform 4 ranks"
        },
        {
            "id": "Spectrum Sight",
            "group": "General",
            "prereqs": "Alertness, Perception 5 ranks"
        },
        {
            "id": "Spell Bane",
            "group": "General",
            "prereqs": "Bane class feature"
        },
        {
            "id": "Spell Bluff",
            "group": "General",
            "prereqs": "Bluff 5 ranks, Spellcraft 5 ranks"
        },
        {
            "id": "Spell-Drinker",
            "group": "General",
            "prereqs": "Con 13; Great Fortitude, Iron Will, or Lightning Reflexes."
        },
        {
            "id": "Spell Expertise, Minor",
            "group": "General",
            "prereqs": "Cast 4th-level spells"
        },
        {
            "id": "Spell Expertise, Major",
            "group": "General",
            "prereqs": "Minor Spell Expertise, cast 9th-level spells"
        },
        {
            "id": "Spell Focus",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Spell Focus, Greater",
            "group": "General",
            "prereqs": "Spell Focus"
        },
        {
            "id": "Spell Hex",
            "group": "General",
            "prereqs": "Major hex class feature"
        },
        {
            "id": "Spell Mastery",
            "group": "General",
            "prereqs": "1st-level Wizard"
        },
        {
            "id": "Spell Penetration",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Spell Penetration, Greater",
            "group": "General",
            "prereqs": "Spell Penetration"
        },
        {
            "id": "Spell Perfection",
            "group": "General",
            "prereqs": "Spellcraft 15 ranks, 3 metamagic feats"
        },
        {
            "id": "Spell Specialization",
            "group": "General",
            "prereqs": "Int 13, Spell Focus"
        },
        {
            "id": "Spell Specialization, Greater",
            "group": "General",
            "prereqs": "Int 13, Spell Focus, Spell Specialization, ability to cast 5th-level spells"
        },
        {
            "id": "Spellsong",
            "group": "General",
            "prereqs": "Cha 13, bard performance class feature, ability to cast 1st-level spells"
        },
        {
            "id": "Spider Step",
            "group": "General",
            "prereqs": "Acrobatics 6 ranks, Climb 6 ranks, monk 6"
        },
        {
            "id": "Cloud Step",
            "group": "General",
            "prereqs": "Spider Step, monk 12"
        },
        {
            "id": "Spirit Focus",
            "group": "General",
            "prereqs": "Spirit bonus class feature"
        },
        {
            "id": "Spirit Sense",
            "group": "General",
            "prereqs": "Psychic Sensitivity or ability to cast psychic spells"
        },
        {
            "id": "Spirit Speaker",
            "group": "General",
            "prereqs": "Cha 13, Absorb Spirit, Diplomacy 5 ranks"
        },
        {
            "id": "Spirit Symbiosis",
            "group": "General",
            "prereqs": "Ability to cast speak with dead, phantom class feature"
        },
        {
            "id": "Spirit Talker",
            "group": "General",
            "prereqs": "Hex class feature; shaman 6 or witch 6"
        },
        {
            "id": "Spirit Vision",
            "group": "General",
            "prereqs": "Magic jar as a known spell or spell-like ability, Wis 15"
        },
        {
            "id": "Spirit Ally",
            "group": "General",
            "prereqs": "CL 8"
        },
        {
            "id": "Spirit Oni Master",
            "group": "General",
            "prereqs": "Knowledge (planes) 3 ranks; Lawful neutral, lawful evil, or neutral evil"
        },
        {
            "id": "Spirit Ridden",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Spiritual Training",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Spirit's Gift",
            "group": "General",
            "prereqs": "Animal companion or familiar class feature"
        },
        {
            "id": "Spiritual Balance",
            "group": "General",
            "prereqs": "Ki pool class feature, still mind class feature"
        },
        {
            "id": "Spiritual Guardian",
            "group": "General",
            "prereqs": "Ability to cast spiritual weapon or spiritual ally, spirit magic class feature"
        },
        {
            "id": "Spiritualist's Call",
            "group": "General",
            "prereqs": "Phantom class feature"
        },
        {
            "id": "Splash Weapon Mastery",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Splintering Weapon",
            "group": "General",
            "prereqs": "BAB +1, proficient with weapon, weapon made of primitive material"
        },
        {
            "id": "Split Hex",
            "group": "General",
            "prereqs": "Witch 10"
        },
        {
            "id": "Split Major Hex",
            "group": "General",
            "prereqs": "Split Hex, CL 18"
        },
        {
            "id": "Spontaneous Metafocus",
            "group": "General",
            "prereqs": "Cha 13, one metamagic feat, ability to spontaneously cast spells"
        },
        {
            "id": "Spontaneous Nature's Ally",
            "group": "General",
            "prereqs": "Knowledge (nature) 5 ranks, ability to spontaneously cast cure or inflict spells, Animal or Plant domain"
        },
        {
            "id": "Squash Flat",
            "group": "General",
            "prereqs": "Improved Bull Rush, Merciless Rush, worship an evil god"
        },
        {
            "id": "Squire",
            "group": "General",
            "prereqs": "Character level 3rd, proficiency with all martial weapons"
        },
        {
            "id": "Stalker's Focus",
            "group": "General",
            "prereqs": "Knowledge (nature) 3 ranks, Survival 3 ranks, no levels in a class that has the animal focus class feature"
        },
        {
            "id": "Stalwart",
            "group": "General",
            "prereqs": "Diehard, BAB +4"
        },
        {
            "id": "Improved Stalwart",
            "group": "General",
            "prereqs": "Stalwart, BAB +11"
        },
        {
            "id": "Star Initiate",
            "group": "General",
            "prereqs": "Knowledge (arcana) 1 rank, Knowledge (nature) 1 rank, Knowledge (planes) 1 rank."
        },
        {
            "id": "Star Scholar",
            "group": "General",
            "prereqs": "Star Initiate, Knowledge (arcana) 5 ranks, Knowledge (nature) 5 ranks, Knowledge (planes) 5 ranks."
        },
        {
            "id": "Starlight Summons",
            "group": "General",
            "prereqs": "Spell Focus (conjuration), ability to cast summon nature’s ally"
        },
        {
            "id": "Steadfast Personality",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Stealthy",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Steel Soul",
            "group": ["General","Racial"],
            "prereqs": "Dwarf, hardy racial trait"
        },
        {
            "id": "Stoic",
            "group": "General",
            "prereqs": "Iron Will"
        },
        {
            "id": "Stonecunning, Improved",
            "group": ["General","Racial"],
            "prereqs": "Wis 13, dwarf, stonecunning racial trait"
        },
        {
            "id": "Stone Sense",
            "group": "General",
            "prereqs": "Perception 10 ranks, Improved Stonecunning"
        },
        {
            "id": "Stone-Faced",
            "group": ["General","Racial"],
            "prereqs": "Dwarf"
        },
        {
            "id": "Stone Read",
            "group": "General",
            "prereqs": "Knowledge (dungeoneering) 4 ranks"
        },
        {
            "id": "Stone Singer",
            "group": ["General","Racial"],
            "prereqs": "Cha 13, bardic performance, dwarf"
        },
        {
            "id": "Storm Survivor",
            "group": "General",
            "prereqs": "Knowledge (nature) 2 ranks, Survival 2 ranks"
        },
        {
            "id": "Stouthearted",
            "group": "General",
            "prereqs": "Raging song class feature"
        },
        {
            "id": "Street Smarts",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Strong Comeback",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Strong Implement Link",
            "group": "General",
            "prereqs": "Implement class feature"
        },
        {
            "id": "Storm-Lashed",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Stubborn Curse",
            "group": "General",
            "prereqs": "Ability to cast a spell or spell-like ability with the"
        },
        {
            "id": "Studied Combatant",
            "group": "General",
            "prereqs": "Amateur Investigator, BAB +6"
        },
        {
            "id": "Improved Studied Combatant",
            "group": "General",
            "prereqs": "Int 14, Studied Combatant, BAB +8"
        },
        {
            "id": "Studied Expertise",
            "group": "General",
            "prereqs": "Inspirational expertise investigator talent"
        },
        {
            "id": "Subconscious Usurpation",
            "group": "General",
            "prereqs": "Base Will save bonus +2"
        },
        {
            "id": "Subjective Mobility",
            "group": "General",
            "prereqs": "Wis 13"
        },
        {
            "id": "Subjective Slam",
            "group": "General",
            "prereqs": "Con 13, Wis 13, Subjective Mobility, base attack bonus +4 or monk level 3rd"
        },
        {
            "id": "Greater Subjective Slam",
            "group": "General",
            "prereqs": "Con 15, Wis 15, Subjective Mobility, Subjective Slam, base attack bonus +8 or monk level 7th"
        },
        {
            "id": "Subtle Enchantments",
            "group": "General",
            "prereqs": "Deceitful, Spell Focus (enchantment)"
        },
        {
            "id": "Summon Evil Monster",
            "group": "General",
            "prereqs": "Evil alignment"
        },
        {
            "id": "Summon Good Monster",
            "group": "General",
            "prereqs": "Good alignment"
        },
        {
            "id": "Summon Neutral Monster",
            "group": "General",
            "prereqs": "Neutral alignment"
        },
        {
            "id": "Summoner's Call",
            "group": "General",
            "prereqs": "Eidolon class feature"
        },
        {
            "id": "Sunlit Strike",
            "group": "General",
            "prereqs": "Arcane Strike, daylight spell-like ability"
        },
        {
            "id": "Sunlight Summons",
            "group": "General",
            "prereqs": "Spell Focus (conjuration), ability to cast summon nature’s ally"
        },
        {
            "id": "Superior Scryer",
            "group": "General",
            "prereqs": "Spell Focus (divination), the ability to cast at least one spell of the scrying subschool"
        },
        {
            "id": "Superior Summoning",
            "group": "General",
            "prereqs": "Augment Summoning, CL 3"
        },
        {
            "id": "Supernal Feast",
            "group": ["General","Racial"],
            "prereqs": "Con 15, aasimar"
        },
        {
            "id": "Suppress Blight",
            "group": "General",
            "prereqs": "Great Fortitude, Iron Will"
        },
        {
            "id": "Sure Grasp",
            "group": "General",
            "prereqs": "Climb 1 rank"
        },
        {
            "id": "Surprise Maneuver",
            "group": "General",
            "prereqs": "Combat Expertise; sneak attack +3d6 or studied strike +3d6"
        },
        {
            "id": "Survivor",
            "group": "General",
            "prereqs": "Con 13, Diehard, Endurance"
        },
        {
            "id": "Swamper",
            "group": "General",
            "prereqs": "Favored terrain (swamp) class feature"
        },
        {
            "id": "Swift Kitsune Shapechanger",
            "group": "General",
            "prereqs": "Dex 13, BAB +6, kitsune"
        },
        {
            "id": "Swipe and Stash",
            "group": "General",
            "prereqs": "Sleight of Hand 5 ranks"
        },
        {
            "id": "Sword Oath",
            "group": "General",
            "prereqs": "Proficient in longsword, Weapon Focus (longsword), BAB +4"
        },
        {
            "id": "Sycophant",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Talented Magician",
            "group": "General",
            "prereqs": "Major magic rogue talent, minor magic rogue talent"
        },
        {
            "id": "Tempting Bargain",
            "group": "General",
            "prereqs": "Unchained summoner level 1st, eidolon"
        },
        {
            "id": "Taunt",
            "group": "General",
            "prereqs": "Cha 13, Small size or smaller"
        },
        {
            "id": "Technologist",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Technophobe",
            "group": "General",
            "prereqs": "Improved Sunder"
        },
        {
            "id": "Telepathic Link",
            "group": "General",
            "prereqs": "Have a familiar with the speak with master ability"
        },
        {
            "id": "Telepathy Tap",
            "group": "General",
            "prereqs": "Sense Motive 10 ranks, ability to cast detect thoughts or telepathy as a spell or spell-like ability or telepathy supernatural ability"
        },
        {
            "id": "Tenacious Transmutation",
            "group": "General",
            "prereqs": "Spell Focus (transmutation)"
        },
        {
            "id": "Terrifying Mask",
            "group": ["General","Racial"],
            "prereqs": "Cha 13, Monstrous Mask, tiefling"
        },
        {
            "id": "Terrifying Strike",
            "group": "General",
            "prereqs": "Despair special ability, mummy"
        },
        {
            "id": "Theurgy",
            "group": "General",
            "prereqs": "Wis 13, Int or Cha 13, ability to cast 1st-level arcane spells, ability to cast 1st-level divine spells"
        },
        {
            "id": "Third Eye",
            "group": "General",
            "prereqs": "Psychic Sensitivity or ability to cast psychic spells"
        },
        {
            "id": "Thoughtful Discernment",
            "group": "General",
            "prereqs": "Discern lies class feature"
        },
        {
            "id": "Threatening Negotiator",
            "group": "General",
            "prereqs": "Nerve-Racking Negotiator, Persuasive, Skill Focus (Intimidate)"
        },
        {
            "id": "Timely Coordination",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Torchbearer",
            "group": "General",
            "prereqs": "Character level 5th"
        },
        {
            "id": "Torrid Tolerance",
            "group": "General",
            "prereqs": "Desert Dweller or Jungle Survivalist"
        },
        {
            "id": "Totem Spirit",
            "group": "General",
            "prereqs": "Member of a jungle tribe"
        },
        {
            "id": "Totemic Initiate",
            "group": "General",
            "prereqs": "Str 13; Dex 13; Athletic, BAB +5; no barbarian totem rage powers except those chosen with this feat; nonlawful alignment"
        },
        {
            "id": "Totemic Disciple",
            "group": "General",
            "prereqs": "Str 15; Dex 13; Athletic; Totemic Initiate; BAB +9; no barbarian totem rage powers except those chosen with this feat or Totemic Initiate; nonlawful alignment"
        },
        {
            "id": "Totemic Master",
            "group": "General",
            "prereqs": "Str 17; Dex 13; Wis 13; Athletic; Totemic Disciple; Totemic Initiate; BAB +13; no barbarian totem rage powers except those chosen with this feat, Totemic Disciple, or Totemic Initiate; nonlawful alignment"
        },
        {
            "id": "Touch of Evil",
            "group": "General",
            "prereqs": "Channel negative energy 6d6, evil alignment"
        },
        {
            "id": "Toughness",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Train Plants",
            "group": "General",
            "prereqs": "Handle Animal 5 ranks, Knowledge (nature) 5 ranks"
        },
        {
            "id": "Trapper's Setup",
            "group": "General",
            "prereqs": "Craft (traps) 5 ranks"
        },
        {
            "id": "Tree Leaper",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Trepanation",
            "group": "General",
            "prereqs": "Heal 5 ranks, Knowledge (arcana) 2 ranks"
        },
        {
            "id": "Triangulate",
            "group": "General",
            "prereqs": "Blind-Fight, Greater Blind-Fight, Improved Blind-Fight, Perception 15 ranks, human"
        },
        {
            "id": "Troth of the Forgotten Pharaoh",
            "group": "General",
            "prereqs": "Must be a member of a cult of a forgotten pharaoh"
        },
        {
            "id": "True Breed",
            "group": "General",
            "prereqs": "Two subtypes, elf blood or orc blood racial trait"
        },
        {
            "id": "True Deception",
            "group": "General",
            "prereqs": "Cha 17, Disguise 17 ranks, master disguise master ninja trick or master of disguise advanced rogue talent, ninja level 10th or rogue level 10th"
        },
        {
            "id": "Truth in Wine",
            "group": "General",
            "prereqs": "Appraise 3 ranks"
        },
        {
            "id": "Turn Undead",
            "group": "General",
            "prereqs": "Channel positive energy class feature"
        },
        {
            "id": "Twist Away",
            "group": "General",
            "prereqs": "Evasion"
        },
        {
            "id": "Umbral Shift",
            "group": "General",
            "prereqs": "Darkness racial spell-like ability"
        },
        {
            "id": "Ultimate Mercy",
            "group": "General",
            "prereqs": "Cha 19, Greater Mercy, lay on hands, mercy class feature"
        },
        {
            "id": "Ultimate Resolve",
            "group": "General",
            "prereqs": "Aura of resolve class feature"
        },
        {
            "id": "Uncanny Alertness",
            "group": "General",
            "prereqs": "Alertness"
        },
        {
            "id": "Uncanny Concentration",
            "group": "General",
            "prereqs": "Combat Casting"
        },
        {
            "id": "Unbound Bravery",
            "group": "General",
            "prereqs": "Bravery class feature, worshiper of a god of luck or drink."
        },
        {
            "id": "Undaunted Bravery",
            "group": "General",
            "prereqs": "Bravery class feature, worshiper of a god of luck or drink."
        },
        {
            "id": "Undead Master",
            "group": "General",
            "prereqs": "Spell Focus (necromancy), ability to cast animate dead or command undead"
        },
        {
            "id": "Undermining Exploit",
            "group": "General",
            "prereqs": "Knowledge (dungeoneering) 4 ranks"
        },
        {
            "id": "Unfettered Familiar",
            "group": "General",
            "prereqs": "Caster level 5, familiar class feature"
        },
        {
            "id": "Unimpeachable Honor",
            "group": "General",
            "prereqs": "Iron Will"
        },
        {
            "id": "Unsanctioned Detection",
            "group": "General",
            "prereqs": "Detect evil class feature"
        },
        {
            "id": "Unsanctioned Knowledge",
            "group": "General",
            "prereqs": "Int 13, must be able to cast 1st-level paladin spells"
        },
        {
            "id": "Urban Forager",
            "group": "General",
            "prereqs": "Knowledge (Local) 4 ranks, Survival 4 ranks"
        },
        {
            "id": "Vampiric Companion",
            "group": "General",
            "prereqs": "Dhampir or vampire, nongood alignment, 10th level in a class that grants a familiar or animal companion"
        },
        {
            "id": "Vandal",
            "group": ["General","Racial"],
            "prereqs": "Goblin, sneak attack class feature"
        },
        {
            "id": "Variant Prayer-Scroll",
            "group": "General",
            "prereqs": "Jiang-shi vampire"
        },
        {
            "id": "Vermin Heart",
            "group": "General",
            "prereqs": "Wild empathy class feature"
        },
        {
            "id": "Versatile Channeler",
            "group": "General",
            "prereqs": "Channel energy class feature, worship a neutral deity or neutral alignment and no deity"
        },
        {
            "id": "Versatile Jinxer",
            "group": "General",
            "prereqs": "Iron Will, halfling jinx trait"
        },
        {
            "id": "Vigilant Eidolon",
            "group": "General",
            "prereqs": "Eidolon class feature"
        },
        {
            "id": "Vigilant Phantom",
            "group": "General",
            "prereqs": "Phantom class feature"
        },
        {
            "id": "Vile Leadership",
            "group": "General",
            "prereqs": "Character level 7, good standing in an evil organization"
        },
        {
            "id": "Voice of Beasts",
            "group": "General",
            "prereqs": "Wild shape class feature"
        },
        {
            "id": "Voice of the Sibyl",
            "group": "General",
            "prereqs": "Cha 15"
        },
        {
            "id": "Walking Sleight",
            "group": "General",
            "prereqs": "Deft Hands, Sleight of Hand 5 ranks"
        },
        {
            "id": "Wand Dancer",
            "group": "General",
            "prereqs": "Dex 13, Dodge, Mobility, Perform (dance) 5 ranks"
        },
        {
            "id": "War Blessing",
            "group": "General",
            "prereqs": "Mystery or domain class feature"
        },
        {
            "id": "War Singer",
            "group": "General",
            "prereqs": "Cha 13, bardic performance, half-orc or orc"
        },
        {
            "id": "Warrior Priest",
            "group": "General",
            "prereqs": "Ability to cast divine spells, domain or mystery class feature"
        },
        {
            "id": "Waterway Caster",
            "group": "General",
            "prereqs": "—"
        },
        {
            "id": "Welcome Pain",
            "group": "General",
            "prereqs": "Iron Will, worship an evil god"
        },
        {
            "id": "Well-Prepared",
            "group": ["General","Racial"],
            "prereqs": "Halfling"
        },
        {
            "id": "Wicked Valor",
            "group": ["General","Racial"],
            "prereqs": "Con 15, Diehard, Endurance, tiefling"
        },
        {
            "id": "Wild Growth Channel",
            "group": "General",
            "prereqs": "Channel positive energy class feature, Plant domain"
        },
        {
            "id": "Wild Growth Hex",
            "group": "General",
            "prereqs": "Hex class feature, patron (summer, thorns, or woodlands) class feature"
        },
        {
            "id": "Wilding",
            "group": "General",
            "prereqs": "Any neutral alignment, must be taken at 1st level"
        },
        {
            "id": "Wilding Mind",
            "group": "General",
            "prereqs": "Wis 13, Wilding"
        },
        {
            "id": "Wilding Senses",
            "group": "General",
            "prereqs": "Wis 13, Wilding"
        },
        {
            "id": "Wilding Stride",
            "group": "General",
            "prereqs": "Con 13, Wilding"
        },
        {
            "id": "Wild Speech",
            "group": "General",
            "prereqs": "Wild shape class feature, druid 6"
        },
        {
            "id": "Wild Vigor",
            "group": "General",
            "prereqs": "Wild shape class feature"
        },
        {
            "id": "Willing Accomplice",
            "group": "General",
            "prereqs": "Cha 13, Bluff 3 ranks, Sense Motive 1 rank"
        },
        {
            "id": "Witch Knife",
            "group": "General",
            "prereqs": "Witch class"
        },
        {
            "id": "Wolf Rider",
            "group": "General",
            "prereqs": "Undersized Mount or effective level 7th in the class that grants the mount or divine bond (mount) class feature; Knowledge (nature) 1 rank; mount or divine bond (mount) class feature"
        },
        {
            "id": "Wood Crafter",
            "group": "General",
            "prereqs": "Craft (armor) 3 ranks, Knowledge (nature) 3 ranks"
        },
        {
            "id": "Word of Healing",
            "group": "General",
            "prereqs": "Lay on hands class feature"
        },
        {
            "id": "Worst Case Jinx",
            "group": "General",
            "prereqs": "Knowledge (arcana) 5 ranks, Halfling Jinx trait"
        },
        {
            "id": "Wrest Charge",
            "group": "General",
            "prereqs": "Disable Device 5 ranks, Knowledge (engineering) 5 ranks"
        },
        {
            "id": "Xenoglossy",
            "group": "General",
            "prereqs": "Int 13, Linguistics 3 ranks"
        },
        {
            "id": "Zealous Mind",
            "group": "General",
            "prereqs": "Iron Will, Unimpeachable Honor, lawful alignment"
        },

        //Teamwork
        {
            "id": "Allied Spellcaster",
            "group": "Teamwork",
            "prereqs": "Caster level 1st"
        },
        {
            "id": "Ally Shield",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Amplified Rage",
            "group": "Teamwork",
            "prereqs": "Half-orc or orc, rage class feature"
        },
        {
            "id": "Back to Back",
            "group": "Teamwork",
            "prereqs": "Perception 3 ranks"
        },
        {
            "id": "Improved Back to Back",
            "group": "Teamwork",
            "prereqs": "Back to Back, Perception 5 ranks"
        },
        {
            "id": "Basic Harmony",
            "group": "Teamwork",
            "prereqs": "Bardic performance or raging song"
        },
        {
            "id": "Betraying Blow",
            "group": "Teamwork",
            "prereqs": "Solo Maneuvers, BAB +8"
        },
        {
            "id": "Blades Above and Below",
            "group": "Teamwork",
            "prereqs": "BAB +6"
        },
        {
            "id": "Bonded Mind",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Broken Wing Gambit",
            "group": "Teamwork",
            "prereqs": "Bluff 5 ranks"
        },
        {
            "id": "Brutal Grappler",
            "group": "Teamwork",
            "prereqs": "Half-orc or orc"
        },
        {
            "id": "Callous Casting",
            "group": "Teamwork",
            "prereqs": "Spellcraft 1 rank"
        },
        {
            "id": "Cavalry Formation",
            "group": "Teamwork",
            "prereqs": "Mounted Combat"
        },
        {
            "id": "Circling Offense",
            "group": "Teamwork",
            "prereqs": "Dodge, Mobility, BAB +3"
        },
        {
            "id": "Combat Medic",
            "group": "Teamwork",
            "prereqs": "Heal 5 ranks"
        },
        {
            "id": "Compelling Harmonies",
            "group": "Teamwork",
            "prereqs": "Basic Harmony, Perform (keyboard, percussion, sing, string, or wind) 10 ranks, bardic performance or raging song"
        },
        {
            "id": "Cooperative Rend",
            "group": "Teamwork",
            "prereqs": "Rend, troll"
        },
        {
            "id": "Coordinated Charge",
            "group": "Teamwork",
            "prereqs": "At least two other teamwork feats, BAB +10"
        },
        {
            "id": "Coordinated Defense",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Coordinated Distraction",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Coordinated Maneuvers",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Coordinated Reposition",
            "group": "Teamwork",
            "prereqs": "Step Up"
        },
        {
            "id": "Coordinated Shot",
            "group": "Teamwork",
            "prereqs": "Point-Blank Shot"
        },
        {
            "id": "Counterpoint to Inspiration",
            "group": "Teamwork",
            "prereqs": "Basic Harmony, Compelling Harmonies, Perform (keyboard, percussion, sing, string, or wind) 10 ranks, bardic performance or raging song"
        },
        {
            "id": "Darting Retrieval",
            "group": "Teamwork",
            "prereqs": "Int 13, Combat Expertise, Improved Disarm"
        },
        {
            "id": "Disarm Partner",
            "group": "Teamwork",
            "prereqs": "BAB +1"
        },
        {
            "id": "Improved Disarm Partner",
            "group": "Teamwork",
            "prereqs": "Disarm Partner, BAB +5"
        },
        {
            "id": "Distracting Charge",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Duck and Cover",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Improved Duck and Cover",
            "group": "Teamwork",
            "prereqs": "Duck and Cover"
        },
        {
            "id": "Elemental Commixture",
            "group": "Teamwork",
            "prereqs": "Caster level 1st"
        },
        {
            "id": "Enfilading Fire",
            "group": "Teamwork",
            "prereqs": "Point-Blank Shot, Precise Shot, 1 other teamwork feat"
        },
        {
            "id": "Ensemble",
            "group": "Teamwork",
            "prereqs": "Perform 5 ranks"
        },
        {
            "id": "Escape Route",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Exceptional Aid",
            "group": "Teamwork",
            "prereqs": "Bonded Mind"
        },
        {
            "id": "Extend the Bulwark",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Feint Partner",
            "group": "Teamwork",
            "prereqs": "Bluff 1 rank"
        },
        {
            "id": "Improved Feint Partner",
            "group": "Teamwork",
            "prereqs": "Combat Reflexes, Feint Partner, BAB +6"
        },
        {
            "id": "Fighting Frenzy",
            "group": "Teamwork",
            "prereqs": "Cha 13, rage class feature"
        },
        {
            "id": "Focusing Blow",
            "group": ["Teamwork","Racial"],
            "prereqs": "Hobgoblin Discipline, hobgoblin"
        },
        {
            "id": "Friendly Fire",
            "group": "Teamwork",
            "prereqs": "Precise Shot"
        },
        {
            "id": "Got Your Back",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Int 13, Combat Expertise"
        },
        {
            "id": "Horde Charge",
            "group": "Teamwork",
            "prereqs": "Half-orc or orc, BAB +1"
        },
        {
            "id": "Interweaving Style",
            "group": "Teamwork",
            "prereqs": "Dodge, Weapon Focus"
        },
        {
            "id": "Lookout",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Outflank",
            "group": "Teamwork",
            "prereqs": "BAB +4"
        },
        {
            "id": "Paired Opportunists",
            "group": "Teamwork",
            "prereqs": "Combat Reflexes"
        },
        {
            "id": "Pack Attack",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Pack Flanking",
            "group": "Teamwork",
            "prereqs": "Handle Animal 5 ranks, animal companion or mount class feature"
        },
        {
            "id": "Pack Rat",
            "group": "Teamwork",
            "prereqs": "Ratfolk"
        },
        {
            "id": "Peak Performance",
            "group": "Teamwork",
            "prereqs": "Perform (any) 5 ranks"
        },
        {
            "id": "Phalanx Formation",
            "group": "Teamwork",
            "prereqs": "Proficiency with heavy shields and spears"
        },
        {
            "id": "Precise Strike",
            "group": "Teamwork",
            "prereqs": "Dex 19, BAB +11"
        },
        {
            "id": "Scion of the Land",
            "group": "Teamwork",
            "prereqs": "Survival 1 rank"
        },
        {
            "id": "Secret Language",
            "group": "Teamwork",
            "prereqs": "Bluff 1 rank, Linguistics 1 rank, Sense Motive 1 rank"
        },
        {
            "id": "Seize the Moment",
            "group": "Teamwork",
            "prereqs": "Combat Reflexes, Improved Critical"
        },
        {
            "id": "Shake It Off",
            "group": "Teamwork",
            "prereqs": "Base attack bonus +1"
        },
        {
            "id": "Share Spells",
            "group": "Teamwork",
            "prereqs": "Bonded Mind, ability to share spells with an animal companion, eidolon, familiar, or phantom, caster level 1st."
        },
        {
            "id": "Improved Spell Sharing",
            "group": "Teamwork",
            "prereqs": "Ability to acquire an animal companion, eidolon, familiar, or special mount"
        },
        {
            "id": "Shield Wall",
            "group": "Teamwork",
            "prereqs": "Shield Proficiency"
        },
        {
            "id": "Shielded Caster",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Stealth Synergy",
            "group": "Teamwork",
            "prereqs": "Stealth 5 ranks"
        },
        {
            "id": "Swap Places",
            "group": "Teamwork",
            "prereqs": "Dodge, base attack bonus +1"
        },
        {
            "id": "Tandem Trip",
            "group": ["Combat", "Teamwork"],
            "prereqs": "Int 13, Combat Expertise"
        },
        {
            "id": "Target of Opportunity",
            "group": "Teamwork",
            "prereqs": "—"
        },
        {
            "id": "Team Pickpocketing",
            "group": "Teamwork",
            "prereqs": "Sleight of Hand 1 rank"
        },
        {
            "id": "Throw Alchemist Bomb",
            "group": "Teamwork",
            "prereqs": "Alchemist bomb class feature"
        },
        {
            "id": "Under and Over",
            "group": "Teamwork",
            "prereqs": "Small size or smaller"
        },
        {
            "id": "Valiant Vault",
            "group": "Teamwork",
            "prereqs": "Acrobatics 1 rank"
        },
        {
            "id": "Volley Fire",
            "group": "Teamwork",
            "prereqs": "Weapon Focus with a crossbow or firearm"
        },
        {
            "id": "Wounded Paw Gambit",
            "group": "Teamwork",
            "prereqs": "Animal companion with bleed special attack"
        },

        //Metamagic
        {
            "id": "Apocalyptic Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Aquatic Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Authoritative Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Benthic Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Blissful Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Bouncing Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Brackish Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Brisk Spell",
            "group": "Metamagic",
            "prereqs": "Dex 13+"
        },
        {
            "id": "Burning Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Centered Spell",
            "group": "Metamagic",
            "prereqs": "Spellcraft 3 ranks"
        },
        {
            "id": "Cherry Blossom Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Coaxing Spell",
            "group": "Metamagic",
            "prereqs": "Spell Focus (enchantment), Knowledge (dungeoneering) 6 ranks"
        },
        {
            "id": "Concussive Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Conditional Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Consecrate Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Contagious Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Contingent Spell",
            "group": "Metamagic",
            "prereqs": "Ability to cast spells of the school the contingent spell will be tied to"
        },
        {
            "id": "Crypt Spell",
            "group": "Metamagic",
            "prereqs": "Knowledge (religion) 5 ranks"
        },
        {
            "id": "Dazing Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Deep Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Destructive Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Detonating Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Disruptive Spell",
            "group": "Metamagic",
            "prereqs": "6th-level fighter, Spellbreaker"
        },
        {
            "id": "Echoing Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Eclipsed Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Ectoplasmic Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Elemental Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Empower Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Encouraging Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Enlarge Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Extend Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Familiar Spell",
            "group": "Metamagic",
            "prereqs": "Have a familiar with the deliver touch spells ability"
        },
        {
            "id": "Fearsome Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Flaring Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Fleeting Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Focused Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Furious Spell",
            "group": "Metamagic",
            "prereqs": "Rage class feature"
        },
        {
            "id": "Green-Faith Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Heighten Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Incendiary Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Intensified Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Jolt Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Jury-Rig Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Latent Curse",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Lingering Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Maximize Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Merciful Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Murky Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Mystic Spell",
            "group": "Metamagic",
            "prereqs": "Caster level 3rd"
        },
        {
            "id": "Persistent Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Piercing Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Quicken Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Reach Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Reflexive Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Rime Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Scarring Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Scenting Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Seeking Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Selective Spell",
            "group": "Metamagic",
            "prereqs": "Spellcraft 10 ranks"
        },
        {
            "id": "Shadow Grasp",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Sickening Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Silent Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Snuffing Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Steam Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Still Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Sundering Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Tenebrous Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Thanatopic Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Thawing Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Theumaturgic Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Thundering Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Toppling Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Toxic Spell",
            "group": "Metamagic",
            "prereqs": "Ability to cast poison, Craft (alchemy) 5 ranks"
        },
        {
            "id": "Trap-Stealing Spell",
            "group": "Metamagic",
            "prereqs": "Thievery 5 ranks"
        },
        {
            "id": "Tumultuous Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Umbral Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Verdant Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Vibrating Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Widen Spell",
            "group": "Metamagic",
            "prereqs": "—"
        },
        {
            "id": "Yai-Mimic Spell",
            "group": "Metamagic",
            "prereqs": "Knowledge (the planes) 15 ranks, oni"
        },

        //Item Creation
        {
            "id": "Brew Fleshcrafting Poison",
            "group": "Item Creation",
            "prereqs": "CL 10, 5 or more ranks in Craft (alchemy)"
        },
        {
            "id": "Brew Potion",
            "group": "Item Creation",
            "prereqs": "CL 3"
        },
        {
            "id": "Craft Construct",
            "group": "Item Creation",
            "prereqs": "CL 5, Craft Magic Arms and Armor, Craft Wondrous Item"
        },
        {
            "id": "Craft Magic Arms and Armor",
            "group": "Item Creation",
            "prereqs": "CL 5"
        },
        {
            "id": "Craft Ooze",
            "group": "Item Creation",
            "prereqs": "Brew Potion, Craft Wondrous Item, Craft (alchemy) 3 ranks, caster level 5"
        },
        {
            "id": "Craft Poppet",
            "group": "Item Creation",
            "prereqs": "CL 1"
        },
        {
            "id": "Craft Rod",
            "group": "Item Creation",
            "prereqs": "CL 9"
        },
        {
            "id": "Craft Shadow Piercing",
            "group": "Item Creation",
            "prereqs": "Craft (jewelry) 5 ranks, caster level 5"
        },
        {
            "id": "Craft Staff",
            "group": "Item Creation",
            "prereqs": "CL 11"
        },
        {
            "id": "Craft Wand",
            "group": "Item Creation",
            "prereqs": "CL 5"
        },
        {
            "id": "Craft Wondrous Item",
            "group": "Item Creation",
            "prereqs": "CL 3"
        },
        {
            "id": "Cultivate Magic Plants",
            "group": "Item Creation",
            "prereqs": "Brew Potion, Craft Wondrous Item; Knowledge (nature) 1 rank"
        },
        {
            "id": "Fleshwarper",
            "group": "Item Creation",
            "prereqs": "Craft (alchemy) 5 ranks, Heal 5 ranks, evil alignment."
        },
        {
            "id": "Forge Ring",
            "group": "Item Creation",
            "prereqs": "CL 7th"
        },
        {
            "id": "Grisly Ornament",
            "group": "Item Creation",
            "prereqs": "Harvest Parts"
        },
        {
            "id": "Haunt Scavenger",
            "group": "Item Creation",
            "prereqs": "Any one item creation feat or Craft (alchemy) 3 ranks"
        },
        {
            "id": "Inscribe Magical Tattoo",
            "group": "Item Creation",
            "prereqs": "Craft (calligraphy, paintings, or tattoos) 5 ranks, caster level 5"
        },
        {
            "id": "Inscribe Rune",
            "group": "Item Creation",
            "prereqs": "CL 3"
        },
        {
            "id": "Monstrous Crafter",
            "group": "Item Creation",
            "prereqs": "Craft Wondrous Item, Grisly Ornament, Harvest Parts"
        },
        {
            "id": "Scribe Scroll",
            "group": "Item Creation",
            "prereqs": "CL 1"
        },
    ]
};
