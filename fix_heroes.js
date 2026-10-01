const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/feature/**/hero.tsx').concat(glob.sync('src/feature/**/detail-hero.tsx'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove the explore block
  const blockRegex = /<div className=\"[^\"]*flex justify-center\">\s*<div className=\"flex flex-col items-center gap-3 opacity-70\">\s*<span className=\"text-\[10px\] tracking-\[0\.2em\] uppercase text-\[var\(--color-warm-ivory\)\] font-bold\">[^<]*<\/span>\s*<ArrowDown className=\"size-5 text-\[var\(--color-warm-ivory\)\] animate-bounce\" \/>\s*<\/div>\s*<\/div>/g;
  
  content = content.replace(blockRegex, '');

  // detail-hero uses a slightly different one with size-4
  const detailBlockRegex = /<div className=\"[^\"]*flex justify-center\">\s*<div className=\"flex flex-col items-center gap-3 opacity-70\">\s*<span className=\"text-\[10px\] tracking-\[0\.2em\] uppercase text-\[var\(--color-warm-ivory\)\] font-bold\">[^<]*<\/span>\s*<ArrowDown className=\"size-4 text-\[var\(--color-warm-ivory\)\] animate-bounce\" \/>\s*<\/div>\s*<\/div>/g;
  
  content = content.replace(detailBlockRegex, '');

  // Removing import ArrowDown if it's the only import from lucide-react
  content = content.replace(/import\s*\{\s*ArrowDown\s*\}\s*from\s*['"]lucide-react['"];\s*/g, '');
  
  // Removing ArrowDown from a list of imports
  content = content.replace(/ArrowDown,\s*/g, '');
  content = content.replace(/,\s*ArrowDown/g, '');

  fs.writeFileSync(file, content);
  console.log('Processed', file);
}
