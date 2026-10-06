# Fichas RPG System

Aplicação web para **criar e organizar fichas de personagens de D&D 5e**, pensada
para jogadores iniciantes: um construtor guiado passo a passo com cálculos
automáticos e uma ficha digital pronta para a sessão.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4**
- **SQLite** via `@libsql/client`: arquivo local (`data/dev.db`) sem nenhuma
  configuração em desenvolvimento; em produção usa **Turso** (libSQL na nuvem,
  plano gratuito), usando as variáveis `TURSO_DATABASE_URL` e `TURSO_AUTH_TOKEN`

## Como rodar

```bash
npm install
npm run dev         # http://localhost:3000 (o schema é criado sozinho)
```

## Funcionalidades

- **Construtor em 9 etapas**: Identidade → Atributos → Características →
  Perícias → Equipamento → Combate → Ataques → Magias → Revisão
- **Multiclasse**: várias classes com níveis somados (limite 20); PB, salvamentos,
  PV, slots (tabela combinada full/half + pacto separado) e atributo de
  conjuração calculados sobre o conjunto; pré-requisitos de multiclasse exibidos
  como aviso (não bloqueiam)
- **Atributos com 3 modos**: Pontos (27, custos 8=0…15=9), Array padrão e Livre,
  mais botão **✨ Sugerir distribuição** (otimizador balanceado por classe:
  busca exaustiva dentro do orçamento, com bônus racial considerado)
- **Orçamentos com aviso**: contadores de salvamentos/perícias/idiomas/ferramentas
  por fonte (classe/antecedente/raça); exceder é permitido, mas fica vermelho
- **Unidades em metros**: deslocamento, visão no escuro, alcances e magias são
  exibidos convertidos de pés para metros (1 pé = 0,3048 m; dados seguem em pés)
- **Cálculos automáticos**: modificadores de atributo, bônus de proficiência
  pelo nível total, CA (conforme armadura equipada + escudo + DES), iniciativa,
  deslocamento, PV máximo (dado da 1ª classe + CON, demais classes fixos),
  bônus/dano de ataques, CD e ataque mágico, slots de magia
- **Fórmulas transparentes**: cada valor deriva mostra de onde veio (ex.: `CA = 16 malha + 2 escudo`)
- **Ficha digital em cards**: atributos, combate, perícias, resistências,
  proficiências, inventário, ataques, magias, características e anotações
- **Barra rápida de combate**: CA, PV, iniciativa e deslocamento sempre
  visíveis; curar/dano com um toque e descanso longo
- **Persistência**: personagens salvos em SQLite, rascunho salvo
  automaticamente durante a edição; excluir personagem com confirmação e
  tratamento de erro (recarrega a lista se o registro já não existir)
- **Multiusuário**: cadastro e login com senha (scrypt nativo, hash salvo no
  banco), sessão em cookie httpOnly de 30 dias (token guardado como hash
  SHA-256), fichas ligadas ao dono (`characters.user_id`) — cada conta vê,
  edita e apaga **apenas as suas**; `/login` e `/register` são públicos, o
  compêndio é público e todo o resto exige sessão (middleware redireciona);
  o primeiro usuário a se cadastrar adota as fichas órfãs de antes da migração
- **Subraças (v3)**: as 8 subraças SRD (anao colinano/da montanha, elfo alto/
  silvestre, halfling leve/robusto, gnomo da floresta/da rocha) com bônus de
  atributo, deslocamento, visão no escuro, traços e proficiências aplicados aos
  cálculos; seleção na etapa Identidade
- **Subclasses (v3)**: as 37 subclasses do SRD com recursos por nível, um campo
  por entrada de multiclasse na etapa Identidade (com aviso se o nível ainda não
  chegou) e recursos exibidos na ficha conforme o nível atual
- **Talentos/feats (v3)**: os 38 talentos do SRD em um card na etapa
  Características — livre para marcar/desmarcar, com aviso vermelho quando o
  pré-requisito (atributo, proficiência ou conjuração) não está cumprido;
  bônus de atributo e PV (ex.: Durão) entram nos cálculos
