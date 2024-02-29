import React from "react";
import { DATA_ONBOARDING } from "../constants/data/data";
import { Animated, Dimensions, View } from "react-native";
import { Colors } from "../constants/colors/colors";

const { width, height } = Dimensions.get('screen');


const Indicator = ({scrollX}:{scrollX :Animated.Value}): React.JSX.Element => { 
    
    return (
        <View style={{
            position: 'absolute',
            bottom: 30,
            flexDirection: 'row',
        }} >
            {DATA_ONBOARDING.map((_, index) => {
                                    // next slide      | current slide |  previous slide
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp',
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp',
                })

                return(
                    <Animated.View
                    key={`indicator-${index}`}
                    style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: Colors.white,
                        margin: 10,
                        opacity,
                        transform: [{scale}],
                    }}
                     />
                )
            })}
        </View>
    );
};

export default Indicator;