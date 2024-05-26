import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation/types";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import TabNavigator from "./TabNavigator";
import { View } from "react-native";
import PresidentInfo from "../screens/PresidentInfo";
import PresidentAbout from "../screens/PresidentAbout";
import CameraFace from "../screens/CameraFace";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <View style={{flex:1}}>
            <RootStack.Navigator initialRouteName="Splash"  >
            <RootStack.Group
                screenOptions={{
                    headerShown: false,
                    //animation: "fade",
                  }}
            >
                <RootStack.Screen name="Splash" component={SplashScreen}/>
                <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Signup" component={Signup} />
                <RootStack.Screen name="Tab" component={TabNavigator} />
                <RootStack.Screen name="PresidentInfo" component={PresidentInfo}/>
                <RootStack.Screen name='PresidentAbout' component={PresidentAbout} />
                <RootStack.Screen name='CameraFace' component={CameraFace} />
            </RootStack.Group>
        </RootStack.Navigator>
        </View>
    );
};

export default RootNavigator;