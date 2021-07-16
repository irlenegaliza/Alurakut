import { createGlobalStyle, ThemeProvider } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  /* Reset o CSS */
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serife;
    font-size: 20px;
    background-color: #D9E6F6;   
  }

  #__next{
    display:flex;
    min-height:100vh;
    flex-direction: column;
  }

  img{
    max-width: 100%;
    heigh: auto;
    display: block;
  }
`


const theme = {
  colors: {
    primary: '#0070f8',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
