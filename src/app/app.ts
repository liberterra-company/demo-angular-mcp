import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface PromptCategory {
  readonly icon: string;
  readonly title: string;
  readonly prompts: readonly string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('demo-angular-mcp');

  protected readonly categories = signal<readonly PromptCategory[]>([
    {
      icon: '📚',
      title: 'Bonnes pratiques & doc',
      prompts: [
        'Quelles sont les bonnes pratiques Angular actuelles ? Résume-les en 10 points.',
        'Cherche dans la doc Angular comment fonctionne linkedSignal et donne-moi un exemple.',
        'Explique la différence entre resource() et httpResource() avec la doc officielle.',
      ],
    },
    {
      icon: '🗂️',
      title: 'Explorer son workspace',
      prompts: [
        'Liste tous les projets et librairies de mon workspace Angular avec leur version.',
        'Quel est le préfixe de sélecteur et le builder utilisés dans mon projet ?',
      ],
    },
    {
      icon: '🛠️',
      title: 'Générer du code moderne',
      prompts: [
        'Crée un composant product-list standalone avec signals, @for et inject(), en suivant les best practices Angular.',
        'Génère un formulaire de contact avec les Signal Forms, validation email comprise.',
        "Trouve un exemple officiel d'utilisation de @defer et applique-le à ma page d'accueil.",
      ],
    },
    {
      icon: '🚀',
      title: "Moderniser l'existant",
      prompts: [
        "Analyse mon projet : qu'est-ce qui m'empêche de passer en zoneless ?",
        'Migre ce composant vers OnPush et signals, étape par étape.',
        'Remplace tous les *ngIf / *ngFor par le nouveau control flow @if / @for.',
        "Transforme mes constructeurs d'injection en inject().",
      ],
    },
    {
      icon: '🦊',
      title: 'Le défi fun',
      prompts: [
        'Crée une mini-app Todo en Angular moderne, puis explique chaque choix en citant la doc Angular.',
        'Fais une revue de code de mon app.ts comme le ferait un Google Developer Expert Angular.',
      ],
    },
  ]);

  protected readonly promptCount = computed(() =>
    this.categories().reduce((total, category) => total + category.prompts.length, 0),
  );

  protected readonly copied = signal<string | null>(null);

  protected async copy(prompt: string): Promise<void> {
    await navigator.clipboard?.writeText(prompt);
    this.copied.set(prompt);
  }
}
