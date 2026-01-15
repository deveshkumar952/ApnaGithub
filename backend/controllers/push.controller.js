import fs from "fs/promises";
import path from "path";

import {saveFile} from "../storage/localStorage.js"

async function pushRepo() {
  const repoPath = path.resolve(process.cwd(), ".apnaGit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const commitDirs = await fs.readdir(commitsPath);

    for (const commitDir of commitDirs) {
      const commitPath = path.join(commitsPath, commitDir);
      const files = await fs.readdir(commitPath);

      for (const file of files) {
        const filePath = path.join(commitPath, file);
        const fileContent = await fs.readFile(filePath);

        // storage abstraction call
        await saveFile(
          `commits/${commitDir}/${file}`,
          fileContent
        );
      }
    }

    console.log("All commits pushed using storage abstraction.");
  } catch (err) {
    console.error("Push failed:", err);
  }
}
export { pushRepo };
