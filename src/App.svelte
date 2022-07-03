<script lang="ts">
  import { cityData } from './data';
</script>

<main>
  <h1>Dewitalizacja</h1>
  <ul>
    {#each cityData as { cityName, photos, articles, cost }}
      <li>
        <h2>{cityName}</h2>
        <div class="city-list-column-container">
          <div>
            <p>Przed:</p>
            <img src={photos.before} alt={`Zdjęcie ${cityName} przed rewitalizacją`} />
          </div>
          <div>
            <p>Po:</p>
            <img src={photos.after} alt={`Zdjęcie ${cityName} po rewitalizacji`} />
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
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
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

  .city-list-column-container {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    .city-list-column-container {
      display: block;
    }
  }
</style>
