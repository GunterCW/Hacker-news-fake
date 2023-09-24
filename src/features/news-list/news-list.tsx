import {
  ChatBubbleIcon,
  ClockIcon,
  GlobeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import React from "react";
import { TimeAgo } from "@/shared/time-ago";

interface OneNews {
  points: string;
  title: string;
  author: string;
  objectID: number;
  url: string;
  created_at: string;
  num_comments: number;
}

interface NewsListProps {
  inputValue: string;
  newsList: [];
  getRequest: () => void;
}

export const NewsList = (props: NewsListProps) => {
  const { inputValue, newsList, getRequest } = props;

  console.log(inputValue);

  const createUserLink = (author: string) => {
    return "https://news.ycombinator.com/user?id=" + author;
  };

  const createCommentaryForkLink = (forkId: number) => {
    return "https://news.ycombinator.com/item?id=" + forkId;
  };

  const createCroppedURL = (baseURL: string, forkId: number) => {
    let url = new URL(baseURL || createCommentaryForkLink(forkId));
    if (url.host.length > 15) {
      return url.host.substring(0, 15) + "...";
    }
    return url.host;
  };

  return newsList.map((oneNews: OneNews, i: number) => {
    return (
      <Box key={i}>
        <Section size="1">
          <Grid columns="12" rows="1">
            <Box ml="3" style={{ gridColumn: "span 1" }}>
              {/* news rating */}
              <Text>{oneNews.points}</Text>
            </Box>
            <Box mr="9" style={{ gridColumn: "span 4" }}>
              {/* news title */}
              <Text>{oneNews.title}</Text>
            </Box>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              {/* author name */}
              <PersonIcon color="red" />
              <a href={createUserLink(oneNews.author)}>{oneNews.author}</a>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              {/* site */}
              <GlobeIcon />
              <Box ml="1">
                <a
                  href={
                    oneNews.url || createCommentaryForkLink(oneNews.objectID)
                  }
                >
                  {createCroppedURL(oneNews.url, oneNews.objectID)}
                </a>
              </Box>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              {/* date */}
              <ClockIcon />
              <Box ml="1">{TimeAgo(new Date(oneNews.created_at))}</Box>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 1" }}>
              {/* comments number */}
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
