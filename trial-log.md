# Trial log — One Emoji, One Dream Vacation

## Candidates considered (aggregate of all 748 submission titles in comp-2.json)

| Candidate | Title hits | Decision |
|---|---|---|
| 🗻 Mount Fuji | ~104 "fuji" + 22 emoji | REJECT — most saturated angle in the field |
| 🏝️ Desert island | 77 "desert" + 30 emoji | REJECT — second most saturated angle |
| 🌅 Sunrise over the sea | 34 "sunrise" + 26 "sea" + 22 "dawn" | REJECT — saturated nature-spectacle mechanism |
| 🌌 Milky Way / aurora | 9 + 6 | REJECT — night-sky mechanism present |
| 🌋 Volcano | 15 "volcano" + 6 emoji | REJECT — present |
| 🗿 Moai | 11 "moai" + 4 emoji | REJECT — present |
| 🐬 Dolphin | 2 "dolphin" | REJECT — marine-wildlife mechanism near-duplicate of whale watching (3 titles + 🐋 1) |
| 🛳️ Cruise ship | 1 "cruise" | REJECT — boat-voyage mechanism overlaps sailboat (8) |
| 🌊 Wave / surf | 3 "wave" + 1 "surf" | REJECT — ocean mechanism overlaps sea/beach/sunrise (60+) |
| 🗽 Statue of Liberty | 1 "liberty" | REJECT — iconic-landmark mechanism, same as Fuji |
| 🛕 Temple / Angkor | 1 "angkor" | REJECT — iconic-landmark mechanism, same as Fuji |
| 🏰 Castle | 2 "castle" | REJECT — iconic-landmark mechanism, same as Fuji |
| 🌺 Hibiscus | 1 "hibiscus" | REJECT — fails judge criterion 1: a flower does not plainly name a vacation |
| 🧳 Luggage | 0 | REJECT — fails criterion 1: luggage names packing, not a vacation place |
| 🗺️ World map | 1 "world" | REJECT — fails criterion 3: "the world" is generic, any holiday |
| 🌠 Shooting star | 0 | REJECT — night-sky mechanism, same family as 🌌/aurora (15 hits) |
| 🦜 Parrot | 0 | REJECT — tropical-wildlife mechanism, same family as flamingo (4) / penguin (7) |
| 🏜️ Desert dunes | 0 "dune"/"sahara", but 77 "desert" | REJECT — judge reads "desert"; word family is the #2 saturated one |
| 🏕️ Camping | 0 | REJECT — generic, weak postcard (criterion 2) |
| 🛬 Arrival | 0 | REJECT — arrival is the end of a trip, not the dream itself |
| 🚂 Steam locomotive | **0 train / 0 locomotive / 0 rail / 0 express / 0 orient, 0 emoji** | **ACCEPT** |

## Chosen entry

🚂 U+1F682 STEAM LOCOMOTIVE — 1 code point, 1 character, 4 bytes UTF-8.
Mechanism: "the journey itself is the dream" — a scenic rail journey. Zero
hits for every train-family keyword and zero emoji hits across 748 titles:
no near-duplicate up to mechanism. Transport is blessed by the judge brief
itself (criterion 1 lists "a plane"); the steam locomotive is the romantic,
heritage counterpart — Glacier Express, Orient Express, Trans-Siberian.
Vivid postcard (red train on a mountain viaduct), specific (one particular
dream), fresh (nobody else picked it), instantly readable at small size.

## Trials

| Version | Entry | Size | Result |
|---|---|---|---|
| v1 | 🚂 | 1 char / 4 bytes | Built; bundle + check pending (see below) |

## Status

- Research: `../research-2.md` (aggregate counts, gate verification, judge criteria).
- Build: main.ts writes exactly `🚂` to `$ENTRY_OUTPUT` or `/output/entry.txt`.
- Bundle/check: to be recorded here after the first real run.
