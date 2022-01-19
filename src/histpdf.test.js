const { histpdf } = require('./histpdf');

test('comment-example', () => {
  const data = Array.from({length: 40}, () => Math.random())
  const bin_edges = [.1, .25, .5, .75, 9.].sort()
  const probas = histpdf(data, bin_edges)
  // check
  expect(probas.reduce((a, b) => a + b)).toBeCloseTo(1.0, 5);
  expect(probas.length).toBe(bin_edges.length - 1);
});
