import React from 'react';
import { Button } from 'native-base';

export default function ButtonPrimary(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = 'OK' } = props;
  return (
    <Button colorScheme="primary" size="lg" _text={{ color: 'trueGray.900', fontWeight: 'medium' }} onPress={onPress}>
      {title}
    </Button>
  );
}