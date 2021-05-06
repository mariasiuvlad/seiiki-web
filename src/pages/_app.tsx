import '../styles/global.css'
import '../styles/custom.css'
import '../styles/weather-icons.css'
import AuthProvider from 'context/provider'

function MyApp({Component, pageProps}) {
  return (
    <AuthProvider initialValue={{user: null}}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
