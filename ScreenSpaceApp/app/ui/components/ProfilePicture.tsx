import React from 'react';
import { Box, Center, Text } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from '../styles/theme';

export default function ProfilePicture(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = 'Upload portrait photo' } = props;
  return (
    // <Center>
      <Box bg="gray.800" p="6" rounded="lg">
        <Center>
          <Icon name="user" size={40} color="#F0F2F3" />
          <Text fontSize="xs">{title}</Text>
        </Center>
      </Box>
    // </Center>
  );
}
