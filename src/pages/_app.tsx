import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/globals.css'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  return <Component {...pageProps} />
}

export default App
