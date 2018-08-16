import { injectGlobal } from 'styled-components'
import font from './fonts/NeueHaasGrotesk.otf'

injectGlobal`

  @font-face {
    font-family: NeueHaasGrotesk;
    src: url('${font}');
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html * {
    box-sizing: border-box;
    font-family: NeueHaasGrotesk;
    letter-spacing: 1px;
  }

  #___gatsby {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #fff;
  }

`
