### ディレクトリ構成

-

```
learn-track-app
├─ .eslintrc.json
├─ app
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth]
│  │  │     └─ route.ts
│  │  └─ summary
│  │     └─ route.ts
│  ├─ components
│  │  └─ ui
│  │     ├─ common
│  │     │  ├─ AuthenticatedLayout.tsx
│  │     │  ├─ ...
│  │     ├─ [pagename]
│  │     │  ├─[pagecomponent].tsx
│  ├─ fonts
│  │  ├─ [font].woff
│  ├─ globals.css
│  ├─ hooks
│  │  ├─ contexts
│  │  │  └─ [provider or context].tsx
│  │  └─ use[any].tsx
│  ├─ layout.tsx
│  ├─ page.module.css
│  ├─ page.tsx
│  ├─ [pagename]
│  │  └─ [page or layout].tsx
├─ auth.config.ts
├─ auth.ts
├─ docs
│  ├─ [any]
├─ githooks
│  └─ pre-commit
├─ learntrack_architecture.drawio.png
├─ middleware
│  └─ zod.ts
├─ middleware.ts
├─ next.config.js
├─ next.config.ts
├─ next.d.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.js
├─ prettierrc.json
├─ prisma
│  ├─ generated
│  │  ├─ [generatedprismafile]
│  └─ schema.prisma
├─ Procfile ... deploy to heroku
├─ public
├─ README.md
├─ server
│  ├─ actions
│  │  ├─ index.ts ... all exporting actions
│  │  ├─ [some].ts
│  ├─ lib
│  │  ├─ decorators
│  │  ├─ **/[any].ts
│  │  └─ types.ts
│  └─ services
│     ├─ external
│     │  └─ openai.ts
│     └─ summary.ts
└─ tsconfig.json

```
