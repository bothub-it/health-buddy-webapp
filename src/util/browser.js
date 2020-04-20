import { validLanguages } from "./language";

export function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

export function getValidBrowserLanguage() {
  const language = validLanguages.find(l => l.browserCode === navigator.language);
  return language ? language.id : undefined;
}
