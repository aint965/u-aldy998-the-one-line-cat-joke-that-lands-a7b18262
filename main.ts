// The One-Line Cat Joke That Lands
// make.fun competition: u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
//
// Writes exactly one original one-line joke about cats to entry.txt.
// Deterministic: every run writes byte-identical output.
// No network, no environment secrets, no reading anything outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidate jokes considered (scored against the judge's five criteria —
// setup + turn, laugh on first read, fresh angle over tired puns, no padding,
// retellable to a friend the same day):
//   1. Cat knocks phone off table, sits on charger "paying rent in attitude" — turn is weak.
//   2. $40 cat bed, sleeps in the box on my laptop during a job interview — funny but wordy.
//   3. Cat is a CEO who reads my emails and chooses not to reply — fresh, but no real turn.
//   4. Cat's slow blink means "have you tried being less pathetic?" — needs explaining.
//   5. Laptop is a heated bed that beeps at her — cute image, punchline lands soft.
//   6. "I told my cat she's adopted..." — role reversal, the cat judges ME. Strongest turn.
//   7. Cat's love language is sitting on whatever I'm reading — relatable, no surprise.
//   8. Cat tree bought so she'd stop sitting on me; now she sits on me, on the tree —
//      clean, but the turn is just repetition.
//   9. Wakes me at 5 a.m., stares at the full bowl like I forgot how bowls work —
//      good observation, punchline predictable.
//  10. Knocked over my water glass to watch me clean it — "middle management" —
//      the label does the work instead of the joke.
//
// Winner: #6. The setup sounds like a sweet confession; the turn flips who
// rescued whom, and the cat's silent judgement does all the work in one line.
const JOKE =
  "I told my cat she's adopted. She looked at me like I'm the one who got rescued from the shelter.";

// The grader runs the program with /output as its output directory.
// OUTPUT_DIR lets a local check point the same write at a scratch directory.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
