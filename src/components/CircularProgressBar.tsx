import React, { useEffect, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors/Colors";
import { Circle, Svg } from "react-native-svg";
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { CircularProgressBarProps } from "../types/types";




const CIRCLE_LENGTH = 110; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);



const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgressBar = (props : CircularProgressBarProps ) : React.JSX.Element => {

    const progress = useSharedValue(0)

    useEffect(() => {
            progress.value = withTiming((props.percent  / 100) , { duration: 2000 });
    }, [progress]);

    const AnimatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    }));

    const progressText = useDerivedValue(() => `${Math.floor(progress.value * 100)}%`);

    const animatedPropsMemo = useMemo(() => AnimatedProps, [AnimatedProps, progress]); // Ajout de progress comme dépendance
    const progressTextMemo = useMemo(() => progressText, [progressText, progress]); // Ajout de progress comme dépendance

   

    return(
        <View style={styles.container} >
            <Svg
            style={{ backgroundColor: 'transparent' }} // Définir le fond transparent
            height={props.positionY / 2}
            width={props.positionX / 2}
            >
                <Circle 
                    cx={props.positionX / 6}
                    cy={props.positionY / 4}
                    r={R}
                    stroke={props.bg_stroke_color}
                    strokeWidth={10}
                    fill={props.bg_fill_color}
                />
                <AnimatedCircle 
                    cx={props.positionX / 6}
                    cy={props.positionY / 4}
                    r={R}
                    stroke={props.stroke_color}
                    strokeWidth={8}
                    fill={props.bg_fill_color}
                    strokeDasharray={CIRCLE_LENGTH}
                    //strokeDashoffset={CIRCLE_LENGTH * 0.5}
                    animatedProps={animatedPropsMemo}
                    strokeLinecap={'round'}
                />
            </Svg>
            <View style={styles.percentTextContainer}>
                <ReText style={styles.percentText} text={progressTextMemo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //flex: 1,
        //backgroundColor: Colors.black,
        //alignItems: 'center',
    },
    percentTextContainer: {
        position: 'absolute',
        bottom: -5,
        right: 5,
        //top: 20,
        //backgroundColor: '#000'
    },
    percentText: {
        color: Colors.black,
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
    }
});

export default CircularProgressBar;