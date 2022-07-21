<script lang="ts">
  import { cityData } from './data';

  const totalCost = cityData.reduce((acc, curr) => (curr.cost ? acc + curr.cost : acc), 0);
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

<p>
  Słowo "dewitalizacja" nagłośnił Jan Mencwel, autor książki "Betonoza. Jak się niszczy polskie miasta", współzałożyciel Miasto Jest Nasze:
</p>
<p>
  "Powtarza się ten sam model: psuje się miejskie przestrzenie, pozbawiając ich drzew. Dzieje się to wszędzie i za ciężkie pieniądze. <br />
  Często są to miliony euro wydane z dotacji europejskich. Oczywiście nie jest to żadna rewitalizacja, tylko dewitalizacja".
</p>
<h2 class="total-cost">Łączny koszt projektów to ok. {totalCost} mln zł</h2>
<ul>
  {#each cityData as { title, photos, articles, cost }}
    <li class="city-list__wrapper">
      <h2>{title}</h2>
      <h4>
        Koszt remontu:
        {#if cost}
          {cost} mln zł
        {:else}
          brak danych
        {/if}
      </h4>
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
  .total-cost {
    border: 2px solid var(--background-color);
    border-radius: 1rem;
    padding: 1rem;
    background-color: var(--accent-color);
  }
  .city-list__wrapper {
    margin: 1rem 0;
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
