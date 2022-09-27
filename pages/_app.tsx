import type { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react'
import {color} from "../styles/theme";
import "../styles/reset.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <ThemeProvider theme={color}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
