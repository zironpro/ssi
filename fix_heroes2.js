const fs = require('fs');

const files = [
  'src/feature/solutions-view/sections/hero.tsx',
  'src/feature/products-view/sections/detail-hero.tsx',
  'src/feature/industries-view/sections/hero.tsx',
  'src/feature/home/sections/hero.tsx',
  'src/feature/blog-view/sections/hero.tsx',
  'src/feature/services-view/sections/hero.tsx',
  'src/feature/products-view/sections/hero.tsx',
  'src/feature/contact-view/sections/hero.tsx',
  'src/feature/about-view/sections/hero.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove the explore block
  const blockRegex = /<div className=\"[^\"]*flex justify-center\">\s*<div className=\"flex flex-col items-center gap-3 opacity-70\">\s*<span className=\"text-\[10px\] tracking-\[0\.2em\] uppercase text-\[var\(--color-warm-ivory\)\] font-bold\">[^<]*<\/span>\s*<ArrowDown className=\"size-5 text-\[var\(--color-warm-ivory\)\] animate-bounce\" \/>\s*<\/div>\s*<\/div>/g;
  content = content.replace(blockRegex, '');

  const blockRegexHome = /<div className=\"flex justify-center md:hidden\">\s*<div className=\"flex flex-col items-center gap-3 opacity-70\">\s*<span className=\"text-\[10px\] tracking-\[0\.2em\] uppercase text-\[var\(--color-warm-ivory\)\] font-bold\">Explore Solutions<\/span>\s*<ArrowDown className=\"size-5 text-\[var\(--color-warm-ivory\)\] animate-bounce\" \/>\s*<\/div>\s*<\/div>/g;
  content = content.replace(blockRegexHome, '');

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
