import '../styles/globals.css'

import { BlankLayout } from 'layout'
import { AppPropsWithLayouts } from '../models';


export default function App({ Component, pageProps }: AppPropsWithLayouts) {
  const Layout = Component.Layout ?? BlankLayout;
  return (
    <Layout>

      <Component {...pageProps} />
    </Layout>

  )
}
