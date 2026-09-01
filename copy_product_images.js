const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Secondary\\.gemini\\antigravity-ide\\brain\\d476d482-c170-410a-b6a4-8347c903b31c';
const destDir = path.join(__dirname, 'public');

const mapping = {
  'banana_cotton_pulp': 'banana_cotton_pulp.jpg',
  'banana_raw_fiber': 'banana_raw_fiber.jpg',
  'banana_paper_folders': 'banana_paper_folders.jpg',
  'banana_carry_bag': 'banana_carry_bag.jpg',
};

const files = fs.readdirSync(srcDir);

for (const [key, targetName] of Object.entries(mapping)) {
  const match = files.find(f => f.startsWith(key) && f.endsWith('.jpg'));
  if (match) {
    const srcFile = path.join(srcDir, match);
    const destFile = path.join(destDir, targetName);
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${match} -> ${targetName}`);
  } else {
    console.warn(`Could not find match for ${key}`);
  }
}

console.log('Finished copying product images!');
