import skierniewiceAfter from './assets/images/skierniewice_after.jpeg';
import skierniewiceBefore from './assets/images/skierniewice_before.jpeg';

interface Entry {
  cityName: string;
  cost?: number;
  articles?: {
    label: string;
    url: string;
  }[];
  photos: {
    before: string;
    after: string;
    sourceUrl: string;
  };
}

export const cityData: Entry[] = [
  {
    cityName: 'Skierniwice',

    photos: {
      after: skierniewiceAfter,
      before: skierniewiceBefore,
      sourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
    },
  },
];
