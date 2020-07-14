export const kebabify = (words: string) => 
    words
    .toLowerCase()
    .replace(' ', '');

export const prettyDate = (date: Date) => 
    new Date(date)
    .toString()
    .split(' ')
    .slice(0, 4)
    .join(' ')
    .replace(/( \d+)$/, ',$1');