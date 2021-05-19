import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components/layouts";

config.autoAddCss = false;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
