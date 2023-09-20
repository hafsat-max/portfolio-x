import MantineConfig from "@/component/shared/mantine-config";
import "@/styles/globals.css";
import { ColorScheme } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import NextApp, { AppContext, AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { getCookie, setCookie } from "cookies-next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider enableSystem={false} attribute="class" enableColorScheme>
        <MantineConfig
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <ToastContainer />
          <Component {...pageProps} />
        </MantineConfig>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "light",
  };
};
