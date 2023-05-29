import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Divider, Heading, Icon, Input, SearchIcon, Select, VStack } from "native-base";
import { styles } from "../styles/theme";


const SearchBar = () => {

  return (
    <Box>
    <Input variant="rounded" placeholder="Search" size="sm" />
    </Box>
      
  );

};
  
  export default SearchBar;