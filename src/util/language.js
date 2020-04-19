export const validLanguages = [
  {
    id: 'en',
    name: 'English',
    browserCode: 'en',
  },
  {
    id: 'pt-BR',
    name: 'Português',
    browserCode: 'pt-BR',
  },
  {
    id: 'ru',
    name: 'Pусский',
    browserCode: 'ru',
  },
  {
    id: 'el-GR',
    name: 'Ελληνικά',
    browserCode: 'el',
  },
  {
    id: 'es',
    name: 'Español',
    browserCode: 'es',
  },
  {
    id: 'kaz',
    name: 'Қазақ',
    browserCode: 'kk',
  },
];

export function getValidBrowserLanguage() {
  const isValidLanguage = validLanguages.findIndex(l => l.browserCode === navigator.language) !== -1;
  return isValidLanguage ? navigator.language : undefined;
}
