import { HighlightOptions as IHighlightOptions } from 'cli-highlight';
import { createContext } from 'react';

export type HighlightOptions = Omit<IHighlightOptions, 'theme'>;

export const HighlightOptionsContext = createContext<HighlightOptions>({});
