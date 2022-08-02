<script lang="ts">
  const ANALYTICS_STORAGE_KEY = 'ANALYTICS_STORAGE_KEY';

  let trackingAccepted = !!window.localStorage.getItem(ANALYTICS_STORAGE_KEY);
  const acceptTracking = () => {
    window.localStorage.setItem(ANALYTICS_STORAGE_KEY, 'true');
    trackingAccepted = true;
  };

  // <!-- Fathom - simple website analytics - https://github.com/usefathom/fathom -->
  if (trackingAccepted) {
    (function (f, a, t, h, o, m) {
      a[h] =
        a[h] ||
        function () {
          (a[h].q = a[h].q || []).push(arguments);
        };
      (o = f.createElement('script')), (m = f.getElementsByTagName('script')[0]);
      o.async = 1;
      o.src = t;
      o.id = 'fathom-script';
      m.parentNode.insertBefore(o, m);
    })(document, window, '//dewfit.bieda.it/tracker.js', 'fathom');

    window.fathom('set', 'siteId', 'KAQJK');
    window.fathom('trackPageview');
  }
  // <!-- / Fathom -->
</script>

{#if !trackingAccepted}
  <div class="analytics-modal">
    Używamy ciasteczek do zliczania listy wejść. Korzystamy z
    <a href={'https://github.com/usefathom/fathom'} target="_blank" rel="noopener noreferrer" class="city-list-item__source-url"
      >fathom-analytics-lite</a
    >

    <button on:click={acceptTracking}>Ok</button>
  </div>
{/if}

<style>
  .analytics-modal {
    position: fixed;
    bottom: 0;
    left: 0%;
    right: 100%;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--background-color);
  }
</style>
