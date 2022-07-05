<script lang="ts">
  import { cityData } from './data';
</script>

<main>
  <h1>Dewitalizacja</h1>
  <h2>Dodaj swoją propozycję</h2>
  <p>
    Stwórz issue lub pull request w
    <a href={'https://github.com/masives/dewitalizacja#jak-doda%C4%87-wpis'} target="_blank" rel="noopener noreferrer"
      >https://github.com/masives/dewitalizacja</a
    >
    lub napisz na <a href="mailto:jozollo@gmail.com">jozollo@gmail.com</a>
  </p>
  <h2>Inspiracje:</h2>
  <a href={'https://smoglab.pl/przeglad-rewitalizacji-rynkow/'} target="_blank" rel="noopener noreferrer"
    >https://smoglab.pl/przeglad-rewitalizacji-rynkow/</a
  >

  <ul>
    {#each cityData as { title, photos, articles, cost }}
      <li>
        <h2>{title}</h2>
        <div class="city-list-item">
          <div class="city-list-item__column">
            <p>Przed:</p>
            <figure>
              <img src={photos.before} alt={`Zdjęcie ${title} przed rewitalizacją`} />
              <figcaption>
                <p>
                  Źródło zdjęcia: <a
                    href={photos.beforeSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="city-list-item__source-url">{photos.afterSourceUrl}</a
                  >
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="city-list-item__column">
            <p>Po:</p>
            <figure>
              <img src={photos.after} alt={`Zdjęcie ${title} po rewitalizacji`} />
              <figcaption>
                <p>
                  Źródło zdjęcia: <a
                    href={photos.afterSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="city-list-item__source-url">{photos.afterSourceUrl}</a
                  >
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    color: #ff3e00;
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

  .city-list-item {
    display: flex;
    justify-content: space-around;
  }

  .city-list-item__column {
    width: 48%;
  }

  .city-list-item__source-url {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  @media (max-width: 480px) {
    .city-list-item {
      display: block;
    }

    .city-list-item__column {
      width: auto;
    }
  }
</style>
