import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';

const LoginScreenUI = ({

}) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image style={styles.iconImage} source={require('../../../assets/images/popcorn.png')} />
            </View>
            <View style={styles.button}>
                <ButtonPrimary title='Log in with Google' onPress={() => console.log('Button pressed!')} />
            </View>
            <View style={styles.signup}>
                <Text style={styles.signupText}>Log in as </Text>
                <Text style={styles.signupLink}>cinema</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#16171D'
    },
    icon: {
        flex: 3,
        justifyContent: 'center'
    },
    iconImage: {
        width: 188,
        height: 188
    },
    button: {
        flex: 2,
        justifyContent: 'center'
    },
    signup: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    signupText: {
        color: '#494D58'
    },
    signupLink: {
        color: '#F5C249'
    }
});

export default LoginScreenUI;
