import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../styles/theme';

export default function ProfilePicture(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = 'Upload portrait photo' } = props;
  return (
    <Pressable style={styles.buttonPrimary} onPress={onPress}>
      <Text style={styles.buttonPrimaryText}>{title}</Text>
    </Pressable>
  );
}
