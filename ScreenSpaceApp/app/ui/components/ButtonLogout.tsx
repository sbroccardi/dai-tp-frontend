import React from 'react';
import { Button } from 'native-base';

export default function ButtonLogout(props: { onPress: any; title?: string | undefined; size?: string | undefined}) {
  const { onPress, title = 'OK', size = 'md' } = props;
  return (
    <Button colorScheme="success" size={size} _text={{ color: 'trueGray.900', fontWeight: 'medium' }} onPress={onPress}>
      {title}
    </Button>
  );
}