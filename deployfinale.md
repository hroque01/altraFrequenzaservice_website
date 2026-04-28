# Deploy finale — ripristino del sito completo

> Questo documento è destinato a Claude (o a uno sviluppatore) quando il sito sarà
> pronto a tornare online dopo la fase di manutenzione.

## Stato attuale del repository

- **`main`** → mostra **solo la maintenance page** (`src/app/pages/maintenance/`).
  È il branch deployato in produzione su `gh-pages`.
- **`site-full`** → conserva integralmente il sito completo (Home / Settori /
  Gallery / Contatti, header, footer, shared, dati). Da qui si recupera tutto.
- **`gh-pages`** → branch generato automaticamente da `angular-cli-ghpages`,
  contiene il build statico. Non si tocca a mano.

Stack: **Angular 21 + Tailwind 4** SPA, package manager **yarn 1.22**.

## Cosa fare quando il sito è pronto a tornare online

### Opzione A — Il sito completo è già pronto, va ripristinato così com'è

```bash
git checkout main
git merge site-full --no-ff -m "feat: ripristina sito completo, fine manutenzione"
```

In caso di conflitti (è probabile su `app.routes.ts`, `app.ts`, `app.html`,
`src/index.html`), risolverli **tenendo la versione di `site-full`** per quei file.
La maintenance page si può:

- **eliminare** (se non serve più): `rm -rf src/app/pages/maintenance`
- oppure **conservare** come route nascosta `/manutenzione` per usi futuri:
  aggiungere a `src/app/app.routes.ts`:
  ```ts
  {
    path: 'manutenzione',
    loadComponent: () => import('./pages/maintenance/maintenance').then(m => m.MaintenancePage)
  },
  ```

### Opzione B — Il sito è stato rifatto/aggiornato durante la manutenzione

Lavorare direttamente su `main`, riprendendo i pezzi utili da `site-full`
(`git checkout site-full -- src/app/...`). Quando tutto è pronto:

1. Rimuovere `src/app/pages/maintenance/` se non serve più.
2. Ripristinare `src/index.html` con titolo/description/og originali del sito
   (riferimento: `git show site-full:src/index.html`).
3. Ripristinare `app.routes.ts`, `app.ts`, `app.html` con header/footer e routing
   completo (riferimento: `git show site-full:src/app/app.html` ecc.).

## Cose da NON dimenticare prima del go-live

- [ ] Aggiornare i contatti placeholder: nel footer del sito completo c'erano
      `+39 000 000 0000` e `info@altrafrequenza.it` — confermare con il cliente
      i valori reali e sostituirli ovunque (footer + pagina Contatti +
      eventuali `mailto:` / `tel:`).
- [ ] Verificare che le immagini Unsplash placeholder in
      `src/app/shared/site-data.ts` siano sostituite con foto reali del cliente
      (sezioni `SETTORI` e `EVENTI`).
- [ ] Rimuovere `<meta name="robots" content="noindex">` da `src/index.html`
      (è stato aggiunto per la maintenance).
- [ ] Ripristinare il `<title>` originale: `Altra Frequenza Service — Audio,
      Luci, Video e Strutture per Eventi` e relativa `description` / `og:*`.
- [ ] Verificare visivamente con `yarn start` su `http://localhost:4200`.
- [ ] Verificare che `yarn build` compili senza errori.

## Build e deploy su GitHub Pages

```bash
yarn install
yarn build
# Deploy su gh-pages — angular-cli-ghpages è già nelle devDependencies
yarn ng deploy --base-href=/altraFrequenzaservice_website/
```

> Nota sul `--base-href`: il repo è servito su
> `https://hroque01.github.io/altraFrequenzaservice_website/`, quindi l'app va
> compilata con quel prefisso. Se viene servita da un dominio custom alla root,
> usare `--base-href=/`.

## Rollback rapido al maintenance

Se serve tornare alla maintenance page dopo aver ripristinato il sito:

```bash
git checkout main
git revert <commit-del-merge>   # o reset --hard al commit di maintenance
yarn build
yarn ng deploy --base-href=/altraFrequenzaservice_website/
```

In alternativa, mantenere un branch `maintenance` allineato allo stato di
maintenance corrente da poter ridreployare in qualsiasi momento.
