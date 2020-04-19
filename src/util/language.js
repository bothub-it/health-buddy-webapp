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
  const language = validLanguages.find(l => l.browserCode === navigator.language);
  return language ? language.id : undefined;
}

