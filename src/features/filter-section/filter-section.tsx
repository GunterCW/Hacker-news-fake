import { Box, Button, Flex, Section, Select } from "@radix-ui/themes";

export const FilterSection = () => {
  return (
    <Section style={{ backgroundColor: "var(--pink-6)" }} size="1">
      <Flex gap="5" ml="5">
        <Box style={{ width: "90px" }}>
          <Select.Root size="2">
            <Select.Trigger placeholder="News" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="Top">Top</Select.Item>
                <Select.Item value="New">New</Select.Item>
                <Select.Item value="Best">Best</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Box>
        <Button size="2">Show</Button>
        <Button size="2">Ask</Button>
        <Button size="2">Jobs</Button>
      </Flex>
    </Section>
  );
};
