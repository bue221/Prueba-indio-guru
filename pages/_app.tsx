import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
import Head from "next/head";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Head>
          <title>CASA FEST</title>
          <link
            rel="shortcut icon"
            href="/assets/Recursos web/casafestamarillo.png"
          />
          <meta property="og:title" content="CASA FEST 2022" />
          <meta
            property="og:description"
            content="LLEGÓ EL IMPULSO QUE NECESITABAS PARA CUMPLIR EL SUEÑO DE ADQUIRIR VIVIENDA NUEVA."
          />
          <meta
            property="og:url"
            content="https://heartfelt-praline-8bdfc7.netlify.app/"
          />
          <meta
            property="og:image"
            content="/assets/Recursos web/casafestamarillo.png"
          />
          <meta property="og:site_name" content="CASA FEST" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
