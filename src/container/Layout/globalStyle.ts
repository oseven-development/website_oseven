/** @format */
import {createGlobalStyle} from 'styled-components'
import theme from '../../library/theme'

const buildString = (minFontSize, maxFontSize) => {
  const {breakpoints} = theme
  return `calc(${minFontSize} + (${maxFontSize.replace('px', '')} - ${minFontSize.replace('px', '')}) * ((100vw - ${
    breakpoints[0]
  }) / (${breakpoints[breakpoints.length - 1].replace('px', '')} - ${breakpoints[0].replace('px', '')})))`
}

export default createGlobalStyle`
    * { box-sizing: border-box; 
      scroll-behavior: smooth;
    }
  body {
    margin: 0;
    font-family: Cabin;
  }
  h1{
    font-weight: 100;
    font-size: ${buildString('32px', '70px')}
    }
  
  h2
  {  font-weight: 100;
    font-size: ${buildString('28px', '60px')}}
  
  h3{
    font-weight: 100;
    margin: 0.7em 0 0.3em 0;
    font-size: ${buildString('24px', '32px')}}
  
  h4 {
    font-weight: 100;
    margin: 0.7em 0 0.3em 0;
    font-size: ${buildString('18px', '24px')};
    }
    p{
      font-size: ${buildString('16px', '22px')};
      line-height: 1.5em;
      font-family: "OpenSans", sans-serif;
      /* font-weight: 100; */
    }
    li {
      font-size: ${buildString('16px', '22px')};
      line-height: 1.5em;

    }
  ul {
    list-style-type: dot;
    padding: 0;
    font-family: "OpenSans", sans-serif;
    padding-left: 20px
  }
  a {
    text-decoration: none;
  }
  `
