import fs from "fs/promises";
import path from "path";


async function addRepo(filePath){
    const repoPath = path.resolve(process.cwd(),".apnaGit");
    const stagingPath = path.join(repoPath,"staging");

    try{
        await fs.mkdir(stagingPath,{recursive:true});
        const fileName = path.basename(filePath);
        await fs.copyFile(filePath,path.join(stagingPath,fileName))
        console.log(`File ${fileName} is added to the staging area!`)

    }
    catch(err){
        console.error("Error adding file:",err);
    }
}

export {addRepo};