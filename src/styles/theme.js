import { createGlobalStyle, css } from 'styled-components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? white : '#010101',
  invertedTextColor: darkMode ? '#010101' : white,
  greyText: darkMode ? white : '#6C7284',
  footText: darkMode ? '#c2ccda' : '#c2ccda',
  footBg: darkMode ? '#050A12' : '#131518',
  footLink: darkMode ? 'afb9c7' : 'afb9c7',

  // for setting css on <html>
  backgroundColor: darkMode ? '#030810' : '#FFF',

  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  cardBG: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  menuBG: darkMode ? 'rgba(10,10,10, 0.8)' : 'rgba(255, 255, 255, 0.95)',
  marqueeBG: darkMode ? '#010101' : '#010101',

  inputBackground: darkMode ? '#202124' : white,
  placeholderGray: darkMode ? '#5F5F5F' : '#E1E1E1',
  shadowColor: darkMode ? '#000' : '#267BEE',

  // grays
  concreteGray: darkMode ? '#292C2F' : '#FAFAFA',
  mercuryGray: darkMode ? '#333333' : '#E1E1E1',
  silverGray: darkMode ? '#737373' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
  doveGray: darkMode ? '#C4C4C4' : '#737373',

  colors: {
    blue1: darkMode ? '#1377B8' : '#D4E4FA',
    blue2: darkMode ? '#A9C8F5' : '#A9C8F5',
    blue3: darkMode ? '#1377B8' : '#7DACF0',
    blue4: darkMode ? '#1377B8' : '#5190EB',
    blue5: darkMode ? '#1377B8' : '#2172E5',
    blue6: darkMode ? '#1377B8' : '#1A5BB6',
    blue7: darkMode ? '#C4D9F8' : '#144489',
    blue8: darkMode ? '#C4D9F8' : '#0E2F5E',
    blue9: darkMode ? '#C4D9F8' : '#0a0d0d',

    grey1: darkMode ? '#0a0d0d' : '#F7F8FA',
    grey2: darkMode ? '#1b2738' : '#EDEEF2',
    grey3: darkMode ? '#40444F' : '#CED0D9',
    grey4: darkMode ? '#565A69' : '#888D9B',
    grey5: darkMode ? '#6C7284' : '#6C7284',
    grey6: darkMode ? '#888D9B' : '#565A69',
    grey7: darkMode ? '#CED0D9' : '#40444F',
    grey8: darkMode ? '#EDEEF2' : '#1b2738',
    grey9: darkMode ? '#F7F8FA' : '#0a0d0d',

    white: '#FFFFFF',
    black: '#000000',

    green1: '#E6F3EC',
    green2: '#27AE60',

    pink1: darkMode ? '#267BEF' : '#267BEE',
    pink2: '#FF8EC4',
    pink3: '#FFD7EA',

    yellow1: darkMode ? '#F3BE1E95' : '#F3BE1E',
    yellow2: darkMode ? '#FFF4D2' : '#F7F2E3',

    red1: '#FF6871',

    link: darkMode ? '#267BEF' : '#267BEE',
    invertedLink: darkMode ? '#267BEF' : '#267BEE'
  },

  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    huge:
      ' 0px 0px 1px rgba(0, 0, 0, 0.03), 0px 4px 8px rgba(0, 0, 0, 0.03), 0px 16px 24px rgba(0, 0, 0, 0.03), 0px 24px 32px rgba(0, 0, 0, 0.03)'
  },

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

    html {
    font-size: 16px;
    font-variant: none;
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.8);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "Teko", "Inter Roman", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.55;
    max-width: 100%;
    margin: 0px auto;
    font-weight: 400 !important;
    color: ${({ theme }) => theme.textColor};


    @media (min-width: 1441px) {
        overflow-x: visible;
    }
  }

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  h1 {
    font-family: "Teko";
    margin-top: 1rem ;
    font-weight: 600;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Teko";
  }

  h3 {
    font-weight: 400;
    font-family: "Teko";
  }

  h4 {
    font-weight: 400;
    font-family: "Teko";
  }


  #gatsby-focus-wrapper{
    min-height: 100vh;
  }
  a{
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  button{
    color: ${({ theme }) => theme.textColor};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  strong{
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey9};
  }

 .ds-dropdown-menu {
    width: 100px;
    max-height: 600px;
    overflow: scroll;

    @media screen and (max-width: 1080px) {
      min-width: 300px !important;
    }
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
  }

  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  .vertical-timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 18px;
      height: 100%;
      width: 4px;
      background: #267BEE;
  }
`
