import { Theme as ITheme, DEFAULT_THEME } from 'cli-highlight';
import { createContext } from 'react';

export const HighlightThemeContext = createContext<ITheme>(DEFAULT_THEME);
