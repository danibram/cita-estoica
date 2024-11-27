const makeHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
};

const makeSeed = (seed) => {
  let current = makeHash(seed);
  const a = 1664525;
  const c = 1013904223;
  const m = Math.pow(2, 32);

  return function () {
    current = (a * current + c) % m;
    return current / m;
  };
};

export const getControlledRandomQuote = <T>(seed = "test", quotes: T[]): T => {
  const randomGenerator = makeSeed(seed);
  const index = Math.floor(randomGenerator() * quotes.length);
  const selectedQuote = quotes[index];
  return selectedQuote;
};
