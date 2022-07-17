import skierniewiceAfter from './assets/images/skierniewice_after.jpeg';
import skierniewiceBefore from './assets/images/skierniewice_before.jpeg';
import parczewAfter from './assets/images/parczew_after.jpg';
import parczewBefore from './assets/images/parczew_before.jpeg';
import lezajskAfter from './assets/images/lezajsk_after.jpg';
import lezajskBefore from './assets/images/lezajsk_before.jpg';
import rawiczAfter from './assets/images/rawicz_after.jpg';
import rawiczBefore from './assets/images/rawicz_before.png';
import bartoszyceAfter from './assets/images/bartoszyce_after.png';
import bartoszyceBefore from './assets/images/bartoszyce_before.png';
import kutnoAfter from './assets/images/kutno_after.png';
import kutnoBefore from './assets/images/kutno_before.png';
import kielceAfter from './assets/images/kielce_after.png';
import kielceBefore from './assets/images/kielce_before.png';
import wagrowiecAfter from './assets/images/wagrowiec_after.png';
import wagrowiecBefore from './assets/images/wagrowiec_before.png';
import konskowolaAfter from './assets/images/konskowola_after.png';
import konskowolaBefore from './assets/images/konskowola_before.png';
import wloclawekAfter from './assets/images/wloclawek_after.png';
import wloclawekBefore from './assets/images/wloclawek_before.png';
import chorzowAfter from './assets/images/chorzow_after.webp';
import chorzowBefore from './assets/images/chorzow_before.jpeg';
import lodzAfter from './assets/images/lodz_after.jpeg';
import lodzBefore from './assets/images/lodz_before.jpeg';
import lubaczowAfter from './assets/images/lubaczow_after.jpeg'
import lubaczowBefore from './assets/images/lubaczow_before.jpeg'
import lowiczAfter from './assets/images/lowicz_after.webp'
import lowiczBefore from './assets/images/lowicz_before.jpeg'

interface Entry {
    title: string;
    cost?: number;
    articles?: {
        label: string;
        url: string;
    }[];
    photos: {
        before: string;
        beforeSourceUrl: string;
        after: string;
        afterSourceUrl: string;
    };
}

