import fs from "fs/promises";
import path from "path";

async function initRepo(argv) {
  const repoPath = path.resolve(process.cwd(), ".apnaGit");
  const commitPath = path.join(repoPath, "commits");
  try {
    await fs.mkdir(repoPath, { recursive: true });
    await fs.mkdir(commitPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({ bucket: process.env.S3_BUCKET })
    );
  } catch (err) {
    console.log("Error initialising Repository", err);
  }
}

export { initRepo };
