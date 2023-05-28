import { Center, Flex, FormControl, Input, Image, Spacer, Text, VStack } from 'native-base';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import I18n from '../../../../assets/localization/I18n';
import ButtonPrimary from '../../../components/ButtonPrimary';

const LoginPrivateScreenUI = ({ }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [formData, setData] = React.useState({ email: "", password: "" });
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        console.log(formData);

        if (formData.email === undefined) {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            return false;
        } else if (formData.email.length < 3) {
            setErrors({
                ...errors,
                name: 'Name is too short'
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
                <Spacer />
                <Center>
                    <Image alt="ScreenSpace" source={require('../../../../assets/images/popcorn.png')} width={116} height={116} />
                </Center>
                <Spacer />
                <Center>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('email')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterEmail')} keyboardType="email-address" onChangeText={value => setData({ ...formData, email: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Email
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('password')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterPassword')} type="password" keyboardType="default" onChangeText={value => setData({ ...formData, password: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Password
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Center>
                    <Text color={'yellow.400'} onPress={() => navigation.navigate('RecoverPassword')}>{I18n.t('forgotPassword')}</Text>
                <Spacer />
                <Center>
                    <ButtonPrimary onPress={() => onSubmit} title={I18n.t('login')} />
                </Center>
                <Spacer />
                <Center>
                    <Text fontWeight={'normal'} color={'gray.400'}>{I18n.t('newToScreenSpace')}
                        <Text color={'yellow.400'} onPress={() => navigation.navigate('SignUp')}> {I18n.t('signUp')}</Text>
                    </Text>
                </Center>
            </Flex>
        </Center>
    );
};

export default LoginPrivateScreenUI;