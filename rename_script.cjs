const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/Jharkhand Societal Innovation Portal/g, 'Nav Nirmarn');
  content = content.replace(/SIH Portal/g, 'Nav Nirmarn');
  content = content.replace(/SIH/g, 'Nav Nirmarn');
  content = content.replace(/University Portal/g, 'Student Portal');
  content = content.replace(/University/g, 'Student');
  
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
      if (file.endsWith('.jsx') || file.endsWith('.html') || file.endsWith('.js')) {
        replaceInFile(file);
      }
    }
  });
}

walk(process.cwd());
