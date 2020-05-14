import { createGlobalStyle } from 'styled-components';
import logo from '../assets/logo.svg';
import lego from '../assets/legobr.png';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  height: 100%;
}
body {
  max-width:1400px;
  margin: 0 auto;
  background-image: url(${logo}),
  url(${lego}),
  radial-gradient(circle, #aef40d, #89d311, #67b212, #47920f, #2a730a);
  background-position: center 16px,  calc(100% - 5px) calc(100% - 5px),center center;
  background-repeat: no-repeat;
  background-size: 35vh,  25vh, 100% 100%;
}

@media (orientation: portrait) {
  body {
  background-position: center 16px,  calc(50%) calc(100% - 65px),center center;
  background-repeat: no-repeat;
  background-size: calc(35vh),  20vh, 100% 100%;
}
}
`;

export default GlobalStyle;
