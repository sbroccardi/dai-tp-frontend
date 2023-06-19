import React, {useContext} from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/theme';
import I18n from '../../../../assets/localization/I18n';
import ButtonPrimary from '../../../components/ButtonPrimary';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {UserContext} from '../../../../UserContext';

const LoginPublicScreenUI = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setUser} = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.loginButtonContainer}>
        <ButtonPrimary
          title={I18n.t('loginButton')}
          onPress={() => navigation.navigate('PublicMovies')}
        />
      </View>
    </View>
  );
};

export default LoginPublicScreenUI;
