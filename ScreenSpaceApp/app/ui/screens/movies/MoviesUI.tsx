import React, { useContext } from 'react';
import {View} from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import ToolbarPublicUser from '../../components/ToolbarPublicUser';
import {styles} from '../../styles/theme';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { UserContext } from '../../../UserContext';

const MoviesUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {user} = useContext(UserContext);
  return (
    <View style={styles.container}>
      <View style={styles.toolbarPublicUserContainer}>
        <ToolbarPublicUser
          onPress={() =>
            user.type === 'privado'
              ? navigation.navigate('LoginPrivate')
              : navigation.navigate('LoginPublic')
          }
        />
      </View>
    </View>
  );
};

export default MoviesUI;
