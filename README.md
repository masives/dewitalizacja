[![Netlify Status](https://api.netlify.com/api/v1/badges/e8e1d204-f29e-4a94-9b53-b0ff90ffc630/deploy-status)](https://app.netlify.com/sites/dewitalizacja/deploys)

# Dewitalizacja

Problemem wielu miast Polski są projekty "rewitalizacji" będące przykrywką do zabetonowania miast. Strona ta ma na celu stworzenie kompendium projektów, które mogą być używane jako źródło wiedzy oraz argument przeciwko dalszym projektom.

# Jak dodać wpis

## Dla nieprogramistów

Stwórz issue zawierające następujące informacje

  1. Zdjęcie przed i po projekcie
  2. Źródło zdjęć
  3. Nazwę miasta
  4. (opcjonalnie) Linki do artykułów opisujących sprawę
  5. (opcjonalnie) Koszt inwestycji w złotówkach

## Dla programistów

   1. Sklonuj repozytorium
   2. Do folderu [src/assets/images/](src/assets/images/) dodaje zdjęcia trzymając się konwencji (cityName)_(before|after).ext
   3. Do [data.ts](src/data.ts) dodaj kolejny wpis zgodnie z definicją typów
   4.  Stwórz pull requesta i oznacz @masives

# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).


# TODO i do rozważenia

- [x] krótki opis problemu po co ta strona
- [x] formularz do zgłaszania innych projektów dewitalizacji
- [ ] komentarze mieszkańców i władz
- [ ] koszt projektów z podziałem na unijne i własne
- [ ] licznik łacznego kosztu projektów
- [ ] sekcja/podstrona materiały o problemie (betonoza, wyspa cieplna)
- [ ] poprawki pod seo
- [ ] lazy loading zdjęć
- [ ] automatyczna optymalizacja zdjęć podczas buildu