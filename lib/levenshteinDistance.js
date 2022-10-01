export default function levenshteinDistance(wordA, wordB) {

  const matrix = [[]];

  for (let i = 0; i <= wordA.length; i++) {
    matrix[0].push(i)
  }

  for (let i = 1; i <= wordB.length; i++) {
    matrix.push([i])
  }

  for (let i = 1; i <= wordB.length; i++) {
    for (let j = 1; j <= wordA.length; j++) {
      if (wordB[i - 1].toLowerCase() === wordA[j - 1].toLowerCase()) {
        matrix[i][j] = matrix[i - 1][j - 1]
      }
      else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1
      }
    }
  }

  return matrix[wordB.length][wordA.length];
}