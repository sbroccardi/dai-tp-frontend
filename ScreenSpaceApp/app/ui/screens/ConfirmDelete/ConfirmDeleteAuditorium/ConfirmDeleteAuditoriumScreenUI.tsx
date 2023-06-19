import {ParamListBase, useNavigation} from '@react-navigation/native';
import { Box, Center, Text, VStack, View } from 'native-base';
import React from 'react';
import { styles } from '../../../styles/theme';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import I18n from '../../../../assets/localization/I18n';
import WarningMessage from '../../../components/WarningMessage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ToolbarPrivateUser from '../../../components/ToolbarPrivateUser';

export default function ConfirmDeleteAuditoriumScreenUI() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <VStack>
            <Center w="100%" marginBottom="10" marginTop="10">
                <WarningMessage component="Auditorium" />
            </Center>
            <Center w="100%" marginBottom="1">
                <ButtonDanger onPress={() => navigation.navigate('ConfirmDeleteAuditorium')} title='Delete' />
            </Center>
            <Center w="100%">
                <ButtonPrimary onPress={() => navigation.navigate('UpdateAuditorium')} title="Cancel" />
            </Center>
        </VStack>
    );
}