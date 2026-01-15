import fs from "fs/promises"
import path from "path";
import { readFile , listFiles } from "../storage/localStorage.js";

async function pullRepo() {
    const repoPath = path.resolve(process.cwd(),".apnaGit");
    const commitsPath = path.join(repoPath,"commits");
    try{
        const objects = await listFiles("commits");

    for (const key of objects) {
      // key example: commits/<commitId>/<file>
      const relativeDir = path.dirname(key); // commits/<commitId>
      const targetDir = path.join(repoPath, relativeDir);

      await fs.mkdir(targetDir, { recursive: true });

      const fileContent = await readFile(key);
      const targetFilePath = path.join(repoPath, key);

      await fs.writeFile(targetFilePath, fileContent);
          }

    console.log("All commits pulled using storage abstraction.");
    }
    catch(err){
        console.error("Unable to pull:", err);
    }
}

export {pullRepo}