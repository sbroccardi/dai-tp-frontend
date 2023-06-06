import React from 'react';
import {Button} from 'native-base';

export default function ButtonPrimary(props: {
  onPress: any;
  title?: string | undefined;
  size?: string | undefined;
}) {
  const {onPress, title = 'OK', size = 'lg'} = props;
  return (
    <Button
      colorScheme="primary"
      size={size}
      w={'90%'}
      _text={{color: 'trueGray.900', fontWeight: 'medium'}}
      onPress={onPress}>
      {title}
    </Button>
  );
}
