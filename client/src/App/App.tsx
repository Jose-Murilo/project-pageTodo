import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyle } from '../styles/resetGlobal'
import { Router } from '../routes'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../services/QueryClient'
import { TaskProvider } from '../context'

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


