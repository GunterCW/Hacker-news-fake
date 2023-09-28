import { Box, Text } from "@radix-ui/themes";

interface NewsTitleProps {
  title: string;
}

export const NewsTitle = (props: NewsTitleProps) => {
  const { title } = props;
  return (
    <Box>
      <Text>{title}</Text>
    </Box>
  );
};
