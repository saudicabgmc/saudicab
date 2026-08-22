const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        replaceInDir(fullPath);
      }
    } else {
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content
          .replace(/\+92 309 7811785/g, '+92 309 7811785')
          .replace(/92 309 7811785/g, '92 309 7811785')
          .replace(/\+923097811785/g, '+923097811785')
          .replace(/923097811785/g, '923097811785')
          .replace(/309 7811785/g, '309 7811785');
          
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log('Updated:', fullPath);
        }
      }
    }
  }
}

replaceInDir(process.cwd());
console.log('Done replacing numbers!');
