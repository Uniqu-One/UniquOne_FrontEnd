import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { color } from "../styles/theme";
import "../styles/reset.css";
import "react-spring-bottom-sheet/dist/style.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginAuthStateTmp from "../components/login/LoginAuthStateTmp";
import ToastTmp from "../components/common/tmp/ToastTmp";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <LoginAuthStateTmp />
          <ThemeProvider theme={color}>
            <ToastTmp />
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