- **Magias 0–9**: 214 magias SRD em português, incluindo as 150 de níveis 4–9
- **Compêndio** (`/compendium`): 8 escolas de magia com descrição e todas as
  214 magias agrupadas por escola (fundo sem aurora, visual mais direto);
  conteúdo informativo, sem vínculo com a ficha
- **Tema claro/escuro**: botão de alternância no dashboard, no compêndio, no
  construtor e na ficha; escolha salva no navegador (padrão: preferência do
  sistema), sem "piscar" ao carregar — o tema é aplicado antes da primeira
  pintura
- **Visual refinado**: base azul-noite com aurora sutil (nada de preto puro),
  títulos em gradiente dourado, botões primários com gradiente e sombra
  interna, acentos coloridos com significado por seção (atributos dourado,
  combate vermelho, magias violeta, perícias azul, inventário verde...), cards
  com filete lateral colorido, tipografia Geist, foco visível, barra de
  progresso animada, transição entre etapas, hover com elevação, checkboxes
  âmbar, barra de rolagem própria e suporte a `prefers-reduced-motion`
- **Exclusão em duas etapas**: "Excluir" vira "Confirmar exclusão" + "Cancelar"
  no próprio card (sem diálogo nativo do navegador) e o card sai da lista na
  hora, com restauração automática se a requisição falhar

## Scripts

| Script              | Descrição                             |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento           |
| `npm run build`     | Build de produção                     |
| `npm run start`     | Iniciar produção                      |
| `npm run lint`      | ESLint                                |
| `npm run typecheck` | `tsc --noEmit`                        |
| `npm run db:migrate`| Migra dados locais para o Turso       |

## Estrutura

```
scripts/
  migrate-to-turso.mjs
src/
  data/                    # catálogos dirigidos por dados
    skills.ts              # 18 perícias com atributo
    races.ts               # 10 raças + 8 subraças (SubraceDef)
    subclasses.ts          # 37 subclasses com recursos por nível
    feats.ts               # 38 talentos (pré-requisitos, ASI)
    schools.ts             # 8 escolas (SRD)
    classes.ts             # 12 classes + prioridades e pré-requisitos
    backgrounds.ts         # 13 antecedentes (languageChoices/toolChoices)
    weapons.ts, armors.ts  # armas e armaduras (regras de DEX na CA)
    spells.ts              # 214 magias SRD (níveis 0–9)
    spell-slots.ts         # tabelas de slots (full/half/pact)
    proficiencies.ts       # opções de ferramentas/idiomas/grupos
  domain/
    types.ts               # CharacterDoc (schemaVersion 3)
    create.ts              # factory de novo personagem
    migrate.ts             # migração v1 → v2 (classes[]) → v3 (subraça/
                           # subclasse/talentos)
    calc.ts                # MOTOR DE CÁLCULO puro (nada é persistido derivado)
    optimize.ts            # point buy + otimizador balanceado
    units.ts               # conversão pés → metros, libras → kg
  lib/
    db.ts                  # cliente libSQL (singleton, auto-init)
    schema.ts              # DDL aplicado no primeiro acesso
    characters.ts          # repositório CRUD (assíncrono)
  app/
    page.tsx               # dashboard (link para o compêndio)
    compendium/page.tsx    # escolas e magias (público)
    character/new          # cria personagem e redireciona ao editor
    character/[id]         # ficha digital
    character/[id]/edit    # wizard (mesma rota para editar)
    api/characters         # GET/POST; [id]: GET/PUT/PATCH/DELETE
    api/health
  components/
    ui.tsx                 # Card, Field, Toggle, Formula...
    CharacterList.tsx
    wizard/                # context (autosave) + 9 etapas
    sheet/                 # ficha + barra rápida de combate
```

## Modelo de dados

Contas e sessões: tabela `users` (usuário + `password_hash` no formato
`scrypt$salt$hash`) e `sessions` (`token_hash` = SHA-256 do cookie, usuário e
expiração). Cada linha de `characters` tem um `user_id` — listagem e leitura
sempre filtram por ele.

