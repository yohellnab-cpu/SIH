const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace hardcoded colors with tailwind semantic names
  content = content.replace(/bg-\[\#f5f4ef\]/g, 'bg-background');
  content = content.replace(/bg-\[\#1b4332\]/g, 'bg-secondary');
  content = content.replace(/text-\[\#1b4332\]/g, 'text-secondary');
  content = content.replace(/border-\[\#1b4332\]/g, 'border-secondary/20'); // softened borders
  
  content = content.replace(/bg-\[\#003b87\]/g, 'bg-primary');
  content = content.replace(/text-\[\#003b87\]/g, 'text-primary');
  content = content.replace(/border-\[\#003b87\]/g, 'border-primary/20');
  
  content = content.replace(/bg-\[\#f26d21\]/g, 'bg-accent');
  content = content.replace(/text-\[\#f26d21\]/g, 'text-accent');
  content = content.replace(/border-\[\#f26d21\]/g, 'border-accent/20');
  content = content.replace(/border-b-4 border-\[\#ff7f00\]/g, 'border-b border-accent/20');
  
  // Also simplify some borders and shadows
  content = content.replace(/shadow-lg/g, 'shadow-sm');
  content = content.replace(/shadow-xl/g, 'shadow-md');
  content = content.replace(/shadow-md/g, 'shadow-sm');
  
  // Make cards lightly rounded instead of 0px strict (since we added --radius: 2px)
  content = content.replace(/rounded-none/g, 'rounded-[var(--radius)]');
  
  // Remove heavy headers if any
  content = content.replace(/border-b-4/g, 'border-b');
  content = content.replace(/border-l-4/g, 'border-l');

  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git')) {
        walk(file);
      }
    } else {
      if (file.endsWith('.jsx')) {
        replaceInFile(file);
      }
    }
  });
}

walk(path.join(process.cwd(), 'src'));
