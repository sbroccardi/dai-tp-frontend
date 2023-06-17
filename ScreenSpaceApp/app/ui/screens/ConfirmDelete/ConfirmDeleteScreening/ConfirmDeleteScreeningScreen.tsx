import { useNavigation } from '@react-navigation/native';
import { Box, Center, Text, VStack, View } from 'native-base';
import React from 'react';
import { styles } from '../../../styles/theme';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import I18n from '../../../../assets/localization/I18n';
import WarningMessage from '../../../components/WarningMessage';
import ToolbarPrivateUser from '../../../components/ToolbarPrivateUser';
import ConfirmDeleteScreeningScreenUI from './ConfirmDeleteScreeningScreenUI';

export default function ConfirmDeleteScreeningScreen() {
    const navigation = useNavigation();
    return (
        <ConfirmDeleteScreeningScreenUI />
    );
}