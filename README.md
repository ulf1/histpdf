[![npm version](https://badge.fury.io/js/histpdf.svg)](https://badge.fury.io/js/histpdf)
[![Join the chat at https://gitter.im/satzbeleg/community](https://badges.gitter.im/satzbeleg/community.svg)](https://gitter.im/satzbeleg/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# histpdf
Approximate the density (PDF) from a histogram for given bins

## Usage
1. Install

```sh
yarn add histpdf@0.1.0
```

2. Load package

```js
import { histpdf } from 'histpdf';

const data = Array.from({length: 40}, () => Math.random())
const bin_edges = [.1, .25, .5, .75, 9.].sort()
const probas = histpdf(data, bin_edges)
```

## Appendix

## Misc commands
- Login into yarn: `yarn login`
- Publish the package: `yarn publish` 

### Support
Please [open an issue](https://github.com/satzbeleg/histpdf/issues/new) for support.

### Contributing
Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/satzbeleg/histpdf/compare/).

### Acknowledgements
This work was funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) - [433249742](https://gepris.dfg.de/gepris/projekt/433249742). Project duration: 2020-2023.
