import React from "react";
import { Animated, Dimensions, View } from "react-native";
import { Colors } from "../constants/colors/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants";


const width = SCREEN_WIDTH;
const height = SCREEN_HEIGHT;

const Square = ({scrollX}:{scrollX :Animated.Value}): React.JSX.Element => {
    const YOLO = Animated.modulo(
        Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)), 
        1
    );
    const rotate = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['35deg', '0deg', '35deg'],
    })
    const translateX = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -height, 0],
    })
    return(
        <Animated.View 
            style={{
                width: height,
                height: width * 2.1,
                backgroundColor: Colors.white,
                borderRadius: 86,
                position: 'absolute',
                top: -height * 0.6,
                left: -height * 0.3,
                transform: [
                    {
                        rotate
                    },
                    {
                        translateX
                    }
                ]
            }}
        />
    )
};

export default Square;