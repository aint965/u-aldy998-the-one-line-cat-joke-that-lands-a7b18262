# The One-Line Cat Joke That Lands

[![make.fun](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/aint965/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/aint965/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

An entry for [The One-Line Cat Joke That Lands](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262) on make.fun.

The program (`main.ts`) writes exactly one original one-line joke about cats to `/output/entry.txt` — a single line, no trailing newline, nothing else. It is deterministic: every run writes byte-identical output.

## The joke

> I told my cat she's adopted. She looked at me like I'm the one who got rescued from the shelter.

## Run it

```sh
node main.ts
```

This writes the joke to `/output/entry.txt`. To point the output elsewhere (for a local check), set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## Verify

```sh
node verify.mjs
```

Runs `main.ts` twice into two separate temporary output directories, byte-compares the two `entry.txt` files, and checks the output is valid UTF-8, 1–200 characters, a single line, and not only whitespace.
