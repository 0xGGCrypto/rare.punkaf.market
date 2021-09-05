import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #000000e0;
            color: white;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <title>punkaf.market</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ggcrypto" />
        <meta property="og:url" content="https://punkaf.market" />
        <meta property="og:title" content="punkaf.market" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of Gear (for Punks) project."
        />
        <meta property="og:image" content="https://punkaf.market/og.png" />
        <script
          data-goatcounter="https://punkaf.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
    </>
  )
}

export default Robes
