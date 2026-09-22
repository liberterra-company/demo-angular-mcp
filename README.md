# demo-angular-mcp

Branchez votre assistant IA (Copilot, Claude Code, Cursor, Gemini CLI…) sur le **serveur MCP officiel du CLI Angular**.
Résultat : l'IA connaît votre workspace, la documentation angular.dev et les bonnes pratiques à jour (standalone, signals, control flow, `inject()`).

> Démo proposée par 🦊 **Solafox** — Angular & IA

## ⚙️ Branchement

Le serveur MCP est intégré au CLI Angular (v20+). Aucune installation supplémentaire : `npx` s'en charge.

### VS Code / GitHub Copilot

Fichier [`.vscode/mcp.json`](.vscode/mcp.json) :

```json
{
  "servers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@angular/cli", "mcp"]
    }
  }
}
```

### Claude Code

Fichier [`.mcp.json`](.mcp.json) à la racine (déjà présent dans ce repo), ou en une commande :

```bash
claude mcp add angular-cli -- npx -y @angular/cli mcp
```

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
