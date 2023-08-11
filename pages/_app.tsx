import MantineConfig from "@/component/shared/mantine-config";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" enableColorScheme>
    <MantineConfig>
      <ToastContainer />
      <Component {...pageProps} />
    </MantineConfig>
    </ThemeProvider>
  );
}

