import { AppProps } from "next/app";
import "../styles/index.css";
import * as gtag from "../gtag";
import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    //disabling google analytics during development
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
