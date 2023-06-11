import React from "react";
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Center, CheckIcon, Image, Pressable, Text, View } from "native-base";
import { NativeBaseProvider, Box } from "native-base";
import { Select } from "native-base";




const DropdownMenu = (params: {proposito: string}) => {

  const [service, setService] = React.useState("");

  return (
    
    <Center>
        <Box maxW="300">
        <Select selectedValue={service} minWidth="310" accessibilityLabel="Select" borderRadius="12" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </Center>
    
  );

 

};
  
  export default DropdownMenu;