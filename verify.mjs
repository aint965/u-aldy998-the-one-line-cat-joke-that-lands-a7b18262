// Verifier for the cat-joke entry.
// Runs main.ts twice into two separate temporary output directories,
// byte-compares the two entry.txt files, and checks the output is valid
// UTF-8, 1-200 characters, a single line, and not only whitespace.
// Exits 0 only when every check passes.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = fileURLToPath(new URL(".", import.meta.url));
const failures = [];
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures.push(name);
};

const runs = [];
try {
  for (let i = 0; i < 2; i++) {
    const outDir = mkdtempSync(join(tmpdir(), `cat-joke-verify-${i}-`));
    execFileSync("node", [join(dir, "main.ts")], {
      env: { ...process.env, OUTPUT_DIR: outDir },
      stdio: "pipe",
    });
    runs.push(readFileSync(join(outDir, "entry.txt")));
    rmSync(outDir, { recursive: true, force: true });
  }
} catch (err) {
  console.log(`FAIL  run main.ts — ${err.message}`);
  process.exit(1);
}

const [a, b] = runs;
check("two runs byte-identical", a.equals(b), `${a.length} bytes each`);

let text;
try {
  text = new TextDecoder("utf-8", { fatal: true }).decode(a);
  check("valid UTF-8", true);
} catch {
  check("valid UTF-8", false);
  text = "";
}

const chars = [...text].length;
check("1-200 characters", chars >= 1 && chars <= 200, `${chars} characters`);
check("single line", !text.includes("\n") && !text.includes("\r"));
check("not only whitespace", text.trim().length > 0);
check("no trailing newline", !text.endsWith("\n"));
check("mentions cats", /cat/i.test(text));

console.log(`\nEntry (${chars} characters, ${a.length} bytes):`);
console.log(text);

if (failures.length > 0) {
  console.log(`\n${failures.length} check(s) failed.`);
  process.exit(1);
}
console.log("\nAll checks passed.");
