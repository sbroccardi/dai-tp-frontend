import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AspectRatio, Box, Divider, HStack, Heading, Icon, Image, Input, SearchIcon, Select, Stack, Text, VStack } from "native-base";
import { styles } from "../styles/theme";


const CardScreening = (props: {cinema: string, auditorium: string, date: string}) => {

  return (
    <SafeAreaView>
        <Box alignItems="center" marginBottom={7}>
        <Box maxW="365" maxH="119" box-sizing="border-box" rounded="lg" overflow="hidden" _dark={{
        borderColor: "#21242D",
        backgroundColor: "#21242D"
      }} _web={{
        shadow: 0,
        borderWidth: 0
      }} _light={{
        backgroundColor: "#21242D"
      }}>
          <Box display="flex" flexDirection="column" minW="367" minH="120" padding="2">
          <Box display="flex" flexDirection="row">
            <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/popcorn.png')} /><Text style={styles.headerText} marginBottom="2" marginLeft="2" marginTop="2">{props.cinema}</Text>
          </Box>
          <Box display="flex" flexDirection="row">
            <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/popcorn.png')} /><Text style={styles.headerText} marginBottom="2" marginTop="2" marginLeft="2">{props.auditorium}</Text>
          </Box>
          <Box display="flex" flexDirection="row">
            <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/popcorn.png')} /><Text style={styles.headerText} marginBottom="2" marginTop="2" marginLeft="2">{props.date}</Text>
          </Box>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
      
  );

};
  
  export default CardScreening;