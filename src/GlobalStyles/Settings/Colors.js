import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
:root {
  --color-first: #ffe620;
  --color-second: #f8a660;
  --color-third: #cfa3f1;

  --color-first-black: #1b1b1b;
  --color-first-light-black: rgba(27, 27, 27, 0.8);
  --color-second-black: #464646;

  --color-white: #fff;
}
`

export default Colors
