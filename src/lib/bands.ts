export type Band = {
    name: string;
    date: string;
    isoDate: string;
    time: string;
    link: string;
  };
  
  export const bands: Array<Band> = [
    { name: 'Bart Budwig', date: 'Fri 8 Nov', isoDate: '2024-11-08T20:00:00-08:00', time: '8 pm', link: 'https://www.bartbudwig.com/' },
    { name: 'Margo Cilker', date: 'Thu 14 Nov', isoDate: '2024-11-14T19:00:00-08:00', time: '7 pm', link: 'https://www.margocilkermusic.com/' },
    { name: 'The Shook Twins', date: 'Sat 23 Nov', isoDate: '2024-11-23T21:00:00-08:00', time: '9 pm', link: 'https://shooktwins.com/' }
  ];
  