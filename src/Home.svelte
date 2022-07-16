<script lang="ts">
  import { cityData } from './data';
</script>

<p>
  Witaj na stronie poświęconej projektom betonowania przestrzeni publicznej pod przykrywką rewitalizacji. Na tej stronie znajdziesz listę
  projektów, linki do materiałów opisujących ten problem.
</p>
<p>Mam nadzieję, że niniejsza strona stanie się kompendium wiedzy w tym temacie i posłuży jako przykład wskazujący na skalę problemu</p>
<p>Jeśli masz jakieś sugestie lub propozycje zachęcam do kontaktu <a href="mailto:jozollo@gmail.com">jozollo@gmail.com</a></p>

<h2>Inspiracje:</h2>
<a href={'https://smoglab.pl/przeglad-rewitalizacji-rynkow/'} target="_blank" rel="noopener noreferrer"
  >https://smoglab.pl/przeglad-rewitalizacji-rynkow/</a
>

<ul>
  {#each cityData as { title, photos, articles, cost }}
    <li class="city-list__wrapper">
      <h2>{title}</h2>
      <div class="city-list-item">
        <div class="city-list-item__column">
          <p>Przed:</p>
          <figure class="city-list-item__figure">
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
                Źródło zdjęcia: <a href={photos.afterSourceUrl} target="_blank" rel="noopener noreferrer" class="city-list-item__source-url"
                  >{photos.afterSourceUrl}</a
                >
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </li>
  {/each}
</ul>

<style>
  .city-list__wrapper {
    margin: 1rem;
    border: 1px solid var(--background-color);
    border-radius: 1rem;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .city-list-item {
    display: flex;
    justify-content: space-around;
  }

  .city-list-item__column {
    width: 48%;
  }

  .city-list-item__figure {
    margin: 1rem;
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
