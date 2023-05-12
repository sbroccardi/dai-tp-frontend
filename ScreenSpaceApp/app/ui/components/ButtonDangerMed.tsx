import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../styles/theme';

export default function Button(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = 'Delete' } = props;
  return (
    <Pressable style={styles.buttonDangerMed} onPress={onPress}>
      <Text style={styles.buttonPrimaryText}>{title}</Text>
    </Pressable>
  );
}
