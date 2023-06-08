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
    /*TEMP*/const loremComment = '"Oppenheimer" es una cautivante exploración del hombre detrás de la bomba atómica, que nos recuerda las consecuencias de jugar con el poder nuclear.';
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return(
        <View style={styles.container}>
            <View style={styles.cardAuditoriumContainer}>
                <Comment userName='Lionel Messi' commentDate='27/04/2023' commentContent={loremComment} rate='5'/>
            </View>
        </View>
    );
}

export default MoviesUI;