import React from 'react';
import { Center, Flex, FormControl, Input } from 'native-base';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonPrimary from '../../components/ButtonPrimary';
import I18n from '../../../assets/localization/I18n';

const RecoverPasswordScreen = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [formData, setData] = React.useState({ email: "" });
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        if (formData.email === undefined) {
            setErrors({
                ...errors,
                name: 'Email is required'
            });
            return false;
        } else if (formData.email.length < 3) {
            setErrors({
                ...errors,
                name: 'Email is too short'
            });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        validate() ? navigation.navigate('EnterResetCode') : console.log('Validation Failed');
    };

    return (
        <Center w="100%">
            <Flex direction="column" >
                <Center pt='12%'>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('email')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterEmail')} onChangeText={value => setData({ ...formData, email: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Email
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Center>
                <Center pt='8%'>
                    <ButtonPrimary onPress={() => onSubmit} title={I18n.t('sendEmail')} />
                </Center>
            </Flex>
        </Center>
    );
}

export default RecoverPasswordScreen;