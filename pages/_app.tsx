import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { color } from "../styles/theme";
import "../styles/reset.css";

import "react-spring-bottom-sheet/dist/style.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <RecoilRoot>
        <ThemeProvider theme={color}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
