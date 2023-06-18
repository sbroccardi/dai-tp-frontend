import React from 'react';
import {Button} from 'native-base';

export default function ButtonPrimary(props: {
  onPress: any;
  title?: string | undefined;
  size?: string | undefined;
  width?: string | undefined;
}) {
  const {onPress, title = 'OK', size = 'lg', width = '90%'} = props;
  return (
    <Button
      margin={5}
      colorScheme="primary"
      size={size}
      w={width}
      _text={{color: 'trueGray.900', fontWeight: 'medium'}}
      onPress={onPress}>
      {title}
    </Button>
  );
}
