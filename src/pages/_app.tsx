import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

import theme from "../styles/theme";
import createEmotionCache from "../utility/createEmotionCache";

import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

interface CustomProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App({ Component, pageProps }: CustomProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>FUNAI GAMING</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
