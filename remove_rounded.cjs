const fs = require('fs');
const path = require('path');
const viewsDir = path.join(process.cwd(), 'src/views');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(viewsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content
    .replace(/rounded-md/g, 'rounded-none')
    .replace(/ rounded /g, ' rounded-none ')
    .replace(/rounded"/g, 'rounded-none"')
    .replace(/rounded-full/g, 'rounded-none');
  fs.writeFileSync(filePath, content);
});
console.log('Replaced all rounded with rounded-none.');
