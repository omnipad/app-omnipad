import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  body {
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    background-color: var(--color-first-black);
  }

  *::selection {
    background-color: var(--color-first);
    color: var(--color-first-black);
  }
`

export default Base
