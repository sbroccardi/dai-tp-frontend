import { View, Text, Image } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '../../styles/theme';

const LoginScreenUI = ({
}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.iconImage} source={require('../../../assets/images/popcorn.png')} />
            </View>
            <View style={styles.loginButtonContainer}>
                <ButtonPrimary title='Log in with Google' onPress={() => navigation.navigate('LoginPublic')} />
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Log in as </Text>
                <Text style={styles.signupLinkText} onPress={() => navigation.navigate('LoginPrivate')}>cinema</Text>
            </View>
        </View>
    );
};

export default LoginScreenUI;
