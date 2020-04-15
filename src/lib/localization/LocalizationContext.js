import { createContext } from 'react';
import defaultLocale from './defaultLocale';

export const LocalizationContext = createContext(defaultLocale);
