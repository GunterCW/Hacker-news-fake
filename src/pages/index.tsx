import { FilterSection } from "@/features/filter-section/filter-section";
import { Header } from "@/features/header/header";
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
        <FilterSection />
      </Theme>
    </>
  );
}
