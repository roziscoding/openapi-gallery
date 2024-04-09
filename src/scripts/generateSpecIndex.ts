import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const specsPath = resolve(join(dirname(fileURLToPath(import.meta.url)), "../../public/specs"));
const fileNames = await readdir(specsPath);
const specEntries = await Promise.all(
  fileNames.map(async (fileName) => {
    if (fileName === "index.json" || !fileName.endsWith(".json")) return null;

    const specPath = join(specsPath, fileName);
    const spec = JSON.parse(await readFile(specPath, "utf-8"));
    return {
      id: fileName.replace(".json", ""),
      ...spec.info,
    };
  })
).then((entries) => entries.filter(Boolean));

await writeFile(join(specsPath, "index.json"), JSON.stringify(specEntries));
