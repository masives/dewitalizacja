<script lang="ts">
  import Contact from './Contact.svelte';
  import { Router, Route, Link } from 'svelte-navigator';
  import Home from './Home.svelte';
  import Analytics from './Analytics.svelte';
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
  © 2022 <a href={'https://github.com/masives/dewitalizacja#jak-doda%C4%87-wpis'} target="_blank" rel="noopener noreferrer">Józef Piecyk</a>
  przy współpracy z
  <a href={'https://www.linkedin.com/in/anna-szczepanik-752730166/'} target="_blank" rel="noopener noreferrer">Anja Szczepanik</a>
</footer>
<Analytics />

<style global>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --primary-color: #d9534f;
    --background-color: #96ceb4;
    --accent-color: #ffeead;
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

  footer {
    text-align: center;
  }

  nav a,
  button {
    color: var(--primary-color);
    text-decoration: none;
    padding: 8px;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    background-color: var(--accent-color);
    font-weight: 500;
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
    text-transform: uppercase;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
  }
  h1,
  h2 {
    color: var(--primary-color);
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
      padding: 0.5rem;
    }

    p {
      max-width: none;
    }
  }
</style>
