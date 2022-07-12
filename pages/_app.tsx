import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
