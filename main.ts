// The Painfully Honest Out-of-Office — make.fun entry.
//
// Writes a single out-of-office email auto-reply to /output/entry.txt.
// The reply is one sentence, 172 characters: painfully honest about the
// sender's inbox (300 unread, already behind before leaving) yet polite
// enough that a manager would let it stand ("thank you for your patience",
// "I will reply as soon as I can").
//
// The grader mounts /output and runs this program as an unprivileged user,
// so this program only ever creates the directory if needed and writes the
// file inside it. It never deletes the output directory itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single sentence, at most 200 characters.
const ENTRY =
  "I'm away this week, and I'll be honest: your email joins the 300 unread " +
  "I was already behind on when I left, so thank you for your patience — " +
  "I will reply as soon as I can.";

// The gate the sealed scorer applies: /output/entry.txt must be UTF-8
// text of 1 to 200 characters, not only white space. This program checks
// its own output against that gate before it exits.
function checkGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} characters, outside the 1-200 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  // The judge's brief wants one sentence: exactly one terminal period.
  const sentences = text.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`entry has ${sentences.length} sentences, expected 1`);
  }
}

// Where the grader expects the entry. ENTRY_OUTPUT_DIR exists only so the
// entry can be run locally without touching the mounted /output.
const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");

const written = readFileSync(outputPath, "utf8");
checkGate(written);
console.log(`Wrote ${written.length} characters to ${outputPath}`);
