import levenshteinDistance from '@/lib/levenshteinDistance'

describe('levenshteinDistance', () => {
  it('calculates the correct Levenshtein distance between two equal words', () => {
    expect(levenshteinDistance('kitten', 'kitten')).toEqual(0);
  });

  it('calculates the correct Levenshtein distance between words with one character difference', () => {
    expect(levenshteinDistance('kitten', 'sitten')).toEqual(1);
  });

  it('calculates the correct Levenshtein distance between words with multiple character differences', () => {
    expect(levenshteinDistance('kitten', 'sitting')).toEqual(3);
  });

  it('calculates the correct Levenshtein distance for words with different casing', () => {
    expect(levenshteinDistance('Hello', 'hello')).toEqual(0);
  });

  it('calculates the correct Levenshtein distance for words with different lengths', () => {
    expect(levenshteinDistance('short', 'longerword')).toEqual(8);
  });
});
