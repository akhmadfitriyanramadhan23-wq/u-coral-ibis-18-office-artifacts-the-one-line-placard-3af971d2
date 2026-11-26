// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// Node 22, stdlib only, deterministic, no network.
// Writes one museum-placard line (<=180 chars) to /output/entry.txt.
//
// The conceit: a "World's Best Boss" office mug recast as a ceremonial
// chalice, self-awarded by its bearer. Catalogue date + material + donor,
// three beats (catalogue, inscription, donor's rite), ending on a concrete
// image ("drank alone") with no explanation of the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 180; // gate: /output/entry.txt must be 1-180 characters

const ENTRY =
  "Ceremonial chalice, c. 2011, glazed ceramic, inscribed WORLD'S BEST BOSS. " +
  "Donated by its bearer, who awarded it to himself each Christmas and drank alone.";

// Fail loudly rather than ship an entry the gate would refuse.
if ([...ENTRY].length < 1 || [...ENTRY].length > MAX_CHARS) {
  throw new Error(`entry is ${[...ENTRY].length} chars, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
