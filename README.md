# LipariBank Dashboard

Scaffold dimostrativo con Vite 6, React 19 e TypeScript 5. I dati sono statici e
non provengono da conti bancari reali.

## Avvio

Con Node.js 20.19+ o 22.12+:

```sh
npm install
npm run dev
```

Il server stampa l'indirizzo locale a cui aprire la dashboard.

```sh
npm run lint
npm run build
npm run preview
```

Il build verifica i tipi e genera i file statici in `dist`. L'alias `@/`
punta a `src/` sia in TypeScript sia in Vite.

## Organizzazione

- `src/core/`: composizione dell'applicazione.
- `src/features/`: funzionalità organizzate per dominio.
- `src/shared/`: componenti e utilità condivisi.
- `src/hooks/`: hook riutilizzabili.
- `src/services/`: accesso ai dati; attualmente usa dati dimostrativi locali.
- `src/store/`: dati locali dimostrativi.
- `src/types/`: tipi condivisi.

Il layout `AppShell` si trova in `src/core/layout/`: header e sidebar restano
visibili mentre il contenuto scorre indipendentemente. Su schermi fino a 640 px
la sidebar si apre tramite il pulsante Menu e si chiude anche con Esc.
La navigazione usa React Router; i collegamenti della sidebar portano alle
sezioni della dashboard senza ricaricare la pagina.

La dashboard include componenti presentazionali tipizzati in
`src/features/dashboard/components/`: `AccountSummaryCard` e `MovementRow`.
Ogni componente UI definisce i propri stili in un CSS Module; `src/index.css`
contiene soltanto reset di base e token globali del design system.
