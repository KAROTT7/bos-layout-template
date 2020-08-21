import '../styles/globals.less'
import Head from 'next/head'
// import 'antd/dist/antd.less'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bos-Layout-Template</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@4.5.4/dist/antd.min.css" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
