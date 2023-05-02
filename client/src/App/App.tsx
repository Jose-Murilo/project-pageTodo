import { TaskProvider } from '../context'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../routes'
import { GlobalStyle } from '../styles/resetGlobal'

export function App() {
  return (
    <TaskProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
    </TaskProvider>
  )
}


