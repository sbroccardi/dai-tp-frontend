import React from 'react';
import {Box, Input, SearchIcon} from 'native-base';

const SearchBar = () => {
  return (
    <Box>
      <Input
        w={{base: '90%', md: '25%'}}
        InputLeftElement={<SearchIcon ml="5" />}
        placeholder="Search"
        variant="rounded"
        paddingLeft="3"
      />
    </Box>
  );
};

export default SearchBar;
