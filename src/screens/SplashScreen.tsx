import React from "react";
import { StatusBar, StyleSheet, View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types/navigation/types";

const { width, height } = Dimensions.get("screen");

type SplashScreenProps =  RootStackScreenProps<'Splash'>

const SplashScreen = ({navigation}: SplashScreenProps): React.JSX.Element => {
    return(
        <View style={styles.container} >
            <StatusBar hidden />
            <LottieView 
                source={require('../../assets/lotties/AnimationSplashscreen.json')}
                style={styles.lottie}
                autoPlay
                loop={false}
                //speed={0.5}
                onAnimationFinish={() => navigation.replace('Onboarding')}
                /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#efefef"

    },
    lottie: {
        width: 200,
        height: 200,
        aspectRatio: 1,
    },
})

export default SplashScreen;