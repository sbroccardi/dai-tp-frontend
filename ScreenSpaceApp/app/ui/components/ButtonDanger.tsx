import React from 'react';
import { Button } from 'native-base';

export default function ButtonDanger(props: { onPress: any; title?: string | undefined; size?: string | undefined}) {
  const { onPress, title = 'OK', size = 'lg' } = props;
  return (
    <Button colorScheme="danger" size={size} _text={{ color: 'trueGray.900', fontWeight: 'medium' }} onPress={onPress}>
      {title}
    </Button>
  );
}