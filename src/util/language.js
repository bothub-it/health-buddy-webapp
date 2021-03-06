const otherLanguages = [
  {
    id: 'es',
    name: 'Español',
    browserCode: 'es',
  },
  {
    id: 'ru',
    name: 'Pусский',
    browserCode: 'ru',
  },
  {
    id: 'pt-BR',
    name: 'Português',
    browserCode: 'pt-BR',
  },
  {
    id: 'it',
    name: 'Italiano',
    browserCode: 'it',
  },
  {
    id: 'el-GR',
    name: 'Ελληνικά',
    browserCode: 'el',
  },
  {
    id: 'kaz',
    name: 'Қазақ',
    browserCode: 'kk',
  },
  {
    id: 'mk',
    name: 'Македонски',
    browserCode: 'mk',
  },
  {
    id: 'tr',
    name: 'Türkçe',
    browserCode: 'tr',
  },
  {
    id: 'bg',
    name: 'български',
    browserCode: 'bg',
  },
  {
    id: 'ro',
    name: 'Română',
    browserCode: 'ro',
  },
  {
    id: 'hu',
    name: 'Magyar',
    browserCode: 'hu',
  },
  {
    id: 'hy',
    name: 'Հայաստան',
    browserCode: 'hy',
  },
  {
    id: 'kg',
    name: 'Кыргызча',
    browserCode: 'ky',
  },
  {
    id: 'sq',
    name: 'Shqip',
    browserCode: 'sq',
  },
  {
    id: 'vo',
    name: 'Srpski',
    browserCode: 'vo',
  },
];
otherLanguages.sort((a, b) => a.name.localeCompare(b.name));
export const validLanguages = [
  {
    id: 'en',
    name: 'English',
    browserCode: 'en',
  },
  ...otherLanguages,
];

