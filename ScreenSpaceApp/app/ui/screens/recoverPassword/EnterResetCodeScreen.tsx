import React from 'react';
import { Center, Flex, FormControl, Input } from 'native-base';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonPrimary from '../../components/ButtonPrimary';
import I18n from '../../../assets/localization/I18n';

const EnterResetCodeScreen = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [formData, setData] = React.useState({ code: "" });
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        if (formData.code === undefined) {
            setErrors({
                ...errors,
                name: 'Code is required'
            });
            return false;
        } else if (formData.code.length < 4) {
            setErrors({
                ...errors,
                name: 'Code is too short'
            });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        validate() ? navigation.navigate('EnterNewPassword') : console.log('Validation Failed');
    };

    return (
        <Center w="100%">
            <Flex direction="column" >
                <Center pt='12%'>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('code')}</FormControl.Label>
                        <Input size="md" onChangeText={value => setData({ ...formData, code: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Code
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Center>
                <Center pt='8%'>
                    <ButtonPrimary onPress={() => onSubmit} title={I18n.t('sendCode')} />
                </Center>
            </Flex>
        </Center>
    );
}

export default EnterResetCodeScreen;