O personagem é um **documento JSON** (`CharacterDoc`, `schemaVersion: 3`)
armazenado na coluna `data` da tabela `characters`. Documentos v1 e v2 são
migrados automaticamente na leitura (`classId`/`level` → `classes[]`;
v3 adiciona `identity.subraceId`, `ClassEntry.subclassId` e `feats: string[]`).
Campos divididos em:

1. **Inseridos pelo usuário** — `identity.classes` (multiclasse),
   `identity.abilityMode`, `abilities.base`, `combat.hpCurrent`, inventário...
2. **Derivados de escolhas** — bônus racial (raça), proficiências (classe/
   antecedente/raça), slots (conjunto de classes)
3. **Calculados em tempo de exibição** — modificadores, CA, PB (nível total),
   bônus de perícia/ataque, PV máximo, CD mágico (`src/domain/calc.ts`)

Nenhum valor calculado é salvo: mudar o nível, a raça ou um atributo
recalcula tudo automaticamente.

## API

Rotas de sessão (públicas):

| Método | Rota                    | Descrição                       |
| ------ | ----------------------- | ------------------------------- |
| POST   | `/api/auth/register`    | Cria conta e inicia sessão      |
| POST   | `/api/auth/login`       | Entra e inicia sessão           |
| POST   | `/api/auth/logout`      | Encerra a sessão                |

Rotas de fichas (exigem sessão → 401 sem cookie válido; escopadas ao dono →
404 para fichas de outra conta):

| Método | Rota                    | Descrição                       |
| ------ | ----------------------- | ------------------------------- |
| GET    | `/api/characters`       | Lista as fichas do usuário      |
| POST   | `/api/characters`       | Cria personagem (aceita doc)    |
| GET    | `/api/characters/:id`   | Documento completo              |
| PUT    | `/api/characters/:id`   | Salva documento completo        |
| PATCH  | `/api/characters/:id`   | Atualiza PV atual/temporários   |
| DELETE | `/api/characters/:id`   | Exclui                          |

## Deploy (gratuito e permanente: Vercel + Turso)

Em produção o app não tem disco persistente, então o banco fica no **Turso**
(plano gratuito, libSQL compatível com SQLite) e o site na **Vercel**
(plano Hobby, gratuito).

1. **Banco (Turso)** — crie uma base e pegue as credenciais:

   ```bash
   turso db create fichas
   turso db show fichas --url        # TURSO_DATABASE_URL
   turso db tokens create fichas     # TURSO_AUTH_TOKEN
   ```

2. **Migre os dados locais** (opcional, se já tem fichas):

   ```bash
   TURSO_DATABASE_URL="libsql://..." TURSO_AUTH_TOKEN="..." npm run db:migrate
   ```

3. **Site (Vercel)** — publique o repositório no GitHub e importe em
   <https://vercel.com/new> (a integração Next.js é detectada sozinha).
   Em *Project Settings → Environment Variables* adicione
   `TURSO_DATABASE_URL` e `TURSO_AUTH_TOKEN`, depois faça o deploy.
   O DDL é aplicado automaticamente no primeiro request — nenhum passo extra.

Sem as variáveis do Turso (dev local), o app usa `data/dev.db`.

## Escopo atual e próximos passos

**Incluído (v1–v3):** identidade com multiclasse, subraças, subclasses com
recursos por nível, atributos com os 3 modos (pontos/array/livre) + otimizador,
bônus racial flexível, humano variante, salvamentos/perícias com orçamentos e
avisos, proficiências (idiomas e ferramentas com contadores), talentos com
pré-requisitos, inventário com equipamento inicial, CA/PV/iniciativa/
deslocamento em metros, ataques, magias 0–9 com slots combinados e preparação,
compêndio de escolas, edição completa e persistência (inclusive exclusão com
tratamento de erro), contas com login e isolamento de fichas por usuário.

**Próximos passos possíveis:** ações de combate em turnos, condições/efeitos
rastreadas na ficha, importação/exportação de personagem (JSON), busca no
compêndio.
