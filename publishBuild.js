const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const sourceDir = path.join(__dirname);
const publishDir = path.join(__dirname, 'publish');
const subfolderName = 'pepe_gombai';

async function cleanAndCopy() {
  try {
    console.log('Starting the cleaning and copying process...');

    if (fs.existsSync(publishDir)) {
      console.log(`The publish directory exists. Emptying it...`);
      await fse.emptyDir(publishDir);
    } else {
      console.log(`The publish directory does not exist. Creating it...`);
      await fse.mkdir(publishDir);
    }

    console.log('Copying files into the publish folder...');
    await copyFilesToPublishFolder(sourceDir, publishDir);

    console.log('Updating files inside the publish folder...');

    console.log('Build process completed successfully!');
  } catch (err) {
    console.error('Error during the cleaning and copying process:', err);
  }
}

async function copyFilesToPublishFolder(src, dest) {
  const items = fs.readdirSync(src);

  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory() && item !== 'publish') {
      await fse.mkdir(destPath);
      await copyFilesToPublishFolder(srcPath, destPath);
    } else if (item !== 'publish') {
      await fse.copy(srcPath, destPath);
    }
  }
}


cleanAndCopy();