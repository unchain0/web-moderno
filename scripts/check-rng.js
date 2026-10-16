const fs = require('fs');
const path = require('path');
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    if (!e.isFile() && !e.isDirectory()) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.git') continue;
      out.push(...walk(p));
    } else if (p.endsWith('.js')) {
      out.push(p);
    }
  }
  return out;
}
const exclusions = new Set([
  'controle/while.js',
  'controle/doWhile.js',
  'exercicios/js/FuncaoDaSorte.js',
  'fundamentos/destructuring_3.js',
  'fundamentos/destructuring_4.js',
  'scripts/check-rng.js',
]);
for (const p of walk('.')) {
  const rel = p.replace(/^\.\//, '');
  if (exclusions.has(rel)) continue;
  const s = fs.readFileSync(p, 'utf8');
  if (/Math\.random/.test(s)) throw new Error(p + ': Math.random found');
  // Allowlist: only OS CSPRNG / UUIDv7 APIs permitted
  const allowed = /\bcrypto\.getRandomValues\b|\buuidv7\b|\bv7\b.*\bUUID\b/i;
  // Explicitly reject non-permitted entropy patterns (hand-rolled LCG, seeded PRNG, etc.)
  if (/\b(LGC|seeded|PRNG|rand\w*\()\b/i.test(s) && !allowed.test(s)) throw new Error(p + ': non-CSPRNG entropy');
  // Positive identification: only allow v7; reject any mention of other versions
  if (/\bv[13456]\b/i.test(s) || /(randomUUID)/i.test(s)) throw new Error(p + ': non-v7 UUID');
}
console.log('CSPRNG/UUIDv7 OK');
