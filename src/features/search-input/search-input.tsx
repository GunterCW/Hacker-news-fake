import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, TextField } from "@radix-ui/themes";
import React from "react";

interface SearchInputProps {
  inputValue: string;
  setInputValue: (arg: string) => void;
  getRequest: () => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const { inputValue, setInputValue, getRequest } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const searchNews = () => {
    if (inputValue.trim() === "") {
      return;
    }

    // setInputValue("");
  };

  const searchNewsOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchNews();
      console.log(inputValue);
      getRequest();
    }
  };

  React.useEffect(() => {}, [inputValue]);

  return (
    <Box style={{ backgroundColor: "var(--pink-6)" }}>
      <TextField.Root size="3" ml="5" mr="5">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={searchNewsOnEnter}
          placeholder="Search the news…"
        />
      </TextField.Root>
    </Box>
  );
};
