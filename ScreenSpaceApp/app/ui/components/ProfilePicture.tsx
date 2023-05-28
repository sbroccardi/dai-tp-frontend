import React from 'react';
import { Box, Center, Text } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { palette } from '../styles/theme';

export default function ProfilePicture(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = 'Upload portrait photo' } = props;
  return (
    <Center>
      <Box bg="gray.800" p="2" rounded="lg" w={'50%'}>
        <Center>
          <Icon name="user" size={50} color={palette.grey} />
          <Text fontSize="xs" color={'gray.400'} pt={'5%'}>{title}</Text>
        </Center>
      </Box>
    </Center>
  );
}
