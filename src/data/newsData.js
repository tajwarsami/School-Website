export const newsData = [
  {
    id: 101,
    title: 'Farewell Ceremony',
    date: 'Mar 15, 2026',
    image: new URL('@/assets/images/school1.jpg', import.meta.url).href,
    body: `<p>Education is the backbone of a strong nation.</p>`
  },
  {
    id: 102,
    title: 'Music Competition',
    date: 'Apr 10, 2026',
    image: new URL('@/assets/images/music.jpg', import.meta.url).href 
  },
  {
    id: 103,
    title: 'Sports Day',
    date: 'May 5, 2026',
    body: `<p>Join us for a fun-filled sports day!</p>`
  },
  {
    id: 104,
    title: 'Science Fair',
    date: 'Jun 12, 2026',
    pdf: '/pdfs/science.pdf'
  },
  {
    id: 105,
    title: 'Art Exhibition',
    date: 'Jul 20, 2026',
    image: new URL('@/assets/images/school1.jpg', import.meta.url).href,
    pdf: '/pdfs/art.pdf', // image + PDF
    body: `<p>Explore the wonderful artworks created by students.</p>`
  }
];
