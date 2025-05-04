
import { enTranslations } from './en';
import { faTranslations } from './fa';
import { ruTranslations } from './ru';
import { hiTranslations } from './hi';

export type Language = "en" | "fa" | "ru" | "hi";

export const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  fa: faTranslations,
  ru: ruTranslations,
  hi: hiTranslations
};

export default translations;
