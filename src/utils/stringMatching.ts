export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export function stringSimilarity(s1: string, s2: string): number {
  const maxLength = Math.max(s1.length, s2.length);
  if (maxLength === 0) return 1.0;
  
  const distance = levenshteinDistance(s1, s2);
  return 1 - distance / maxLength;
}

export function findBestMatch(input: string, candidates: string[]): string | null {
  const threshold = 0.8; // Similarity threshold
  let bestMatch: string | null = null;
  let bestSimilarity = 0;

  candidates.forEach(candidate => {
    const similarity = stringSimilarity(input.toLowerCase(), candidate.toLowerCase());
    if (similarity > threshold && similarity > bestSimilarity) {
      bestSimilarity = similarity;
      bestMatch = candidate;
    }
  });

  return bestMatch;
}