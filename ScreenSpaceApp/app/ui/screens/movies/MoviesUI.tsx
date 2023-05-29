import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import HomeToolbarPublicUser from '../../components/HomeToolbarPublicUser';
import ToolbarPublicUser from '../../components/ToolbarPublicUser';
import { styles } from '../../styles/theme';

const MoviesUI = ({
}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.toolbarPublicUserContainer}>
                <HomeToolbarPublicUser onPressLeft={undefined} onPressRight={undefined} title={I18n.t('movies')}/>
            </View>
        </View>
    );
}

export default MoviesUI;