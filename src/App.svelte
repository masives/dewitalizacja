<script lang="ts">
  import Contact from './Contact.svelte';
  import { Router, Route, Link } from 'svelte-navigator';
  import Home from './Home.svelte';
</script>

<Router>
  <header>
    <nav>
      <Link to="/">Strona główna</Link>
      <Link to="contact">Kontakt</Link>
    </nav>
  </header>
  <main>
    <h1>Dewitalizacja</h1>
    <Route path="contact">
      <Contact />
    </Route>

    <Route path="/">
      <Home />
    </Route>
  </main>
</Router>
<footer>
  <a href={'https://github.com/masives/dewitalizacja#jak-doda%C4%87-wpis'} target="_blank" rel="noopener noreferrer"
    >https://github.com/masives/dewitalizacja</a
  >
</footer>

<style global>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --primary-color: #d9534f;
    --background-color: #96ceb4;
  }

  body {
    margin: 0;
    padding: 0;
  }

  header,
  footer {
    background-color: var(--background-color);
    padding: 1rem;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    object-fit: scale-down;
    max-width: 100%;
  }

  h1 {
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  @media (max-width: 480px) {
    main {
      padding: 0;
    }

    p {
      max-width: none;
    }
  }
</style>
