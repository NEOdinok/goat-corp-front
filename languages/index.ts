import en from './en.json';
import ru from './ru.json';

interface ITranslations { 
  [key: string]: any;
}

export const translations: ITranslations = {
  en,
  ru,
}
