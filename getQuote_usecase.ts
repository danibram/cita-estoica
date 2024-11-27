import quotes from "./quotes.json" with { type: "json" };
import { getControlledRandomQuote } from "./randomSeed.ts";
import { beautifyQuote } from "./utils.ts";

type Quote = {
  quote: string;
  author: string;
};

export const getQuoteAsJson = (seed = "test") => {
  const {
    quote,
    author,
  } = getControlledRandomQuote<Quote>(seed, quotes);
  return {
    quote: beautifyQuote(quote),
    author,
  }
};

export const getQuoteAsText = (seed = "test") => {
  const {
    quote,
    author,
  } = getControlledRandomQuote<Quote>(seed, quotes);
  return `${beautifyQuote(quote)} ${author}`
};