//import { View } from 'react-native';
import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Button, Center, Flex, FormControl, Heading, Input, Pressable, Spacer, Text, View, VStack } from 'native-base';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import ProfilePicture from '../../components/ProfilePicture';

const SignUpScreenUI = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [formData, setData] = React.useState({ company: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = React.useState({});

    const validate = () => {
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
        <Center bg={'trueGray.900'} w="100%">
            <Flex direction="column" >
                <Center pt='10%'>
                    <FormControl>
                        <ProfilePicture title={I18n.t('uploadPortraitPhoto')} onPress={() => console.log('')} />
                    </FormControl>
                </Center>
                <Center pt='15%'>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('company')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterCompany')} onChangeText={value => setData({ ...formData, company: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Company
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('email')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterEmail')} onChangeText={value => setData({ ...formData, email: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Email
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('password')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterPassword')} type="password" onChangeText={value => setData({ ...formData, password: value })} />
                        <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                            {I18n.t('helpPassword')}
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                            Error Password
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired pt='5%'>
                        <FormControl.Label _text={{ bold: true }}>{I18n.t('confirmPassword')}</FormControl.Label>
                        <Input size="md" placeholder={I18n.t('enterPassword')} type="password" onChangeText={value => setData({ ...formData, confirmPassword: value })} />
                        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }} >
                            Error Password
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Center>
                <Center pt='5%'>
                    <ButtonPrimary onPress={() => onSubmit} title={I18n.t('login')} />
                </Center>
            </Flex>
        </Center>
    );
};

export default SignUpScreenUI;
