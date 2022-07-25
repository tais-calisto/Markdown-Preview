import Markdown from './components/Markdown'
import Header from './components/Header'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import useSavedState from './utils/useSavedState'

function App() {
  const [theme, setTheme] = useSavedState('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    document.title = 'Markdown Preview'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Markdown />
    </ThemeProvider>
  )
}

export default App
