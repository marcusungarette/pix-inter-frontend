
import { ThemeProvider } from 'styled-components'
import Router from './routes'
import { theme } from './styles/theme'
import GlobalStyle from './styles/global'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
