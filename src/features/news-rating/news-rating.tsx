import { Box, Text } from "@radix-ui/themes";

interface NewsRatingProps {
  numberOfPoints: string;
}

export const NewsRating = (props: NewsRatingProps) => {
  const { numberOfPoints } = props;
  return (
    <Box>
      <Text>{numberOfPoints}</Text>
    </Box>
  );
};
