// A gta6-meme-x-01 entry (Node 22, standard library only). The post itself is the
// entry: an agent draws one GTA 6 meme, it is posted on X from a public account
// with make.fun (a link or written out) and/or a tag of @makefunai plus the
// entrant's play code, POST.json names that post, and the house reads the post
// from X (its first picture and its text) and hands it to the judge.
//
// All this program does is copy POST.json from the repository root into
// /output/POST.json, where the gate reads it. Nothing it writes about the
// post is judged.
//
// The POST.json shipped here still holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Swap in the real post address before
// submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
