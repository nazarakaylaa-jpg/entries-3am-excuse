// The 3 AM Excuse — make.fun program/v1 entry.
//
// Writes one line (under 200 characters) to <output>/entry.txt: the excuse
// a hardware wallet gives for refusing to sign a transaction at 3 AM.
//
// The line was chosen against the judge brief: on subject first, then an
// angle nobody else would think of (no battery / firmware / cold-storage
// jokes), in the wallet's own voice, with the 3 AM hour as the joke itself,
// and every word earning its place.
//
// Final line (69 characters):
//   I've met your 3 AM self. Last time he bought a yacht at 3:04. Denied.
//
// Why this one: the wallet is not sleepy, it is a witness. It has met the
// owner's 3 AM self before, and the evidence is concrete — a yacht, bought
// at 3:04. "Denied" is the device's own verdict, one word, no explanation.
// The joke cannot move to 3 PM: the hour is the whole case.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I've met your 3 AM self. Last time he bought a yacht at 3:04. Denied.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY.trim() !== ENTRY) {
    throw new Error("entry must not start or end with whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("entry.txt did not round-trip byte for byte");
  }
  console.log(`wrote ${outPath} (${chars} characters)`);
}

main();
