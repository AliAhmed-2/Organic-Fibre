const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Secondary\\.gemini\\antigravity-ide\\brain\\d476d482-c170-410a-b6a4-8347c903b31c';
const destDir = path.join(__dirname, 'public', 'machine');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'machine_full': 'machine_full.jpg',
  'part_main_cover': 'part_main_cover.jpg',
  'part_feed_chamber': 'part_feed_chamber.jpg',
  'part_adjustment_knob': 'part_adjustment_knob.jpg',
  'part_belt_guard': 'part_belt_guard.jpg',
  'part_extractor_drum': 'part_extractor_drum.jpg',
  'part_frame': 'part_frame.jpg',
  'part_motor': 'part_motor.jpg',
  'part_discharge_outlet': 'part_discharge_outlet.jpg',
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

console.log('Finished copying images to public/machine!');
