// Entrypoint: salin POST.json dari root repo ke direktori output
// (MAKEFUN_OUTPUT_DIR, default /output), buat direktorinya bila belum ada.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "POST.json");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = readFileSync(source, "utf8");
mkdirSync(targetDir, { recursive: true });
const destination = join(targetDir, "POST.json");
writeFileSync(destination, text);
console.log(`Copied POST.json to ${destination}`);
