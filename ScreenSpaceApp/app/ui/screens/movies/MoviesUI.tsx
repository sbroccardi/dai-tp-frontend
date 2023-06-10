import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Center } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardAuditorium from '../../components/CardAuditorium';
import CardCinema from '../../components/CardCinema';
import CardMovie from '../../components/CardMovie';
import CardScreening from '../../components/CardScreening';
import Comment from '../../components/Comment';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import HomeToolbarPublicUser from '../../components/HomeToolbarPublicUser';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import ToolbarPublicUser from '../../components/ToolbarPublicUser';
import { styles } from '../../styles/theme';

const MoviesUI = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return(
        <View style={styles.container}>
        </View>
    );
}

export default MoviesUI;