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
          .replace(/\+966 54 931 7712/g, '+966 56 948 7569')
          .replace(/966 54 931 7712/g, '966 56 948 7569')
          .replace(/\+966549317712/g, '+966569487569')
          .replace(/966549317712/g, '966569487569')
          .replace(/54 931 7712/g, '56 948 7569');
          
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
