import { TaskProvider } from '../context'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../services/QueryClient'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../routes'
import { GlobalStyle } from '../styles/resetGlobal'

export function App() {
  return (
    <TaskProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </TaskProvider>
  )
}


