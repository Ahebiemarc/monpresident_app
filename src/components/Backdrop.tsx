import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { Colors } from "../constants/colors/colors";


const { width, height } = Dimensions.get('screen');

const bgs = [Colors.blueLight, Colors.kaki, Colors.blueDark];


const Backdrop = ({scrollX}:{scrollX :Animated.Value}): React.JSX.Element => {

    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, index) => index * width ),
        outputRange: bgs.map(bg => bg),
    })
    return(
        <Animated.View 
          style={[
            StyleSheet.absoluteFillObject,
            {
                backgroundColor,
            }
        ]}
        />
    )
};

export default Backdrop;