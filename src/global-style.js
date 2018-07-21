import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, #___gatsby {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html * {
    box-sizing: border-box;
  }

  #___gatsby {
    display: flex;
    flex-direction: column;
  }
`