export const cityData: Entry[] = [
    {
        title: 'Skierniewice, rynek',
        photos: {
            after: skierniewiceAfter,
            before: skierniewiceBefore,
            beforeSourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
            afterSourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
        },
    },
    {
        title: 'Parczew, rynek',
        photos: {
            after: parczewAfter,
            before: parczewBefore,
            beforeSourceUrl: 'https://twitter.com/aval4nche/status/480051858854391808',
            afterSourceUrl: 'https://www.Facebook.com/kierunekwschod26/',
        },
    },
    {
        title: 'Leżajsk, rynek',
        photos: {
            after: lezajskAfter,
            before: lezajskBefore,
            beforeSourceUrl:
                'https://www.facebook.com/polskabezdrzew/posts/pfbid025eqDT6BnATYuYFnmqWUo7ACiPU5vXz9p8Q7gGPsfELz6pYeQeeShHG3Tq5Sdbskcl?__cft__[0]=AZUy66ixQZR_8rxaWW1wnOsw5krCqtqA72ahx0vwrHwOtmtq7orxinovJd1yFrQjzxCotwF5Bcc6ZDN-wFSerCjwtVkXyRRmlPCMI3o7eXyyUV12Ed108xZ206m7AzYrRLOxI3BAPlO26XBfWPdxR5I3F6Ma3LchJauAgaaTcsxIe_SHxrN0kF9M2LHvUEFoX0dGpf_BIgkrjTHdEhSUP81JXUW-eUkPru1vx9-X3cRDKQ&__tn__=%2CO%2CP-R',
            afterSourceUrl:
                'https://www.facebook.com/polskabezdrzew/posts/pfbid025eqDT6BnATYuYFnmqWUo7ACiPU5vXz9p8Q7gGPsfELz6pYeQeeShHG3Tq5Sdbskcl?__cft__[0]=AZUy66ixQZR_8rxaWW1wnOsw5krCqtqA72ahx0vwrHwOtmtq7orxinovJd1yFrQjzxCotwF5Bcc6ZDN-wFSerCjwtVkXyRRmlPCMI3o7eXyyUV12Ed108xZ206m7AzYrRLOxI3BAPlO26XBfWPdxR5I3F6Ma3LchJauAgaaTcsxIe_SHxrN0kF9M2LHvUEFoX0dGpf_BIgkrjTHdEhSUP81JXUW-eUkPru1vx9-X3cRDKQ&__tn__=%2CO%2CP-R',
        },
    },
    {
        title: 'Rawicz, rynek',
        photos: {
            after: rawiczAfter,
            before: rawiczBefore,
            beforeSourceUrl: 'https://smoglab.pl/przeglad-rewitalizacji-rynkow/',
            afterSourceUrl: 'https://smoglab.pl/przeglad-rewitalizacji-rynkow/',
        },
    },
    {
        title: 'Bartoszyce, rynek',
        photos: {
            after: bartoszyceAfter,
            before: bartoszyceBefore,
            beforeSourceUrl: 'https://www.whitemad.pl/wycieli-drzewa-i-zielen-rynek-w-bartoszycach-zmienil-sie-w-betonowy-plac/',
            afterSourceUrl: 'https://www.whitemad.pl/wycieli-drzewa-i-zielen-rynek-w-bartoszycach-zmienil-sie-w-betonowy-plac/',
        },
    },
    {
        title: 'Kutno, plac Wolności',
        cost: 40000000,
        photos: {
            after: kutnoAfter,
            before: kutnoBefore,
            beforeSourceUrl: 'https://www.google.com/maps/@52.2325907,19.35831,3a,75y,280.52h,93.64t/data=!3m6!1e1!3m4!1sd0OqRaV_4YR90A8LfPKo_g!2e0!7i13312!8i6656!5m1!1e2',
            afterSourceUrl: 'https://lodz.wyborcza.pl/lodz/7,35136,26924096,kutno-hitem-internetu-po-modernizacji-glowny-plac-stal-sie.html',
        },
    },
    {
        title: 'Kielce, rynek',
        photos: {
            after: kielceAfter,
            before: kielceBefore,
            beforeSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
            afterSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
        },
    },
    {
        title: 'Wągrowiec, rynek',
        photos: {
            after: wagrowiecAfter,
            before: wagrowiecBefore,
            beforeSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
            afterSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
        },
    },
    {
        title: 'Końskowola, rynek',
        photos: {
            after: konskowolaAfter,
            before: konskowolaBefore,
            beforeSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
            afterSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
        },
    },
    {
        title: 'Włocławek, rynek',
        photos: {
            after: wloclawekAfter,
            before: wloclawekBefore,
            beforeSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
            afterSourceUrl: 'https://noizz.pl/ekologia/polacy-smaza-sie-na-brukowanych-patelniach-7-przykladow-betonozy/m5d21fw',
        },
    },
    {
        title: 'Chorzów, rynek',
        photos: {
            after: chorzowAfter,
            before: chorzowBefore,
            beforeSourceUrl: 'https://dziennikzachodni.pl/rynek-w-chorzowie-dawniej-i-dzis-poznajmy-historie-chorzowskiego-rynku-i-zobaczmy-jak-sie-zmienial-zdjecia/ar/c1-14208795',
            afterSourceUrl: 'https://dziennikzachodni.pl/rynek-w-chorzowie-dawniej-i-dzis-poznajmy-historie-chorzowskiego-rynku-i-zobaczmy-jak-sie-zmienial-zdjecia/ar/c1-14208795',
        },
    },
    {
        title: 'Łódź, plac Dąbrowskiego',
        photos: {
            after: lodzAfter,
            before: lodzBefore,
            beforeSourceUrl: 'https://twitter.com/NMP_Mycroft/status/1260504663042011138?ref_src=twsrc%5Etfw',
            afterSourceUrl: 'https://twitter.com/NMP_Mycroft/status/1260504663042011138?ref_src=twsrc%5Etfw',
        },
    },
    {
        title: 'Lubaczów, rynek',
        photos: {
            after: lubaczowAfter,
            before: lubaczowBefore,
            beforeSourceUrl: 'https://pl.wikivoyage.org/wiki/Lubacz%C3%B3w#/media/Plik:Widok_na_rynek_w_lubaczowie.jpg',
            afterSourceUrl: 'https://elubaczow.com/2021/07/06/lubaczowski-rynek-przykladem-betonozy-w-polsce/',
        },
    },
    {
        title: 'Łowicz, rynek',
        photos: {
            after: lowiczAfter,
            before: lowiczBefore,
            beforeSourceUrl: 'https://podroze.gazeta.pl/podroze/56,114158,10917976,sondaz-najladniejszy-rynek-w-polsce-glosuj.html',
            afterSourceUrl: 'https://lowicz.naszemiasto.pl/tag/komunikacja-miejska-w-lowiczu',
        },
    },
];
