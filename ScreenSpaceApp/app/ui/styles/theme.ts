import { StyleSheet } from 'react-native';

const palette = {
    yellow: '#F5C249',
    red: '##FF403B',
    green: '#00C566',
    black: '#16171D',
    blackLight: '#21242D',
    grey: '#494D58',
    white: '#F0F2F3'
}

export const theme = {
    // COLORS
    dark: true,
    colors: {
        primary: palette.yellow,
        background: palette.black,
        card: palette.black,
        text: palette.white,
        border: palette.black,
        notification: palette.black,
        foreground: palette.white,
        success: palette.yellow,
        danger: palette.red,
        failure: palette.red
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    
};

export const styles = StyleSheet.create({
    // --- TEXT ---
    headerText: {
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: "600",
        color: palette.white
    },
    labelText: {
        fontFamily: 'Poppins-Medium',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: "500",
        color: palette.white
    },
    buttonPrimaryText: {
        fontFamily: 'Poppins-Medium',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: "500",
        color: palette.black
    },
    bodyText: {
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: "400",
        color: palette.white
    },
    signupText: {
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: "400",
        color: palette.grey
    },
    signupLinkText: {
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: "400",
        color: palette.yellow
    },
    // --- COMPONENTS ---
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: palette.black
    },
    iconContainer: {
        flex: 3,
        justifyContent: 'center'
    },
    iconBigImage: {
        width: 188,
        height: 188
    },
    iconMediumImage: {
        width: 116,
        height: 116
    },
    iconSmallImage: {
        width: 70,
        height: 70
    },
    iconExtraSmallImage: {
        width: 23,
        height: 23
    },
    buttonPrimary: {
        backgroundColor: palette.yellow,
        width: 300,
        height: 53,
        borderRadius: 13,
        paddingVertical: 13,
        paddingHorizontal: 22,
        alignItems: 'center'
    },
    loginButtonContainer: {
        flex: 3,
        justifyContent: 'center'
    },
    signupContainer: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    form: {
        flex: 1
    },
    input: {
        color: palette.grey,
        fontSize: 18,
        backgroundColor: palette.blackLight,
        paddingVertical: 13,
        paddingHorizontal: 22,
        borderRadius: 13,
        width: 300,
        height: 53,
        marginBottom: 20
    }
});
