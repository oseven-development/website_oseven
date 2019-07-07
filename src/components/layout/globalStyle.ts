/** @format */
import {createGlobalStyle} from 'styled-components'
import theme from '../../assets/theme'

const buildString = (minFontSize, maxFontSize) => {
  const {breakpoints} = theme
  return `calc(${minFontSize} + (${maxFontSize.replace('px', '')} - ${minFontSize.replace('px', '')}) * ((100vw - ${
    breakpoints[0]
  }) / (${breakpoints[breakpoints.length - 1].replace('px', '')} - ${breakpoints[0].replace('px', '')})))`
}

export default createGlobalStyle`
    * { 
      scroll-behavior: smooth;
      padding: 0;

    }
    main {
      background-color: ${theme.colors.background}
    }
@font-face {
  font-family: 'Khula';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Khula Regular'), local('Khula-Regular'), url(https://fonts.gstatic.com/s/khula/v4/OpNCnoEOns3V7GcOrg7-hCJ1.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(https://fonts.gstatic.com/s/merriweather/v20/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6hPvhPQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  body {
    margin: 0;
  }
  h1{
    font-weight: 600;
    font-family: "Merriweather", sans-serif;
    font-size: ${buildString('32px', '70px')};
    margin:0;
    }
  .title {
    font-size: 60px;
  }
  h2{  
    margin:0;
    font-weight: 300;
    font-family: "Khula", sans-serif;
    font-size: ${buildString('20px', '50px')}};
  p{
      font-size: ${buildString('16px', '22px')};
      line-height: 1.5em;
      font-family: "Roboto", sans-serif;
      text-align: justify;
      /* font-weight: 100; */
    }
  a {
    text-decoration: none;
    font-weight: 400;
    font-size:18px;
    font-family: "Khula", sans-serif;
  }
  `
