import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, TextField } from "@radix-ui/themes";
import React from "react";

interface SearchInputProps {
  searchInputValue: string;
  onInputChange: (arg: string) => void;
  toSendRequest: (arg?: string) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const {
    searchInputValue: inputValue,
    onInputChange: setSearchValue,
    toSendRequest: fetchNews,
  } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const searchNews = () => {
    if (inputValue.trim() === "") {
      return;
    }

    setSearchValue("");
  };

  const searchNewsOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchNews();
      searchNews();
    }
  };

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
