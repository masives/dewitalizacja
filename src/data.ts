import skierniewiceAfter from './assets/images/skierniewice_after.jpeg';
import skierniewiceBefore from './assets/images/skierniewice_before.jpeg';

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
    title: 'Skierniwice',

    photos: {
      after: skierniewiceAfter,
      before: skierniewiceBefore,
      beforeSourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
      afterSourceUrl: 'https://twitter.com/JanMencwel/status/1138194072106078208',
    },
  },
];
