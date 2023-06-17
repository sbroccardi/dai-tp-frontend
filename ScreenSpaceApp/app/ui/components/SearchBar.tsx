import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Divider, Heading, Icon, Input, SearchIcon, Select, VStack } from "native-base";
import { styles } from "../styles/theme";


const SearchBar = () => {

  return (
    <Box>
     <Input w={{ base: "90%", md: "25%" }}  InputLeftElement={<SearchIcon ml="5"/>} placeholder="Search" variant="rounded" paddingLeft="3" />
    </Box>
      
  );

};
  
  export default SearchBar;