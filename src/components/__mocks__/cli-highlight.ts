import { HighlightOptions } from 'cli-highlight';

export const highlight = jest.fn((code: string, options?: HighlightOptions): string => {
  if (options) {
    return `highlight(${JSON.stringify(code)}, ${JSON.stringify(options)})`;
  }
  return `highlight(${JSON.stringify(code)})`;
});
