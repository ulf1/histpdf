/**
 * Computes the Density (PDF) for a given histogram bins
 * 
 * Example:
 * --------
 *    const data = Array.from({length: 40}, () => Math.random())
 *    const bin_edges = [.1, .25, .5, .75, 9.].sort()
 *    const probas = histpdf(data, bin_edges)
 */
const histpdf = (data, bin_edges) => {
  const num_bins = bin_edges.length - 1;
  var count = Array.from({length: num_bins}, () => 0);
  var i;
  // Count occurences inside the bins
  data.forEach(val => {
    if (val <= bin_edges[0]){
      count[0] += 1;
      return;  // break "forEach" loop
    }
    if (val > bin_edges[num_bins]){
      count[0] += 1;
      return;  // break "forEach" loop
    }
    for(i = 0; i < num_bins; i++){
      if (bin_edges[i] < val && val <= bin_edges[i+1]){
        count[i] += 1;
        continue;  // break "for" loop
      }
    }
  })
  // convert counts to probabilities
  const num_sample_size = data.length;
  var probas = []
  count.forEach(val => {
    probas.push(val / num_sample_size);
  })
  // done
  return probas;
}

module.exports = {
  histpdf
}