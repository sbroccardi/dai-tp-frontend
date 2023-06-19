import {ParamListBase, useNavigation} from '@react-navigation/native';
import { Box, Center, Text, VStack, View } from 'native-base';
import React from 'react';
import { styles } from '../../../styles/theme';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import I18n from '../../../../assets/localization/I18n';
import WarningMessage from '../../../components/WarningMessage';
import ToolbarPrivateUser from '../../../components/ToolbarPrivateUser';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ConfirmDeleteAccountScreenUI() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <VStack>
            <Center w="100%" marginBottom="80" marginTop="20">
                <Text style={styles.headerText}>
                    Are you sure?
                </Text>
            </Center>
            <Center w="100%" marginBottom="10" marginLeft="-2">
                <ButtonDanger onPress={() => navigation.navigate('Login')} title='Delete' />
            </Center>
            <Center w="100%">
                <ButtonPrimary onPress={() => navigation.navigate('ProfilePrivate')} title="Cancel" />
            </Center>
        </VStack>
    );
}