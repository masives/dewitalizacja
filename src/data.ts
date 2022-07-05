import skierniewiceAfter from './assets/images/skierniewice_after.jpeg';
import skierniewiceBefore from './assets/images/skierniewice_before.jpeg';
import parczewAfter from './assets/images/parczew_after.jpg';
import parczewBefore from './assets/images/parczew_before.jpeg';
import bartoszyceAfter from './assets/images/bartoszyce_after.jpg';
import bartoszyceBefore from './assets/images/bartoszyce_before.jpg';
import rawiczAfter from './assets/images/rawicz_after.jpg';
import rawiczBefore from './assets/images/rawicz_before.png';

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
    title: 'Skierniwice rynek',
    photos: {
      after: skierniewiceAfter,
      before: skierniewiceBefore,
      beforeSourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
      afterSourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
    },
  },
  {
    title: 'Parczew rynek',
    photos: {
      after: parczewAfter,
      before: parczewBefore,
      beforeSourceUrl: 'https://twitter.com/aval4nche/status/480051858854391808',
      afterSourceUrl: 'https://www.Facebook.com/kierunekwschod26/',
    },
  },
  {
    title: 'Bartoszyce rynek',
    photos: {
      after: bartoszyceAfter,
      before: bartoszyceBefore,
      beforeSourceUrl:
        'https://www.facebook.com/polskabezdrzew/posts/pfbid025eqDT6BnATYuYFnmqWUo7ACiPU5vXz9p8Q7gGPsfELz6pYeQeeShHG3Tq5Sdbskcl?__cft__[0]=AZUy66ixQZR_8rxaWW1wnOsw5krCqtqA72ahx0vwrHwOtmtq7orxinovJd1yFrQjzxCotwF5Bcc6ZDN-wFSerCjwtVkXyRRmlPCMI3o7eXyyUV12Ed108xZ206m7AzYrRLOxI3BAPlO26XBfWPdxR5I3F6Ma3LchJauAgaaTcsxIe_SHxrN0kF9M2LHvUEFoX0dGpf_BIgkrjTHdEhSUP81JXUW-eUkPru1vx9-X3cRDKQ&__tn__=%2CO%2CP-R',
      afterSourceUrl:
        'https://www.facebook.com/polskabezdrzew/posts/pfbid025eqDT6BnATYuYFnmqWUo7ACiPU5vXz9p8Q7gGPsfELz6pYeQeeShHG3Tq5Sdbskcl?__cft__[0]=AZUy66ixQZR_8rxaWW1wnOsw5krCqtqA72ahx0vwrHwOtmtq7orxinovJd1yFrQjzxCotwF5Bcc6ZDN-wFSerCjwtVkXyRRmlPCMI3o7eXyyUV12Ed108xZ206m7AzYrRLOxI3BAPlO26XBfWPdxR5I3F6Ma3LchJauAgaaTcsxIe_SHxrN0kF9M2LHvUEFoX0dGpf_BIgkrjTHdEhSUP81JXUW-eUkPru1vx9-X3cRDKQ&__tn__=%2CO%2CP-R',
    },
  },
  {
    title: 'Rawicz rynek',
    photos: {
      after: rawiczAfter,
      before: rawiczBefore,
      beforeSourceUrl: 'https://smoglab.pl/przeglad-rewitalizacji-rynkow/',
      afterSourceUrl: 'https://smoglab.pl/przeglad-rewitalizacji-rynkow/',
    },
  },
];
