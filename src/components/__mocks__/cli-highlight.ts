import { HighlightOptions } from 'cli-highlight';

const j = JSON.stringify;

export const highlight = jest.fn((code: string, options?: HighlightOptions): string => {
  if (options) {
    return `highlight(${j(code)}, ${j(options)})`;
  }
  return `highlight(${j(code)})`;
});
