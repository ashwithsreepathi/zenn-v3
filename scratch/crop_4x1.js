const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const artifactsDir = `C:/Users/Ashwith Sreepathi/.gemini/antigravity-ide/brain/906655b7-a1f8-41b9-bb77-df2741dd6cd5`;
const targetDir = `E:/Zenn Studios/redesign-v3/public/images/capabilities`;

async function processImage(prefix, outputName) {
  const files = fs.readdirSync(artifactsDir).filter(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (files.length === 0) {
    console.log(`No file found for ${prefix}`);
    return;
  }

  // Get the most recent file
  const latestFile = files.sort((a, b) => fs.statSync(path.join(artifactsDir, b)).mtime - fs.statSync(path.join(artifactsDir, a)).mtime)[0];
  const inputPath = path.join(artifactsDir, latestFile);
  const outputPath = path.join(targetDir, outputName);

  // Resize and cover-crop precisely to 1600x400 (4:1 ratio)
  await sharp(inputPath)
    .resize(1600, 400, {
      fit: 'cover',
      position: 'center'
    })
    .png()
    .toFile(outputPath);

  console.log(`Successfully created 4:1 image (1600x400): ${outputName}`);
}

async function run() {
  await processImage('capability_software_4x1', 'software.png');
  await processImage('capability_branding_4x1', 'branding.png');
  await processImage('capability_photography_4x1', 'photography.png');
  await processImage('capability_social_4x1', 'social.png');
}

run().catch(console.error);
