import { Header } from "@/features/header/header";
import { NewsListPage } from "@/features/news-list-page/news-list-page";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Theme
        appearance="dark"
        accentColor="crimson"
        grayColor="sand"
        panelBackground="solid"
        scaling="90%"
      >
        <Header />
        <NewsListPage />
      </Theme>
    </>
  );
}
