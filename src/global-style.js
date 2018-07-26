import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  html * {
    box-sizing: border-box;
  }

  #___gatsby {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background: #fff;
  }
`
