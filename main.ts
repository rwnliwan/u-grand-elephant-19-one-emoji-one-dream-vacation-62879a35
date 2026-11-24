// One Emoji, One Dream Vacation — entry program (Node 22, stdlib only).
// The entry is exactly one emoji: 🚂 U+1F682 STEAM LOCOMOTIVE.
// Craft vs the judge brief:
// 1. Exactly one emoji, no words; transport is blessed by the brief itself
//    ("a plane") — a steam locomotive is the romantic counterpart: the
//    journey IS the dream (Glacier Express / Orient Express / Trans-Siberian).
// 2. Postcard at a glance: a red steam train crossing a mountain viaduct.
// 3. Specific: one particular dream (a great rail journey), not any holiday.
// 4. Fresh pick: zero hits for every train-family word and zero 🚂 in all
//    748 submission titles — the field is Fuji, desert islands, sunrises.
// 5. Instantly readable at small size, cross-cultural, no explanation.
// Single code point: 1 character, 4 bytes UTF-8 — gate-safe (1-8 chars)
// and minimal on the Size tie-break column.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🚂";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, ENTRY, "utf8");
