import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';

const LoginScreenUI = ({

}) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image style={styles.image} source={require('../../../assets/images/popcorn.png')} />
            </View>
            <View style={styles.button}>
                <ButtonPrimary title='Log in with Google' onPress={() => console.log('Button pressed!')} />
            </View>
            <View style={styles.signup}>
                <Text>Log in as cinema</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#242c40'
    },
    icon: {
        flex: 3
    },
    image: {
        width: 188,
        height: 188
    },
    button: {
        flex: 2
    },
    signup: {
        flex: 1
    }
});

export default LoginScreenUI;
