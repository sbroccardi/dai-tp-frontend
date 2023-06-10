import { useNavigation } from '@react-navigation/native';
import { Box, View } from 'native-base';
import React from 'react';
import { styles } from '../../styles/theme';
import { Text } from 'react-native-svg';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonDanger from '../../components/ButtonDanger';
import I18n from '../../../assets/localization/I18n';

export default function ConfirmDeleteAccountScreenUI() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Box>
                <Text>
                    
                </Text>
            </Box>
            <Box>
            
            </Box>
        </View>
    );
}