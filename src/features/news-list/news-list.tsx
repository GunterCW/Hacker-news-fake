import {
  ChatBubbleIcon,
  ClockIcon,
  GlobeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import React from "react";
import axios from "axios";
import { TimeAgo } from "@/shared/time-ago";

export const NewsList = () => {
  const [newsListOnLoad, setNewsListOnLoad] = React.useState<any>([]);
  const getRequestOnLoad = () => {
    axios
      .get("http://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then(function (response: any) {
        // обработка успешного запроса
        setNewsListOnLoad(response.data.hits);
      })
      .catch(function (error: string) {
        // обработка ошибки
        console.log(error);
      });
  };

  React.useEffect(() => {
    getRequestOnLoad();
  }, []);

  const createUserLink = (author: string) => {
    const href = "https://news.ycombinator.com/user?id=";
    return href + author;
  };

  const createCommentaryForkLink = (forkId: number) => {
    const href = "https://news.ycombinator.com/item?id=";
    return href + forkId;
  };

  const createCroppedURL = (baseURL: string, forkId: number) => {
    let url = new URL(baseURL || createCommentaryForkLink(forkId));
    if (url.host.length > 15) {
      return url.host.substr(0, 15) + "...";
    }
    return url.host;
  };

  console.log(TimeAgo(new Date("2023-09-24T10:30:24.000Z")));

  return newsListOnLoad.map((oneNews: any, i: number) => {
    return (
      <Box key={i}>
        <Section size="1">
          <Grid columns="12" rows="1">
            <Box ml="3" style={{ gridColumn: "span 1" }}>
              <Text>{oneNews.points}</Text>
            </Box>
            <Box mr="9" style={{ gridColumn: "span 4" }}>
              <Text>{oneNews.title}</Text>
            </Box>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              <PersonIcon color="red" />
              <a href={createUserLink(oneNews.author)}>{oneNews.author}</a>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              <GlobeIcon />
              <Box ml="1">
                <a href={createCommentaryForkLink(oneNews.objectID)}>
                  {createCroppedURL(oneNews.url, oneNews.objectID)}
                </a>
              </Box>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              <ClockIcon />
              <Box ml="1">{TimeAgo(new Date(oneNews.created_at))}</Box>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 1" }}>
              <ChatBubbleIcon />
              <Box ml="1">
                <a href={createCommentaryForkLink(oneNews.objectID)}>
                  {oneNews.num_comments}
                </a>
              </Box>
            </Flex>
          </Grid>
        </Section>
      </Box>
    );
  });
};
