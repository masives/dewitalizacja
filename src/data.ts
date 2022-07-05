import skierniewiceAfter from './assets/images/skierniewice_after.jpeg';
import skierniewiceBefore from './assets/images/skierniewice_before.jpeg';
import parczewAfter from './assets/images/parczew_after.jpg';
import parczewBefore from './assets/images/parczew_before.jpeg';

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
      afterSourceUrl: 'Facebook.com/kierunekwschod26/',
    },
  },
];
