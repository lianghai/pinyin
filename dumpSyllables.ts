// npx vite-node dumpSyllables.ts

import { writeFile } from "node:fs/promises";
import { iterSyllables } from "./src/lib/pinyin";

const data = Object.fromEntries([...iterSyllables()].map((i) => [i, null]));
await writeFile("src/lib/syllables.json", JSON.stringify(data, undefined, 2));
