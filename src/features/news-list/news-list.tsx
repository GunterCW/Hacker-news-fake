import {
  ChatBubbleIcon,
  ClockIcon,
  GlobeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import React from "react";
import TimeAgo from "timeago-react";
import { NewsRating } from "../news-rating/news-rating";
import { NewsTitle } from "../news-title/news-title";
import { NewsAuthor } from "../news-author/news-author";
import { SiteFromNewsWasTaken } from "../site-from-news-was-taken/site-from-news-was-taken";

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
  newsList: [];
}

export const NewsList = (props: NewsListProps) => {
  const { newsList } = props;

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
              <NewsRating numberOfPoints={oneNews.points} />
            </Box>
            <Box mr="9" style={{ gridColumn: "span 4" }}>
              <NewsTitle title={oneNews.title} />
            </Box>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              <PersonIcon color="red" />
              <NewsAuthor
                createUserLink={createUserLink}
                authorName={oneNews.author}
              />
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              {/* site */}
              <GlobeIcon />
              <Box ml="1">
                <SiteFromNewsWasTaken
                  url={oneNews.url}
                  id={oneNews.objectID}
                  createCommentaryForkLink={createCommentaryForkLink}
                  createCroppedURL={createCroppedURL}
                />
              </Box>
            </Flex>
            <Flex mr="9" align="center" style={{ gridColumn: "span 2" }}>
              {/* date */}
              <ClockIcon />
              <Box ml="1">
                <TimeAgo datetime={oneNews.created_at} />
              </Box>
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

// разделить все по компонентам
