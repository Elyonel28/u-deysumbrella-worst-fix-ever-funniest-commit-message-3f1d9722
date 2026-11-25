// Worst Fix Ever: Funniest Commit Message
// make.fun bounty u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// One line, at most 100 characters, that reads like a real commit subject
// for a bug fix that made everything worse. The program is deliberately
// boring on purpose: the entry is the line itself, and the line is fixed,
// so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 100;

// The commit message. The fix "worked": the page now loads instantly,
// because there is no page left to load. Lighthouse is thrilled;
// the users are gone.
const COMMIT_MESSAGE =
  "fix: make the page load faster by deleting the page \u2014 Lighthouse score 100, users 0";

function main(): void {
  const chars = [...COMMIT_MESSAGE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`commit message is ${chars} characters, must be 1-100`);
  }
  if (COMMIT_MESSAGE.trim().length === 0) {
    throw new Error("commit message must not be blank");
  }
  // A commit subject is one line: reject any newline the message might
  // ever pick up, so the output can never become two lines by accident.
  if (/[\r\n]/.test(COMMIT_MESSAGE)) {
    throw new Error("commit message must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), COMMIT_MESSAGE + "\n", "utf8");
  console.log(`wrote entry.txt (${chars} chars)`);
}

main();
