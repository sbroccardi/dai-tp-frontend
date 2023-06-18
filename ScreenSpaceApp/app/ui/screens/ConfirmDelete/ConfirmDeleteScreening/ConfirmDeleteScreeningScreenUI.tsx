import { useNavigation } from '@react-navigation/native';
import { Box, Center, Text, VStack, View } from 'native-base';
import React from 'react';
import { styles } from '../../../styles/theme';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import I18n from '../../../../assets/localization/I18n';
import WarningMessage from '../../../components/WarningMessage';
import ToolbarPrivateUser from '../../../components/ToolbarPrivateUser';

export default function ConfirmDeleteScreeningScreenUI() {
    const navigation = useNavigation();
    return (
        <VStack>
            <Center w="100%" marginBottom="10" marginTop="10">
                <WarningMessage component="Screening" />
            </Center>
            <Center w="100%" marginBottom="1" marginLeft="-2">
                <ButtonDanger onPress={undefined} title='Delete' />
            </Center>
            <Center w="100%">
                <ButtonPrimary onPress={undefined} title="Cancel" />
            </Center>
        </VStack>
    );
}