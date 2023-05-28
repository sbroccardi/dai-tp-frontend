import React from 'react';
import { Center, Flex, FormControl, Input } from 'native-base';
import ButtonPrimary from '../../components/ButtonPrimary';
import I18n from '../../../assets/localization/I18n';

const EnterNewPasswordScreen = ({
}) => {
    const [formData, setData] = React.useState({ password: "", confirmPassword: "" });
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        if (formData.password === undefined || formData.confirmPassword === undefined) {
            setErrors({
                ...errors,
                name: 'Password is required'
            });
            return false;
        } else if (formData.password.length < 8 || formData.confirmPassword.length < 8) {
            setErrors({
                ...errors,
                name: 'Password is too short'
            });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed');
    };

    return (
        <Center w="100%">
            <Flex direction="column" >
                <Center pt='12%'>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('password')}</FormControl.Label>
                        <Input size="md" type="password" onChangeText={value => setData({ ...formData, password: value })} />
                        <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                            {I18n.t('helpPassword')}
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Password
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('confirmPassword')}</FormControl.Label>
                        <Input size="md" type="password" onChangeText={value => setData({ ...formData, confirmPassword: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Password
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Center>
                <Center pt='8%'>
                    <ButtonPrimary onPress={() => onSubmit} title={I18n.t('changePassword')} />
                </Center>
            </Flex>
        </Center>
    );
}

export default EnterNewPasswordScreen;