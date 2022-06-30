import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  html, body {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: transparent;
  }

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    box-sizing: border-box;

  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: black;
  }

  a,
  span,
  p,
  b,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: black;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  }

  a {
    text-decoration: none;
  }

  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #edece9;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #d3d1cb;

    &:hover {
      background-color: #b7b6b5;
      transition: background-color 0.1s ease-out;
    }
  }

  ::selection {
    background: #bfe5f4;
  }
`

//@mixin noselect {
//  -webkit-touch-callout: none; /* iOS Safari */
//  -webkit-user-select: none; /* Safari */
//  -khtml-user-select: none; /* Konqueror HTML */
//  -moz-user-select: none; /* Old versions of Firefox */
//  -ms-user-select: none; /* Internet Explorer/Edge */
//  user-select: none; /* Non-prefixed version, currently
//                                  supported by Chrome, Opera and Firefox */
//}
