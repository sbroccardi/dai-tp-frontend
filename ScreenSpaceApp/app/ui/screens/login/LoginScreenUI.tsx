import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Center, Flex, Image, Spacer, Text } from 'native-base';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';

const LoginScreenUI = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <Center bg={'trueGray.900'}>
            <Flex direction="column" >
                <Spacer />
                <Center>
                    <Image alt="ScreenSpace" source={require('../../../assets/images/popcorn.png')} width={188} height={188} />
                </Center>
                <Spacer />
                <Center>
                    <ButtonPrimary onPress={() => navigation.navigate('LoginPublic')} title={I18n.t('loginButton')} />
                </Center>
                <Spacer />
                <Center>
                    <Text fontWeight={'normal'} color={'gray.400'}>{I18n.t('loginAs')}
                        <Text color={'yellow.400'} onPress={() => navigation.navigate('LoginPrivate')}> {I18n.t('cinema')}</Text>
                    </Text>
                </Center>
            </Flex>
        </Center>
    );
};

export default LoginScreenUI;
