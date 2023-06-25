import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Center} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import HomeToolbarPublicUser from '../../Components/HomeToolbarPublicUser';
import {styles} from '../../styles/theme';

const MoviesUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <Center style={styles.toolbarPublicUserContainer}>
        <HomeToolbarPublicUser
          onPressLeft={undefined}
          onPressRight={undefined}
        />
      </Center>
    </View>
  );
};

export default MoviesUI;
