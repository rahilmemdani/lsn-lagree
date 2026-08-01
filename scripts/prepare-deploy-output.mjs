import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const outputs = [
    { source: resolve(rootDir, ".output/public"), target: resolve(rootDir, "dist/client") },
    { source: resolve(rootDir, ".output/server"), target: resolve(rootDir, "dist/server") },
];

for (const { source, target } of outputs) {
    if (!existsSync(source)) {
        continue;
    }

    mkdirSync(target, { recursive: true });
    cpSync(source, target, { recursive: true });
}
