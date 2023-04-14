import { View, Text, Image } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '../../styles/theme';
import I18n from '../../../assets/localization/I18n';

const LoginScreenUI = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.iconImage} source={require('../../../assets/images/popcorn.png')} />
            </View>
            <View style={styles.loginButtonContainer}>
                <ButtonPrimary title={I18n.t('loginButton')} onPress={() => navigation.navigate('LoginPublic')} />
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>{I18n.t('loginAs')} </Text>
                <Text style={styles.signupLinkText} onPress={() => navigation.navigate('LoginPrivate')}>{I18n.t('cinema')}</Text>
            </View>
        </View>
    );
};

export default LoginScreenUI;
