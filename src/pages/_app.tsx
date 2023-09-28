import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import "@/styles/themes-config.css";
import "@/styles/reset-styles.css";
import { Theme } from "@radix-ui/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme
      appearance="dark"
      accentColor="crimson"
      grayColor="sand"
      panelBackground="solid"
      scaling="90%"
    >
      <Component {...pageProps} />
    </Theme>
  );
}
