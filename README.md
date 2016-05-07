# react-dogear

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

```
npm i --save react-dogear
```

## Usage

### `<DogEar>`
- **current**: The current page number (required)
- **total**: The total number of possible pages (required)
- **maxItems**: The total number of navigation items to show, 25 by default
- **leading**: The number of sibling items before the current page, 3 by default
- **trailing**: The number of sibling items after the current page, 6 by default
- **hrefForPage** `(number) -> string`: Function returning a string given a page number (required)
- **itemPropsWhenCurrent**: Props for the current page’s link, e.g. `{ className: 'current' }` (required) 
- **Item**: The component to render each item, `<a>` by default.
Gets passed prop `href`, `{...linkPropsWhenCurrent}` when current page 


[build-badge]: https://img.shields.io/travis/BurntCaramel/react-dogear/master.svg?style=flat-square
[build]: https://travis-ci.org/BurntCaramel/react-dogear

[npm-badge]: https://img.shields.io/npm/v/react-dogear.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-dogear

[coveralls-badge]: https://img.shields.io/coveralls/BurntCaramel/react-dogear/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/BurntCaramel/react-dogear
