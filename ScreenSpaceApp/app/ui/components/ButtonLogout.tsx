import React from 'react';
import { Button } from 'native-base';

export default function ButtonLogout(props: {
  onPress: any;
  title?: string | undefined;
  size?: string | undefined;
}) {
  const {onPress, title = 'OK', size = 'lg'} = props;
  return (
    <Button
      marginRight={5}
      colorScheme="success"
      size={size}
      w={'90%'}
      _text={{color: 'white', fontWeight: 'medium'}}
      onPress={onPress}>
      {title}
    </Button>
  );
}
