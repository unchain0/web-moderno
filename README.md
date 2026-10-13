# web-moderno
Estudo de fundamentos de JavaScript (funções, controle, arrays, objetos).
![CI](https://github.com/unchain0/web-moderno/actions/workflows/ci.yml/badge.svg)
![licença](https://img.shields.io/badge/license-MIT-blue)

## Saída real
```text
7.7 9.2
undefined
[ 7.7, 8.9, 6.3, 9.2, 10 ]
```
Fonte: `node fundamentos/array.js` (salvo em `docs/assets/`).

## Desenvolvimento (padrão Felippe)
- Linter: `eslint` strict (`complexity` limit 10, errors para warnings)
- Types: `tsconfig.json` strict (noUncheckedIndexedAccess)
- UUIDv7 obrigatório; RNG apenas OS CSPRNG (`crypto.getRandomValues`/`os.urandom`)
- CI: actionlint + zizmor pass; SHA pinado; `permissions: contents: read`; `timeout-minutes`; `concurrency`; sem `continue-on-error`
