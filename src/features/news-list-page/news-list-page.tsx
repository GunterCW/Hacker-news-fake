import { Box, Section } from "@radix-ui/themes";
import { SearchInput } from "../search-input/search-input";
import { FilterSection } from "../filter-section/filter-section";
import React from "react";
import { NewsList } from "../news-list/news-list";
import axios from "axios";

interface Response {
  data: {
    hits: Array<object>;
  };
}

export const NewsListPage = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [newsList, setNewsList] = React.useState<any>([]);

  const createRequest = () => {
    if (inputValue === "") {
      return;
    }
    return "http://hn.algolia.com/api/v1/search?query=" + inputValue;
  };

  const getRequest = () => {
    axios
      .get(
        createRequest() ||
          "http://hn.algolia.com/api/v1/search_by_date?tags=story"
      )
      .then(function (response: Response) {
        setNewsList(response.data.hits);
      })
      .catch(function (error: string) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Section style={{ backgroundColor: "var(--pink-6)" }} size="1">
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          getRequest={getRequest}
        />
        <FilterSection />
      </Section>
      <NewsList
        inputValue={inputValue}
        newsList={newsList}
        getRequest={getRequest}
      />
    </Box>
  );
};
