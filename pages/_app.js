import React from "react";
// next imports
import App from "next/app";
import Head from "next/head";

// app css
import "../styles/globals.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-FHZ93K2JHB"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-FHZ93K2JHB');
          </script>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
