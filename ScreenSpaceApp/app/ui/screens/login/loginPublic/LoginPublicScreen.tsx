import React from 'react';
import { Text } from 'react-native';
import { styles } from '../../../styles/theme';
import I18n from '../../../../assets/localization/I18n';

export default function LoginPublicScreen() {
    //Logic

    return (
        <Text style={styles.bodyText}>{I18n.t('signUp')}</Text>
    );
}