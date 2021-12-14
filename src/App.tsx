
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import Router from './routes'
import { theme } from './styles/theme'
import GlobalStyle from './styles/global'

function App () {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
