const fs = require('fs');
['controle/if1.js','fundamentos/array.js'].forEach(p => {
  const s = fs.readFileSync(p, 'utf8');
  if (/Math\.random/.test(s)) throw new Error(p + ': Math.random found');
  if (/(v4|randomUUID)/.test(s)) throw new Error(p + ': non-v7 UUID');
});
console.log('CSPRNG/UUIDv7 OK');
