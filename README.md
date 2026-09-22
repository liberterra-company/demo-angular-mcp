# demo-angular-mcp

Branchez votre assistant IA (Copilot, Claude Code, Cursor, Gemini CLI…) sur le **serveur MCP officiel du CLI Angular**.
Résultat : l'IA connaît votre workspace, la documentation angular.dev et les bonnes pratiques à jour (standalone, signals, control flow, `inject()`).

> Démo proposée par 🦊 **Solafox** — Angular & IA

## ⚙️ Branchement

Le serveur MCP est intégré au CLI Angular (v20+). Seul prérequis : **Node.js** (`npx` télécharge et lance le CLI).

Quel que soit votre assistant, c'est **le même bloc JSON**, seul l'emplacement du fichier change :

```json
{
  "mcpServers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    }
  }
}
```

| Assistant | Fichier (déjà présent dans ce repo) | Particularité |
| --- | --- | --- |
| VS Code / GitHub Copilot | [`.vscode/mcp.json`](.vscode/mcp.json) | la clé racine est `"servers"` au lieu de `"mcpServers"` |
| Cursor | [`.cursor/mcp.json`](.cursor/mcp.json) | — |
| Claude Code | [`.mcp.json`](.mcp.json) | — |
| Gemini CLI | [`.gemini/settings.json`](.gemini/settings.json) | — |
| JetBrains, Windsurf, autres | paramètres MCP de l'IDE | coller le même bloc JSON |

👉 Clonez ce repo, ouvrez-le dans votre éditeur, rechargez : le MCP est détecté automatiquement (acceptez la demande d'activation si l'éditeur la propose).

### Vérifier que le serveur démarre

```bash
npx -y @angular/cli mcp
```

💡 Commitez ces fichiers : toute l'équipe profite du même contexte IA dès le clone.

## 🧪 Prompts à tester

### 📚 Bonnes pratiques & documentation

- « Quelles sont les bonnes pratiques Angular actuelles ? Résume-les en 10 points. »
- « Cherche dans la doc Angular comment fonctionne `linkedSignal` et donne-moi un exemple. »
- « Explique la différence entre `resource()` et `httpResource()` avec la doc officielle. »

### 🗂️ Explorer son workspace

- « Liste tous les projets et librairies de mon workspace Angular avec leur version. »
- « Quel est le préfixe de sélecteur et le builder utilisés dans mon projet ? »

### 🛠️ Générer du code moderne

- « Crée un composant `product-list` standalone avec signals, `@for` et `inject()`, en suivant les best practices Angular. »
- « Génère un formulaire de contact avec les Signal Forms, validation email comprise. »
- « Trouve un exemple officiel d'utilisation de `@defer` et applique-le à ma page d'accueil. »

### 🚀 Moderniser un projet existant

- « Analyse mon projet : qu'est-ce qui m'empêche de passer en zoneless ? »
- « Migre ce composant vers OnPush et signals, étape par étape. »
- « Remplace tous les `*ngIf` / `*ngFor` par le nouveau control flow `@if` / `@for`. »
- « Transforme mes constructeurs d'injection en `inject()`. »

### 🦊 Le défi fun

- « Crée une mini-app Todo en Angular moderne (signals, standalone, control flow), puis explique-moi chaque choix en citant la doc Angular. »
- « Fais une revue de code de mon `app.component.ts` comme le ferait un Google Developer Expert Angular. »

## 🎬 Astuce démo

Posez le même prompt **sans** puis **avec** le MCP branché : la différence entre du code NgModule / `*ngIf` et du code standalone / `@if` saute aux yeux.
