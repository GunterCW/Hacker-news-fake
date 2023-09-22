import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import "@/styles/themes-config.css";
import "@/styles/reset-styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
