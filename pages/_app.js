import Router  from 'next/router'
import NProgress from 'nprogress'
import '../styles/index.css'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp ({ Component, pageProps }) {  
  return <Component {...pageProps} />
}

export default MyApp
