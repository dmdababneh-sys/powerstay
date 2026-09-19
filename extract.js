const fs = require('fs');

const files = ['index.html', 'about.html', 'contact.html', 'guarantee.html', 'management.html', 'services.html'];
const arbitraryClasses = new Set();

files.forEach(file => {
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const matches = html.match(/danial-dababneh-bwd-[a-zA-Z0-9-:]+?-\[[^\]]+\]/g) || [];
    matches.forEach(m => arbitraryClasses.add(m));
  }
});

fs.writeFileSync('missing_classes.json', JSON.stringify([...arbitraryClasses], null, 2));
console.log('Found ' + arbitraryClasses.size + ' classes.');
