import fs from "fs/promises";
import path from "path";

const BASE_PATH = path.resolve(process.cwd(), "storage");

async function saveFile(relativePath, content) {
  const fullPath = path.join(BASE_PATH, relativePath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, content);
}

async function readFile(relativePath) {
  return fs.readFile(path.join(BASE_PATH, relativePath));
}

async function deleteFile(relativePath) {
  await fs.unlink(path.join(BASE_PATH, relativePath));
}

async function listFiles(dir = "") {
  const fullDirPath = path.join(BASE_PATH, dir);
  let results = [];

  const entries = await fs.readdir(fullDirPath, { withFileTypes: true });

  for (const entry of entries) {
    const relative = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const nestedFiles = await listFiles(relative);
      results = results.concat(nestedFiles);
    } else {
      results.push(relative);
    }
  }

  return results;
}

export {
  saveFile,
  readFile,
  deleteFile,
  listFiles,
};
