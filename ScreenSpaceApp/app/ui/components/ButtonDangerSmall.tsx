import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../styles/theme';

export default function Button(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = '+' } = props;
  return (
    <Pressable style={styles.buttonDangerSmall} onPress={onPress}>
      <Text style={styles.buttonPrimaryText}>{title}</Text>
    </Pressable>
  );
}
