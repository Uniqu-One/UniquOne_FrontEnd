import type { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react'
import {color} from "../styles/theme";
import "../styles/reset.css";
import 'react-spring-bottom-sheet/dist/style.css'
import {RecoilRoot} from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <RecoilRoot>
    <ThemeProvider theme={color}>
      <Component {...pageProps} />
    </ThemeProvider>
    </RecoilRoot>
    </>
  );
}

export default MyApp;
