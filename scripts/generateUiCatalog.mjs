import fs from 'fs';
import path from 'path';

const UIDESIGNS_DIR = path.resolve('UIDESIGNS');
const OUTPUT_FILE = path.resolve('src/data/uiCatalog.json');

const IGNORE_DIRS = new Set([
  'node_modules', '.git', '.next', 'dist', 'build', 'public', '.cache', 'coverage'
]);

const ALLOWED_EXTS = new Set([
  '.jsx', '.tsx', '.js', '.ts', '.css', '.md', '.html', '.json'
]);

const MAX_FILE_SIZE = 100 * 1024; // 100KB

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (!IGNORE_DIRS.has(file)) {
        const children = walk(filePath);
        if (children.length > 0) {
          results.push({
            name: file,
            path: path.relative(UIDESIGNS_DIR, filePath).replace(/\\/g, '/'),
            type: 'directory',
            children
          });
        }
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      // Only include allowed extensions and skip huge files like package-lock.json
      if (ALLOWED_EXTS.has(ext) && file !== 'package-lock.json') {
        if (stat.size <= MAX_FILE_SIZE) {
          const content = fs.readFileSync(filePath, 'utf-8');
          results.push({
            name: file,
            path: path.relative(UIDESIGNS_DIR, filePath).replace(/\\/g, '/'),
            type: 'file',
            ext,
            content
          });
        }
      }
    }
  }
  
  // Sort: directories first, then files
  results.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'directory' ? -1 : 1;
  });
  
  return results;
}

console.log('Scanning UIDESIGNS directory...');
const catalog = walk(UIDESIGNS_DIR);

console.log('Writing to uiCatalog.json...');
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(catalog, null, 2));

console.log(`Generated uiCatalog.json successfully!`);
