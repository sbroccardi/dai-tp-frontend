import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props: { onPress: any; title?: string | undefined; }) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 22,
    //elevation: 3,
    //gap: 11,
    //position: 'absolute',
    //width: '363.1',
    //height: '53.3',
    //left: '26pt',
    //top: '424pt',
    backgroundColor: '#F5C249',
    borderRadius: 13
  },
  text: {
    //fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '500',
    //letterSpacing: 0.25,
    color: '#16171d',
  },
});