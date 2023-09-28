import { Box, Section } from "@radix-ui/themes";
import { SearchInput } from "../search-input/search-input";
import { FilterSection } from "../filter-section/filter-section";
import { NewsList } from "../news-list/news-list";
import React from "react";
import axios from "axios";

export const NewsListPage = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [newsList, setNewsList] = React.useState<any>([]); // поменять тип

  const createSearchUrl = () => {
    if (searchValue === "") {
      return;
    }
    return "https://hn.algolia.com/api/v1/search?query=" + searchValue;
  };

  const fetchNews = async (url?: string) => {
    try {
      let result = await axios.get(
        url ||
          createSearchUrl() ||
          "https://hn.algolia.com/api/v1/search_by_date?tags=story"
      );
      setNewsList(result.data.hits);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Section style={{ backgroundColor: "var(--pink-6)" }} size="1">
        <SearchInput
          searchInputValue={searchValue}
          onInputChange={setSearchValue}
          toSendRequest={fetchNews}
        />
        <FilterSection />
      </Section>
      <NewsList newsList={newsList} />
    </Box>
  );
};
